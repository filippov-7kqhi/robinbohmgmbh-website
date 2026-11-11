import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { siteConfig } from './src/config/site.config';

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Überträgt Standardtitel und Theme-Farbe aus der Unternehmenskonfiguration in die index.html. */
function siteMetaPlugin(): Plugin {
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      return html
        .replace(/%SITE_TITLE%/g, escapeHtml(siteConfig.seo.defaultTitle))
        .replace(/%THEME_COLOR%/g, siteConfig.seo.themeColor);
    },
  };
}

/** Basis-Pfad aus der konfigurierten Adresse, z. B. "/" oder "/aurenfeld-holding/" */
const base = new URL(siteConfig.siteUrl).pathname.replace(/\/*$/, '/');

export default defineConfig({
  base,
  plugins: [react(), siteMetaPlugin()],
});
