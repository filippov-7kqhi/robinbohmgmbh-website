import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Reveal } from './Reveal';

type Tone = 'onLight' | 'onDark';

interface EyebrowProps {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  centered?: boolean;
}

export function Eyebrow({ children, tone = 'onLight', className, centered = false }: EyebrowProps) {
  const lineClass = cn('h-px w-8 shrink-0', tone === 'onDark' ? 'bg-gold-400' : 'bg-gold-600');
  return (
    <p className={cn('eyebrow', tone === 'onDark' ? 'text-gold-300' : 'text-gold-700', className)}>
      <span aria-hidden="true" className={lineClass} />
      {children}
      {centered && <span aria-hidden="true" className={lineClass} />}
    </p>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'left' | 'center';
  tone?: Tone;
  id?: string;
  level?: 'h1' | 'h2';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  tone = 'onLight',
  id,
  level = 'h2',
  className,
}: SectionHeadingProps) {
  const Heading = level;
  const centered = align === 'center';

  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone} centered={centered}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <Heading
          id={id}
          className={cn(
            'mt-5 font-display text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.01em] sm:text-5xl lg:text-[3.5rem]',
            tone === 'onDark' ? 'text-white' : 'text-navy-950',
          )}
        >
          {title}
        </Heading>
      </Reveal>
      {lead && (
        <Reveal delay={160}>
          <p
            className={cn(
              'mt-6 text-[17px] leading-relaxed sm:text-lg',
              tone === 'onDark' ? 'text-white/70' : 'text-navy-600',
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
