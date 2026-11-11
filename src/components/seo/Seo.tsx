import { useEffect } from 'react';
import type { PageMeta } from '../../config/pages';
import { getHeadData, serializeJsonLd } from '../../lib/seo';

/**
 * Aktualisiert Titel, Meta-Tags, Canonical-URL und strukturierte Daten bei
 * jedem Seitenwechsel. Beim Build werden dieselben Tags zusätzlich statisch in
 * jede HTML-Datei geschrieben (scripts/prerender.mjs), damit Suchmaschinen und
 * Social-Media-Vorschauen sie auch ohne JavaScript erhalten.
 */
export function Seo({ page }: { page: PageMeta }) {
  useEffect(() => {
    const head = getHeadData(page);
    document.title = head.title;

    document.head.querySelectorAll('[data-seo]').forEach((node) => node.remove());

    const fragment = document.createDocumentFragment();
    for (const { tag, attrs } of head.tags) {
      const element = document.createElement(tag);
      Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
      element.setAttribute('data-seo', '');
      fragment.appendChild(element);
    }
    for (const data of head.jsonLd) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', '');
      script.textContent = serializeJsonLd(data);
      fragment.appendChild(script);
    }
    document.head.appendChild(fragment);
  }, [page]);

  return null;
}
