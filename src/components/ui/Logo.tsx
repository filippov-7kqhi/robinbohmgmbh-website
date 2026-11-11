import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site.config';
import { cn } from '../../lib/cn';

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className}>
      <rect x="0.75" y="0.75" width="38.5" height="38.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.8 30.5 20 9.8l8.2 20.7" stroke="currentColor" strokeWidth="2" />
      <path d="M14.8 23.4h10.4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 34.6h24" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
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
      aria-label={`${siteConfig.brand.fullName} – zur Startseite`}
    >
      <LogoMark className="h-10 w-10 shrink-0 text-gold-400 transition-transform duration-700 ease-out-expo group-hover:-rotate-6" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] font-semibold uppercase tracking-[0.14em] text-white">
          {siteConfig.brand.name}
        </span>
        <span className="mt-1 text-[9.5px] font-bold uppercase tracking-[0.46em] text-gold-400">
          {siteConfig.brand.suffix}
        </span>
      </span>
    </Link>
  );
}
