import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { companyFacts, initials } from '../content/company';
import { Seo } from '../components/seo/Seo';
import { CtaBand } from '../components/ui/CtaBand';
import { ImageFrame } from '../components/ui/ImageFrame';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function AboutPage() {
  const { brand, address, legal } = siteConfig;

  return (
    <>
      <Seo page={pages.about} />
      <PageHero
        eyebrow="Über uns"
        breadcrumb="Über uns"
        image="/images/bright-office.jpg"
        title={
          <>
            Das Unternehmen.
            <br />
            <span className="italic text-gold-300">{brand.legalName}</span>
          </>
        }
        lead={`Gesellschaft mit beschränkter Haftung mit Sitz in ${address.city} – tätig in der Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen, vorrangig im Bildungsbereich.`}
      />

      {/* Profil */}
      <Section tone="white" labelledBy="profile-title">
        <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Profil"
              id="profile-title"
              title={
                <>
                  Wer wir <span className="italic text-gold-700">sind.</span>
                </>
              }
            />
            <Reveal delay={200}>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-navy-600">
                <p>
                  Die {brand.legalName} ist eine Gesellschaft mit beschränkter Haftung mit Sitz in {address.city}.
                  Gegenstand des Unternehmens ist die Verwaltung von Gesellschaftsvermögen und
                  Unternehmensbeteiligungen, vorrangig im Bildungsbereich.
                </p>
                <p>
                  Die Gesellschaft ist im Handelsregister beim {legal.registerCourt} unter {legal.registerNumber}{' '}
                  eingetragen und wird durch die Geschäftsführung vertreten.
                </p>
                <p>Auf dieser Website informieren wir über das Unternehmen und seine Tätigkeitsbereiche.</p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <ImageFrame
              src="/images/facade-glass.jpg"
              alt="Gläserne Bürogebäude vor bewölktem Himmel, Blick nach oben"
              aspect="aspect-[4/5]"
              frame="right"
            />
          </Reveal>
        </div>
      </Section>

      {/* Eckdaten */}
      <Section tone="ivory" labelledBy="facts-title">
        <div aria-hidden="true" className="bg-grid-lines-dark absolute inset-0 -z-10" />
        <SectionHeading
          eyebrow="Eckdaten"
          id="facts-title"
          align="center"
          title={
            <>
              Unternehmensdaten im <span className="italic text-gold-700">Überblick.</span>
            </>
          }
        />
        <Reveal delay={150}>
          <dl className="relative mx-auto mt-16 max-w-4xl divide-y divide-navy-950/10 border border-navy-950/10 bg-white px-6 shadow-[0_40px_80px_-50px_rgba(8,20,42,0.45)] sm:px-10">
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-400 via-gold-300 to-transparent" />
            {companyFacts.map((fact) => (
              <div key={fact.label} className="grid gap-1 py-5 sm:grid-cols-[220px_1fr] sm:gap-8 sm:py-6">
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700 sm:pt-1">{fact.label}</dt>
                <dd className="text-[16px] leading-relaxed text-navy-950">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      {/* Geschäftsführung */}
      <section
        className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-28 lg:py-36"
        aria-labelledby="management-title"
      >
        <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute -right-40 top-10 -z-10 h-[460px] w-[460px] rounded-full bg-gold-400/10 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <SectionHeading
            tone="onDark"
            eyebrow="Geschäftsführung"
            id="management-title"
            title={
              <>
                Vertretung der <span className="italic text-gold-300">Gesellschaft.</span>
              </>
            }
            lead="Die Gesellschaft wird durch die Geschäftsführung vertreten."
          />
          <div className="grid gap-6">
            {legal.managingDirectors.map((name, index) => (
              <Reveal
                key={name}
                delay={index * 110}
                className="flex items-center gap-7 border border-white/10 bg-white/[0.03] p-8 sm:p-10"
              >
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold-400/50 font-display text-2xl font-semibold tracking-wide text-gold-300">
                  {initials(name)}
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-300">Geschäftsführung</p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white">{name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Kontakt zur <span className="italic text-gold-300">{brand.legalName}.</span>
          </>
        }
        text="Anschrift und Kontaktmöglichkeiten finden Sie auf unserer Kontaktseite."
        primary={{ label: 'Zur Kontaktseite', to: '/kontakt' }}
        secondary={{ label: 'Geschäftsbereiche', to: '/geschaeftsbereiche' }}
      />
    </>
  );
}
