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
      { text: 'Duda', href: '/duda' },
      { text: 'Shoplazza', href: '/shoplazza' },
      { text: 'PrestaShop', href: '/prestashop' }
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