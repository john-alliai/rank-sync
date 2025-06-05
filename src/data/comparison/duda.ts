export interface ComparisonData {
  before: {
    title: string;
    features: string[];
    highlight?: string;
  };
  after: {
    title: string;
    features: string[];
    highlight?: string;
  };
}

export const dudaComparison: ComparisonData = {
  before: {
    title: "Duda Without RankSync",
    highlight: "Manual SEO process that takes hours",
    features: [
      "Edit meta tags one page at a time",
      "No bulk URL structure management",
      "Manual schema markup implementation",
      "Time-consuming content optimization",
      "Delayed search engine indexing"
    ]
  },
  after: {
    title: "Duda + RankSync",
    highlight: "One-click optimization in minutes",
    features: [
      "Bulk meta tag optimization with AI",
      "Smart URL cleanup across your site",
      "Automatic schema injection",
      "AI-powered content recommendations",
      "Instant indexing with IndexNow"
    ]
  }
};
