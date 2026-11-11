import { siteConfig } from '../config/site.config';
import { contactTopics } from '../content/contact';
import type { ContactFormValues } from './validation';

const REQUEST_TIMEOUT_MS = 15000;

export const isContactFormDemoMode = () => siteConfig.contactForm.endpoint.trim() === '';

/** Das Formular erscheint nur mit konfiguriertem Endpunkt – oder in der Vorschau (Demo-Modus). */
export const isContactFormEnabled = () => !isContactFormDemoMode() || siteConfig.preview.enabled;

/**
 * Sendet eine Kontaktanfrage als JSON an den konfigurierten Endpunkt
 * (kompatibel u. a. mit Formspree, Web3Forms oder einem eigenen Backend).
 */
export async function sendContactRequest(values: ContactFormValues): Promise<void> {
  const { endpoint, extraFields } = siteConfig.contactForm;
  const topicLabel = contactTopics.find((topic) => topic.value === values.topic)?.label ?? values.topic;

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...extraFields,
        subject: `Neue Kontaktanfrage: ${topicLabel}`,
        name: values.name.trim(),
        company: values.company.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        topic: topicLabel,
        message: values.message.trim(),
        consent: values.consent,
        page: window.location.href,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Formularversand fehlgeschlagen (HTTP ${response.status})`);
    }
  } finally {
    window.clearTimeout(timeout);
  }
}
