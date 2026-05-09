import type { Metadata } from 'next';

import { verifyUpgradeToken } from '@/lib/upgrade-token';
import { UpgradeCards } from './UpgradeCards';

export const metadata: Metadata = {
  title: 'Upgrade — Vero',
  description:
    'Upgrade your Vero plan for more verifications, priority processing, and unlimited history.',
};

interface PageProps {
  searchParams: Promise<{ u?: string; amp_click_id?: string }>;
}

export default async function UpgradePage({ searchParams }: PageProps) {
  const { u: token, amp_click_id: ampClickId } = await searchParams;

  const payload = token ? await verifyUpgradeToken(token) : null;
  const phoneSuffix = payload
    ? maskPhone(payload.phoneNumber)
    : null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-light-green-bg via-white to-light-gray pb-20">
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-10 text-center sm:pt-24 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-green">
          Upgrade your plan
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-deep-green sm:text-5xl">
          Keep verifying with no limits
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          {phoneSuffix
            ? `You're currently on Free, ${phoneSuffix}. Pick a plan that matches how you use Vero — cancel anytime.`
            : 'Pick the plan that matches how you use Vero. Cancel anytime.'}
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 lg:px-8">
        {token ? (
          // amp_click_id (when present) is forwarded to the checkout API,
          // which embeds it in the Stripe session metadata so the AMP brand
          // postback fired from stripe-webhook can correlate the conversion
          // back to the originating Send row in the AMP marketing platform.
          <UpgradeCards token={token} ampClickId={ampClickId ?? null} />
        ) : (
          <InvalidLinkNotice />
        )}
      </section>

      <section className="mx-auto mt-12 max-w-3xl px-6 text-center lg:px-8">
        <p className="text-sm text-gray-500">
          Secure payment by Stripe &bull; Cancel anytime &bull; No setup fees
        </p>
      </section>
    </main>
  );
}

function InvalidLinkNotice() {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
      <h2 className="text-xl font-semibold text-amber-900">
        This upgrade link has expired
      </h2>
      <p className="mt-3 text-sm text-amber-800">
        Upgrade links are personal and valid for 24 hours. Please open Vero on
        WhatsApp and request a fresh link.
      </p>
      <a
        href="https://wa.me/15856361210"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-green-light hover:shadow-lg"
      >
        Open Vero on WhatsApp
        <span aria-hidden>&rarr;</span>
      </a>
    </div>
  );
}

function maskPhone(phoneNumber: string): string {
  const last4 = phoneNumber.slice(-4);
  return `***${last4}`;
}
