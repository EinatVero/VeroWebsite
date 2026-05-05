import { NextResponse } from 'next/server';

import { getStripe, TIER_PRICE_ID, type Interval, type Tier } from '@/lib/stripe';
import { verifyUpgradeToken } from '@/lib/upgrade-token';

const VALID_TIERS: ReadonlySet<Tier> = new Set(['lite', 'pro', 'max']);
const VALID_INTERVALS: ReadonlySet<Interval> = new Set(['monthly', 'yearly']);

interface CheckoutBody {
  tier: Tier;
  interval: Interval;
  token: string;
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

  const payload = await verifyUpgradeToken(body.token);
  if (!payload) {
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

  const session = await getStripe().checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    client_reference_id: payload.phoneNumber,
    metadata: {
      phoneNumber: payload.phoneNumber,
      tier: body.tier,
      interval: body.interval,
    },
    subscription_data: {
      metadata: {
        phoneNumber: payload.phoneNumber,
        tier: body.tier,
        interval: body.interval,
      },
    },
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
