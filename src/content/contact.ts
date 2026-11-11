export interface ContactTopic {
  value: string;
  label: string;
}

export const contactTopics: ContactTopic[] = [
  { value: 'allgemein', label: 'Allgemeine Anfrage' },
  { value: 'beteiligung', label: 'Beteiligung / Unternehmensnachfolge' },
  { value: 'bildung', label: 'Bildungsinitiative oder Kooperation' },
  { value: 'edtech', label: 'EdTech & digitale Bildung' },
  { value: 'presse', label: 'Presse & Kommunikation' },
  { value: 'sonstiges', label: 'Sonstiges' },
];
