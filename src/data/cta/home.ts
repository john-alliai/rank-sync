export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface CTAContent {
  title: string;
  buttons: CTAButton[];
}

export const homeFinalCTA: CTAContent = {
  title: "Never lose traffic again due to unoptimised pages.",
  buttons: [
    {
      text: 'Start Free Trial',
      href: '#',
      variant: 'primary'
    },
    {
      text: 'Talk to Us',
      href: '#',
      variant: 'secondary'
    }
  ]
};