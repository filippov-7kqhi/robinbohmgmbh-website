import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { businessAreas } from '../content/businessAreas';
import { Seo } from '../components/seo/Seo';
import { ArrowLink } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { CtaBand } from '../components/ui/CtaBand';
import { ImageFrame } from '../components/ui/ImageFrame';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { cn } from '../lib/cn';

export default function BusinessAreasPage() {
  const company = siteConfig.brand.legalName;

  return (
    <>
      <Seo page={pages.business} />
      <PageHero
        eyebrow="Geschäftsbereiche"
        breadcrumb="Geschäftsbereiche"
        image="/images/office-corridor.jpg"
        title={
          <>
            Geschäftsbereiche.
            <br />
            <span className="italic text-gold-300">Vermögen, Beteiligungen, Bildung.</span>
          </>
        }
        lead={`Unternehmensgegenstand der ${company} ist die Verwaltung von Gesellschaftsvermögen und Unternehmensbeteiligungen, vorrangig im Bildungsbereich.`}
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
                <ImageFrame
                  src={area.image}
                  alt={area.imageAlt}
                  aspect="aspect-[4/3] lg:aspect-[5/6]"
                  frame={reversed ? 'right' : 'left'}
                />
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
                  <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-navy-600">
                    {area.description.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={240}>
                  <ArrowLink to="/kontakt" className="mt-10">
                    Kontakt aufnehmen
                  </ArrowLink>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      <CtaBand
        title={
          <>
            Kontakt zur <span className="italic text-gold-300">{company}.</span>
          </>
        }
        text="Anschrift und Kontaktmöglichkeiten finden Sie auf unserer Kontaktseite."
        primary={{ label: 'Zur Kontaktseite', to: '/kontakt' }}
        secondary={{ label: 'Beteiligungen', to: '/beteiligungen' }}
      />
    </>
  );
}
