import type { ReactNode } from 'react';
import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { isContactFormEnabled } from '../lib/contact';
import { ContactForm } from '../components/contact/ContactForm';
import { Seo } from '../components/seo/Seo';
import { MissingValue } from '../components/ui/Badges';
import { Button } from '../components/ui/Button';
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
  const { brand, contact, address, preview } = siteConfig;
  const formEnabled = isContactFormEnabled();

  return (
    <>
      <Seo page={pages.contact} />
      <PageHero
        eyebrow="Kontakt"
        breadcrumb="Kontakt"
        image="/images/facade-glass.jpg"
        title={
          <>
            Kontakt.
            <br />
            <span className="italic text-gold-300">{brand.legalName}</span>
          </>
        }
        lead={`Sie erreichen die ${brand.legalName} unter den folgenden Kontaktdaten.`}
      />

      <Section tone="paper" labelledBy="contact-title">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Kontaktdaten"
              id="contact-title"
              title={
                <>
                  So erreichen Sie <span className="italic text-gold-700">uns.</span>
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
                {(contact.email || preview.enabled) && (
                  <ContactRow icon={Mail} label="E-Mail">
                    {contact.email ? (
                      <a
                        href={`mailto:${contact.email}`}
                        className="font-semibold underline decoration-gold-500/60 underline-offset-4 transition-colors hover:text-gold-700"
                      >
                        {contact.email}
                      </a>
                    ) : (
                      <MissingValue label="E-Mail-Adresse" />
                    )}
                  </ContactRow>
                )}
                {(contact.phone || preview.enabled) && (
                  <ContactRow icon={Phone} label="Telefon">
                    {contact.phone ? (
                      <a href={`tel:${contact.phoneHref}`} className="font-semibold transition-colors hover:text-gold-700">
                        {contact.phone}
                      </a>
                    ) : (
                      <MissingValue label="Telefonnummer" />
                    )}
                  </ContactRow>
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-7">
            {formEnabled ? (
              <div className="relative border border-navy-950/10 bg-white p-6 shadow-[0_40px_80px_-50px_rgba(8,20,42,0.5)] sm:p-10 lg:p-12">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent" />
                <h2 className="font-display text-[2rem] font-semibold text-navy-950 sm:text-4xl">Kontaktformular</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-600">Schildern Sie uns Ihr Anliegen.</p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            ) : (
              contact.email && (
                <div className="relative overflow-hidden bg-navy-950 p-8 text-white sm:p-12">
                  <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/15 blur-3xl" />
                  <Mail aria-hidden="true" className="relative h-7 w-7 text-gold-300" strokeWidth={1.5} />
                  <h2 className="relative mt-6 font-display text-[2rem] font-semibold sm:text-4xl">Schreiben Sie uns.</h2>
                  <p className="relative mt-3 max-w-md text-[15px] leading-relaxed text-white/65">
                    Ihre Nachricht erreicht die Gesellschaft unter {contact.email}.
                  </p>
                  <Button href={`mailto:${contact.email}`} className="relative mt-8" withArrow>
                    E-Mail schreiben
                  </Button>
                </div>
              )
            )}
          </Reveal>
        </div>
      </Section>
    </>
  );
}
