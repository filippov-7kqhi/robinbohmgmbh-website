import type { ReactNode } from 'react';
import { Info } from 'lucide-react';
import type { PageMeta } from '../../config/pages';
import { Seo } from '../seo/Seo';
import { Container } from '../ui/Container';
import { PageHero } from '../ui/PageHero';

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

interface LegalPageProps {
  meta: PageMeta;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  notice?: ReactNode;
  sections: LegalSection[];
}

/** Gemeinsames Layout für Impressum und Datenschutzerklärung mit Inhaltsverzeichnis. */
export function LegalPage({ meta, eyebrow, title, lead, notice, sections }: LegalPageProps) {
  return (
    <>
      <Seo page={meta} />
      <PageHero eyebrow={eyebrow} title={title} lead={lead} breadcrumb={meta.breadcrumb ?? meta.title} compact />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-20">
            <aside className="hidden lg:block">
              <nav aria-label="Inhaltsverzeichnis" className="sticky top-36">
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-700">Inhalt</p>
                <ol className="mt-6 space-y-1 border-l border-navy-950/10">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="-ml-px block border-l border-transparent py-1.5 pl-5 text-sm text-navy-500 transition-colors hover:border-gold-500 hover:text-navy-950"
                      >
                        <span className="mr-2 tabular-nums text-gold-600">{String(index + 1).padStart(2, '0')}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <div className="max-w-3xl">
              {notice && (
                <div
                  role="note"
                  className="mb-14 flex gap-4 border border-gold-400/50 bg-gold-50 p-6 text-sm leading-relaxed text-gold-900"
                >
                  <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" strokeWidth={1.75} />
                  <div>{notice}</div>
                </div>
              )}

              {sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`${section.id}-heading`}
                  className="border-t border-navy-950/10 py-10 first-of-type:border-t-0 first-of-type:pt-0"
                >
                  <h2
                    id={`${section.id}-heading`}
                    className="flex items-baseline gap-4 font-display text-[1.9rem] font-semibold leading-tight text-navy-950"
                  >
                    <span className="text-xl tabular-nums text-gold-600">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </h2>
                  <div className="legal-body mt-6 text-[15.5px]">{section.content}</div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
