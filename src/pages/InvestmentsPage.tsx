import { Info } from 'lucide-react';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { investmentCriteria, investmentProcess, investmentTypes } from '../content/investments';
import { PortfolioGrid } from '../components/investments/PortfolioGrid';
import { Seo } from '../components/seo/Seo';
import { Container } from '../components/ui/Container';
import { CtaBand } from '../components/ui/CtaBand';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function InvestmentsPage() {
  return (
    <>
      <Seo page={pages.investments} />
      <PageHero
        eyebrow="Beteiligungen"
        breadcrumb="Beteiligungen"
        image="/images/facade-glass.jpg"
        title={
          <>
            Langfristig investiert.
            <br />
            <span className="italic text-gold-300">Unternehmerisch begleitet.</span>
          </>
        }
        lead="Wir beteiligen uns an Unternehmen und Bildungsanbietern, deren Entwicklung wir über viele Jahre aktiv mitgestalten wollen – mit Kapital, Erfahrung und Verlässlichkeit."
      />

      {/* Philosophie & Beteiligungsformen */}
      <Section tone="white" labelledBy="philosophy-title">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Investitionsphilosophie"
              id="philosophy-title"
              title={
                <>
                  Geduldiges Kapital für <span className="italic text-gold-700">gute Unternehmen.</span>
                </>
              }
            />
            <Reveal delay={200}>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-navy-600">
                <p>
                  Als Holding investieren wir eigenes Kapital und sind keinem Fondszyklus verpflichtet. Das erlaubt uns,
                  Unternehmen über lange Zeiträume zu begleiten und Investitionen dann zu tätigen, wenn sie sinnvoll
                  sind – nicht, wenn ein Zeitplan es verlangt.
                </p>
                <p>
                  Wir bevorzugen klare, faire Strukturen, kurze Entscheidungswege und eine vertrauensvolle
                  Zusammenarbeit mit den Menschen, die das Unternehmen führen.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="space-y-5 lg:col-span-7">
            {investmentTypes.map((type, index) => (
              <Reveal
                key={type.title}
                delay={index * 110}
                className="group flex gap-6 border border-navy-950/10 bg-paper p-8 transition-all duration-500 hover:border-gold-500/50 hover:bg-white hover:shadow-[0_30px_60px_-35px_rgba(8,20,42,0.45)] sm:p-10"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy-950 text-gold-300 transition-transform duration-500 group-hover:-rotate-3">
                  <type.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="font-display text-[1.75rem] font-semibold leading-tight text-navy-950">{type.title}</h3>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-navy-600">{type.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Kriterien */}
      <Section tone="ivory" id="kriterien" labelledBy="criteria-title">
        <div aria-hidden="true" className="bg-grid-lines-dark absolute inset-0 -z-10" />
        <SectionHeading
          eyebrow="Investitionskriterien"
          id="criteria-title"
          align="center"
          title={
            <>
              Worauf wir bei einer <span className="italic text-gold-700">Beteiligung</span> achten.
            </>
          }
          lead="Unsere Kriterien geben Orientierung. Entscheidend ist am Ende immer das Gesamtbild – und das gemeinsame Verständnis für die Zukunft des Unternehmens."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {investmentCriteria.map((criterion, index) => (
            <Reveal key={criterion.title} delay={(index % 3) * 100} className="border border-navy-950/10 bg-white p-9">
              <criterion.icon aria-hidden="true" className="h-7 w-7 text-gold-600" strokeWidth={1.3} />
              <h3 className="mt-6 text-[13px] font-bold uppercase tracking-[0.18em] text-navy-950">{criterion.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-navy-600">{criterion.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Prozess */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-28 lg:py-36" aria-labelledby="process-title">
        <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute -right-40 bottom-0 -z-10 h-[460px] w-[460px] rounded-full bg-gold-400/10 blur-3xl" />
        <Container>
          <SectionHeading
            tone="onDark"
            eyebrow="Ablauf"
            id="process-title"
            title={
              <>
                Der Weg zur <span className="italic text-gold-300">Partnerschaft.</span>
              </>
            }
            lead="Transparent, vertraulich und in einem Tempo, das zu Ihnen passt: So verläuft eine Beteiligung typischerweise."
          />
          <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6 lg:mt-20">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-gold-400/70 via-gold-400/30 to-transparent md:block" />
            {investmentProcess.map((step, index) => (
              <Reveal as="li" key={step.number} delay={index * 110} className="relative flex gap-6 md:block">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-400/60 bg-navy-950 font-display text-xl font-semibold text-gold-300">
                  {step.number}
                </span>
                <div className="md:mt-7">
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/60">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Beispielportfolio */}
      <Section tone="paper" id="portfolio" labelledBy="portfolio-title">
        <SectionHeading
          eyebrow="Beispielportfolio"
          id="portfolio-title"
          title={
            <>
              Mögliche <span className="italic text-gold-700">Beteiligungsprofile.</span>
            </>
          }
          lead="Die folgenden Profile veranschaulichen, welche Art von Unternehmen zu unserer Strategie passen würde."
        />
        <Reveal delay={200}>
          <div role="note" className="mt-10 flex max-w-3xl gap-4 border border-gold-400/50 bg-gold-50 p-6 text-sm leading-relaxed text-gold-900">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={1.75} />
            <p>
              <strong className="font-semibold">Hinweis:</strong> Alle Einträge sind frei erfundene Beispiele mit
              Projektnamen als Platzhalter. Es handelt sich nicht um tatsächliche Beteiligungen der{' '}
              {siteConfig.brand.fullName}, um real existierende Unternehmen oder um Ergebnisse jeglicher Art.
            </p>
          </div>
        </Reveal>
        <div className="mt-12">
          <PortfolioGrid />
        </div>
      </Section>

      <CtaBand
        eyebrow="Für Unternehmerinnen und Unternehmer"
        title={
          <>
            Sie denken über die <span className="italic text-gold-300">Zukunft</span> Ihres Unternehmens nach?
          </>
        }
        text="Ob Nachfolge, Wachstum oder neue Gesellschafterstruktur: Ein erstes Gespräch ist vertraulich und unverbindlich. Auf Wunsch unterzeichnen wir vorab eine Vertraulichkeitsvereinbarung."
        primary={{ label: 'Vertrauliches Gespräch', to: '/kontakt' }}
        secondary={{ label: 'Über uns', to: '/ueber-uns' }}
      />
    </>
  );
}
