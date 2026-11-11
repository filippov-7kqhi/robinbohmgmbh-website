/**
 * Prerendering: erzeugt für jede Route eine statische HTML-Datei mit vollständigem
 * Inhalt und seitenspezifischen Meta-Tags. Zusätzlich entstehen 404.html,
 * sitemap.xml, robots.txt und site.webmanifest – alle auf Basis von site.config.ts.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

process.env.NODE_ENV = 'production';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const escapeHtml = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('index.html enthält nicht die erwarteten Platzhalter <!--app-head--> und <!--app-html-->.');
}

const { render, routes, notFoundPath, sitemapPages, siteConfig, BASE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

function buildPage(url, extraHead = '') {
  const { html, title, head } = render(url);
  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace('<!--app-head-->', `${head}${extraHead}`)
    .replace('<div id="root">', `<div id="root" data-route="${url}">`)
    .replace('<!--app-html-->', html);
}

async function writeFile(relativePath, content) {
  const target = path.join(distDir, relativePath);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content, 'utf8');
  console.log(`  ✓ ${relativePath}`);
}

console.log('\nPrerendering …');

for (const route of routes) {
  const file = route === '/' ? 'index.html' : path.join(route.slice(1), 'index.html');
  const preload = route === '/'
    ? `\n    <link rel="preload" as="image" href="${BASE_URL}images/hero-architecture.jpg" fetchpriority="high">`
    : '';
  await writeFile(file, buildPage(route, preload));
}

await writeFile('404.html', buildPage(notFoundPath));

const siteUrl = siteConfig.siteUrl.replace(/\/+$/, '');
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.path === '/' ? '/' : `${page.path}/`}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
await writeFile('sitemap.xml', sitemap);

const robots = siteConfig.seo.allowIndexing
  ? `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
  : `# Indexierung deaktiviert (siteConfig.seo.allowIndexing = false)\nUser-agent: *\nDisallow: /\n`;
await writeFile('robots.txt', robots);

const manifest = {
  name: siteConfig.brand.fullName,
  short_name: siteConfig.brand.name,
  description: siteConfig.brand.description,
  lang: siteConfig.language,
  start_url: BASE_URL,
  display: 'standalone',
  background_color: siteConfig.seo.themeColor,
  theme_color: siteConfig.seo.themeColor,
  icons: [{ src: `${BASE_URL}favicon.svg`, sizes: 'any', type: 'image/svg+xml' }],
};
await writeFile('site.webmanifest', `${JSON.stringify(manifest, null, 2)}\n`);

await fs.rm(ssrDir, { recursive: true, force: true });
console.log('Prerendering abgeschlossen.\n');
