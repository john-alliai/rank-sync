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
  plans: PricingPlan[];
}

export const homePricing: PricingContent = {
  plans: [
    {
      name: 'Starter',
      price: '19',
      interval: 'mo',
      features: [
        '25 pages',
        '25 keywords',
        'On-page recommendations'
      ],
      ctaText: 'Start 7-day free trial',
      ctaLink: '#',
      trialText: 'No credit card required'
    },
    {
      name: 'Professional',
      price: '39',
      interval: 'mo',
      features: [
        '50 pages',
        '50 keywords',
        'On-page automation',
        'Brand links'
      ],
      ctaText: 'Start 7-day free trial',
      ctaLink: '#',
      trialText: 'No credit card required'
    },
    {
      name: 'Enterprise',
      price: '79',
      interval: 'mo',
      features: [
        '100 pages',
        '100 keywords',
        'On-page optimization',
        'Brand links',
        'Niche links'
      ],
      ctaText: 'Start 7-day free trial',
      ctaLink: '#',
      trialText: 'No credit card required'
    }
  ]
};