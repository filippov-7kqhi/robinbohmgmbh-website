/**
 * ============================================================================
 *  ZENTRALE UNTERNEHMENSKONFIGURATION – Robin Böhm GmbH
 * ============================================================================
 *  Alle firmenbezogenen Angaben werden ausschließlich hier gepflegt und
 *  automatisch übernommen in: Header, Footer, Kontaktseite, Impressum,
 *  Datenschutzerklärung, Meta-Tags, strukturierte Daten (JSON-LD),
 *  Sitemap, robots.txt, CNAME und Web-App-Manifest.
 *
 *  Grundsatz: Es werden nur bestätigte Angaben eingetragen. Leere Felder
 *  bedeuten „liegt noch nicht vor“ – sie werden in der Vorschau sichtbar
 *  markiert. Der Produktions-Build (npm run build) bricht ab, solange
 *  Pflichtangaben fehlen (siehe vite.config.ts → assertReleaseReady).
 *
 *  Diese Datei darf keine Browser-APIs oder Komponenten importieren, da sie
 *  auch von vite.config.ts gelesen wird.
 * ============================================================================
 */

/** Produktive Adresse der Website */
const PRODUCTION_URL = 'https://robinbohmgmbh.shop';

/**
 * Adresse der Entwicklungsvorschau. Wird ausschließlich beim Vorschau-Build
 * (npm run build:staging, Datei .env.staging) über vite.config.ts gesetzt.
 */
const PREVIEW_URL = typeof __PREVIEW_URL__ === 'string' ? __PREVIEW_URL__ : '';
const IS_PREVIEW = PREVIEW_URL !== '';

export interface SiteConfig {
  brand: {
    /** Name in der Wortmarke */
    name: string;
    /** Zusatz unter der Wortmarke */
    suffix: string;
    fullName: string;
    /** Vollständige Firma inkl. Rechtsform */
    legalName: string;
    description: string;
  };
  /** Hinweisbalken der Entwicklungsvorschau */
  preview: {
    enabled: boolean;
    notice: string;
  };
  release: {
    /**
     * Freigabe der Website-Inhalte durch die Gesellschaft. Erst wenn true,
     * lässt sich der Produktions-Build erstellen.
     */
    contentApproved: boolean;
  };
  /** Öffentliche Adresse ohne abschließenden Schrägstrich (bestimmt auch den Basis-Pfad) */
  siteUrl: string;
  productionUrl: string;
  language: string;
  locale: string;
  contact: {
    /** Pflichtangabe nach § 5 Abs. 1 Nr. 2 DDG – leer = liegt noch nicht vor */
    email: string;
    /** Anzeigeformat, leer = liegt noch nicht vor */
    phone: string;
    /** E.164-Format für tel:-Links */
    phoneHref: string;
  };
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  legal: {
    legalForm: string;
    managingDirectors: string[];
    registerCourt: string;
    registerNumber: string;
    /** USt-IdNr. – nur eintragen, wenn vorhanden; leer = keine Angabe */
    vatId: string;
    businessPurpose: string;
  };
  privacy: {
    hosting: {
      provider: string;
      service: string;
      privacyPolicyUrl: string;
    };
    /**
     * Rechtsgrundlage der Datenübermittlung in die USA (Hosting über GitHub).
     * Muss vom Verantwortlichen geprüft und eingetragen werden.
     */
    transferBasis: string;
    dataProtectionOfficer: { name: string; email: string } | null;
    supervisoryAuthority: { name: string; address: string };
    lastUpdated: string;
  };
  contactForm: {
    /**
     * Ziel-URL für den Formularversand (POST, JSON), z. B. Formspree, Web3Forms
     * oder ein eigenes Backend. Leer = Formular wird in der Produktion nicht angezeigt
     * (in der Vorschau läuft es im Demo-Modus ohne Versand).
     */
    endpoint: string;
    /** Name des Formulardienstes für die Datenschutzerklärung */
    providerName: string;
    /** Zusätzliche Felder, z. B. { access_key: '…' } für Web3Forms */
    extraFields: Record<string, string>;
  };
  seo: {
    defaultTitle: string;
    /** %s wird durch den Seitentitel ersetzt */
    titleTemplate: string;
    ogImage: string;
    ogImageAlt: string;
    themeColor: string;
    allowIndexing: boolean;
  };
  social: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'Robin Böhm',
    suffix: 'GmbH',
    fullName: 'Robin Böhm GmbH',
    legalName: 'Robin Böhm GmbH',
    description:
      'Die Robin Böhm GmbH mit Sitz in Berlin verwaltet Gesellschaftsvermögen und Unternehmensbeteiligungen – vorrangig im Bildungsbereich.',
  },

  preview: {
    enabled: IS_PREVIEW,
    notice: `Entwicklungsvorschau – Entwurf, noch nicht freigegeben. Die Website wird nach Freigabe unter ${PRODUCTION_URL.replace('https://', '')} veröffentlicht.`,
  },

  release: {
    contentApproved: false,
  },

  siteUrl: PREVIEW_URL || PRODUCTION_URL,
  productionUrl: PRODUCTION_URL,
  language: 'de',
  locale: 'de_DE',

  contact: {
    email: '',
    phone: '',
    phoneHref: '',
  },

  address: {
    street: 'Lohmühlenstraße 65',
    postalCode: '12435',
    city: 'Berlin',
    country: 'Deutschland',
  },

  legal: {
    legalForm: 'Gesellschaft mit beschränkter Haftung (GmbH)',
    managingDirectors: ['Robin Böhm'],
    registerCourt: 'Amtsgericht Charlottenburg',
    registerNumber: 'HRB 224706',
    vatId: '',
    businessPurpose:
      'Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen, vorrangig im Bildungsbereich',
  },

  privacy: {
    hosting: {
      provider: 'GitHub Inc., San Francisco (USA)',
      service: 'GitHub Pages',
      privacyPolicyUrl: 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement',
    },
    // Quelle: GitHub General Privacy Statement (gültig ab 27.04.2026), Abschnitt „Data Privacy Framework (DPF)“:
    // „GitHub has certified to the U.S. Department of Commerce that it adheres to the EU-U.S. Data Privacy Framework Principles“
    transferBasis:
      'der Angemessenheitsbeschluss der Europäischen Kommission zum EU-U.S. Data Privacy Framework (Art. 45 Abs. 1 DSGVO), unter dem GitHub nach eigenen Angaben zertifiziert ist',
    dataProtectionOfficer: null,
    supervisoryAuthority: {
      name: 'Berliner Beauftragte für Datenschutz und Informationsfreiheit',
      address: 'Alt-Moabit 59–61, 10555 Berlin',
    },
    lastUpdated: 'November 2026',
  },

  contactForm: {
    endpoint: '',
    providerName: '',
    extraFields: {},
  },

  seo: {
    defaultTitle: 'Robin Böhm GmbH – Verwaltung von Gesellschaftsvermögen und Beteiligungen',
    titleTemplate: '%s | Robin Böhm GmbH',
    ogImage: '/og-image.jpg',
    ogImageAlt: 'Gläserne Hochhausfassaden mit goldenen Reflexionen',
    themeColor: '#08142A',
    allowIndexing: !IS_PREVIEW,
  },

  social: [],
};
