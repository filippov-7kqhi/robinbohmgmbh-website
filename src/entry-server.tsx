import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { getPageMetaByPath, pageList } from './config/pages';
import { siteConfig } from './config/site.config';
import { ROUTER_BASENAME } from './lib/paths';
import { getHeadData, renderHeadTags } from './lib/seo';

/** Rendert eine Route serverseitig – wird ausschließlich vom Prerender-Skript verwendet. */
export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter basename={ROUTER_BASENAME} location={ROUTER_BASENAME === '/' ? url : `${ROUTER_BASENAME}${url}`}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  const head = getHeadData(getPageMetaByPath(url));
  return { html, title: head.title, head: renderHeadTags(head) };
}

export const routes = pageList.filter((page) => page.key !== 'notFound').map((page) => page.path);
export const notFoundPath = '/404';
export const sitemapPages = pageList
  .filter((page) => page.sitemap && !page.noindex)
  .map((page) => ({ path: page.path, ...page.sitemap! }));
export { siteConfig };
export { BASE_URL } from './lib/paths';
