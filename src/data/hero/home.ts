export interface HeroButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroContent {
  title: string;
  subtitle?: string;
  buttons?: HeroButton[];
  size?: 'default' | 'large';
  background?: 'dark' | 'gradient';
}

export const homeHero: HeroContent = {
  title: "One-click AI SEO that launches with your site",
  subtitle: "Stop losing traffic to unoptimised pages. RankSync auto-optimises your content as you build, so every page launches ready to rank.",
  buttons: [
    {
      text: 'Start Free Trial',
      href: '#',
      variant: 'primary'
    },
    {
      text: 'Watch Demo',
      href: '#demo',
      variant: 'secondary'
    }
  ],
  size: 'large',
  background: 'dark'
};