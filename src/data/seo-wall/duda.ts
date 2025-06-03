export interface SEORoadblock {
  roadblock: string;
  why: string;
  impact: string;
}

export interface SEOWallData {
  title: string;
  roadblocks: SEORoadblock[];
}

export const dudaSEOWall: SEOWallData = {
  title: "The Duda SEO Wall – Why good pages never rank",
  roadblocks: [
    {
      roadblock: "Meta tags & slugs tweaked one‑by‑one",
      why: "No bulk interface; editor exposes fields per page only",
      impact: "Slow launches, forgotten \"Lorem ipsum\" metas"
    },
    {
      roadblock: "Template‑driven duplicate content",
      why: "Dynamic pages reuse same layout/copy; canonical tags must be manual",
      impact: "Diluted rankings, crawl budget wasted"
    },
    {
      roadblock: "Widget bloat hurts Core Web Vitals",
      why: "Third‑party embeds load extra JS/CSS; images uncompressed",
      impact: "Failing LCP/INP knocks you down the SERP"
    },
    {
      roadblock: "No instant index ping",
      why: "Sitemap is passive; no IndexNow or URL Inspection triggers",
      impact: "New pages wait days to appear in Google"
    },
    {
      roadblock: "URL clean‑up is manual",
      why: "Mass renames & 301s need dev time",
      impact: "Legacy clutter lives on for years"
    }
  ]
}; 