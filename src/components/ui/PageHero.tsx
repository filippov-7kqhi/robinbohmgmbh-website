import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { asset } from '../../lib/paths';
import { Breadcrumbs } from './Breadcrumbs';
import { Container } from './Container';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  breadcrumb: string;
  /** Hintergrundbild (dekorativ) */
  image?: string;
  /** Kompakte Variante für Rechtstexte */
  compact?: boolean;
}

const delay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

export function PageHero({ eyebrow, title, lead, breadcrumb, image, compact = false }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative isolate overflow-hidden bg-navy-950 text-white',
        compact ? 'pb-16 pt-40 sm:pb-20 sm:pt-44' : 'pb-20 pt-44 sm:pb-28 sm:pt-52 lg:pb-32 lg:pt-56',
      )}
    >
      {image && (
        <img
          src={asset(image)}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="absolute inset-0 -z-30 h-full w-full animate-hero-zoom object-cover opacity-45"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/45"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-20 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
      <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-0 -z-10 h-[520px] w-[520px] rounded-full bg-gold-400/10 blur-3xl"
      />

      <Container>
        <div className="animate-fade-up" style={delay(50)}>
          <Breadcrumbs current={breadcrumb} />
        </div>
        <p className="eyebrow mt-10 animate-fade-up text-gold-300" style={delay(150)}>
          <span aria-hidden="true" className="h-px w-8 bg-gold-400" />
          {eyebrow}
        </p>
        <h1
          className={cn(
            'mt-6 max-w-4xl animate-fade-up font-display font-semibold leading-[1.02] tracking-[-0.015em] text-white',
            compact ? 'text-5xl sm:text-6xl' : 'text-[2.9rem] sm:text-6xl lg:text-7xl',
          )}
          style={delay(250)}
        >
          {title}
        </h1>
        {lead && (
          <p
            className="mt-7 max-w-2xl animate-fade-up text-[17px] leading-relaxed text-white/75 sm:text-lg"
            style={delay(380)}
          >
            {lead}
          </p>
        )}
        <div
          aria-hidden="true"
          className="mt-12 h-px w-32 origin-left animate-line-grow bg-gradient-to-r from-gold-400 to-transparent"
          style={delay(600)}
        />
      </Container>
    </section>
  );
}
