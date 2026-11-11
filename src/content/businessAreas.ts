import { Building2, Compass, GraduationCap, Landmark, MonitorSmartphone, type LucideIcon } from 'lucide-react';

export interface BusinessArea {
  /** Wird als Anker (#id) auf der Seite „Geschäftsbereiche" verwendet */
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  summary: string;
  description: string[];
  services: string[];
  principle: string;
  image: string;
  imageAlt: string;
}

export const businessAreas: BusinessArea[] = [
  {
    id: 'vermoegensverwaltung',
    number: '01',
    icon: Landmark,
    title: 'Verwaltung von Gesellschaftsvermögen',
    subtitle: 'Corporate Asset Management',
    summary:
      'Strukturierte, risikobewusste Verwaltung des eigenen Gesellschaftsvermögens mit dem Ziel langfristiger Substanzerhaltung.',
    description: [
      'Die Verwaltung des eigenen Gesellschaftsvermögens bildet das Fundament unserer Holding. Wir verfolgen eine disziplinierte, breit aufgestellte Allokation, die Kapitalerhalt und Liquidität ebenso berücksichtigt wie eine langfristige Wertentwicklung.',
      'Entscheidungen treffen wir auf Grundlage klar definierter Anlagerichtlinien, transparenter Berichtsprozesse und eines konsequenten Risikomanagements – ohne kurzfristigen Renditedruck.',
    ],
    services: [
      'Strategische Allokation des Gesellschaftsvermögens',
      'Liquiditäts- und Treasury-Management der Gruppe',
      'Risikocontrolling und regelmäßiges Reporting',
      'Halten und Verwalten von Immobilien- und Finanzbeteiligungen',
      'Effiziente Holding-Organisation in Abstimmung mit externen Beratern',
    ],
    principle:
      'Wir verwalten ausschließlich eigenes Vermögen der Gruppe – Anlageberatung oder Vermögensverwaltung für Dritte bieten wir nicht an.',
    image: '/images/facade-white.jpg',
    imageAlt: 'Moderne, helle Gebäudefassade mit klarer Geometrie vor blauem Himmel',
  },
  {
    id: 'beteiligungen',
    number: '02',
    icon: Building2,
    title: 'Unternehmensbeteiligungen',
    subtitle: 'Corporate Holdings',
    summary:
      'Langfristige Mehrheits- und Minderheitsbeteiligungen an mittelständischen Unternehmen mit solider Substanz und klarer Perspektive.',
    description: [
      'Wir beteiligen uns an Unternehmen, deren Geschäftsmodell wir verstehen und deren Weiterentwicklung wir aktiv unterstützen können. Im Mittelpunkt stehen etablierte Mittelständler, Nachfolgesituationen und Unternehmen in einer Wachstumsphase.',
      'Als Gesellschafter mit langem Atem verzichten wir auf starre Ausstiegsszenarien. Wir verstehen uns als verlässlicher Partner für Gründerinnen, Gründer und Management-Teams.',
    ],
    services: [
      'Mehrheits- und Minderheitsbeteiligungen',
      'Unternehmensnachfolge und Gesellschafterwechsel',
      'Wachstumsfinanzierung mit Eigenkapital',
      'Aktive Gesellschafterrolle in Beirat und Aufsichtsgremien',
      'Buy-and-Build-Strategien in ausgewählten Branchen',
    ],
    principle: 'Wir investieren, um zu halten – nicht, um zu verkaufen.',
    image: '/images/hero-architecture.jpg',
    imageAlt: 'Blick nach oben zwischen zwei gläsernen Hochhäusern mit goldenen Reflexionen',
  },
  {
    id: 'bildungsinvestitionen',
    number: '03',
    icon: GraduationCap,
    title: 'Bildungsinvestitionen',
    subtitle: 'Education Investments',
    summary:
      'Gezielte Investitionen in Bildungsträger, Weiterbildungsanbieter und Bildungsinfrastruktur mit nachweisbarer Qualität.',
    description: [
      'Bildung entscheidet über die Zukunftsfähigkeit von Menschen, Unternehmen und Gesellschaft. Deshalb investieren wir gezielt in Organisationen, die Lernen zugänglicher, wirksamer und praxisnäher machen.',
      'Unser Fokus liegt auf beruflicher Aus- und Weiterbildung, privaten Bildungsträgern sowie Dienstleistungen rund um Lehre und Lernen. Pädagogische Qualität hat für uns dabei Vorrang vor kurzfristigem Wachstum.',
    ],
    services: [
      'Beteiligungen an privaten Bildungs- und Weiterbildungsträgern',
      'Berufliche Qualifizierung und Fachkräfteentwicklung',
      'Bildungsnahe Dienstleistungen und Infrastruktur',
      'Kooperationen mit Hochschulen und Bildungseinrichtungen',
      'Förderung von Qualitätsstandards und Zertifizierungen',
    ],
    principle: 'Pädagogische Qualität ist für uns die Voraussetzung wirtschaftlichen Erfolgs – nicht ihr Ergebnis.',
    image: '/images/library.jpg',
    imageAlt: 'Lange Bücherregale in einer Bibliothek, beleuchtet von warmen Glühlampen',
  },
  {
    id: 'unternehmensentwicklung',
    number: '04',
    icon: Compass,
    title: 'Strategische Unternehmensentwicklung',
    subtitle: 'Strategic Business Development',
    summary:
      'Unternehmerische Begleitung unserer Beteiligungen – von der strategischen Ausrichtung bis zur operativen Umsetzung.',
    description: [
      'Kapital allein schafft keinen nachhaltigen Wert. Wir begleiten unsere Beteiligungen mit strategischer Expertise, einem belastbaren Netzwerk und operativer Erfahrung – stets mit Respekt vor der Eigenständigkeit der Unternehmen.',
      'Gemeinsam mit den Geschäftsführungen entwickeln wir Strategien, professionalisieren Strukturen und schaffen die Voraussetzungen für profitables, gesundes Wachstum.',
    ],
    services: [
      'Strategie- und Geschäftsmodellentwicklung',
      'Professionalisierung von Organisation und Prozessen',
      'Aufbau von Finanz- und Controlling-Strukturen',
      'Begleitung von Zukäufen und Kooperationen',
      'Führungskräfteentwicklung und Nachfolgeplanung',
    ],
    principle: 'Wir begleiten auf Augenhöhe – die operative Verantwortung bleibt beim Management.',
    image: '/images/strategy-desk.jpg',
    imageAlt: 'Zwei Personen planen an einem Schreibtisch mit Notizen und Laptops',
  },
  {
    id: 'digitale-bildung',
    number: '05',
    icon: MonitorSmartphone,
    title: 'Digitale Bildung & Innovation',
    subtitle: 'Digital Education & Innovation',
    summary:
      'Förderung digitaler Lernformate, EdTech-Lösungen und innovativer Bildungskonzepte mit messbarer Wirkung.',
    description: [
      'Die Digitalisierung verändert grundlegend, wie Menschen lernen und sich weiterbilden. Wir investieren in Unternehmen und Initiativen, die digitale Lernangebote entwickeln, skalieren und messbar wirksam machen.',
      'Dabei verbinden wir Kapital mit dem Know-how aus unseren Bildungsbeteiligungen – und schlagen so Brücken zwischen bewährter Lehre und neuen Technologien.',
    ],
    services: [
      'Beteiligungen an EdTech-Unternehmen',
      'Digitale Lernplattformen und Blended-Learning-Konzepte',
      'KI-gestützte und adaptive Lernanwendungen',
      'Digitalisierung bestehender Bildungsangebote',
      'Pilotprojekte und Innovationspartnerschaften',
    ],
    principle: 'Technologie ist Mittel zum Zweck – im Mittelpunkt steht immer der Lernerfolg.',
    image: '/images/digital-learning.jpg',
    imageAlt: 'Zwei Personen arbeiten gemeinsam an einem Laptop und zeigen auf den Bildschirm',
  },
];
