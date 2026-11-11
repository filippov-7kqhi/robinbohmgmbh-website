import { Route, Routes } from 'react-router-dom';
import { pages } from './config/pages';
import { Layout } from './components/layout/Layout';
import AboutPage from './pages/AboutPage';
import BusinessAreasPage from './pages/BusinessAreasPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ImprintPage from './pages/ImprintPage';
import InvestmentsPage from './pages/InvestmentsPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';

/** Relativer Routenpfad aus der Seitenkonfiguration (ohne führenden Schrägstrich) */
const route = (path: string) => path.replace(/^\//, '');

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={route(pages.about.path)} element={<AboutPage />} />
        <Route path={route(pages.business.path)} element={<BusinessAreasPage />} />
        <Route path={route(pages.investments.path)} element={<InvestmentsPage />} />
        <Route path={route(pages.contact.path)} element={<ContactPage />} />
        <Route path={route(pages.imprint.path)} element={<ImprintPage />} />
        <Route path={route(pages.privacy.path)} element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
