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

const company = siteConfig.brand.legalName;
const city = siteConfig.address.city;

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
    description: `Die ${company} im Überblick: Sitz in ${city}, Geschäftsführung, Handelsregistereintrag und Unternehmensgegenstand.`,
    sitemap: { changefreq: 'monthly', priority: 0.8 },
  },
  business: {
    key: 'business',
    path: '/geschaeftsbereiche',
    title: 'Geschäftsbereiche',
    breadcrumb: 'Geschäftsbereiche',
    description: `Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen mit Schwerpunkt im Bildungsbereich – die Tätigkeitsfelder der ${company}.`,
    sitemap: { changefreq: 'monthly', priority: 0.9 },
  },
  investments: {
    key: 'investments',
    path: '/beteiligungen',
    title: 'Beteiligungen',
    breadcrumb: 'Beteiligungen',
    description: `Die ${company} verwaltet Beteiligungen an anderen Unternehmen – vorrangig im Bildungsbereich.`,
    sitemap: { changefreq: 'monthly', priority: 0.8 },
  },
  contact: {
    key: 'contact',
    path: '/kontakt',
    title: 'Kontakt',
    breadcrumb: 'Kontakt',
    description: `Kontakt zur ${company}, ${siteConfig.address.street}, ${siteConfig.address.postalCode} ${city}.`,
    sitemap: { changefreq: 'yearly', priority: 0.7 },
  },
  imprint: {
    key: 'imprint',
    path: '/impressum',
    title: 'Impressum',
    breadcrumb: 'Impressum',
    description: `Impressum der ${company} gemäß § 5 DDG.`,
    sitemap: { changefreq: 'yearly', priority: 0.3 },
  },
  privacy: {
    key: 'privacy',
    path: '/datenschutz',
    title: 'Datenschutzerklärung',
    breadcrumb: 'Datenschutz',
    description: `Datenschutzerklärung der ${company}: Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.`,
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
