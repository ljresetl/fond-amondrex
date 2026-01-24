import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/header/Header';
import HeroBlock from './components/HeroBlock/HeroBlock';
import PartnersButtons from './components/PartnersButtons/PartnersButtons';
import ActiveSection from './components/ActiveSection/ActiveSection';
import MissionSection from './components/MissionSection/MissionSection';
import VisionSection from './components/VisionSection/VisionSection';
import ValuesSection from './components/ValuesSection/ValuesSection';
import HowWeWorkSection from './components/HowWeWorkSection/HowWeWorkSection';
import SupportCallSection from './components/SupportCallSection/SupportCallSection';
import Footer from './components/Footer/Footer';
import VolunteerModal from './components/VolunteerModal/VolunteerModal';
import PartnersModal from './components/PartnersModal/PartnersModal';

import Pidtrimka from './pages/Pidtrimka';

const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("scrollTo");

    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<'UA' | 'EN'>(
    (localStorage.getItem('lang') as 'UA' | 'EN') || 'UA'
  );

  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');

  const handleSuccess = () => {
    setSuccessMessage('Повідомлення доставлено');
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  return (
    <BrowserRouter>
      <ScrollHandler />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header lang={lang} setLang={setLang} />

              <HeroBlock lang={lang} openVolunteerModal={() => setIsVolunteerModalOpen(true)} />
              <PartnersButtons lang={lang} onSuccess={handleSuccess} />

              <section id="partners"><ActiveSection lang={lang} /></section>
              <section id="mission"><MissionSection lang={lang} /></section>
              <section id="vision"><VisionSection lang={lang} /></section>
              <section id="values"><ValuesSection lang={lang} /></section>
              <section id="how-we-work"><HowWeWorkSection lang={lang} /></section>

              <SupportCallSection lang={lang} />
              <Footer lang={lang} />

              {isVolunteerModalOpen && (
                <VolunteerModal onClose={() => setIsVolunteerModalOpen(false)} onSuccess={handleSuccess} />
              )}

              {isPartnersModalOpen && (
                <PartnersModal onClose={() => setIsPartnersModalOpen(false)} onSuccess={handleSuccess} />
              )}

              {successMessage && <div className="success-banner">{successMessage}</div>}
            </>
          }
        />

        <Route path="/pidtrimka" element={<Pidtrimka />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
