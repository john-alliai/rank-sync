import type { NavLink } from '../header/home';
import type { FooterLink } from '../footer/home';

export interface SharedNavigation {
  header: {
    logo: string;
    links: NavLink[];
    ctaButton: {
      text: string;
      href: string;
    };
  };
  footer: {
    copyright: string;
    links: FooterLink[];
  };
}

export const sharedNavigation: SharedNavigation = {
  header: {
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
  },
  footer: {
    copyright: '© 2025 RankSync',
    links: [
      { text: 'Privacy', href: '#' },
      { text: 'Terms', href: '#' },
      { text: 'Contact', href: '#' }
    ]
  }
};