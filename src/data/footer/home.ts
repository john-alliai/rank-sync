export interface FooterLink {
  text: string;
  href: string;
}

export interface FooterContent {
  copyright: string;
  links: FooterLink[];
}

export const homeFooter: FooterContent = {
  copyright: '© 2025 RankSync',
  links: [
    { text: 'Privacy', href: '#' },
    { text: 'Terms', href: '#' },
    { text: 'Contact', href: '#' }
  ]
};