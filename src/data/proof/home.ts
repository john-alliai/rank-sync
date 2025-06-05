export interface Metric {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface ProofContent {
  testimonial: Testimonial;
  metrics: Metric[];
}

export const homeProof: ProofContent = {
  testimonial: {
    quote: "RankSync fixed 300 product titles in ten minutes and organic clicks jumped 27%.",
    author: "Olivia B.",
    company: "Shoplazza merchant"
  },
  metrics: [
    { label: 'sites optimised', value: '86' },
    { label: 'pages rewritten', value: '40K' },
    { label: 'hours saved', value: '320' },
  ]
};