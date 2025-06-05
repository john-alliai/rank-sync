export interface Problem {
  title: string;
  description: string;
  icon: string;
}

export interface ProblemContent {
  title: string;
  description: string;
  problems: Problem[];
}

export const homeProblem: ProblemContent = {
  title: "Why DIY SEO Hurts Small Sites",
  description: "Inefficient manual edits, confusing plugins, and pricey consultants keep indie founders from ranking.",
  problems: [
    {
      title: "Slow fixes",
      description: "Google re-crawls stale pages.",
      icon: "🐌"
    },
    {
      title: "Plugin bloat",
      description: "Site maintenance headaches.",
      icon: "🔌"
    },
    {
      title: "Agency fees",
      description: ">$1k/mo for basic meta work.",
      icon: "💸"
    }
  ]
};