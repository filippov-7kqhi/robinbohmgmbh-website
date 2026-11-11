import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, Phone } from 'lucide-react';
import { legalNavigation, mainNavigation } from '../../config/navigation';
import { siteConfig } from '../../config/site.config';
import { businessAreas } from '../../content/businessAreas';
import { Container } from '../ui/Container';
import { Logo } from '../ui/Logo';

function FooterHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">{children}</h3>;
}

const linkClass = 'text-sm text-white/65 transition-colors duration-300 hover:text-white';

export function Footer() {
  const year = new Date().getFullYear();
  const { brand, contact, address, sample } = siteConfig;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative isolate overflow-hidden bg-navy-950 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Fußbereich
      </h2>
      <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10 opacity-60" />

      <Container className="grid gap-14 py-20 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="sm:col-span-2 lg:col-span-4">
          <Logo />
          <p className="mt-7 max-w-sm text-sm leading-relaxed text-white/60">{brand.description}</p>
          {sample.enabled && (
            <p className="mt-6 max-w-sm border-l-2 border-gold-500/60 pl-4 text-xs leading-relaxed text-gold-200/80">
              {sample.notice}
            </p>
          )}
        </div>

        <nav aria-label="Unternehmen" className="lg:col-span-2">
          <FooterHeading>Unternehmen</FooterHeading>
          <ul className="mt-6 space-y-3.5">
            {mainNavigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Geschäftsbereiche" className="lg:col-span-3">
          <FooterHeading>Geschäftsbereiche</FooterHeading>
          <ul className="mt-6 space-y-3.5">
            {businessAreas.map((area) => (
              <li key={area.id}>
                <Link to={`/geschaeftsbereiche#${area.id}`} className={linkClass}>
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <FooterHeading>Kontakt</FooterHeading>
          <address className="mt-6 space-y-4 text-sm not-italic text-white/65">
            <p className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
              <span>
                {brand.legalName}
                <br />
                {address.street}
                <br />
                {address.postalCode} {address.city}
              </span>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="flex gap-3 transition-colors hover:text-white">
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                {contact.email}
              </a>
            </p>
            <p>
              <a href={`tel:${contact.phoneHref}`} className="flex gap-3 transition-colors hover:text-white">
                <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.5} />
                {contact.phone}
              </a>
            </p>
          </address>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-5 py-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.legalName}
            {sample.enabled ? ' (fiktive Beispielmarke)' : ''}. Alle Rechte vorbehalten.
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {legalNavigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-gold-300">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 transition-colors hover:text-gold-300"
              >
                Nach oben
                <ArrowUp
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </button>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
