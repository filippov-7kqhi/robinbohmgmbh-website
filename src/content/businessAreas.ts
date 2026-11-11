import { Building2, GraduationCap, Landmark, type LucideIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export interface BusinessArea {
  /** Wird als Anker (#id) auf der Seite „Geschäftsbereiche" verwendet */
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  summary: string;
  description: string[];
  image: string;
  imageAlt: string;
}

const company = siteConfig.brand.legalName;

/**
 * Geschäftsbereiche – ausschließlich abgeleitet aus dem Unternehmensgegenstand:
 * „Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen, vorrangig im Bildungsbereich“.
 * Weitere Bereiche erst nach Bestätigung durch die Gesellschaft ergänzen.
 */
export const businessAreas: BusinessArea[] = [
  {
    id: 'vermoegensverwaltung',
    number: '01',
    icon: Landmark,
    title: 'Verwaltung von Gesellschaftsvermögen',
    subtitle: 'Asset Management',
    summary: 'Die Verwaltung des Vermögens der Gesellschaft ist Teil des Unternehmensgegenstands.',
    description: [
      `Die Verwaltung von Gesellschaftsvermögen ist Teil des Unternehmensgegenstands der ${company}.`,
      'Wie die Gesellschaft insgesamt ist auch dieser Bereich vorrangig auf den Bildungsbereich ausgerichtet.',
    ],
    image: '/images/facade-white.jpg',
    imageAlt: 'Moderne, helle Gebäudefassade mit klarer Geometrie vor blauem Himmel',
  },
  {
    id: 'beteiligungen',
    number: '02',
    icon: Building2,
    title: 'Unternehmensbeteiligungen',
    subtitle: 'Corporate Shareholdings',
    summary: 'Die Verwaltung von Beteiligungen an anderen Unternehmen gehört zum Unternehmensgegenstand.',
    description: [
      `Zum Unternehmensgegenstand der ${company} gehört ebenso die Verwaltung von Unternehmensbeteiligungen – also von Anteilen an anderen Gesellschaften.`,
      'Der Schwerpunkt liegt vorrangig im Bildungsbereich.',
    ],
    image: '/images/hero-architecture.jpg',
    imageAlt: 'Blick nach oben zwischen zwei gläsernen Hochhäusern mit goldenen Reflexionen',
  },
  {
    id: 'bildungsbereich',
    number: '03',
    icon: GraduationCap,
    title: 'Schwerpunkt Bildungsbereich',
    subtitle: 'Education Sector',
    summary: 'Die Tätigkeit der Gesellschaft ist vorrangig auf den Bildungsbereich ausgerichtet.',
    description: [
      `Die Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen erfolgt bei der ${company} vorrangig im Bildungsbereich.`,
      'Damit bildet der Bildungsbereich den inhaltlichen Schwerpunkt der Unternehmenstätigkeit.',
    ],
    image: '/images/library.jpg',
    imageAlt: 'Lange Bücherregale in einer Bibliothek, beleuchtet von warmen Glühlampen',
  },
];
