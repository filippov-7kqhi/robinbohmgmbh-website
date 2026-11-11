/**
 * ============================================================================
 *  ZENTRALE UNTERNEHMENSKONFIGURATION
 * ============================================================================
 *  Alle firmenbezogenen Angaben werden ausschließlich hier gepflegt und
 *  automatisch übernommen in: Header, Footer, Kontaktseite, Impressum,
 *  Datenschutzerklärung, Meta-Tags, strukturierte Daten (JSON-LD),
 *  Sitemap, robots.txt und Web-App-Manifest.
 *
 *  WICHTIG: „Aurenfeld Holding" ist eine FIKTIVE Beispielmarke.
 *  Werte in [eckigen Klammern] sind Platzhalter. Sie werden auf der Website
 *  sichtbar markiert und müssen vor einer Veröffentlichung durch die
 *  zutreffenden Angaben des tatsächlichen Anbieters ersetzt werden.
 *
 *  Diese Datei darf keine Browser-APIs oder Komponenten importieren, da sie
 *  auch von vite.config.ts und dem Prerender-Skript gelesen wird.
 * ============================================================================
 */

export interface SiteConfig {
  brand: {
    /** Markenname (Wortmarke im Logo) */
    name: string;
    /** Zusatz unter der Wortmarke */
    suffix: string;
    /** Kurzname für Texte und Seitentitel */
    fullName: string;
    /** Vollständiger Firmenname inkl. Rechtsform */
    legalName: string;
    tagline: string;
    description: string;
  };
  /** Kennzeichnung als Beispiel-/Musterinhalt */
  sample: {
    enabled: boolean;
    notice: string;
  };
  /**
   * Öffentliche Adresse ohne abschließenden Schrägstrich – für Canonical-URLs, Sitemap & Open Graph.
   * Enthält sie einen Unterpfad (z. B. GitHub Pages), wird dieser automatisch als Basis-Pfad verwendet.
   */
  siteUrl: string;
  language: string;
  locale: string;
  contact: {
    email: string;
    phone: string;
    /** Telefonnummer im E.164-Format für tel:-Links */
    phoneHref: string;
    officeHours: string;
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
    vatId: string;
    /** Verantwortlich i. S. d. § 18 Abs. 2 MStV */
    contentResponsible: { name: string; address: string };
  };
  privacy: {
    hostingProvider: string;
    hostingAddress: string;
    /** Datenschutzbeauftragte(r) – null, wenn keine Benennungspflicht besteht */
    dataProtectionOfficer: { name: string; email: string } | null;
    supervisoryAuthority: string;
    lastUpdated: string;
  };
  contactForm: {
    /**
     * Ziel-URL für den Formularversand (POST, JSON), z. B. Formspree, Web3Forms
     * oder ein eigenes Backend. Leer lassen = Demo-Modus (Validierung ohne Versand).
     */
    endpoint: string;
    /** Name des Formulardienstes für die Datenschutzerklärung (leer = nicht genannt) */
    providerName: string;
    /** Zusätzliche Felder, die mitgesendet werden (z. B. { access_key: '…' } für Web3Forms) */
    extraFields: Record<string, string>;
  };
  seo: {
    defaultTitle: string;
    /** %s wird durch den Seitentitel ersetzt */
    titleTemplate: string;
    ogImage: string;
    ogImageAlt: string;
    themeColor: string;
    /**
     * Suchmaschinen-Indexierung. Solange Musterinhalte aktiv sind, bleibt die
     * Website auf „noindex" – nach Einpflegen echter Inhalte auf true setzen.
     */
    allowIndexing: boolean;
  };
  social: { label: string; href: string }[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'Aurenfeld',
    suffix: 'Holding',
    fullName: 'Aurenfeld Holding',
    legalName: 'Aurenfeld Holding GmbH',
    tagline: 'Kapital mit Verantwortung. Bildung mit Perspektive.',
    description:
      'Die Aurenfeld Holding verwaltet Gesellschaftsvermögen, hält langfristige Unternehmensbeteiligungen und investiert in Bildung sowie digitale Lerninnovationen.',
  },

  sample: {
    enabled: true,
    notice:
      'Entwicklungsvorschau einer fiktiven Beispielmarke – sämtliche Namen, Inhalte und Angaben sind Musterinhalte und beziehen sich auf kein reales Unternehmen.',
  },

  siteUrl: 'https://filippov-7kqhi.github.io/aurenfeld-holding',
  language: 'de',
  locale: 'de_DE',

  contact: {
    email: 'kontakt@example.com',
    phone: '+49 (0) 000 000 000-0',
    phoneHref: '+490000000000',
    officeHours: 'Montag bis Freitag, 9:00 – 17:00 Uhr',
  },

  address: {
    street: 'Musterstraße 1',
    postalCode: '00000',
    city: 'Musterstadt',
    country: 'Deutschland',
  },

  legal: {
    legalForm: 'Gesellschaft mit beschränkter Haftung (GmbH)',
    managingDirectors: ['[Name der Geschäftsführung eintragen]'],
    registerCourt: '[Registergericht eintragen]',
    registerNumber: '[HRB-Nummer eintragen]',
    vatId: '[USt-IdNr. eintragen, sofern vorhanden]',
    contentResponsible: {
      name: '[Name der verantwortlichen Person eintragen]',
      address: 'Anschrift wie oben',
    },
  },

  privacy: {
    hostingProvider: '[Name des Hosting-Anbieters eintragen]',
    hostingAddress: '[Anschrift des Hosting-Anbieters eintragen]',
    dataProtectionOfficer: null,
    supervisoryAuthority: '[Zuständige Datenschutz-Aufsichtsbehörde des Bundeslandes eintragen]',
    lastUpdated: 'November 2026',
  },

  contactForm: {
    endpoint: '',
    providerName: '',
    extraFields: {},
  },

  seo: {
    defaultTitle: 'Aurenfeld Holding – Beteiligungen, Vermögensverwaltung & Bildungsinvestitionen',
    titleTemplate: '%s | Aurenfeld Holding',
    ogImage: '/og-image.jpg',
    ogImageAlt: 'Gläserne Hochhausfassaden mit goldenen Reflexionen',
    themeColor: '#08142A',
    allowIndexing: false,
  },

  social: [],
};
