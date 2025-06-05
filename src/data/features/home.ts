export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface FeaturesContent {
  features: Feature[];
  title?: string;
  subtitle?: string;
  background?: 'dark' | 'dark-surface';
}

export const homeFeatures: FeaturesContent = {
  features: [
  {
    title: 'Bulk Meta Rewrite',
    description: 'AI crafts compelling titles & descriptions site-wide.',
    icon: '📝',
  },
  {
    title: 'Smart Slug Cleaner',
    description: 'Goodbye ?ref=123, hello keyword-rich URLs.',
    icon: '🔗',
  },
  {
    title: 'Schema Injection',
    description: 'Product, article & local schema added automatically.',
    icon: '📊',
  },
  {
    title: 'Instant Indexing',
    description: 'IndexNow + sitemap ping gets changes picked up fast.',
    icon: '⚡',
  },
  ],
  title: "Everything you need for perfect SEO",
  subtitle: "Built for agencies and developers who want to launch faster",
  background: 'dark'
};