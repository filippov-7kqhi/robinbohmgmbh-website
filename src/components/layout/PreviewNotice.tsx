import { useEffect, useState } from 'react';
import { Info, X } from 'lucide-react';
import { siteConfig } from '../../config/site.config';

const STORAGE_KEY = 'preview-notice-dismissed';

/** Hinweisbalken der Entwicklungsvorschau – im Produktions-Build nicht vorhanden. */
export function PreviewNotice() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY) === '1') setDismissed(true);
    } catch {
      /* Speicher nicht verfügbar – Hinweis bleibt sichtbar */
    }
  }, []);

  if (!siteConfig.preview.enabled || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignorieren */
    }
  };

  return (
    <div className="border-b border-gold-400/20 bg-navy-950 text-gold-200">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-2 sm:px-8 lg:px-12">
        <Info aria-hidden="true" className="hidden h-3.5 w-3.5 shrink-0 text-gold-400 sm:block" strokeWidth={2} />
        <p className="text-center text-[11px] font-medium leading-snug tracking-wide sm:text-xs">
          {siteConfig.preview.notice}
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="ml-1 shrink-0 rounded-sm p-1 text-gold-300/80 transition-colors hover:text-white"
          aria-label="Hinweis ausblenden"
        >
          <X aria-hidden="true" className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
