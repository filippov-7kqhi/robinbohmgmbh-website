import type { ReactNode } from 'react';
import { Clock, Lock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { ContactForm } from '../components/contact/ContactForm';
import { Seo } from '../components/seo/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';

function ContactRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-5 py-6">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-500/40 text-gold-600">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy-500">{label}</p>
        <div className="mt-1.5 text-[15.5px] leading-relaxed text-navy-950">{children}</div>
      </div>
    </li>
  );
}

export default function ContactPage() {
  const { brand, contact, address } = siteConfig;

  return (
    <>
      <Seo page={pages.contact} />
      <PageHero
        eyebrow="Kontakt"
        breadcrumb="Kontakt"
        image="/images/bright-office.jpg"
        title={
          <>
            Sprechen Sie <span className="italic text-gold-300">mit uns.</span>
          </>
        }
        lead="Ob Beteiligungsanfrage, Kooperationsidee oder allgemeine Frage – wir nehmen uns Zeit für Ihr Anliegen und melden uns persönlich bei Ihnen."
      />

      <Section tone="paper" labelledBy="contact-title">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Ansprechpartner"
              id="contact-title"
              title={
                <>
                  Wir freuen uns auf <span className="italic text-gold-700">Ihre Nachricht.</span>
                </>
              }
            />
            <Reveal delay={200}>
              <ul className="mt-10 divide-y divide-navy-950/10 border-y border-navy-950/10">
                <ContactRow icon={MapPin} label="Anschrift">
                  <address className="not-italic">
                    {brand.legalName}
                    <br />
                    {address.street}
                    <br />
                    {address.postalCode} {address.city}
                    <br />
                    {address.country}
                  </address>
                </ContactRow>
                <ContactRow icon={Mail} label="E-Mail">
                  <a href={`mailto:${contact.email}`} className="font-semibold underline decoration-gold-500/60 underline-offset-4 transition-colors hover:text-gold-700">
                    {contact.email}
                  </a>
                </ContactRow>
                <ContactRow icon={Phone} label="Telefon">
                  <a href={`tel:${contact.phoneHref}`} className="font-semibold transition-colors hover:text-gold-700">
                    {contact.phone}
                  </a>
                </ContactRow>
                <ContactRow icon={Clock} label="Erreichbarkeit">
                  {contact.officeHours}
                </ContactRow>
              </ul>
            </Reveal>

            <Reveal delay={260}>
              <div className="relative mt-10 overflow-hidden bg-navy-950 p-8 text-white sm:p-10">
                <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/15 blur-3xl" />
                <Lock aria-hidden="true" className="relative h-6 w-6 text-gold-300" strokeWidth={1.5} />
                <p className="relative mt-5 font-display text-2xl font-semibold">Vertraulichkeit ist selbstverständlich.</p>
                <p className="relative mt-3 text-[15px] leading-relaxed text-white/65">
                  Anfragen zu möglichen Beteiligungen oder zur Unternehmensnachfolge behandeln wir streng vertraulich.
                  Auf Wunsch unterzeichnen wir vor dem Austausch sensibler Informationen eine
                  Vertraulichkeitsvereinbarung.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7">
            <div className="relative border border-navy-950/10 bg-white p-6 shadow-[0_40px_80px_-50px_rgba(8,20,42,0.5)] sm:p-10 lg:p-12">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent" />
              <h2 className="font-display text-[2rem] font-semibold text-navy-950 sm:text-4xl">Kontaktformular</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">
                Schildern Sie uns Ihr Anliegen – wir melden uns in der Regel innerhalb von zwei Werktagen.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
