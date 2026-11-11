import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Quote } from 'lucide-react';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { asset } from '../lib/paths';
import { businessAreas } from '../content/businessAreas';
import { approachSteps, educationFocus, hallmarks } from '../content/company';
import { Seo } from '../components/seo/Seo';
import { ArrowLink, Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { CtaBand } from '../components/ui/CtaBand';
import { ImageFrame } from '../components/ui/ImageFrame';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';

const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-950 text-white">
      <img
        src={asset('/images/hero-architecture.jpg')}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1280}
        decoding="async"
        className="absolute inset-0 -z-30 h-full w-full animate-hero-zoom object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-navy-900/40 mix-blend-multiply" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,#08142A_0%,rgba(8,20,42,0.92)_38%,rgba(8,20,42,0.55)_70%,rgba(8,20,42,0.25)_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
      <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />

      <Container className="relative pb-14 pt-44 sm:pb-20 lg:pb-16 lg:pt-52">
        <div className="max-w-4xl">
          <p className="eyebrow animate-fade-up text-gold-300" style={delay(150)}>
            <span aria-hidden="true" className="h-px w-8 bg-gold-400" />
            Holding · Beteiligungen · Bildung
          </p>
          <h1 className="mt-7 font-display text-[2.9rem] font-semibold leading-[1] tracking-[-0.02em] sm:text-7xl lg:text-[6.2rem]">
            <span className="block animate-fade-up" style={delay(280)}>
              Kapital mit Verantwortung.
            </span>
            <span className="block animate-fade-up italic text-gold-300" style={delay(420)}>
              Bildung mit Perspektive.
            </span>
          </h1>
          <p
            className="mt-8 max-w-2xl animate-fade-up text-[17px] leading-relaxed text-white/75 sm:text-xl sm:leading-relaxed"
            style={delay(580)}
          >
            Die {siteConfig.brand.fullName} verwaltet Gesellschaftsvermögen, hält langfristige
            Unternehmensbeteiligungen und investiert gezielt in Bildung und digitale Lernangebote – mit
            unternehmerischem Anspruch und einem Horizont, der weit über Quartale hinausreicht.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4" style={delay(720)}>
            <Button to="/geschaeftsbereiche" size="lg" withArrow>
              Geschäftsbereiche entdecken
            </Button>
            <Button to="/kontakt" size="lg" variant="secondary">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>

        <ul className="mt-16 grid animate-fade-in grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4" style={delay(900)}>
          {hallmarks.map((item, index) => (
            <li
              key={item.title}
              className="flex gap-4 border-b border-white/10 py-6 sm:border-b-0 sm:py-7 lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0"
            >
              <item.icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.5} />
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">
                  <span className="sr-only">{index + 1}. </span>
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-snug text-white/60">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>

      <div aria-hidden="true" className="absolute bottom-10 right-8 hidden flex-col items-center gap-4 xl:flex">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 [writing-mode:vertical-rl]">
          Scrollen
        </span>
        <span className="relative h-16 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-cue bg-gold-400" />
        </span>
      </div>
    </section>
  );
}

function IntroSection() {
  const focus = ['Langfristige Unternehmensbeteiligungen', 'Verantwortungsvolle Vermögensverwaltung', 'Investitionen in Bildung', 'Digitale Lerninnovation'];

  return (
    <Section tone="white" labelledBy="intro-title">
      <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-16 xl:gap-24">
        <Reveal className="relative lg:col-span-5">
          <ImageFrame
            src="/images/facade-white.jpg"
            alt="Moderne, helle Gebäudefassade mit klarer Geometrie vor blauem Himmel"
            aspect="aspect-[4/5]"
            frame="left"
          />
          <div className="absolute -bottom-10 right-4 max-w-[250px] bg-navy-950 p-7 text-white shadow-[0_30px_60px_-20px_rgba(8,20,42,0.6)] sm:right-[-2rem]">
            <Quote aria-hidden="true" className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
            <p className="mt-3 font-display text-[1.7rem] font-medium italic leading-tight">Substanz vor Tempo.</p>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">Unser Leitgedanke</p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Die Holding"
            id="intro-title"
            title={
              <>
                Eine Holding mit <span className="italic text-gold-700">klarer Haltung.</span>
              </>
            }
          />
          <Reveal delay={200}>
            <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-navy-600">
              <p>
                Wir verstehen uns als unternehmerisch geprägte Holding, die Kapital, Erfahrung und Verantwortung
                zusammenführt. Unter einem gemeinsamen Dach bündeln wir die Verwaltung unseres
                Gesellschaftsvermögens, langfristige Beteiligungen und gezielte Investitionen in Bildung.
              </p>
              <p>
                Unser Anspruch: Werte schaffen, die Bestand haben – für Unternehmen, für die Menschen, die in ihnen
                arbeiten, und für eine Gesellschaft, die auf gute Bildung angewiesen ist.
              </p>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {focus.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] font-semibold text-navy-900">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-100">
                    <Check aria-hidden="true" className="h-3 w-3 text-gold-700" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={340}>
            <ArrowLink to="/ueber-uns" className="mt-12">
              Mehr über uns erfahren
            </ArrowLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function AreasSection() {
  return (
    <Section tone="ivory" labelledBy="areas-title">
      <div aria-hidden="true" className="bg-grid-lines-dark absolute inset-0 -z-10" />
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Geschäftsbereiche"
          id="areas-title"
          title={
            <>
              Fünf Bereiche. <span className="italic text-gold-700">Eine Strategie.</span>
            </>
          }
          lead="Unsere Geschäftsbereiche greifen ineinander: Die Vermögensverwaltung schafft Stabilität, Beteiligungen und Unternehmensentwicklung schaffen Wert, Bildungsinvestitionen geben unserer Arbeit ihre Richtung."
        />
        <Reveal delay={200} className="shrink-0">
          <Button to="/geschaeftsbereiche" variant="outline" withArrow>
            Alle Bereiche im Detail
          </Button>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {businessAreas.map((area, index) => (
          <Reveal key={area.id} delay={index * 90} className="h-full">
            <Link
              to={`/geschaeftsbereiche#${area.id}`}
              className="group relative flex h-full flex-col overflow-hidden border border-navy-950/10 bg-white p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-navy-950 hover:bg-navy-950 hover:shadow-[0_40px_70px_-35px_rgba(8,20,42,0.7)] sm:p-10"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-400 transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
              />
              <div className="flex items-start justify-between">
                <span className="flex h-14 w-14 items-center justify-center border border-gold-500/40 text-gold-600 transition-colors duration-500 group-hover:border-gold-400/50 group-hover:text-gold-300">
                  <area.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <span className="font-display text-5xl font-semibold text-navy-950/10 transition-colors duration-500 group-hover:text-white/15">
                  {area.number}
                </span>
              </div>
              <h3 className="mt-10 font-display text-[1.75rem] font-semibold leading-tight text-navy-950 transition-colors duration-500 group-hover:text-white">
                {area.title}
              </h3>
              <p className="mt-2 text-[10.5px] font-bold uppercase tracking-[0.2em] text-gold-700 transition-colors duration-500 group-hover:text-gold-300">
                {area.subtitle}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-navy-600 transition-colors duration-500 group-hover:text-white/70">
                {area.summary}
              </p>
              <span className="mt-auto inline-flex items-center gap-2 pt-9 text-[11px] font-bold uppercase tracking-[0.18em] text-navy-950 transition-colors duration-500 group-hover:text-gold-300">
                Mehr erfahren
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.75} />
              </span>
            </Link>
          </Reveal>
        ))}

        <Reveal delay={businessAreas.length * 90} className="h-full">
          <div className="relative flex h-full flex-col justify-between overflow-hidden bg-navy-950 p-8 text-white sm:p-10">
            <div aria-hidden="true" className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold-400/15 blur-3xl" />
            <div className="relative">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-300">Ihr Vorhaben</p>
              <p className="mt-6 font-display text-[2rem] font-semibold leading-tight">
                Sie suchen einen langfristigen Partner?
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                Sprechen Sie mit uns über Nachfolge, Wachstum oder Ihre Bildungsinitiative.
              </p>
            </div>
            <Button to="/kontakt" className="relative mt-10 self-start" withArrow>
              Gespräch vereinbaren
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-28 lg:py-36" aria-labelledby="education-title">
      <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -left-40 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-gold-400/10 blur-3xl" />

      <Container className="grid items-center gap-20 lg:grid-cols-2 lg:gap-20 xl:gap-28">
        <div>
          <SectionHeading
            tone="onDark"
            eyebrow="Schwerpunkt Bildung"
            id="education-title"
            title={
              <>
                Bildung ist die nachhaltigste Investition in die <span className="italic text-gold-300">Zukunft.</span>
              </>
            }
            lead="Gut ausgebildete Menschen sind die Grundlage jeder erfolgreichen Volkswirtschaft. Deshalb investieren wir gezielt in Organisationen, die Lernen zugänglicher, wirksamer und praxisnäher machen – analog wie digital."
          />
          <ul className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {educationFocus.map((item, index) => (
              <Reveal as="li" key={item.title} delay={index * 90} className="bg-navy-950 p-6">
                <item.icon aria-hidden="true" className="h-6 w-6 text-gold-400" strokeWidth={1.4} />
                <p className="mt-4 font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{item.text}</p>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200} className="mt-12 flex flex-wrap gap-4">
            <Button to="/beteiligungen" withArrow>
              Zu den Beteiligungen
            </Button>
            <Button to="/geschaeftsbereiche#bildungsinvestitionen" variant="secondary">
              Bildungsinvestitionen
            </Button>
          </Reveal>
        </div>

        <Reveal className="relative order-first lg:order-last">
          <ImageFrame
            src="/images/library.jpg"
            alt="Lange Bücherregale in einer Bibliothek, beleuchtet von warmen Glühlampen"
            aspect="aspect-[4/5]"
            frame="right"
          />
          <div className="absolute -left-2 bottom-8 hidden max-w-[220px] border border-white/10 bg-navy-950/90 p-6 backdrop-blur sm:block lg:-left-10">
            <p className="font-display text-4xl font-semibold text-gold-300">03</p>
            <p className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-[0.18em] text-white/75">
              Geschäftsbereich Bildungsinvestitionen
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function ApproachSection() {
  return (
    <Section tone="white" labelledBy="approach-title">
      <SectionHeading
        eyebrow="Unser Ansatz"
        id="approach-title"
        title={
          <>
            Vom ersten Gespräch zur <span className="italic text-gold-700">gemeinsamen Entwicklung.</span>
          </>
        }
        lead="Wir investieren mit Sorgfalt und begleiten mit Überzeugung. Unsere Arbeitsweise folgt vier klaren Schritten."
      />
      <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-10">
        {approachSteps.map((step, index) => (
          <Reveal as="li" key={step.number} delay={index * 120} className="relative border-t border-navy-950/15 pt-8">
            <span aria-hidden="true" className="absolute -top-px left-0 h-px w-16 bg-gold-500" />
            <span className="font-display text-6xl font-semibold leading-none text-gold-500">{step.number}</span>
            <h3 className="mt-5 text-lg font-bold text-navy-950">{step.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{step.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function StatementSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ivory py-24 sm:py-32" aria-label="Leitgedanke">
      <div aria-hidden="true" className="bg-grid-lines-dark absolute inset-0 -z-10" />
      <Container size="narrow" className="text-center">
        <Reveal>
          <Quote aria-hidden="true" className="mx-auto h-10 w-10 text-gold-500" strokeWidth={1.25} />
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="mt-8 font-display text-[2rem] font-medium italic leading-[1.25] text-navy-950 sm:text-[2.75rem] lg:text-5xl">
            „Wir investieren nicht in Quartalszahlen, sondern in Menschen, Ideen und Strukturen, die Bestand haben.“
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-700">
            Leitgedanke der {siteConfig.brand.fullName}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Seo page={pages.home} />
      <HomeHero />
      <IntroSection />
      <AreasSection />
      <EducationSection />
      <ApproachSection />
      <StatementSection />
      <CtaBand
        title={
          <>
            Lassen Sie uns über Ihr <span className="italic text-gold-300">Vorhaben</span> sprechen.
          </>
        }
        text="Ob Unternehmensnachfolge, Wachstumsfinanzierung oder Bildungsinitiative – wir freuen uns auf ein vertrauliches, unverbindliches Gespräch."
        primary={{ label: 'Kontakt aufnehmen', to: '/kontakt' }}
        secondary={{ label: 'Investitionskriterien', to: '/beteiligungen#kriterien' }}
      />
    </>
  );
}
