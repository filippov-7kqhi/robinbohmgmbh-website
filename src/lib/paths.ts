/**
 * Basis-Pfad der Website. Er wird in vite.config.ts aus siteConfig.siteUrl abgeleitet:
 * „https://www.firma.de" → "/", „https://user.github.io/projekt" → "/projekt/".
 */
export const BASE_URL: string = import.meta.env.BASE_URL;

/** Basename für React Router (ohne abschließenden Schrägstrich) */
export const ROUTER_BASENAME = BASE_URL.replace(/\/+$/, '') || '/';

/** Pfad zu einer Datei aus /public unter Berücksichtigung des Basis-Pfads */
export const asset = (path: string) => `${BASE_URL}${path.replace(/^\/+/, '')}`;

/** Entfernt den Basis-Pfad aus einem URL-Pfad */
export function stripBase(pathname: string): string {
  if (ROUTER_BASENAME !== '/' && pathname.startsWith(ROUTER_BASENAME)) {
    return pathname.slice(ROUTER_BASENAME.length) || '/';
  }
  return pathname;
}
