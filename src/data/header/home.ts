export interface NavLink {
  text: string;
  href: string;
}

// This interface is used by shared/navigation.ts
export interface HeaderContent {
  logo: string;
  links: NavLink[];
  ctaButton: {
    text: string;
    href: string;
  };
}