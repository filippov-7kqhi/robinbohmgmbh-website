import {
  Award,
  BookOpen,
  Building,
  Compass,
  Eye,
  GraduationCap,
  Handshake,
  Hourglass,
  MonitorSmartphone,
  Scale,
  ShieldCheck,
  Sprout,
  type LucideIcon,
} from 'lucide-react';

export interface IconItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

/** Kernmerkmale – erscheinen im unteren Bereich des Startseiten-Heros */
export const hallmarks: IconItem[] = [
  { icon: Hourglass, title: 'Langfristig', text: 'Investitionen ohne festgelegtes Ausstiegsdatum' },
  { icon: Compass, title: 'Unabhängig', text: 'Entscheidungen auf Basis eigener Analyse' },
  { icon: Handshake, title: 'Partnerschaftlich', text: 'Begleitung von Management-Teams auf Augenhöhe' },
  { icon: Scale, title: 'Verantwortungsvoll', text: 'Wirtschaftliche und gesellschaftliche Wirkung im Blick' },
];

/** Unternehmenswerte (Seite „Über uns") */
export const values: IconItem[] = [
  {
    icon: ShieldCheck,
    title: 'Integrität',
    text: 'Wir handeln ehrlich, verlässlich und im Einklang mit Recht und Gesetz – auch dann, wenn es unbequem ist.',
  },
  {
    icon: Sprout,
    title: 'Langfristigkeit',
    text: 'Wir denken in Jahrzehnten statt in Quartalen und treffen Entscheidungen, die Bestand haben.',
  },
  {
    icon: Handshake,
    title: 'Partnerschaft',
    text: 'Wir begegnen Unternehmern, Mitarbeitenden und Partnern mit Respekt und auf Augenhöhe.',
  },
  {
    icon: Award,
    title: 'Exzellenz',
    text: 'Wir setzen hohe Maßstäbe an Analyse, Qualität und Umsetzung – in jedem einzelnen Projekt.',
  },
  {
    icon: Scale,
    title: 'Verantwortung',
    text: 'Wir berücksichtigen die ökonomischen, sozialen und ökologischen Folgen unseres Handelns.',
  },
  {
    icon: Eye,
    title: 'Transparenz',
    text: 'Wir kommunizieren offen und nachvollziehbar – gegenüber Gesellschaftern, Beteiligungen und Partnern.',
  },
];

/** Bildungsschwerpunkte (Startseite) */
export const educationFocus: IconItem[] = [
  { icon: BookOpen, title: 'Berufliche Weiterbildung', text: 'Qualifizierung von Fach- und Führungskräften' },
  { icon: GraduationCap, title: 'Private Bildungsträger', text: 'Schulen, Akademien und Fachschulen' },
  { icon: MonitorSmartphone, title: 'EdTech & digitale Lernformate', text: 'Plattformen, Inhalte und adaptive Tools' },
  { icon: Building, title: 'Bildungsinfrastruktur', text: 'Räume und Dienstleistungen für gutes Lernen' },
];

export interface Step {
  number: string;
  title: string;
  text: string;
}

/** Arbeitsweise (Startseite) */
export const approachSteps: Step[] = [
  {
    number: '01',
    title: 'Verstehen',
    text: 'Wir analysieren Geschäftsmodell, Markt und Menschen gründlich, bevor wir eine Entscheidung treffen.',
  },
  {
    number: '02',
    title: 'Strukturieren',
    text: 'Wir entwickeln passgenaue Beteiligungs- und Finanzierungsstrukturen für jede Ausgangslage.',
  },
  {
    number: '03',
    title: 'Begleiten',
    text: 'Wir unterstützen das Management mit Strategie, Netzwerk und unternehmerischer Erfahrung.',
  },
  {
    number: '04',
    title: 'Weiterentwickeln',
    text: 'Wir investieren kontinuierlich in Qualität, Innovation und nachhaltiges Wachstum.',
  },
];

/** Governance-Grundsätze (Seite „Über uns") */
export const governancePrinciples: string[] = [
  'Klare Investitionsrichtlinien und dokumentierte Entscheidungsprozesse',
  'Vier-Augen-Prinzip bei allen wesentlichen Entscheidungen',
  'Regelmäßiges Reporting und offener Austausch mit den Beteiligungen',
  'Compliance, Datenschutz und Integrität als feste Bestandteile der Unternehmenskultur',
  'Einbindung unabhängiger externer Expertise, wo sie sinnvoll ist',
  'Kontinuierliche Überprüfung und Weiterentwicklung der eigenen Arbeitsweise',
];

export interface LeadershipRole {
  role: string;
  text: string;
}

/**
 * Leitungsstruktur – bewusst ohne Namen. Hier können später die tatsächlichen
 * Personen mit Name, Funktion und Kurzprofil ergänzt werden.
 */
export const leadershipRoles: LeadershipRole[] = [
  {
    role: 'Geschäftsführung',
    text: 'Verantwortet Strategie, Kapitalallokation und die Gesamtsteuerung der Holding.',
  },
  {
    role: 'Beteiligungsmanagement',
    text: 'Betreut Investitionsprozesse sowie die laufende Zusammenarbeit mit den Beteiligungen.',
  },
  {
    role: 'Bildung & Innovation',
    text: 'Entwickelt den Bildungs- und EdTech-Schwerpunkt und verantwortet Kooperationen.',
  },
];
