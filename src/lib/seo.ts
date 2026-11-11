import { siteConfig } from '../config/site.config';
import type { PageMeta } from '../config/pages';

export interface HeadTag {
  tag: 'meta' | 'link';
  attrs: Record<string, string>;
}

export interface HeadData {
  title: string;
  tags: HeadTag[];
  jsonLd: Record<string, unknown>[];
}

/** Erzeugt eine absolute URL auf Basis der konfigurierten Domain. */
export function absoluteUrl(path: string): string {
  return new URL(path.replace(/^\/+/, ''), `${siteConfig.siteUrl.replace(/\/+$/, '')}/`).toString();
}

/**
 * Kanonische URL einer Seite. Unterseiten werden als Verzeichnis-Index ausgeliefert
 * (/ueber-uns/index.html), daher endet die URL mit einem Schrägstrich.
 */
export function pageUrl(path: string): string {
  return absoluteUrl(path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`);
}

export function buildTitle(meta: PageMeta): string {
  return meta.fullTitle ?? siteConfig.seo.titleTemplate.replace('%s', meta.title);
}

function organizationSchema(): Record<string, unknown> {
  const { brand, address, contact, sample } = siteConfig;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand.legalName,
    alternateName: brand.fullName,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/logo.svg'),
    description: brand.description,
  };
  // Adress- und Kontaktdaten werden nur ausgegeben, wenn keine Musterinhalte aktiv sind.
  if (!sample.enabled) {
    schema.address = {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressCountry: 'DE',
    };
    schema.email = contact.email;
    schema.telephone = contact.phoneHref;
  }
  if (siteConfig.social.length > 0) {
    schema.sameAs = siteConfig.social.map((item) => item.href);
  }
  return schema;
}

export function getHeadData(meta: PageMeta): HeadData {
  const title = buildTitle(meta);
  const url = pageUrl(meta.path);
  const image = absoluteUrl(meta.ogImage ?? siteConfig.seo.ogImage);
  const indexable = siteConfig.seo.allowIndexing && !meta.noindex;

  const tags: HeadTag[] = [
    { tag: 'meta', attrs: { name: 'description', content: meta.description } },
    {
      tag: 'meta',
      attrs: { name: 'robots', content: indexable ? 'index, follow, max-image-preview:large' : 'noindex, nofollow' },
    },
    { tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
    { tag: 'meta', attrs: { property: 'og:site_name', content: siteConfig.brand.fullName } },
    { tag: 'meta', attrs: { property: 'og:locale', content: siteConfig.locale } },
    { tag: 'meta', attrs: { property: 'og:title', content: title } },
    { tag: 'meta', attrs: { property: 'og:description', content: meta.description } },
    { tag: 'meta', attrs: { property: 'og:image', content: image } },
    { tag: 'meta', attrs: { property: 'og:image:alt', content: siteConfig.seo.ogImageAlt } },
    { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
    { tag: 'meta', attrs: { name: 'twitter:title', content: title } },
    { tag: 'meta', attrs: { name: 'twitter:description', content: meta.description } },
    { tag: 'meta', attrs: { name: 'twitter:image', content: image } },
  ];

  if (!meta.noindex) {
    tags.push({ tag: 'link', attrs: { rel: 'canonical', href: url } });
    tags.push({ tag: 'meta', attrs: { property: 'og:url', content: url } });
  }

  const jsonLd: Record<string, unknown>[] = [organizationSchema()];

  if (meta.key === 'home') {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteConfig.brand.fullName,
      url: absoluteUrl('/'),
      inLanguage: siteConfig.language,
    });
  } else if (meta.breadcrumb && !meta.noindex) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Startseite', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: meta.breadcrumb, item: url },
      ],
    });
  }

  return { title, tags, jsonLd };
}

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Serialisiert JSON-LD sicher für die Einbettung in ein <script>-Element. */
export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');

/** Rendert die Head-Tags als HTML-String (für das Prerendering). */
export function renderHeadTags(head: HeadData): string {
  const tags = head.tags.map(({ tag, attrs }) => {
    const attributes = Object.entries(attrs)
      .map(([key, value]) => `${key}="${escapeAttr(value)}"`)
      .join(' ');
    return `<${tag} ${attributes} data-seo>`;
  });
  const scripts = head.jsonLd.map(
    (data) => `<script type="application/ld+json" data-seo>${serializeJsonLd(data)}</script>`,
  );
  return [...tags, ...scripts].join('\n    ');
}
