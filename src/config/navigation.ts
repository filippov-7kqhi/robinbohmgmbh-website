export interface NavItem {
  label: string;
  to: string;
  /** Wird auf großen Bildschirmen als hervorgehobene Schaltfläche dargestellt */
  cta?: boolean;
}

export const mainNavigation: NavItem[] = [
  { label: 'Startseite', to: '/' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Geschäftsbereiche', to: '/geschaeftsbereiche' },
  { label: 'Beteiligungen', to: '/beteiligungen' },
  { label: 'Kontakt', to: '/kontakt', cta: true },
];

export const legalNavigation: NavItem[] = [
  { label: 'Impressum', to: '/impressum' },
  { label: 'Datenschutz', to: '/datenschutz' },
];
