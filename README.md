# Aurenfeld Holding – Corporate-Website (Beispielprojekt)

Deutschsprachige Corporate-Website für eine **fiktive** Holdinggesellschaft (Beteiligungen, Vermögensverwaltung, Bildungsinvestitionen).
React 18 · TypeScript · Tailwind CSS · Vite · statisches Prerendering für SEO.

> „Aurenfeld Holding“ ist eine erfundene Beispielmarke. Alle Inhalte sind Musterinhalte. Vor einem Einsatz für ein reales Unternehmen müssen Firmendaten, Impressum, Datenschutzerklärung und Texte durch zutreffende Angaben dieses Unternehmens ersetzt werden.

## Befehle

```bash
npm install        # Abhängigkeiten installieren
npm run dev        # Entwicklungsserver (http://localhost:5173)
npm run build      # Typprüfung + Build + Prerendering → dist/
npm run preview    # Produktions-Build lokal ansehen
```

## Inhalte bearbeiten

| Was | Datei |
| --- | --- |
| Firmenname, Kontakt, Adresse, Impressumsdaten, Domain, SEO, Formular-Endpunkt | `src/config/site.config.ts` |
| Navigation | `src/config/navigation.ts` |
| Seitentitel & Meta-Beschreibungen | `src/config/pages.ts` |
| Geschäftsbereiche | `src/content/businessAreas.ts` |
| Werte, Grundsätze, Leitung | `src/content/company.ts` |
| Kriterien, Ablauf, Beispielportfolio | `src/content/investments.ts` |
| Farben & Schriften | `tailwind.config.js` |
| Bilder | `public/images/` |

Platzhalter in `[eckigen Klammern]` werden auf der Website gelb hervorgehoben.
`sample.enabled = false` blendet die Beispiel-Hinweise aus. `seo.allowIndexing = true` gibt die Seite für Suchmaschinen frei.

## Kontaktformular

Ohne `contactForm.endpoint` läuft das Formular im **Demo-Modus** (vollständige Validierung, keine Übertragung).
Für echten Versand einen JSON-fähigen Endpunkt eintragen (z. B. Formspree, Web3Forms oder eigenes Backend), Zusatzfelder wie `access_key` über `extraFields`, und den Dienst unter `providerName` für die Datenschutzerklärung benennen.

## SEO & Hosting

`npm run build` erzeugt für jede Route eine vollständig vorgerenderte HTML-Datei (`dist/<route>/index.html`) mit Titel, Description, Canonical, Open Graph, Twitter Card und JSON-LD (Organization, WebSite, BreadcrumbList) sowie `404.html`, `sitemap.xml`, `robots.txt` und `site.webmanifest`.
Der Ordner `dist/` kann auf jedem statischen Hosting veröffentlicht werden (GitHub Pages, Netlify, Cloudflare Pages, Apache, nginx). Vorher `siteUrl` in `site.config.ts` auf die echte Domain setzen.

## Bildnachweise

Fotos: Unsplash (Unsplash-Lizenz). Icons: Lucide (ISC). Schriften: Manrope, Cormorant Garamond (SIL OFL), lokal eingebunden via Fontsource – keine Verbindung zu Google Fonts.
