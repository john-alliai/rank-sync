export interface HeroConfig {
  title: string;
  subtitle: string;
  buttons: Array<{
    text: string;
    href: string;
    variant: 'primary' | 'secondary';
  }>;
  size?: 'default' | 'large';
  background?: 'dark' | 'gradient';
}

export const dudaHero: HeroConfig = {
  title: "Launch your Duda site with perfect SEO",
  subtitle: "One click optimization that works natively with Duda. Get better rankings from day one.",
  buttons: [
    {
      text: "Start free trial →",
      href: "#signup",
      variant: "primary"
    }
  ],
  size: "large",
  background: "gradient"
};