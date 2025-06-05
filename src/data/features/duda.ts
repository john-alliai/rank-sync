export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export const dudaFeatures: Feature[] = [
  {
    title: "One-Click Optimization",
    description: "AI rewrites meta content across your entire site in seconds",
    icon: "⚡"
  },
  {
    title: "Native Integration", 
    description: "Works directly in Duda's interface - no extra login needed",
    icon: "🔌"
  },
  {
    title: "Instant Results",
    description: "See ranking improvements within days of launching",
    icon: "📈"
  },
  {
    title: "Zero Learning Curve",
    description: "If you can use Duda, you can use RankSync",
    icon: "✨"
  }
];