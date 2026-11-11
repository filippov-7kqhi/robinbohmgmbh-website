import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';
import { Container } from './Container';

type Tone = 'white' | 'paper' | 'ivory' | 'navy';

interface SectionProps {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  spacing?: 'default' | 'compact';
  className?: string;
  containerClassName?: string;
  labelledBy?: string;
}

const tones: Record<Tone, string> = {
  white: 'bg-white',
  paper: 'bg-paper',
  ivory: 'bg-ivory',
  navy: 'bg-navy-950 text-white',
};

export function Section({
  children,
  id,
  tone = 'white',
  spacing = 'default',
  className,
  containerClassName,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        'relative isolate overflow-hidden',
        tones[tone],
        spacing === 'default' ? 'py-24 sm:py-28 lg:py-36' : 'py-16 sm:py-20',
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
