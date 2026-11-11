import { Link } from 'react-router-dom';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { isContactFormDemoMode, isContactFormEnabled } from '../lib/contact';
import { LegalPage, type LegalSection } from '../components/legal/LegalPage';
import { MissingValue } from '../components/ui/Badges';

export default function PrivacyPage() {
  const { brand, address, contact, legal, privacy, contactForm, preview } = siteConfig;
  const formEnabled = isContactFormEnabled();

  const sections: LegalSection[] = [
    {
      id: 'ueberblick',
      title: 'Datenschutz auf einen Blick',
      content: (
        <>
          <p>
            Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
            identifiziert werden können.
          </p>
          <p>
            Diese Website verwendet keine Analyse- oder Tracking-Werkzeuge, keine Werbe-Cookies, keine
            Social-Media-Plugins und keine eingebetteten Inhalte externer Anbieter.
          </p>
        </>
      ),
    },
    {
      id: 'verantwortlicher',
      title: 'Verantwortliche Stelle',
      content: (
        <>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
          <address>
            <strong>{brand.legalName}</strong>
            <br />
            {address.street}
            <br />
            {address.postalCode} {address.city}
            <br />
            {address.country}
            <br />
            Vertreten durch die Geschäftsführung: {legal.managingDirectors.join(', ')}
            <br />
            E-Mail:{' '}
            {contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : <MissingValue label="E-Mail-Adresse" />}
            {contact.phone && (
              <>
                <br />
                Telefon: {contact.phone}
              </>
            )}
          </address>
          {privacy.dataProtectionOfficer ? (
            <p>
              Datenschutzbeauftragte/r: {privacy.dataProtectionOfficer.name},{' '}
              <a href={`mailto:${privacy.dataProtectionOfficer.email}`}>{privacy.dataProtectionOfficer.email}</a>
            </p>
          ) : (
            <p>Bei Fragen zum Datenschutz wenden Sie sich bitte an die oben genannte verantwortliche Stelle.</p>
          )}
        </>
      ),
    },
    {
      id: 'hosting',
      title: 'Hosting',
      content: (
        <>
          <p>
            Diese Website wird über den Dienst {privacy.hosting.service} der {privacy.hosting.provider} bereitgestellt.
            Beim Aufruf der Website verarbeitet der Anbieter technisch erforderliche Verbindungsdaten, insbesondere
            die IP-Adresse, Datum und Uhrzeit des Zugriffs, die abgerufene Seite sowie Angaben zu Browser und
            Betriebssystem. Diese Daten sind erforderlich, um die Website auszuliefern und ihre Sicherheit zu
            gewährleisten.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer zuverlässigen
            und sicheren Bereitstellung der Website. Dabei kann eine Übermittlung personenbezogener Daten in die USA
            erfolgen. Grundlage der Übermittlung:{' '}
            {privacy.transferBasis || <MissingValue label="Rechtsgrundlage der Übermittlung in die USA" />}
          </p>
          <p>
            Weitere Informationen enthält die{' '}
            <a href={privacy.hosting.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung von GitHub
            </a>
            .
          </p>
        </>
      ),
    },
    {
      id: 'verschluesselung',
      title: 'SSL- bzw. TLS-Verschlüsselung',
      content: (
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
          Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt. Bei aktivierter
          Verschlüsselung können die übermittelten Daten nicht von Dritten mitgelesen werden.
        </p>
      ),
    },
    ...(formEnabled
      ? [
          {
            id: 'kontaktformular',
            title: 'Kontaktformular',
            content: (
              <>
                <p>
                  Wenn Sie uns über das <Link to="/kontakt">Kontaktformular</Link> eine Anfrage senden, verarbeiten wir
                  die von Ihnen angegebenen Daten (Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Anliegen und
                  Nachricht) zur Bearbeitung Ihrer Anfrage. Pflichtfelder sind als solche gekennzeichnet; alle weiteren
                  Angaben sind freiwillig.
                </p>
                <p>
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
                  zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist, im Übrigen unser
                  berechtigtes Interesse an der Bearbeitung von Anfragen (Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden
                  gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen
                  Aufbewahrungspflichten entgegenstehen.
                </p>
                {!isContactFormDemoMode() &&
                  (contactForm.providerName ? (
                    <p>
                      Für den technischen Versand der Formulardaten wird der Dienst {contactForm.providerName}{' '}
                      eingesetzt.
                    </p>
                  ) : (
                    <p>
                      <MissingValue label="Name und Sitz des Formulardienstes" />
                    </p>
                  ))}
              </>
            ),
          },
        ]
      : []),
    {
      id: 'email-telefon',
      title: 'Anfragen per E-Mail oder Telefon',
      content: (
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage einschließlich der daraus
          hervorgehenden personenbezogenen Daten zum Zweck der Bearbeitung Ihres Anliegens verarbeitet. Rechtsgrundlage
          ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag zusammenhängt, im Übrigen Art. 6 Abs. 1
          lit. f DSGVO.
        </p>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies und lokale Speicherung',
      content: (
        <>
          <p>Diese Website setzt keine Cookies ein.</p>
          {preview.enabled && (
            <p>
              Wenn Sie den Hinweisbalken der Entwicklungsvorschau ausblenden, wird diese Einstellung im lokalen
              Speicher (Local Storage) Ihres Browsers abgelegt. Diese Speicherung ist für die von Ihnen gewünschte
              Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG) und enthält keine personenbezogenen Daten.
            </p>
          )}
        </>
      ),
    },
    {
      id: 'schriftarten',
      title: 'Schriftarten',
      content: (
        <p>
          Die verwendeten Schriftarten sind lokal eingebunden und werden gemeinsam mit der Website ausgeliefert. Eine
          Verbindung zu Servern Dritter – etwa Google Fonts – wird hierfür nicht hergestellt.
        </p>
      ),
    },
    {
      id: 'rechte',
      title: 'Ihre Rechte',
      content: (
        <>
          <p>Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten folgende Rechte zu:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <h3>Widerspruchsrecht gemäß Art. 21 DSGVO</h3>
          <p>
            <strong>
              Erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO, können Sie aus Gründen, die sich
              aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einlegen.
            </strong>{' '}
            Wir verarbeiten die betroffenen Daten dann nicht mehr, es sei denn, es liegen zwingende schutzwürdige
            Gründe für die Verarbeitung vor oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung
            von Rechtsansprüchen.
          </p>
          <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an die oben genannte verantwortliche Stelle.</p>
        </>
      ),
    },
    {
      id: 'beschwerderecht',
      title: 'Beschwerderecht bei der Aufsichtsbehörde',
      content: (
        <>
          <p>
            Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für die
            {' '}{brand.legalName} zuständig ist:
          </p>
          <address>
            {privacy.supervisoryAuthority.name}
            <br />
            {privacy.supervisoryAuthority.address}
          </address>
        </>
      ),
    },
    {
      id: 'speicherdauer',
      title: 'Speicherdauer',
      content: (
        <p>
          Soweit in dieser Datenschutzerklärung keine speziellere Speicherdauer genannt ist, werden personenbezogene
          Daten gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten
          entgegenstehen.
        </p>
      ),
    },
    {
      id: 'aktualitaet',
      title: 'Stand',
      content: <p>Diese Datenschutzerklärung hat den Stand {privacy.lastUpdated}.</p>,
    },
  ];

  return (
    <LegalPage
      meta={pages.privacy}
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      lead="Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO."
      notice={
        preview.enabled ? (
          <p>
            <strong>Entwurf zur Abstimmung.</strong> Hervorgehobene Angaben liegen noch nicht vor. Vor der
            Veröffentlichung sind sie zu ergänzen und der Text ist rechtlich zu prüfen.
          </p>
        ) : undefined
      }
      sections={sections}
    />
  );
}
