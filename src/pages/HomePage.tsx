import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, MapPin } from 'lucide-react';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { asset } from '../lib/paths';
import { businessAreas } from '../content/businessAreas';
import { heroFacts } from '../content/company';
import { Seo } from '../components/seo/Seo';
import { ArrowLink, Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { CtaBand } from '../components/ui/CtaBand';
import { ImageFrame } from '../components/ui/ImageFrame';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';

const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;
const { brand, address, legal } = siteConfig;

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
            {brand.legalName} · {address.city}
          </p>
          <h1 className="mt-7 font-display text-[2.9rem] font-semibold leading-[1] tracking-[-0.02em] sm:text-7xl lg:text-[6rem]">
            <span className="block animate-fade-up" style={delay(280)}>
              Vermögen und Beteiligungen.
            </span>
            <span className="block animate-fade-up italic text-gold-300" style={delay(420)}>
              Mit Schwerpunkt Bildung.
            </span>
          </h1>
          <p
            className="mt-8 max-w-2xl animate-fade-up text-[17px] leading-relaxed text-white/75 sm:text-xl sm:leading-relaxed"
            style={delay(580)}
          >
            Die {brand.legalName} mit Sitz in {address.city} verwaltet Gesellschaftsvermögen und
            Unternehmensbeteiligungen – vorrangig im Bildungsbereich.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap gap-4" style={delay(720)}>
            <Button to="/geschaeftsbereiche" size="lg" withArrow>
              Geschäftsbereiche
            </Button>
            <Button to="/kontakt" size="lg" variant="secondary">
              Kontakt
            </Button>
          </div>
        </div>

        <ul
          className="mt-16 grid animate-fade-in grid-cols-1 border-t border-white/15 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
          style={delay(900)}
          aria-label="Eckdaten"
        >
          {heroFacts.map((item) => (
            <li
              key={item.title}
              className="flex gap-4 border-b border-white/10 py-6 sm:border-b-0 sm:py-7 lg:border-l lg:px-7 lg:first:border-l-0 lg:first:pl-0"
            >
              <item.icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" strokeWidth={1.5} />
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-white">{item.title}</p>
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
  const focus = [
    'Verwaltung von Gesellschaftsvermögen',
    'Verwaltung von Unternehmensbeteiligungen',
    'Schwerpunkt im Bildungsbereich',
    `Sitz in ${address.city}`,
  ];

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
          <div className="absolute -bottom-10 right-4 max-w-[290px] bg-navy-950 p-7 text-white shadow-[0_30px_60px_-20px_rgba(8,20,42,0.6)] sm:right-[-2rem]">
            <MapPin aria-hidden="true" className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/55">Sitz der Gesellschaft</p>
            <p className="mt-2 whitespace-nowrap font-display text-[1.35rem] font-medium leading-snug">
              {address.street}
              <br />
              {address.postalCode} {address.city}
            </p>
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Das Unternehmen"
            id="intro-title"
            title={
              <>
                {brand.legalName} <span className="italic text-gold-700">im Überblick.</span>
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
                eingetragen. Geschäftsführung: {legal.managingDirectors.join(', ')}.
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
              Mehr über das Unternehmen
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
              Vermögen, Beteiligungen, <span className="italic text-gold-700">Bildung.</span>
            </>
          }
          lead="Der Unternehmensgegenstand umfasst die Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen – mit Schwerpunkt im Bildungsbereich."
        />
        <Reveal delay={200} className="shrink-0">
          <Button to="/geschaeftsbereiche" variant="outline" withArrow>
            Zu den Geschäftsbereichen
          </Button>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-5 md:grid-cols-3">
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
            eyebrow="Schwerpunkt"
            id="education-title"
            title={
              <>
                Ausrichtung auf den <span className="italic text-gold-300">Bildungsbereich.</span>
              </>
            }
            lead={`Die Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen erfolgt bei der ${brand.legalName} vorrangig im Bildungsbereich.`}
          />
          <Reveal delay={200} className="mt-12 flex flex-wrap gap-4">
            <Button to="/beteiligungen" withArrow>
              Beteiligungen
            </Button>
            <Button to="/geschaeftsbereiche#bildungsbereich" variant="secondary">
              Schwerpunkt Bildung
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
              Schwerpunkt Bildungsbereich
            </p>
          </div>
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
      <CtaBand
        title={
          <>
            Kontakt zur <span className="italic text-gold-300">{brand.legalName}.</span>
          </>
        }
        text="Anschrift und Kontaktmöglichkeiten finden Sie auf unserer Kontaktseite."
        primary={{ label: 'Zur Kontaktseite', to: '/kontakt' }}
        secondary={{ label: 'Über das Unternehmen', to: '/ueber-uns' }}
      />
    </>
  );
}
