import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Brotkrümelnavigation">
      <ol className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
        <li>
          <Link to="/" className="transition-colors hover:text-gold-300">
            Startseite
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="h-3.5 w-3.5 text-gold-400/70" strokeWidth={2} />
        </li>
        <li aria-current="page" className="text-gold-300">
          {current}
        </li>
      </ol>
    </nav>
  );
}
