export interface ContactFormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  consent: boolean;
  /** Honeypot-Feld – bleibt für Menschen unsichtbar und leer */
  website: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export const MESSAGE_MIN_LENGTH = 20;
export const MESSAGE_MAX_LENGTH = 2000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^\+?[\d\s()/.-]{6,24}$/;

/**
 * Prüft die Eingaben des Kontaktformulars.
 * Die Reihenfolge der Schlüssel entspricht der Feldreihenfolge im Formular,
 * damit der Fokus auf das erste fehlerhafte Feld gesetzt werden kann.
 */
export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = 'Bitte geben Sie Ihren vollständigen Namen an.';
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = 'Bitte geben Sie Ihre E-Mail-Adresse an.';
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
  }

  const phone = values.phone.trim();
  if (phone && !PHONE_PATTERN.test(phone)) {
    errors.phone = 'Bitte prüfen Sie das Format der Telefonnummer.';
  }

  if (!values.topic) {
    errors.topic = 'Bitte wählen Sie Ihr Anliegen aus.';
  }

  const messageLength = values.message.trim().length;
  if (messageLength === 0) {
    errors.message = 'Bitte geben Sie eine Nachricht ein.';
  } else if (messageLength < MESSAGE_MIN_LENGTH) {
    errors.message = `Bitte formulieren Sie Ihre Nachricht etwas ausführlicher (mindestens ${MESSAGE_MIN_LENGTH} Zeichen).`;
  } else if (messageLength > MESSAGE_MAX_LENGTH) {
    errors.message = `Ihre Nachricht ist zu lang (maximal ${MESSAGE_MAX_LENGTH} Zeichen).`;
  }

  if (!values.consent) {
    errors.consent = 'Bitte bestätigen Sie die Hinweise zum Datenschutz.';
  }

  return errors;
}
