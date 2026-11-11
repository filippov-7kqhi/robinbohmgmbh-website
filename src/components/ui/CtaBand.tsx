import type { ReactNode } from 'react';
import { Button } from './Button';
import { Container } from './Container';
import { Reveal } from './Reveal';
import { Eyebrow } from './SectionHeading';

interface CtaLink {
  label: string;
  to: string;
}

interface CtaBandProps {
  eyebrow?: string;
  title: ReactNode;
  text: ReactNode;
  primary: CtaLink;
  secondary?: CtaLink;
}

export function CtaBand({ eyebrow = 'Kontakt', title, text, primary, secondary }: CtaBandProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-24 text-white sm:py-28" aria-labelledby="cta-title">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(207,170,90,0.2),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(31,54,87,0.9),transparent_60%)]"
      />
      <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />

      <Container className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <Reveal>
            <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2
              id="cta-title"
              className="mt-5 max-w-3xl font-display text-[2.6rem] font-semibold leading-[1.06] sm:text-5xl lg:text-[3.5rem]"
            >
              {title}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/70">{text}</p>
          </Reveal>
        </div>
        <Reveal delay={240} className="flex flex-wrap gap-4 lg:justify-end">
          <Button to={primary.to} size="lg" withArrow>
            {primary.label}
          </Button>
          {secondary && (
            <Button to={secondary.to} size="lg" variant="secondary">
              {secondary.label}
            </Button>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
