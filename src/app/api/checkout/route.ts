import { NextResponse } from 'next/server';

import { getStripe, TIER_PRICE_ID, type Interval, type Tier } from '@/lib/stripe';
import { verifyUpgradeToken } from '@/lib/upgrade-token';

const VALID_TIERS: ReadonlySet<Tier> = new Set(['lite', 'pro', 'max']);
const VALID_INTERVALS: ReadonlySet<Interval> = new Set(['monthly', 'yearly']);

interface CheckoutBody {
  tier: Tier;
  interval: Interval;
  // WhatsApp-issued JWT for an existing Vero user. Optional: SMS affiliate
  // traffic arrives without one, in which case Stripe collects phone + email
  // at checkout via phone_number_collection and the webhook creates the user
  // record from session.customer_details.
  token?: string | null;
  // Optional AMP click correlation id — when present, embedded in the
  // Stripe session metadata so the stripe-webhook handler can fire a
  // brand-postback to the AMP marketing platform attributing this
  // conversion to the originating campaign.
  ampClickId?: string | null;
  // Optional GEM Affiliates / Tracknow click id — when present, embedded
  // in Stripe metadata as `gem_click_id`. On checkout.session.completed
  // the stripe-webhook handler fires GEM's /postback endpoint instead of
  // calling AMP directly; GEM then forwards the conversion to AMP via
  // the affiliate-side postback URL we register on their side.
  gemClickId?: string | null;
}

export async function POST(req: Request): Promise<Response> {
  let body: CheckoutBody;
  try {
    body = (await req.json()) as CheckoutBody;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (!VALID_TIERS.has(body.tier)) {
    return NextResponse.json({ error: 'Unknown tier' }, { status: 400 });
  }

  if (!VALID_INTERVALS.has(body.interval)) {
    return NextResponse.json({ error: 'Unknown billing interval' }, { status: 400 });
  }

  // Token is optional. When present we trust it as proof of an existing
  // user identity (phone bound at WhatsApp request time). When absent (SMS
  // affiliate landing), Stripe collects phone at checkout and the webhook
  // creates the user record post-payment.
  const payload = body.token ? await verifyUpgradeToken(body.token) : null;
  if (body.token && !payload) {
    // Token was provided but failed to verify — reject rather than silently
    // downgrade to anonymous, so callers know to refresh their link.
    return NextResponse.json(
      { error: 'Upgrade link expired. Request a new one on WhatsApp.' },
      { status: 401 },
    );
  }

  const priceId = TIER_PRICE_ID[body.tier][body.interval];
  if (!priceId) {
    return NextResponse.json(
      { error: 'Pricing not configured for this tier yet.' },
      { status: 503 },
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vero-lab.com';

  // Sanitise ampClickId — only forward strings that look like the canonical
  // AMP trackingId shape (ULID/UUID-ish, max 64 chars, basic charset). Anything
  // else gets dropped silently rather than rejecting the checkout — the user's
  // payment shouldn't fail because of a malformed marketing param.
  const ampClickId =
    typeof body.ampClickId === 'string' &&
    body.ampClickId.length > 0 &&
    body.ampClickId.length <= 64 &&
    /^[A-Za-z0-9_-]+$/.test(body.ampClickId)
      ? body.ampClickId
      : null;

  // Same sanitisation for gemClickId. Tracknow click ids are typically
  // short alphanumeric strings; the same shape filter works.
  const gemClickId =
    typeof body.gemClickId === 'string' &&
    body.gemClickId.length > 0 &&
    body.gemClickId.length <= 64 &&
    /^[A-Za-z0-9_-]+$/.test(body.gemClickId)
      ? body.gemClickId
      : null;

  const baseMetadata: Record<string, string> = {
    tier: body.tier,
    interval: body.interval,
    // phoneNumber is only set when a verified WhatsApp token was supplied.
    // For anonymous SMS-landing traffic the webhook reads phone from
    // session.customer_details.phone (populated by phone_number_collection).
    ...(payload ? { phoneNumber: payload.phoneNumber } : {}),
    ...(ampClickId ? { amp_click_id: ampClickId } : {}),
    ...(gemClickId ? { gem_click_id: gemClickId } : {}),
  };

  const session = await getStripe().checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    // Bind to phone only when we already have a verified one. For anonymous
    // checkout, Stripe assigns the customer_id and we reconcile in the webhook.
    ...(payload ? { client_reference_id: payload.phoneNumber } : {}),
    metadata: baseMetadata,
    subscription_data: {
      metadata: baseMetadata,
    },
    // When no WhatsApp token was supplied, ask Stripe to collect phone so the
    // webhook can create / link the user. When token IS present we already
    // know the phone, so skip the collection step to keep the form short.
    ...(payload ? {} : { phone_number_collection: { enabled: true } }),
    success_url: `${siteUrl}/upgrade/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/upgrade/cancel`,
    allow_promotion_codes: true,
    billing_address_collection: 'auto',
  });

  if (!session.url) {
    return NextResponse.json(
      { error: 'Could not create checkout session.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ url: session.url });
}
