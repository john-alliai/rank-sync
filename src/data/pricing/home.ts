export interface PricingPlan {
  name: string;
  price: string;
  interval: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  trialText?: string;
}

export interface PricingContent {
  plan: PricingPlan;
}

export const homePricing: PricingContent = {
  plan: {
    name: 'Starter',
    price: '29',
    interval: 'mo',
    features: [
      '1 site',
      '5k pages',
      'All core features'
    ],
    ctaText: 'Start 7-day free trial',
    ctaLink: '#',
    trialText: 'No credit card required'
  }
};