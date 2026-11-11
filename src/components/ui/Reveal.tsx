import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  /** Verzögerung in Millisekunden – für gestaffelte Einblendungen */
  delay?: number;
  className?: string;
  id?: string;
}

/**
 * Blendet Inhalte sanft ein, sobald sie in den sichtbaren Bereich scrollen.
 * Ohne JavaScript bzw. bei reduzierter Bewegung sind Inhalte sofort sichtbar
 * (siehe <noscript> in index.html und index.css).
 */
export function Reveal({ children, as: Tag = 'div', delay = 0, className, id }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as ElementType;

  return (
    <Component
      ref={ref}
      id={id}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
