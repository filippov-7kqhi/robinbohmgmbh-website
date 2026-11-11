import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { initials } from '../../content/company';
import { cn } from '../../lib/cn';

/**
 * Typografisches Monogramm aus den Initialen des Firmennamens.
 * Vorläufige Wortmarke – durch ein freigegebenes Logo der Gesellschaft ersetzen, sobald vorhanden.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <text
        x="20"
        y="25.6"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.6"
      >
        {initials(siteConfig.brand.name)}
      </text>
      <path d="M8 33.6h24" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
    </svg>
  );
}

interface LogoProps {
  className?: string;
  onClick?: () => void;
}

export function Logo({ className, onClick }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn('group inline-flex items-center gap-3', className)}
      aria-label={`${siteConfig.brand.legalName} – zur Startseite`}
    >
      <LogoMark className="h-10 w-10 shrink-0 text-gold-400 transition-transform duration-700 ease-out-expo group-hover:-rotate-6" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.4rem] font-semibold uppercase tracking-[0.12em] text-white">
          {siteConfig.brand.name}
        </span>
        <span className="mt-1 text-[10px] font-bold tracking-[0.42em] text-gold-400">{siteConfig.brand.suffix}</span>
      </span>
    </Link>
  );
}
