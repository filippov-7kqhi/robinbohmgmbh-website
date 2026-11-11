import { Check } from 'lucide-react';
import { pages } from '../config/pages';
import { businessAreas } from '../content/businessAreas';
import { Seo } from '../components/seo/Seo';
import { Container } from '../components/ui/Container';
import { CtaBand } from '../components/ui/CtaBand';
import { ImageFrame } from '../components/ui/ImageFrame';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { cn } from '../lib/cn';

export default function BusinessAreasPage() {
  return (
    <>
      <Seo page={pages.business} />
      <PageHero
        eyebrow="Geschäftsbereiche"
        breadcrumb="Geschäftsbereiche"
        image="/images/strategy-desk.jpg"
        title={
          <>
            Fünf Bereiche.
            <br />
            <span className="italic text-gold-300">Eine gemeinsame Strategie.</span>
          </>
        }
        lead="Von der Verwaltung des Gesellschaftsvermögens bis zur digitalen Bildung: Unsere Geschäftsbereiche ergänzen sich gegenseitig und folgen einem gemeinsamen Ziel – nachhaltigen Wert zu schaffen."
      />

      {/* Sprungnavigation */}
      <div className="border-b border-navy-950/10 bg-white">
        <Container>
          <nav aria-label="Geschäftsbereiche auf dieser Seite" className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
            <ul className="flex min-w-max gap-2 py-5">
              {businessAreas.map((area) => (
                <li key={area.id}>
                  <a
                    href={`#${area.id}`}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-navy-950/10 px-4 py-2.5 text-[13px] font-semibold text-navy-700 transition-all duration-300 hover:border-gold-500 hover:bg-gold-50 hover:text-navy-950"
                  >
                    <span className="font-display text-base text-gold-600">{area.number}</span>
                    {area.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      {businessAreas.map((area, index) => {
        const reversed = index % 2 === 1;
        return (
          <section
            key={area.id}
            id={area.id}
            aria-labelledby={`${area.id}-title`}
            className={cn('relative isolate overflow-hidden py-24 sm:py-28 lg:py-32', reversed ? 'bg-ivory' : 'bg-white')}
          >
            <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-28">
              <Reveal className={cn(reversed && 'lg:order-last')}>
                <ImageFrame src={area.image} alt={area.imageAlt} aspect="aspect-[4/3] lg:aspect-[5/6]" frame={reversed ? 'right' : 'left'} />
              </Reveal>

              <div>
                <Reveal className="flex items-center gap-5">
                  <span className="font-display text-6xl font-semibold leading-none text-gold-500">{area.number}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold-500/60 to-transparent" aria-hidden="true" />
                  <span className="flex h-14 w-14 items-center justify-center border border-gold-500/40 text-gold-600">
                    <area.icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.4} />
                  </span>
                </Reveal>
                <Reveal delay={80}>
                  <h2
                    id={`${area.id}-title`}
                    className="mt-8 font-display text-[2.4rem] font-semibold leading-[1.08] text-navy-950 sm:text-5xl"
                  >
                    {area.title}
                  </h2>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700">{area.subtitle}</p>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-8 space-y-5 text-[16.5px] leading-[1.8] text-navy-600">
                    {area.description.map((paragraph) => (
                      <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={220}>
                  <h3 className="mt-10 text-[11px] font-bold uppercase tracking-[0.22em] text-navy-950">
                    Leistungsschwerpunkte
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {area.services.map((service) => (
                      <li key={service} className="flex items-start gap-3 text-[15.5px] text-navy-800">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gold-100">
                          <Check aria-hidden="true" className="h-2.5 w-2.5 text-gold-700" strokeWidth={3.5} />
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={280}>
                  <blockquote className="mt-10 border-l-2 border-gold-500 pl-6 font-display text-[1.45rem] font-medium italic leading-snug text-navy-900">
                    {area.principle}
                  </blockquote>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      <CtaBand
        eyebrow="Austausch"
        title={
          <>
            Passt Ihr Vorhaben zu einem unserer <span className="italic text-gold-300">Bereiche?</span>
          </>
        }
        text="Sprechen Sie uns an – wir prüfen gerne gemeinsam mit Ihnen, ob und wie eine Zusammenarbeit sinnvoll ist."
        primary={{ label: 'Kontakt aufnehmen', to: '/kontakt' }}
        secondary={{ label: 'Beteiligungen', to: '/beteiligungen' }}
      />
    </>
  );
}
