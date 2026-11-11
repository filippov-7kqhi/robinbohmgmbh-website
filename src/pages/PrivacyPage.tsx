import { Link } from 'react-router-dom';
import { pages } from '../config/pages';
import { siteConfig } from '../config/site.config';
import { LegalPage, type LegalSection } from '../components/legal/LegalPage';
import { ConfigValue } from '../components/ui/Badges';

export default function PrivacyPage() {
  const { brand, address, contact, privacy, contactForm, sample } = siteConfig;

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
            Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der Datenschutz-Grundverordnung (DSGVO),
            des Bundesdatenschutzgesetzes (BDSG) und des Telekommunikation-Digitale-Dienste-Datenschutz-Gesetzes
            (TDDDG). Diese Website verzichtet bewusst auf Analyse- und Tracking-Werkzeuge, Werbe-Cookies,
            Social-Media-Plugins sowie auf eingebettete Inhalte externer Anbieter.
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
            Telefon: {contact.phone}
            <br />
            E-Mail: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </address>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
            über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          </p>
          {privacy.dataProtectionOfficer ? (
            <p>
              Datenschutzbeauftragte/r: {privacy.dataProtectionOfficer.name},{' '}
              <a href={`mailto:${privacy.dataProtectionOfficer.email}`}>{privacy.dataProtectionOfficer.email}</a>
            </p>
          ) : (
            <p>
              Eine gesetzliche Pflicht zur Benennung einer bzw. eines Datenschutzbeauftragten besteht nicht. Bei
              Fragen zum Datenschutz wenden Sie sich bitte direkt an die oben genannte verantwortliche Stelle.
            </p>
          )}
        </>
      ),
    },
    {
      id: 'hosting',
      title: 'Hosting und Server-Logfiles',
      content: (
        <>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet: <ConfigValue value={privacy.hostingProvider} />,{' '}
            <ConfigValue value={privacy.hostingAddress} />.
          </p>
          <p>
            Beim Aufruf der Website erhebt der Hosting-Anbieter automatisch Informationen in sogenannten
            Server-Logfiles, die Ihr Browser übermittelt. Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer-URL (zuvor besuchte Seite)</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Verarbeitung erfolgt
            auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der technisch
            fehlerfreien Darstellung, der Stabilität und der Sicherheit unserer Website. Soweit erforderlich, wird mit
            dem Hosting-Anbieter ein Vertrag über Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen.
          </p>
        </>
      ),
    },
    {
      id: 'verschluesselung',
      title: 'SSL- bzw. TLS-Verschlüsselung',
      content: (
        <p>
          Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, etwa
          Anfragen über das Kontaktformular, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
          erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt und ein Schloss-Symbol
          angezeigt wird. Bei aktivierter Verschlüsselung können die übermittelten Daten nicht von Dritten mitgelesen
          werden.
        </p>
      ),
    },
    {
      id: 'kontaktformular',
      title: 'Kontaktformular',
      content: (
        <>
          <p>
            Wenn Sie uns über das <Link to="/kontakt">Kontaktformular</Link> eine Anfrage senden, verarbeiten wir die
            von Ihnen angegebenen Daten (Name, Unternehmen, E-Mail-Adresse, Telefonnummer, Anliegen und Nachricht) zur
            Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen. Pflichtfelder sind als solche
            gekennzeichnet; alle weiteren Angaben sind freiwillig.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
            zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
            beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
            gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) bzw. auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
            DSGVO). Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
          </p>
          <p>
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
            auffordern, Ihre Einwilligung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende
            gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt. Eine Weitergabe an Dritte
            erfolgt nicht ohne Ihre Einwilligung.
          </p>
          {contactForm.providerName ? (
            <p>
              Für den technischen Versand der Formulardaten nutzen wir den Dienst {contactForm.providerName}. Die
              Formulardaten werden dabei an diesen Dienst übermittelt und von dort an uns weitergeleitet.
            </p>
          ) : (
            <p>
              <ConfigValue value="[Sofern für den Formularversand ein externer Dienst eingesetzt wird, ist dieser hier mit Name, Anschrift, Zweck und Rechtsgrundlage zu benennen.]" />
            </p>
          )}
        </>
      ),
    },
    {
      id: 'email-telefon',
      title: 'Anfragen per E-Mail oder Telefon',
      content: (
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage einschließlich aller daraus
          hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Die Rechtsgrundlagen entsprechen denen des Kontaktformulars (Art. 6 Abs. 1 lit.
          b bzw. lit. f DSGVO). Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
      ),
    },
    {
      id: 'cookies',
      title: 'Cookies und lokale Speicherung',
      content: (
        <>
          <p>
            Diese Website setzt keine Cookies zu Analyse-, Marketing- oder Trackingzwecken ein. Es findet keine
            Profilbildung statt.
          </p>
          {sample.enabled && (
            <p>
              Wenn Sie den Hinweisbalken zu den Beispielinhalten ausblenden, wird diese Einstellung im lokalen Speicher
              (Local Storage) Ihres Browsers abgelegt, damit der Hinweis nicht erneut erscheint. Diese Speicherung ist
              für die von Ihnen ausdrücklich gewünschte Funktion unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG) und
              enthält keine personenbezogenen Daten. Sie können den lokalen Speicher jederzeit über die Einstellungen
              Ihres Browsers löschen.
            </p>
          )}
        </>
      ),
    },
    {
      id: 'schriftarten',
      title: 'Schriftarten und externe Inhalte',
      content: (
        <p>
          Die auf dieser Website verwendeten Schriftarten sind lokal eingebunden und werden von unserem eigenen Server
          ausgeliefert. Beim Aufruf der Seiten wird keine Verbindung zu Servern Dritter – etwa Google Fonts –
          hergestellt. Ebenso binden wir keine externen Karten-, Video- oder Social-Media-Dienste ein.
        </p>
      ),
    },
    {
      id: 'rechte',
      title: 'Ihre Rechte',
      content: (
        <>
          <p>Ihnen stehen hinsichtlich Ihrer personenbezogenen Daten jederzeit folgende Rechte zu:</p>
          <ul>
            <li>Recht auf Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <h3>Widerspruchsrecht gemäß Art. 21 DSGVO</h3>
          <p>
            <strong>
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO erfolgt, haben Sie jederzeit das
              Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
              personenbezogenen Daten Widerspruch einzulegen.
            </strong>{' '}
            Wir verarbeiten die betroffenen Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige
            Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
            Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          </p>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an{' '}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>.
          </p>
        </>
      ),
    },
    {
      id: 'beschwerderecht',
      title: 'Beschwerderecht bei der Aufsichtsbehörde',
      content: (
        <p>
          Im Falle von Verstößen gegen die DSGVO steht Ihnen gemäß Art. 77 DSGVO ein Beschwerderecht bei einer
          Aufsichtsbehörde zu, insbesondere in dem Mitgliedstaat Ihres gewöhnlichen Aufenthalts, Ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes. Für uns zuständig ist: <ConfigValue value={privacy.supervisoryAuthority} />
        </p>
      ),
    },
    {
      id: 'speicherdauer',
      title: 'Speicherdauer',
      content: (
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
          personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Machen Sie ein
          berechtigtes Löschersuchen geltend oder widerrufen Sie eine Einwilligung, werden Ihre Daten gelöscht, sofern
          keine anderen rechtlich zulässigen Gründe für die Speicherung bestehen – etwa steuer- oder handelsrechtliche
          Aufbewahrungsfristen. In letzterem Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
      ),
    },
    {
      id: 'aktualitaet',
      title: 'Aktualität dieser Datenschutzerklärung',
      content: (
        <p>
          Diese Datenschutzerklärung hat den Stand {privacy.lastUpdated}. Durch die Weiterentwicklung unserer Website
          oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, sie anzupassen.
          Die jeweils aktuelle Fassung ist jederzeit auf dieser Seite abrufbar.
        </p>
      ),
    },
  ];

  return (
    <LegalPage
      meta={pages.privacy}
      eyebrow="Rechtliches"
      title="Datenschutzerklärung"
      lead="Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13 DSGVO."
      notice={
        sample.enabled ? (
          <p>
            <strong>Muster-Datenschutzerklärung für eine fiktive Beispielmarke.</strong> Der Text beschreibt den
            technischen Stand dieser Website (keine Cookies, kein Tracking, lokal eingebundene Schriften). Vor einer
            Veröffentlichung sind die Platzhalter zu ersetzen, eingesetzte Dienste – insbesondere Hosting und
            Formularversand – zu ergänzen und der Text rechtlich prüfen zu lassen.
          </p>
        ) : undefined
      }
      sections={sections}
    />
  );
}
