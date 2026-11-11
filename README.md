# Website der Robin Böhm GmbH

Unternehmenswebsite der Robin Böhm GmbH (Berlin) – React 18 · TypeScript · Tailwind CSS · Vite, statisch vorgerendert für GitHub Pages.

- **Produktion:** https://robinbohmgmbh.shop (Repository `filippov-7kqhi/robinbohmgmbh.shop`, derzeit Platzhalterseite „Website im Aufbau“)
- **Entwicklungsvorschau:** https://filippov-7kqhi.github.io/robinbohmgmbh-website/ (Branch `gh-pages` dieses Repositorys, `noindex`)

## Grundsatz

Die Website enthält ausschließlich bestätigte Angaben: Firma, Rechtsform, Anschrift, Geschäftsführung, Registergericht, Registernummer und Unternehmensgegenstand. Nicht vorliegende Angaben bleiben leer. In der Vorschau sind sie markiert, und der Produktions-Build verweigert die Erstellung, solange Pflichtangaben fehlen.

## Befehle

```bash
npm install
npm run dev            # Entwicklung mit Produktionskonfiguration (http://localhost:5173)
npm run dev:staging    # Entwicklung mit Vorschaukonfiguration (Hinweisbalken, Demo-Formular)
npm run build:staging  # Vorschau-Build → dist/ (Basis-Pfad /robinbohmgmbh-website/, noindex, ohne CNAME)
npm run build          # Produktions-Build für robinbohmgmbh.shop → dist/ (inkl. CNAME) – nur mit vollständigen Pflichtangaben
```

## Vor dem Livegang (Produktions-Build)

Alle Angaben werden in `src/config/site.config.ts` gepflegt. `npm run build` prüft automatisch und bricht mit einer Liste ab, solange Folgendes fehlt:

| Feld | Inhalt |
| --- | --- |
| `contact.email` | E-Mail-Adresse der Gesellschaft (Pflichtangabe, § 5 Abs. 1 Nr. 2 DDG) |
| `contact.phone` / `contactForm.endpoint` | Telefonnummer oder ein funktionsfähiges Kontaktformular als zweiter Kommunikationsweg |
| `privacy.transferBasis` | Rechtsgrundlage der Datenübermittlung an GitHub (USA) |
| `release.contentApproved` | `true`, sobald die Gesellschaft die Inhalte freigegeben hat |

Zusätzlich manuell zu prüfen: USt-IdNr. (`legal.vatId`, nur falls vorhanden), Registernummer laut Registerauszug, ggf. Datenschutzbeauftragte/r, Logo (derzeit vorläufiges Monogramm).

## Veröffentlichung

**Vorschau:** `npm run build:staging` und den Inhalt von `dist/` auf den Branch `gh-pages` dieses Repositorys pushen.

**Produktion:** `npm run build`, prüfen, dass `dist/CNAME` den Inhalt `robinbohmgmbh.shop` hat, und den Inhalt von `dist/` auf den Branch `main` des Repositorys `robinbohmgmbh.shop` pushen. Das ersetzt die Platzhalterseite. DNS (A-Records auf GitHub Pages, `www` als CNAME), Custom Domain und HTTPS sind dort bereits eingerichtet.

## Inhalte bearbeiten

| Was | Datei |
| --- | --- |
| Firmendaten, Kontakt, Rechtliches, SEO, Formular | `src/config/site.config.ts` |
| Navigation | `src/config/navigation.ts` |
| Seitentitel & Meta-Beschreibungen | `src/config/pages.ts` |
| Geschäftsbereiche | `src/content/businessAreas.ts` |
| Eckdaten | `src/content/company.ts` |
| Farben & Schriften | `tailwind.config.js` |

## Bildnachweise

Fotos: Unsplash (Unsplash-Lizenz). Icons: Lucide (ISC). Schriften: Manrope, Cormorant Garamond (SIL OFL), lokal eingebunden – keine Verbindung zu Google Fonts.
