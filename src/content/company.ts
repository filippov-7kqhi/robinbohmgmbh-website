import { FileText, GraduationCap, Landmark, MapPin, type LucideIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';

export interface IconItem {
  icon: LucideIcon;
  title: string;
  text: string;
}

const { brand, address, legal } = siteConfig;

/** Eckdaten im unteren Bereich des Startseiten-Heros – ausschließlich bestätigte Angaben */
export const heroFacts: IconItem[] = [
  { icon: MapPin, title: 'Sitz', text: address.city },
  { icon: Landmark, title: 'Rechtsform', text: 'Gesellschaft mit beschränkter Haftung' },
  { icon: FileText, title: 'Handelsregister', text: `${legal.registerCourt} · ${legal.registerNumber}` },
  { icon: GraduationCap, title: 'Schwerpunkt', text: 'Bildungsbereich' },
];

export interface Fact {
  label: string;
  value: string;
}

/** Unternehmensdaten (Seite „Über uns") – ausschließlich bestätigte Angaben */
export const companyFacts: Fact[] = [
  { label: 'Firma', value: brand.legalName },
  { label: 'Rechtsform', value: legal.legalForm },
  { label: 'Sitz', value: address.city },
  { label: 'Anschrift', value: `${address.street}, ${address.postalCode} ${address.city}` },
  { label: 'Geschäftsführung', value: legal.managingDirectors.join(', ') },
  { label: 'Registergericht', value: legal.registerCourt },
  { label: 'Registernummer', value: legal.registerNumber },
  { label: 'Unternehmensgegenstand', value: legal.businessPurpose },
];

/** Initialen eines Namens, z. B. für Monogramme */
export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
