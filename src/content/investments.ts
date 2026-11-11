import { ChartPie, Handshake, Layers, MapPin, ShieldCheck, Sprout, Target, TrendingUp, Users } from 'lucide-react';
import type { IconItem, Step } from './company';

/** Beteiligungsformen */
export const investmentTypes: IconItem[] = [
  {
    icon: Handshake,
    title: 'Nachfolgelösungen',
    text: 'Wir übernehmen Verantwortung, wenn Inhaberinnen und Inhaber ihr Lebenswerk in gute Hände geben möchten – unter Erhalt von Identität, Standort und Arbeitsplätzen.',
  },
  {
    icon: TrendingUp,
    title: 'Wachstumskapital',
    text: 'Wir stellen Eigenkapital für den nächsten Entwicklungsschritt bereit – etwa für Expansion, Digitalisierung oder gezielte Zukäufe.',
  },
  {
    icon: ChartPie,
    title: 'Minderheitsbeteiligungen',
    text: 'Wir begleiten Unternehmerinnen und Unternehmer als Minderheitsgesellschafter – die unternehmerische Führung bleibt in ihren Händen.',
  },
];

/** Investitionskriterien */
export const investmentCriteria: IconItem[] = [
  {
    icon: MapPin,
    title: 'Region',
    text: 'Unternehmenssitz in Deutschland, Österreich oder der Schweiz (DACH-Region).',
  },
  {
    icon: Layers,
    title: 'Branchen',
    text: 'Bildung, Weiterbildung, EdTech sowie wissensbasierte Dienstleistungen.',
  },
  {
    icon: Target,
    title: 'Geschäftsmodell',
    text: 'Bewährtes, nachvollziehbares Geschäftsmodell mit klarer Positionierung im Markt.',
  },
  {
    icon: Users,
    title: 'Management',
    text: 'Engagierte Führungskräfte, die die gemeinsame Weiterentwicklung aktiv mittragen.',
  },
  {
    icon: ShieldCheck,
    title: 'Substanz',
    text: 'Solide Finanzstruktur oder klar erkennbares Potenzial zur Stabilisierung.',
  },
  {
    icon: Sprout,
    title: 'Wirkung',
    text: 'Positiver Beitrag für Lernende, Mitarbeitende und die Gesellschaft.',
  },
];

/** Ablauf einer Beteiligung */
export const investmentProcess: Step[] = [
  { number: '01', title: 'Erstkontakt', text: 'Sie stellen uns Ihr Unternehmen vor – vertraulich und unverbindlich.' },
  {
    number: '02',
    title: 'Kennenlernen',
    text: 'In persönlichen Gesprächen lernen wir Menschen, Geschäftsmodell und Ziele kennen.',
  },
  {
    number: '03',
    title: 'Indikatives Angebot',
    text: 'Auf Basis erster Informationen skizzieren wir eine mögliche Beteiligungsstruktur.',
  },
  {
    number: '04',
    title: 'Prüfung',
    text: 'Gemeinsam mit externen Fachleuten führen wir eine sorgfältige Due Diligence durch.',
  },
  {
    number: '05',
    title: 'Partnerschaft',
    text: 'Nach Vertragsabschluss beginnt die eigentliche Arbeit: die gemeinsame Weiterentwicklung.',
  },
];
