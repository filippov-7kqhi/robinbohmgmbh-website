import { Link } from 'react-router-dom';
import { pages } from '../config/pages';
import { mainNavigation } from '../config/navigation';
import { Seo } from '../components/seo/Seo';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

export default function NotFoundPage() {
  return (
    <>
      <Seo page={pages.notFound} />
      <section className="relative isolate flex min-h-[90svh] items-center overflow-hidden bg-navy-950 pb-20 pt-44 text-white">
        <div aria-hidden="true" className="bg-grid-lines absolute inset-0 -z-10" />
        <div aria-hidden="true" className="absolute -right-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-gold-400/10 blur-3xl" />
        <Container>
          <p className="animate-fade-up font-display text-[7rem] font-semibold leading-none text-gold-400/90 sm:text-[10rem]">404</p>
          <h1 className="mt-4 animate-fade-up font-display text-5xl font-semibold sm:text-6xl" style={{ animationDelay: '120ms' }}>
            Seite nicht gefunden
          </h1>
          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/70" style={{ animationDelay: '220ms' }}>
            Die angeforderte Seite existiert nicht oder wurde verschoben. Nutzen Sie die folgenden Links, um zum
            gewünschten Inhalt zu gelangen.
          </p>
          <div className="mt-10 animate-fade-up" style={{ animationDelay: '320ms' }}>
            <Button to="/" size="lg" withArrow>
              Zur Startseite
            </Button>
          </div>
          <ul className="mt-14 flex animate-fade-in flex-wrap gap-x-8 gap-y-3 text-sm" style={{ animationDelay: '450ms' }}>
            {mainNavigation
              .filter((item) => item.to !== '/')
              .map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/60 underline decoration-gold-500/50 underline-offset-4 hover:text-gold-300">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
