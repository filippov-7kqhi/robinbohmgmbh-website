export interface ContactTopic {
  value: string;
  label: string;
}

export const contactTopics: ContactTopic[] = [
  { value: 'allgemein', label: 'Allgemeine Anfrage' },
  { value: 'beteiligungen', label: 'Beteiligungen' },
  { value: 'bildung', label: 'Bildungsbereich' },
  { value: 'presse', label: 'Presse' },
  { value: 'sonstiges', label: 'Sonstiges' },
];
