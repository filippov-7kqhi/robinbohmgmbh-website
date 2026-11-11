import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Steuert die Scrollposition bei Navigation:
 * – Seitenwechsel ohne Anker: sofort an den Seitenanfang
 * – Seitenwechsel mit Anker: direkt zum Zielabschnitt
 * – Ankerwechsel auf derselben Seite: weiches Scrollen zum Abschnitt
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const pageChanged = previousPath.current !== null && previousPath.current !== pathname;
    const isFirstRender = previousPath.current === null;
    previousPath.current = pathname;

    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: pageChanged || isFirstRender ? 'instant' : 'smooth',
          block: 'start',
        });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    if (pageChanged) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}
