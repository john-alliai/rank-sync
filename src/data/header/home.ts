export interface NavLink {
  text: string;
  href: string;
}

export interface HeaderContent {
  logo: string;
  links: NavLink[];
  ctaButton: {
    text: string;
    href: string;
  };
}

export const homeHeader: HeaderContent = {
  logo: 'RankSync',
  links: [
    { text: 'Features', href: '#features' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'FAQ', href: '#faq' },
    { text: 'Duda', href: '/duda' }
  ],
  ctaButton: {
    text: 'Start Free Trial',
    href: '#'
  }
};