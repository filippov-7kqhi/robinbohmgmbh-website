import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { LegalPage, type LegalSection } from '../components/legal/LegalPage';
import { MissingValue } from '../components/ui/Badges';

export default function ImprintPage() {
  const { brand, address, contact, legal, preview } = siteConfig;

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
        <p>
          Geschäftsführung: {legal.managingDirectors.join(', ')}
          <br />
          Rechtsform: {legal.legalForm}
        </p>
      ),
    },
    {
      id: 'kontakt',
      title: 'Kontakt',
      content: (
        <p>
          E-Mail:{' '}
          {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <MissingValue label="E-Mail-Adresse" />}
          {(contact.phone || preview.enabled) && (
            <>
              <br />
              Telefon:{' '}
              {contact.phone ? <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a> : <MissingValue label="Telefonnummer" />}
            </>
          )}
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
          Registergericht: {legal.registerCourt}
          <br />
          Registernummer: {legal.registerNumber}
        </p>
      ),
    },
    ...(legal.vatId || preview.enabled
      ? [
          {
            id: 'umsatzsteuer',
            title: 'Umsatzsteuer-ID',
            content: (
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                <br />
                {legal.vatId || <MissingValue label="USt-IdNr., sofern vorhanden" />}
              </p>
            ),
          },
        ]
      : []),
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
        <p>
          Unser Angebot kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
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
          beachtet.
        </p>
      ),
    },
    {
      id: 'bildnachweise',
      title: 'Bildnachweise',
      content: (
        <p>
          Fotografien: <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>, verwendet
          gemäß der Unsplash-Lizenz. Icons: <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">Lucide</a>{' '}
          (ISC-Lizenz).
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
        preview.enabled ? (
          <p>
            <strong>Entwurf zur Abstimmung.</strong> Hervorgehobene Angaben liegen noch nicht vor und müssen vor der
            Veröffentlichung von der Gesellschaft ergänzt bzw. bestätigt werden.
          </p>
        ) : undefined
      }
      sections={sections}
    />
  );
}
