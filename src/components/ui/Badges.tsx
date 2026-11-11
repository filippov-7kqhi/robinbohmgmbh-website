/**
 * Gibt einen Konfigurationswert aus. Platzhalter in [eckigen Klammern]
 * werden optisch hervorgehoben, damit sie vor dem Livegang auffallen.
 */
export function ConfigValue({ value }: { value: string }) {
  const isPlaceholder = /^\[.*\]$/.test(value.trim());
  if (!isPlaceholder) return <>{value}</>;
  return <mark className="rounded-sm bg-gold-100 px-1.5 py-0.5 text-[0.95em] text-gold-900">{value}</mark>;
}

/** Kennzeichnet eine noch fehlende Angabe (nur in der Vorschau sichtbar, im Produktions-Build ausgeschlossen). */
export function MissingValue({ label }: { label: string }) {
  return <ConfigValue value={`[${label} – liegt noch nicht vor]`} />;
}
