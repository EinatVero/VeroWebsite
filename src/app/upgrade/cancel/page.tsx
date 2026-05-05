import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout cancelled — Vero',
  description: 'No problem — you can upgrade any time.',
};

export default function UpgradeCancelPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-light-gray px-6 py-20">
      <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold tracking-tight text-deep-green sm:text-4xl">
          No worries
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Your card was not charged. You can come back any time — just send
          another message to Vero on WhatsApp and request a fresh upgrade link.
        </p>
        <a
          href="https://wa.me/14155238886"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-green px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-green-light hover:shadow-lg"
        >
          Back to WhatsApp
          <span aria-hidden>&rarr;</span>
        </a>
      </div>
    </main>
  );
}
