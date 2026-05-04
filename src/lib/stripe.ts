import Stripe from 'stripe';

let stripeInstance: Stripe | null = null;

export function getStripe(): Stripe {
  if (stripeInstance) return stripeInstance;
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not set');
  }
  stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-04-22.dahlia',
    typescript: true,
  });
  return stripeInstance;
}

export type Tier = 'lite' | 'pro' | 'max';
export type Interval = 'monthly' | 'yearly';

export const TIER_PRICE_ID: Record<Tier, Record<Interval, string>> = {
  lite: {
    monthly: process.env.STRIPE_PRICE_LITE ?? '',
    yearly: process.env.STRIPE_PRICE_LITE_YEARLY ?? '',
  },
  pro: {
    monthly: process.env.STRIPE_PRICE_PRO ?? '',
    yearly: process.env.STRIPE_PRICE_PRO_YEARLY ?? '',
  },
  max: {
    monthly: process.env.STRIPE_PRICE_MAX ?? '',
    yearly: process.env.STRIPE_PRICE_MAX_YEARLY ?? '',
  },
};
