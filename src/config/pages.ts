import { siteConfig } from './site.config';

export interface PageMeta {
  key: string;
  /** Pfad der Seite (ohne abschließenden Schrägstrich) */
  path: string;
  /** Seitentitel – wird über das Titel-Template ergänzt */
  title: string;
  /** Optionaler vollständiger Titel (ersetzt das Template) */
  fullTitle?: string;
  description: string;
  /** Bezeichnung in der Brotkrümelnavigation */
  breadcrumb?: string;
  ogImage?: string;
  noindex?: boolean;
  sitemap?: { changefreq: 'weekly' | 'monthly' | 'yearly'; priority: number };
}

const brand = siteConfig.brand.fullName;

export const pages = {
  home: {
    key: 'home',
    path: '/',
    title: 'Startseite',
    fullTitle: siteConfig.seo.defaultTitle,
    description: siteConfig.brand.description,
    sitemap: { changefreq: 'monthly', priority: 1.0 },
  },
  about: {
    key: 'about',
    path: '/ueber-uns',
    title: 'Über uns',
    breadcrumb: 'Über uns',
    description: `Lernen Sie die ${brand} kennen: Mission, Vision, Werte und Grundsätze einer unabhängigen Holding mit Fokus auf Beteiligungen und Bildung.`,
    sitemap: { changefreq: 'monthly', priority: 0.8 },
  },
  business: {
    key: 'business',
    path: '/geschaeftsbereiche',
    title: 'Geschäftsbereiche',
    breadcrumb: 'Geschäftsbereiche',
    description:
      'Vermögensverwaltung, Unternehmensbeteiligungen, Bildungsinvestitionen, strategische Unternehmensentwicklung sowie digitale Bildung und Innovation im Überblick.',
    sitemap: { changefreq: 'monthly', priority: 0.9 },
  },
  investments: {
    key: 'investments',
    path: '/beteiligungen',
    title: 'Beteiligungen',
    breadcrumb: 'Beteiligungen',
    description: `Investitionsphilosophie, Kriterien und Ablauf: So beteiligt sich die ${brand} langfristig an Unternehmen und Bildungsanbietern.`,
    sitemap: { changefreq: 'monthly', priority: 0.9 },
  },
  contact: {
    key: 'contact',
    path: '/kontakt',
    title: 'Kontakt',
    breadcrumb: 'Kontakt',
    description: `Nehmen Sie vertraulich Kontakt mit der ${brand} auf – zu Beteiligungen, Unternehmensnachfolge, Bildungsinitiativen und Kooperationen.`,
    sitemap: { changefreq: 'yearly', priority: 0.7 },
  },
  imprint: {
    key: 'imprint',
    path: '/impressum',
    title: 'Impressum',
    breadcrumb: 'Impressum',
    description: `Impressum und Anbieterkennzeichnung der ${brand} gemäß § 5 DDG.`,
    sitemap: { changefreq: 'yearly', priority: 0.3 },
  },
  privacy: {
    key: 'privacy',
    path: '/datenschutz',
    title: 'Datenschutzerklärung',
    breadcrumb: 'Datenschutz',
    description: `Datenschutzerklärung der ${brand}: Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.`,
    sitemap: { changefreq: 'yearly', priority: 0.3 },
  },
  notFound: {
    key: 'notFound',
    path: '/404',
    title: 'Seite nicht gefunden',
    description: 'Die angeforderte Seite wurde leider nicht gefunden.',
    noindex: true,
  },
} satisfies Record<string, PageMeta>;

export const pageList: PageMeta[] = Object.values(pages);

/** Liefert die Metadaten zu einem Pfad – unbekannte Pfade erhalten die 404-Metadaten. */
export function getPageMetaByPath(pathname: string): PageMeta {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pageList.find((page) => page.key !== 'notFound' && page.path === normalized) ?? pages.notFound;
}
