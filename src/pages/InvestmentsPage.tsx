import { Building2, GraduationCap, MapPin } from 'lucide-react';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { Seo } from '../components/seo/Seo';
import { Button } from '../components/ui/Button';
import { CtaBand } from '../components/ui/CtaBand';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function InvestmentsPage() {
  const { brand, address } = siteConfig;

  const facts = [
    { icon: Building2, label: 'Tätigkeit', value: 'Verwaltung von Unternehmensbeteiligungen' },
    { icon: GraduationCap, label: 'Schwerpunkt', value: 'Bildungsbereich' },
    { icon: MapPin, label: 'Sitz der Gesellschaft', value: address.city },
  ];

  return (
    <>
      <Seo page={pages.investments} />
      <PageHero
        eyebrow="Beteiligungen"
        breadcrumb="Beteiligungen"
        image="/images/library.jpg"
        title={
          <>
            Unternehmensbeteiligungen.
            <br />
            <span className="italic text-gold-300">Schwerpunkt Bildung.</span>
          </>
        }
        lead={`Die ${brand.legalName} verwaltet Beteiligungen an anderen Unternehmen – vorrangig im Bildungsbereich.`}
      />

      <Section tone="white" labelledBy="holdings-title">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Beteiligungen"
              id="holdings-title"
              title={
                <>
                  Verwaltung von <span className="italic text-gold-700">Unternehmensbeteiligungen.</span>
                </>
              }
            />
            <Reveal delay={200}>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-navy-600">
                <p>
                  Zum Unternehmensgegenstand der {brand.legalName} gehört die Verwaltung von
                  Unternehmensbeteiligungen – also von Anteilen an anderen Gesellschaften. Der Schwerpunkt liegt
                  vorrangig im Bildungsbereich.
                </p>
                <p>Für Anfragen zu Beteiligungen nutzen Sie bitte die Kontaktmöglichkeiten auf unserer Kontaktseite.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative overflow-hidden bg-navy-950 p-8 text-white sm:p-10">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/15 blur-3xl" />
              <dl className="relative divide-y divide-white/10">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-5 py-6 first:pt-0">
                    <fact.icon aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold-300" strokeWidth={1.5} />
                    <div>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/55">{fact.label}</dt>
                      <dd className="mt-1.5 font-display text-2xl font-semibold leading-snug">{fact.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <Button to="/kontakt" className="relative mt-4" withArrow>
                Kontakt aufnehmen
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

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
