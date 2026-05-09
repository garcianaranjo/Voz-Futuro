/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';

import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Florencia from './pages/Florencia';
import Cazombo from './pages/Cazombo';
import Complex from './pages/Complex';
import Sponsorship from './pages/Sponsorship';
import Sponsors from './pages/Sponsors';
import Join from './pages/Join';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="florencia" element={<Florencia />} />
            <Route path="cazombo" element={<Cazombo />} />
            <Route path="complejo" element={<Complex />} />
            <Route path="apadrinamiento" element={<Sponsorship />} />
            <Route path="patrocinadores" element={<Sponsors />} />
            <Route path="participar" element={<Join />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
