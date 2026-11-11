import { useMemo, useState } from 'react';
import { portfolioExamples, type PortfolioExample } from '../../content/investments';
import { cn } from '../../lib/cn';
import { ExampleBadge } from '../ui/Badges';

const ALL = 'Alle';

export function PortfolioGrid() {
  const categories = useMemo(
    () => [ALL, ...Array.from(new Set(portfolioExamples.map((item) => item.category)))],
    [],
  );
  const [active, setActive] = useState<string>(ALL);

  const visible: PortfolioExample[] =
    active === ALL ? portfolioExamples : portfolioExamples.filter((item) => item.category === active);

  return (
    <div>
      <div role="group" aria-label="Beispielportfolio nach Bereich filtern" className="flex flex-wrap gap-2.5">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={cn(
                'rounded-full border px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] transition-all duration-300',
                isActive
                  ? 'border-navy-950 bg-navy-950 text-white'
                  : 'border-navy-950/15 bg-white text-navy-700 hover:border-gold-500 hover:text-gold-700',
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} Beispiel{visible.length === 1 ? '' : 'e'} angezeigt
      </p>

      <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((item, index) => (
          <li
            key={`${active}-${item.codename}`}
            className="group relative flex animate-fade-up flex-col border border-navy-950/10 bg-white p-8 transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(8,20,42,0.35)]"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gold-400 transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-700">{item.category}</span>
              {item.isExample && <ExampleBadge />}
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold text-navy-950">{item.codename}</h3>
            <p className="mt-1 text-sm font-semibold text-navy-500">{item.sector}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-navy-600">{item.description}</p>
            <dl className="mt-auto grid gap-4 pt-8 text-sm">
              <div className="flex justify-between gap-4 border-t border-navy-950/10 pt-6">
                <dt className="text-navy-500">Beteiligungsform</dt>
                <dd className="text-right font-semibold text-navy-950">{item.type}</dd>
              </div>
              <div>
                <dt className="sr-only">Schwerpunkte</dt>
                <dd className="flex flex-wrap gap-2">
                  {item.focus.map((focus) => (
                    <span key={focus} className="rounded-full bg-ivory px-3 py-1 text-xs font-medium text-navy-700">
                      {focus}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
