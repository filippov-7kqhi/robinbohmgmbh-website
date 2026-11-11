import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { LegalPage, type LegalSection } from '../components/legal/LegalPage';
import { ConfigValue } from '../components/ui/Badges';

export default function ImprintPage() {
  const { brand, address, contact, legal } = siteConfig;

  const sections: LegalSection[] = [
    {
      id: 'anbieter',
      title: 'Angaben gemäß § 5 DDG',
      content: (
        <address>
          <strong>{brand.legalName}</strong>
          <br />
          {address.street}
          <br />
          {address.postalCode} {address.city}
          <br />
          {address.country}
        </address>
      ),
    },
    {
      id: 'vertretung',
      title: 'Vertreten durch',
      content: (
        <>
          <p>
            Rechtsform: {legal.legalForm}
            <br />
            {legal.managingDirectors.length > 1 ? 'Geschäftsführer/innen' : 'Geschäftsführung'}:{' '}
            {legal.managingDirectors.map((name, index) => (
              <span key={name}>
                {index > 0 && ', '}
                <ConfigValue value={name} />
              </span>
            ))}
          </p>
        </>
      ),
    },
    {
      id: 'kontakt',
      title: 'Kontakt',
      content: (
        <p>
          Telefon: <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
      ),
    },
    {
      id: 'register',
      title: 'Registereintrag',
      content: (
        <p>
          Eintragung im Handelsregister
          <br />
          Registergericht: <ConfigValue value={legal.registerCourt} />
          <br />
          Registernummer: <ConfigValue value={legal.registerNumber} />
        </p>
      ),
    },
    {
      id: 'umsatzsteuer',
      title: 'Umsatzsteuer-ID',
      content: (
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
          <br />
          <ConfigValue value={legal.vatId} />
        </p>
      ),
    },
    {
      id: 'verantwortlich',
      title: 'Verantwortlich für den Inhalt',
      content: (
        <p>
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:
          <br />
          <ConfigValue value={legal.contentResponsible.name} />
          <br />
          {legal.contentResponsible.address}
        </p>
      ),
    },
    {
      id: 'streitbeilegung',
      title: 'Verbraucherstreitbeilegung',
      content: (
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      ),
    },
    {
      id: 'haftung-inhalte',
      title: 'Haftung für Inhalte',
      content: (
        <>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
            bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
            konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </>
      ),
    },
    {
      id: 'haftung-links',
      title: 'Haftung für Links',
      content: (
        <>
          <p>
            Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss
            haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
            Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </>
      ),
    },
    {
      id: 'urheberrecht',
      title: 'Urheberrecht',
      content: (
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet und entsprechende Inhalte als solche gekennzeichnet.
        </p>
      ),
    },
    {
      id: 'bildnachweise',
      title: 'Bildnachweise',
      content: (
        <p>
          Fotografien: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>, verwendet
          gemäß der Unsplash-Lizenz. Logo, Icons und grafische Elemente: eigene Gestaltung bzw.{' '}
          <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">Lucide</a> (ISC-Lizenz).
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      meta={pages.imprint}
      eyebrow="Rechtliches"
      title="Impressum"
      lead="Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
      notice={
        siteConfig.sample.enabled ? (
          <p>
            <strong>Muster-Impressum für eine fiktive Beispielmarke.</strong> Alle hervorgehobenen Angaben in eckigen
            Klammern sowie Anschrift und Kontaktdaten sind Platzhalter. Vor einer Veröffentlichung sind die
            vollständigen und zutreffenden Angaben des tatsächlichen Anbieters einzutragen und rechtlich prüfen zu
            lassen.
          </p>
        ) : undefined
      }
      sections={sections}
    />
  );
}
