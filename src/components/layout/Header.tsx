import { useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { mainNavigation } from '../../config/navigation';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';
import { MobileMenu } from './MobileMenu';
import { PreviewNotice } from './PreviewNotice';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Menü bei Seitenwechsel schließen
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Menü schließen, wenn das Fenster auf Desktop-Breite wechselt
  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const solid = scrolled || menuOpen;
  const navItems = mainNavigation.filter((item) => !item.cta);
  const ctaItem = mainNavigation.find((item) => item.cta);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500',
          solid ? 'bg-navy-950/95 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)] backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <PreviewNotice />
        <Container>
          <div
            className={cn(
              'flex items-center justify-between gap-6 transition-[height] duration-500 ease-out-expo',
              scrolled ? 'h-[70px]' : 'h-20 lg:h-24',
            )}
          >
            <Logo />

            <nav aria-label="Hauptnavigation" className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'group relative block px-4 py-2 text-[13px] font-semibold tracking-[0.03em] transition-colors duration-300',
                          isActive ? 'text-white' : 'text-white/75 hover:text-white',
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}
                          <span
                            aria-hidden="true"
                            className={cn(
                              'absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gold-400 transition-transform duration-500 ease-out-expo',
                              isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                            )}
                          />
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block">
              {ctaItem && (
                <Button to={ctaItem.to} size="sm" withArrow>
                  Kontakt aufnehmen
                </Button>
              )}
            </div>

            <button
              type="button"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-sm text-white transition-colors hover:text-gold-300 lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
              ) : (
                <Menu aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Bewusst außerhalb des <header>: backdrop-filter würde sonst den fixierten Menü-Container beschneiden. */}
      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
