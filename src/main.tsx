import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/manrope';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/cormorant-garamond/600-italic.css';
import './index.css';
import App from './App';
import { ROUTER_BASENAME, stripBase } from './lib/paths';

const container = document.getElementById('root');
if (!container) throw new Error('Root-Element #root wurde nicht gefunden.');

const app = (
  <StrictMode>
    <BrowserRouter basename={ROUTER_BASENAME} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path);
const prerenderedRoute = container.dataset.route;

// Vorgerenderte Seiten werden nur hydriert, wenn das ausgelieferte HTML zur aufgerufenen
// Route gehört. Liefert der Server ein anderes Dokument aus (z. B. SPA-Fallback oder 404.html),
// wird sauber neu gerendert – so entstehen keine Hydration-Fehler.
if (
  container.firstElementChild &&
  prerenderedRoute &&
  normalizePath(prerenderedRoute) === normalizePath(stripBase(window.location.pathname))
) {
  hydrateRoot(container, app);
} else {
  container.textContent = '';
  createRoot(container).render(app);
}
