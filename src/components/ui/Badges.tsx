import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

/** Kennzeichnung für frei erfundene Beispielinhalte */
export function ExampleBadge({ children = 'Fiktives Beispiel', className }: { children?: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-gold-500/40 bg-gold-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gold-800',
        className,
      )}
    >
      {children}
    </span>
  );
}

/**
 * Gibt einen Konfigurationswert aus. Platzhalter in [eckigen Klammern]
 * werden optisch hervorgehoben, damit sie vor dem Livegang auffallen.
 */
export function ConfigValue({ value }: { value: string }) {
  const isPlaceholder = /^\[.*\]$/.test(value.trim());
  if (!isPlaceholder) return <>{value}</>;
  return <mark className="rounded-sm bg-gold-100 px-1.5 py-0.5 text-[0.95em] text-gold-900">{value}</mark>;
}
