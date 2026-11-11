import { useEffect, useRef, type CSSProperties } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { legalNavigation, mainNavigation } from '../../config/navigation';
import { siteConfig } from '../../config/site.config';
import { cn } from '../../lib/cn';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Hintergrund-Scrollen sperren, Escape-Taste & Fokus verwalten
  useEffect(() => {
    rootRef.current?.toggleAttribute('inert', !open);
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    const firstLink = panelRef.current?.querySelector<HTMLElement>('a');
    window.setTimeout(() => firstLink?.focus(), 120);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      ref={rootRef}
      id="mobile-menu"
      aria-hidden={!open}
      className={cn(
        'fixed inset-0 z-40 lg:hidden',
        // Beim Öffnen sofort sichtbar (damit der Fokus gesetzt werden kann),
        // beim Schließen erst nach Ende der Ausblend-Animation unsichtbar.
        open ? 'visible' : 'invisible transition-[visibility] duration-500',
      )}
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-navy-950/70 transition-opacity duration-500',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />
      <div
        ref={panelRef}
        className={cn(
          'absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-y-auto bg-navy-950 px-6 pb-10 pt-32 transition-transform duration-500 ease-out-expo sm:px-10',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div aria-hidden="true" className="bg-grid-lines pointer-events-none absolute inset-0" />
        <nav aria-label="Mobile Navigation" className="relative">
          <ul className="border-t border-white/10">
            {mainNavigation.map((item, index) => (
              <li
                key={item.to}
                className={cn(
                  'border-b border-white/10 transition-[opacity,transform] duration-700 ease-out-expo',
                  open ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0',
                )}
                style={{ transitionDelay: open ? `${120 + index * 60}ms` : '0ms' } as CSSProperties}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-center justify-between py-5 font-display text-[2rem] font-semibold leading-none transition-colors',
                      isActive ? 'text-gold-300' : 'text-white hover:text-gold-300',
                    )
                  }
                >
                  {item.label}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-5 w-5 text-gold-400/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative mt-auto space-y-4 pt-12 text-sm text-white/70">
          <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 hover:text-gold-300">
            <Mail aria-hidden="true" className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
            {siteConfig.contact.email}
          </a>
          <a href={`tel:${siteConfig.contact.phoneHref}`} className="flex items-center gap-3 hover:text-gold-300">
            <Phone aria-hidden="true" className="h-4 w-4 text-gold-400" strokeWidth={1.5} />
            {siteConfig.contact.phone}
          </a>
          <ul className="flex gap-6 pt-4 text-xs uppercase tracking-[0.18em] text-white/50">
            {legalNavigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} onClick={onClose} className="hover:text-gold-300">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
