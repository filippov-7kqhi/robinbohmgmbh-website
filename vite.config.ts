import { defineConfig, loadEnv, type Plugin } from 'vite';
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

/**
 * Freigabeprüfung für den Produktions-Build: Ohne die gesetzlich erforderlichen
 * Angaben und die inhaltliche Freigabe wird kein Build für die Produktivdomain erzeugt.
 */
function assertReleaseReady() {
  const missing: string[] = [];
  if (!siteConfig.contact.email.trim()) {
    missing.push('contact.email – E-Mail-Adresse der Gesellschaft (Pflichtangabe im Impressum, § 5 Abs. 1 Nr. 2 DDG)');
  }
  if (!siteConfig.contact.phone.trim() && !siteConfig.contactForm.endpoint.trim()) {
    missing.push(
      'contact.phone oder contactForm.endpoint – zweiter unmittelbarer Kommunikationsweg neben der E-Mail (Telefon oder funktionsfähiges Kontaktformular)',
    );
  }
  if (!siteConfig.privacy.transferBasis.trim()) {
    missing.push('privacy.transferBasis – Rechtsgrundlage der Datenübermittlung an GitHub (USA) für die Datenschutzerklärung');
  }
  if (siteConfig.contactForm.endpoint.trim() && !siteConfig.contactForm.providerName.trim()) {
    missing.push('contactForm.providerName – Name des Formulardienstes für die Datenschutzerklärung');
  }
  if (!siteConfig.release.contentApproved) {
    missing.push('release.contentApproved – Freigabe der Website-Inhalte durch die Gesellschaft');
  }
  // Platzhalter der Form „[…]“ in irgendeinem Textwert der Konfiguration
  const strings: string[] = [];
  const collect = (value: unknown) => {
    if (typeof value === 'string') strings.push(value);
    else if (value && typeof value === 'object') Object.values(value).forEach(collect);
  };
  collect(siteConfig);
  const placeholders = strings.filter((value) => /\[[^\]]{3,}\]/.test(value));
  if (placeholders.length > 0) {
    missing.push(`Platzhalter in site.config.ts: ${placeholders.join(' | ')}`);
  }
  if (missing.length > 0) {
    throw new Error(
      `\n\nProduktions-Build für ${siteConfig.productionUrl} abgebrochen – folgende Angaben fehlen noch:\n` +
        missing.map((item) => `  • ${item}`).join('\n') +
        '\n\nEntwicklungsvorschau ohne diese Prüfung: npm run build:staging\n',
    );
  }
}

export default defineConfig(({ command, mode, isSsrBuild }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const previewUrl = (env.PREVIEW_URL ?? '').trim().replace(/\/+$/, '');

  if (command === 'build' && !previewUrl && !isSsrBuild) {
    assertReleaseReady();
  }

  const siteUrl = previewUrl || siteConfig.siteUrl;
  /** Basis-Pfad aus der Adresse, z. B. "/" (Produktion) oder "/robinbohmgmbh-website/" (Vorschau) */
  const base = new URL(siteUrl).pathname.replace(/\/*$/, '/');

  return {
    base,
    define: {
      __PREVIEW_URL__: JSON.stringify(previewUrl),
    },
    plugins: [react(), siteMetaPlugin()],
  };
});
