import type { Metadata } from 'next';

import { verifyUpgradeToken } from '@/lib/upgrade-token';
import { UpgradeCards } from './UpgradeCards';

export const metadata: Metadata = {
  title: 'Upgrade — Vero',
  description:
    'Upgrade your Vero plan for more verifications, priority processing, and unlimited history.',
};

interface PageProps {
  searchParams: Promise<{
    u?: string;
    amp_click_id?: string;
    // GEM Affiliates / Tracknow attribution chain. GEM appends `click_id`
    // when redirecting from its tracking domain to our landing URL. `sub1`
    // is the passthrough param GEM forwards from the affiliate side —
    // here it carries the AMP trackingId for the campaign that originated
    // the click. Both round-trip through Stripe metadata so the postback
    // path GEM→AMP can credit the conversion correctly.
    click_id?: string;
    sub1?: string;
  }>;
}

export default async function UpgradePage({ searchParams }: PageProps) {
  const {
    u: token,
    amp_click_id: ampClickId,
    click_id: gemClickId,
    sub1: ampClickIdFromGem,
  } = await searchParams;
  // When traffic comes via GEM, sub1 carries the AMP trackingId. Prefer it
  // over the direct amp_click_id param (both can be present in unusual
  // flows; sub1-via-GEM is the more authoritative signal).
  const effectiveAmpClickId = ampClickIdFromGem ?? ampClickId;

  // The token identifies an existing Vero user via WhatsApp deep-link. It
  // is OPTIONAL: SMS-acquired traffic from affiliate campaigns lands here
  // without a token (the visitor has never used Vero). When absent, Stripe
  // collects phone + email at checkout via phone_number_collection, and the
  // backend webhook creates the user record from session.customer_details.
  const payload = token ? await verifyUpgradeToken(token) : null;
  const phoneSuffix = payload ? maskPhone(payload.phoneNumber) : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-light-green-bg via-white to-light-gray pb-20">
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center sm:pt-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green">
          {phoneSuffix ? 'Upgrade your plan' : 'Start with Vero'}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-deep-green sm:text-5xl">
          {phoneSuffix
            ? 'Keep verifying with no limits'
            : 'Verify any content with AI'}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          {phoneSuffix
            ? `You're currently on Free, ${phoneSuffix}. Pick a plan that matches how you use Vero — cancel anytime.`
            : 'Pick the plan that matches how you use Vero. Cancel anytime.'}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        {/*
          UpgradeCards renders for both authenticated (WhatsApp deep-link) and
          unauthenticated (SMS affiliate landing) flows. amp_click_id and
          gem_click_id are forwarded to the checkout API regardless of token
          state so the postback chain (Stripe → GEM → AMP) can credit the
          originating Send / campaign / affiliate.
        */}
        <UpgradeCards
          token={token ?? null}
          ampClickId={effectiveAmpClickId ?? null}
          gemClickId={gemClickId ?? null}
        />
      </section>

      <section className="mx-auto mt-12 max-w-3xl px-6 text-center lg:px-8">
        <p className="text-sm text-gray-500">
          Secure payment by Stripe &bull; Cancel anytime &bull; No setup fees
        </p>
      </section>
    </main>
  );
}

function maskPhone(phoneNumber: string): string {
  const last4 = phoneNumber.slice(-4);
  return `***${last4}`;
}
