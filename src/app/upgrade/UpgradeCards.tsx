'use client';

import { useState } from 'react';

type Tier = 'lite' | 'pro' | 'max';
type Interval = 'monthly' | 'yearly';

interface TierPrice {
  monthly: string;
  yearly: string;
  yearlyPerMonth: string;
}

interface TierCard {
  id: Tier;
  name: string;
  price: TierPrice;
  pitch: string;
  quota: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const TIERS: TierCard[] = [
  {
    id: 'lite',
    name: 'Lite',
    price: { monthly: '$3.99', yearly: '$40.99', yearlyPerMonth: '$3.42' },
    pitch: 'Perfect for casual users maintaining a steady daily habit.',
    quota: '30 verifications / month',
    features: [
      'WhatsApp notifications',
      '30-day verification history',
      'Standard support',
    ],
    cta: 'Get Lite',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: { monthly: '$9.99', yearly: '$101.99', yearlyPerMonth: '$8.50' },
    pitch: 'Built for power users and active content creators.',
    quota: '100 verifications / month',
    features: [
      'Priority processing',
      'Unlimited history',
      'Priority support',
    ],
    cta: 'Go Pro',
    highlighted: true,
  },
  {
    id: 'max',
    name: 'Max',
    price: { monthly: '$29.99', yearly: '$305.99', yearlyPerMonth: '$25.50' },
    pitch: 'The ultimate package for high-volume professionals.',
    quota: '500 verifications / month',
    features: [
      'Advanced analytics',
      'Multi-user access',
      '24/7 VIP support',
    ],
    cta: 'Go Max',
    highlighted: false,
  },
];

export function UpgradeCards({
  token,
  ampClickId,
}: {
  token: string;
  // AMP click correlation id — when the upgrade URL was issued by an
  // AMP marketing campaign, this is the AMP Send.trackingId. Round-tripped
  // through Stripe metadata so the postback can attribute revenue back
  // to the originating campaign / contact / sender. Null on
  // organic/WhatsApp-quota traffic.
  ampClickId: string | null;
}) {
  const [interval, setInterval] = useState<Interval>('monthly');
  const [loading, setLoading] = useState<Tier | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubscribe(tier: Tier) {
    setError(null);
    setLoading(tier);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tier, interval, token, ampClickId }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? 'Checkout failed. Please try again.');
      }
      const { url } = (await res.json()) as { url: string };
      window.location.href = url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      setLoading(null);
    }
  }

  return (
    <>
      <div className="mb-10 flex justify-center">
        <div className="relative inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setInterval('monthly')}
            className={[
              'rounded-full px-6 py-2 text-sm font-semibold transition-all',
              interval === 'monthly'
                ? 'bg-deep-green text-white shadow'
                : 'text-gray-600 hover:text-deep-green',
            ].join(' ')}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setInterval('yearly')}
            className={[
              'relative rounded-full px-6 py-2 text-sm font-semibold transition-all',
              interval === 'yearly'
                ? 'bg-deep-green text-white shadow'
                : 'text-gray-600 hover:text-deep-green',
            ].join(' ')}
          >
            Annual
            <span
              className={[
                'ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                interval === 'yearly'
                  ? 'bg-green-pale text-deep-green'
                  : 'bg-green text-white',
              ].join(' ')}
            >
              Save 15%
            </span>
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {TIERS.map((tier) => (
          <div
            key={tier.id}
            className={[
              'relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-all',
              tier.highlighted
                ? 'border-green md:scale-105 shadow-xl ring-2 ring-green/20'
                : 'border-gray-200 hover:border-green/50 hover:shadow-md',
            ].join(' ')}
          >
            {tier.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-md">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold text-deep-green">{tier.name}</h3>
            <p className="mt-2 text-sm text-gray-600">{tier.pitch}</p>

            <div className="mt-6">
              {interval === 'monthly' ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-deep-green">
                    {tier.price.monthly}
                  </span>
                  <span className="text-base text-gray-500">/ month</span>
                </div>
              ) : (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-deep-green">
                      {tier.price.yearlyPerMonth}
                    </span>
                    <span className="text-base text-gray-500">/ month</span>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {tier.price.yearly} billed annually
                  </p>
                </>
              )}
            </div>

            <p className="mt-4 text-sm font-semibold text-deep-green-light">
              {tier.quota}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-pale text-deep-green">
                    &#10003;
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => handleSubscribe(tier.id)}
              disabled={loading !== null}
              className={[
                'mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-60',
                tier.highlighted
                  ? 'bg-green text-white shadow-md hover:bg-green-light hover:shadow-lg'
                  : 'border border-deep-green text-deep-green hover:bg-deep-green hover:text-white',
              ].join(' ')}
            >
              {loading === tier.id ? 'Loading...' : tier.cta}
              {loading !== tier.id && <span aria-hidden>&rarr;</span>}
            </button>
          </div>
        ))}
      </div>

      {error && (
        <div
          role="alert"
          className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          {error}
        </div>
      )}
    </>
  );
}
