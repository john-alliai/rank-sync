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
  title: "Optimise every Duda page in one click",
  subtitle: "Titles, slugs, schema & indexing—sorted while your coffee's still hot.",
  buttons: [
    {
      text: "Start free →",
      href: "#signup",
      variant: "primary"
    },
    {
      text: "Watch 2‑min tour",
      href: "#tour",
      variant: "secondary"
    }
  ],
  size: "large",
  background: "dark"
}; 