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

export const homepageHero: HeroConfig = {
  title: "Rank higher on search. No plugins. No headaches.",
  subtitle: "One‑click AI SEO for Duda, Shoplazza & PrestaShop. Bulk‑optimize every page in minutes—starting at just $29.",
  buttons: [
    {
      text: "Start Free Trial",
      href: "#signup",
      variant: "primary"
    },
    {
      text: "Watch 2‑min Demo", 
      href: "#demo",
      variant: "secondary"
    }
  ],
  size: "large",
  background: "gradient"
}; 