import { Check, UserRound } from 'lucide-react';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { governancePrinciples, leadershipRoles, values } from '../content/company';
import { Seo } from '../components/seo/Seo';
import { ExampleBadge } from '../components/ui/Badges';
import { CtaBand } from '../components/ui/CtaBand';
import { ImageFrame } from '../components/ui/ImageFrame';
import { PageHero } from '../components/ui/PageHero';
import { Reveal } from '../components/ui/Reveal';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function AboutPage() {
  const brand = siteConfig.brand.fullName;

  return (
    <>
      <Seo page={pages.about} />
      <PageHero
        eyebrow="Über uns"
        breadcrumb="Über uns"
        image="/images/office-corridor.jpg"
        title={
          <>
            Unternehmerisch denken.
            <br />
            <span className="italic text-gold-300">Verantwortungsvoll handeln.</span>
          </>
        }
        lead={`Die ${brand} verbindet langfristiges Kapital mit unternehmerischer Erfahrung – und mit der Überzeugung, dass wirtschaftlicher Erfolg und gesellschaftlicher Mehrwert zusammengehören.`}
      />

      {/* Wer wir sind */}
      <Section tone="white" labelledBy="who-title">
        <div className="grid items-center gap-20 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Wer wir sind"
              id="who-title"
              title={
                <>
                  Eine Holding, die in <span className="italic text-gold-700">Generationen</span> denkt.
                </>
              }
            />
            <Reveal delay={200}>
              <div className="mt-8 space-y-5 text-[17px] leading-[1.8] text-navy-600">
                <p>
                  Die {brand} ist eine eigenständige, unternehmerisch geführte Holdinggesellschaft. Wir verwalten
                  unser Gesellschaftsvermögen, halten Beteiligungen an mittelständischen Unternehmen und investieren
                  gezielt in Bildung sowie digitale Lerninnovationen.
                </p>
                <p>
                  Was uns von klassischen Finanzinvestoren unterscheidet, ist unser Zeithorizont. Wir investieren mit
                  eigenem Kapital und ohne festes Ausstiegsdatum. Das gibt uns die Freiheit, Entscheidungen an der
                  langfristigen Entwicklung eines Unternehmens auszurichten – und nicht an kurzfristigen Kennzahlen.
                </p>
                <p>
                  Im Mittelpunkt stehen dabei immer die Menschen: Unternehmerinnen und Unternehmer, die ihr Lebenswerk
                  weitergeben möchten, Management-Teams mit klarer Vision und Lernende, die von besseren
                  Bildungsangeboten profitieren.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <ImageFrame
              src="/images/leadership.jpg"
              alt="Person in dunkelblauem Anzug knöpft das Sakko zu, im Hintergrund eine Treppe"
              aspect="aspect-[4/5]"
              frame="right"
              imgClassName="object-[50%_30%]"
            />
          </Reveal>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section tone="ivory" labelledBy="mission-title">
        <div aria-hidden="true" className="bg-grid-lines-dark absolute inset-0 -z-10" />
        <SectionHeading
          eyebrow="Mission & Vision"
          id="mission-title"
          align="center"
          title="Wofür wir stehen"
          lead="Zwei Sätze, an denen wir unsere Entscheidungen messen."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden bg-navy-950 p-10 text-white sm:p-14">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gold-400/15 blur-3xl" />
            <p className="relative text-[11px] font-bold uppercase tracking-[0.26em] text-gold-300">Unsere Mission</p>
            <p className="relative mt-8 font-display text-[1.9rem] font-medium leading-snug sm:text-[2.2rem]">
              Wir stellen langfristiges Kapital, unternehmerische Erfahrung und ein belastbares Netzwerk bereit, um
              Unternehmen und Bildungsangebote nachhaltig weiterzuentwickeln.
            </p>
          </Reveal>
          <Reveal delay={120} className="border border-navy-950/10 bg-white p-10 sm:p-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-gold-700">Unsere Vision</p>
            <p className="mt-8 font-display text-[1.9rem] font-medium leading-snug text-navy-950 sm:text-[2.2rem]">
              Wir wollen eine Unternehmensgruppe gestalten, die wirtschaftliche Stärke mit gesellschaftlichem Mehrwert
              verbindet – insbesondere durch besseren Zugang zu hochwertiger Bildung.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Werte */}
      <Section tone="white" labelledBy="values-title">
        <SectionHeading
          eyebrow="Unsere Werte"
          id="values-title"
          title={
            <>
              Werte, die unser <span className="italic text-gold-700">Handeln</span> leiten.
            </>
          }
          lead="Unsere Werte sind kein Leitbild für die Schublade. Sie prägen, wie wir investieren, wie wir zusammenarbeiten und wie wir Verantwortung übernehmen."
        />
        <div className="mt-16 grid gap-px overflow-hidden border border-navy-950/10 bg-navy-950/10 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={(index % 3) * 100} className="group bg-white p-9 transition-colors duration-500 hover:bg-ivory sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center border border-gold-500/40 text-gold-600">
                <value.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="mt-7 font-display text-[1.7rem] font-semibold text-navy-950">{value.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{value.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Governance */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-28 lg:py-36" aria-labelledby="governance-title">
        <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />
        <div className="mx-auto grid w-full max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12">
          <SectionHeading
            tone="onDark"
            eyebrow="Governance"
            id="governance-title"
            title={
              <>
                So <span className="italic text-gold-300">arbeiten</span> wir.
              </>
            }
            lead="Verlässlichkeit entsteht durch klare Strukturen. Unsere Grundsätze schaffen Transparenz – für Gesellschafter, Beteiligungen und Partner."
          />
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {governancePrinciples.map((principle, index) => (
              <Reveal as="li" key={principle} delay={index * 70} className="flex items-start gap-5 py-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-400/50">
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-gold-300" strokeWidth={2.5} />
                </span>
                <span className="text-[16px] leading-relaxed text-white/80">{principle}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Leitung */}
      <Section tone="ivory" labelledBy="team-title">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Leitung"
            id="team-title"
            title={
              <>
                Verantwortung mit <span className="italic text-gold-700">Gesicht.</span>
              </>
            }
            lead="Hier stellen sich künftig die verantwortlichen Personen vor. Die Darstellung zeigt die vorgesehene Leitungsstruktur."
          />
          <Reveal delay={200}>
            <ExampleBadge>Platzhalter – Profile ergänzen</ExampleBadge>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {leadershipRoles.map((member, index) => (
            <Reveal key={member.role} delay={index * 110} className="border border-navy-950/10 bg-white">
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950">
                <div aria-hidden="true" className="bg-grid-lines absolute inset-0" />
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full border border-gold-400/40">
                  <UserRound aria-hidden="true" className="h-10 w-10 text-gold-300/80" strokeWidth={1.2} />
                </span>
              </div>
              <div className="p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-700">{member.role}</p>
                <p className="mt-3 font-display text-2xl font-semibold text-navy-950">Name folgt</p>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-600">{member.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Zusammenarbeit"
        title={
          <>
            Gemeinsam <span className="italic text-gold-300">Werte</span> schaffen.
          </>
        }
        text="Sie möchten uns kennenlernen oder suchen einen Partner für Ihr Unternehmen oder Ihre Bildungsinitiative? Wir freuen uns auf das Gespräch."
        primary={{ label: 'Kontakt aufnehmen', to: '/kontakt' }}
        secondary={{ label: 'Geschäftsbereiche', to: '/geschaeftsbereiche' }}
      />
    </>
  );
}
