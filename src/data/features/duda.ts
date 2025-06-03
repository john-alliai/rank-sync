export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export const dudaFeatures: Feature[] = [
  {
    title: "Bulk Meta Rewrite",
    description: "AI rewrites every title & description, aligned to keyword intent."
  },
  {
    title: "Smart Slug Cleaner", 
    description: "Scans the whole site, suggests clean URLs and auto‑builds 301s."
  },
  {
    title: "Schema Injection",
    description: "Instantly adds Product, FAQ, Local & Article JSON‑LD—no code widgets."
  },
  {
    title: "IndexNow + Google API Push",
    description: "Pings all major engines the second you hit publish."
  },
  {
    title: "Core Web Vitals Guardrails",
    description: "Compresses heavy images, lazy‑loads embeds, flags slow widgets."
  },
  {
    title: "Health Dashboard",
    description: "Real‑language checklist keeps duplicates, cannibals & orphan pages away."
  }
]; 