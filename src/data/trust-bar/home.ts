export interface TrustBarContent {
  tagline: string;
  statistic: {
    icon: string;
    text: string;
  };
  logos: Array<{
    src: string;
    alt: string;
  }>;
}

export const homeTrustBar: TrustBarContent = {
  tagline: "Trusted by Small Businesses",
  statistic: {
    icon: "⭐",
    text: "Average +28% traffic lift in 30 days"
  },
  logos: []
  // Add logos when available
  // logos: [
  //   {
  //     src: "/logos/company1.svg",
  //     alt: "Company 1"
  //   }
  // ]
};