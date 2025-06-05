export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export const homepageFeatures: Feature[] = [
  {
    title: 'Bulk Meta Rewrite',
    description: 'AI crafts compelling titles & descriptions site wide.',
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
]; 