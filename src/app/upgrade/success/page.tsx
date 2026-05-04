import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to Vero — Upgrade complete',
  description: 'Your Vero subscription is active. Continue verifying on WhatsApp.',
};

export default function UpgradeSuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-light-green-bg via-white to-light-gray px-6 py-20">
      <div className="mx-auto max-w-xl rounded-3xl border border-green/20 bg-white p-10 text-center shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-pale text-3xl text-deep-green">
          &#10003;
        </div>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-deep-green sm:text-4xl">
          You&apos;re upgraded
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Thanks for subscribing. Your new plan is active straight away — return
          to WhatsApp and continue verifying with no limits.
        </p>
        <a
          href="https://wa.me/14155238886"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-green-light hover:shadow-lg"
        >
          Continue on WhatsApp
          <span aria-hidden>&rarr;</span>
        </a>
        <p className="mt-6 text-xs text-gray-500">
          A receipt has been sent to your email. You can manage or cancel your
          subscription any time by sending &quot;manage subscription&quot; to Vero.
        </p>
      </div>
    </main>
  );
}
