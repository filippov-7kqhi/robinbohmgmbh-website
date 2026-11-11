import { useEffect, useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { siteConfig } from '../../config/site.config';
import { contactTopics } from '../../content/contact';
import { isContactFormDemoMode, sendContactRequest } from '../../lib/contact';
import { cn } from '../../lib/cn';
import {
  MESSAGE_MAX_LENGTH,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../../lib/validation';
import { Button } from '../ui/Button';

const initialValues: ContactFormValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
  consent: false,
  website: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputBase =
  'block w-full rounded-[2px] border bg-white px-4 py-3.5 text-[15px] text-navy-950 shadow-[0_1px_0_rgba(8,20,42,0.03)] transition-[border-color,box-shadow] duration-300 placeholder:text-navy-400 focus:outline-none focus:ring-4';

const inputState = (hasError: boolean) =>
  hasError
    ? 'border-red-600/70 focus:border-red-600 focus:ring-red-600/10'
    : 'border-navy-950/15 hover:border-navy-950/30 focus:border-gold-500 focus:ring-gold-400/20';

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: ReactNode;
  children: ReactNode;
  className?: string;
}

function Field({ id, label, required, error, hint, children, className }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-700">
        <span>
          {label}
          {required ? (
            <span className="ml-1 text-gold-700" aria-hidden="true">
              *
            </span>
          ) : (
            <span className="ml-2 font-medium normal-case tracking-normal text-navy-500">(optional)</span>
          )}
        </span>
        {hint}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-[13px] text-red-700">
          <CircleAlert aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2} />
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [sentInDemoMode, setSentInDemoMode] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);
  const uid = useId();

  const fieldId = (name: keyof ContactFormValues) => `${uid}-${name}`;
  const demoMode = isContactFormDemoMode();

  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const target = event.target;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value;
    const next = { ...values, [target.name]: value } as ContactFormValues;
    setValues(next);
    // Nach dem ersten Absendeversuch wird live validiert
    if (attempted) setErrors(validateContactForm(next));
    if (status === 'error') setStatus('idle');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === 'submitting') return;

    setAttempted(true);
    const found = validateContactForm(values);
    setErrors(found);

    const firstInvalid = Object.keys(found)[0] as keyof ContactFormValues | undefined;
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    // Honeypot ausgefüllt → vermutlich Spam: Erfolg anzeigen, aber nichts senden
    if (values.website) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    try {
      if (demoMode) {
        await new Promise((resolve) => window.setTimeout(resolve, 900));
      } else {
        await sendContactRequest(values);
      }
      setSentInDemoMode(demoMode);
      setValues(initialValues);
      setErrors({});
      setAttempted(false);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  const describedBy = (name: keyof ContactFormValues, extra?: string) =>
    [errors[name] ? `${fieldId(name)}-error` : null, extra].filter(Boolean).join(' ') || undefined;

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="py-10 text-center outline-none sm:py-14">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold-500/40 bg-gold-50">
          <CircleCheck aria-hidden="true" className="h-8 w-8 text-gold-600" strokeWidth={1.5} />
        </span>
        <h3 className="mt-7 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
          Vielen Dank für Ihre Nachricht.
        </h3>
        {sentInDemoMode ? (
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-navy-600">
            Ihre Eingaben waren vollständig. <strong className="font-semibold text-navy-950">Demo-Modus:</strong> Es
            wurden keine Daten übertragen. Hinterlegen Sie in <code className="text-[13px]">site.config.ts</code> einen
            Formular-Endpunkt, um Nachrichten tatsächlich zu empfangen.
          </p>
        ) : (
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-navy-600">
            Ihre Nachricht wurde übermittelt.
          </p>
        )}
        <Button variant="outline" className="mt-9" onClick={() => setStatus('idle')}>
          Neue Nachricht verfassen
        </Button>
      </div>
    );
  }

  const messageLength = values.message.length;

  return (
    <form onSubmit={handleSubmit} noValidate aria-describedby={`${uid}-required-note`}>
      <p id={`${uid}-required-note`} className="mb-8 text-sm text-navy-500">
        Mit <span className="text-gold-700">*</span> gekennzeichnete Felder sind Pflichtfelder.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={fieldId('name')} label="Name" required error={errors.name}>
          <input
            id={fieldId('name')}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            aria-required="true"
            className={cn(inputBase, inputState(Boolean(errors.name)))}
            placeholder="Vor- und Nachname"
          />
        </Field>

        <Field id={fieldId('company')} label="Unternehmen" error={errors.company}>
          <input
            id={fieldId('company')}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange}
            className={cn(inputBase, inputState(false))}
            placeholder="Unternehmen oder Organisation"
          />
        </Field>

        <Field id={fieldId('email')} label="E-Mail" required error={errors.email}>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={describedBy('email')}
            aria-required="true"
            className={cn(inputBase, inputState(Boolean(errors.email)))}
            placeholder="name@unternehmen.de"
          />
        </Field>

        <Field id={fieldId('phone')} label="Telefon" error={errors.phone}>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy('phone')}
            className={cn(inputBase, inputState(Boolean(errors.phone)))}
            placeholder="+49 …"
          />
        </Field>

        <Field id={fieldId('topic')} label="Anliegen" required error={errors.topic} className="sm:col-span-2">
          <div className="relative">
            <select
              id={fieldId('topic')}
              name="topic"
              value={values.topic}
              onChange={handleChange}
              aria-invalid={Boolean(errors.topic)}
              aria-describedby={describedBy('topic')}
              aria-required="true"
              className={cn(
                inputBase,
                inputState(Boolean(errors.topic)),
                'appearance-none pr-12',
                !values.topic && 'text-navy-400',
              )}
            >
              <option value="" disabled>
                Bitte wählen Sie Ihr Anliegen
              </option>
              {contactTopics.map((topic) => (
                <option key={topic.value} value={topic.value} className="text-navy-950">
                  {topic.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-600"
              strokeWidth={2}
            />
          </div>
        </Field>

        <Field
          id={fieldId('message')}
          label="Nachricht"
          required
          error={errors.message}
          className="sm:col-span-2"
          hint={
            <span
              id={`${fieldId('message')}-count`}
              className="font-medium normal-case tracking-normal text-navy-500"
              aria-live="polite"
            >
              {messageLength} / {MESSAGE_MAX_LENGTH}
            </span>
          }
        >
          <textarea
            id={fieldId('message')}
            name="message"
            rows={6}
            maxLength={MESSAGE_MAX_LENGTH}
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy('message', `${fieldId('message')}-count`)}
            aria-required="true"
            className={cn(inputBase, inputState(Boolean(errors.message)), 'min-h-[160px] resize-y leading-relaxed')}
            placeholder="Worum geht es? Beschreiben Sie Ihr Anliegen gern in einigen Sätzen."
          />
        </Field>

        {/* Honeypot gegen Spam-Bots – für Menschen unsichtbar */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor={fieldId('website')}>Website</label>
          <input
            id={fieldId('website')}
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={handleChange}
          />
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-start gap-3.5">
            <input
              id={fieldId('consent')}
              name="consent"
              type="checkbox"
              checked={values.consent}
              onChange={handleChange}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={describedBy('consent')}
              aria-required="true"
              className={cn(
                'mt-1 h-5 w-5 shrink-0 cursor-pointer rounded-[2px] border-navy-950/30 accent-navy-950',
                errors.consent && 'outline outline-1 outline-red-600',
              )}
            />
            <label htmlFor={fieldId('consent')} className="cursor-pointer text-sm leading-relaxed text-navy-600">
              Ich habe die{' '}
              <Link to="/datenschutz" className="font-semibold text-navy-950 underline decoration-gold-500 underline-offset-4 hover:text-gold-700">
                Datenschutzerklärung
              </Link>{' '}
              zur Kenntnis genommen und bin damit einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage
              verarbeitet werden. <span className="text-gold-700">*</span>
            </label>
          </div>
          {errors.consent && (
            <p id={`${fieldId('consent')}-error`} className="mt-2 flex items-start gap-1.5 pl-[34px] text-[13px] text-red-700">
              <CircleAlert aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2} />
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      {status === 'error' && (
        <div role="alert" className="mt-8 flex gap-3 border border-red-600/30 bg-red-50 p-5 text-sm leading-relaxed text-red-800">
          <CircleAlert aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2} />
          <p>
            Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es später erneut
            {siteConfig.contact.email ? (
              <>
                {' '}oder schreiben Sie direkt an{' '}
                <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold underline underline-offset-4">
                  {siteConfig.contact.email}
                </a>
              </>
            ) : null}
            .
          </p>
        </div>
      )}

      <div className="mt-10 flex flex-col gap-5 border-t border-navy-950/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-navy-500">
          {demoMode
            ? 'Demo-Modus: Das Formular ist noch mit keinem Empfangsdienst verbunden. Eingaben werden geprüft, aber nicht übertragen.'
            : 'Ihre Angaben werden verschlüsselt übertragen und zur Bearbeitung Ihrer Anfrage verwendet.'}
        </p>
        <Button type="submit" size="lg" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' ? (
            <>
              <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" strokeWidth={2} />
              Wird gesendet …
            </>
          ) : (
            <>
              Nachricht senden
              <Send aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
