export interface Step {
  title: string;
  description: string;
}

export interface HowItWorksData {
  title: string;
  steps: Step[];
  highlight?: string;
}

export const dudaHowItWorks: HowItWorksData = {
  title: "How RankSync works on your Duda site",
  steps: [
    {
      title: "Install from the Duda App Store",
      description: "OAuth lets you pick the site(s) to connect."
    },
    {
      title: "Choose optimisation scope",
      description: "All pages, a collection, or any folder path."
    },
    {
      title: "Preview AI suggestions",
      description: "Edit anything inline or approve in bulk."
    },
    {
      title: "Click \"Optimise\"",
      description: "RankSync writes to Duda via API, injects schema, 301s & publishes."
    },
    {
      title: "Watch the dashboard",
      description: "Track Core Web Vitals, index status & ranking lifts in real time."
    }
  ],
  highlight: "Total hands‑on time: ≈ 3 minutes for a 100‑page site."
}; 