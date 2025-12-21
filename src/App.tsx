import React, { useState } from 'react'
import Header from './components/header/Header'
import HeroBlock from './components/HeroBlock/HeroBlock'
import PartnersButtons from './components/PartnersButtons/PartnersButtons'
import ActiveSection from './components/ActiveSection/ActiveSection'
import './App.css'
import MissionSection from './components/MissionSection/MissionSection'
import VisionSection from './components/VisionSection/VisionSection'
import ValuesSection from './components/ValuesSection/ValuesSection'
import HowWeWorkSection from './components/HowWeWorkSection/HowWeWorkSection'
import SupportCallSection from './components/SupportCallSection/SupportCallSection'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  // 🔥 СТАН МОВИ — ТУТ!
  const [lang, setLang] = useState<'UA' | 'EN'>(
    (localStorage.getItem('lang') as 'UA' | 'EN') || 'UA'
  )

  return (
    <>
      {/* 🔥 Передаємо мову і функцію зміни мови */}
      <Header lang={lang} setLang={setLang} />

      {/* 🔥 Передаємо lang у всі секції, які мають переклад */}
      <HeroBlock lang={lang} />
      <PartnersButtons lang={lang} />
      <ActiveSection lang={lang} />
      <MissionSection lang={lang} />
      <VisionSection lang={lang} />
      <ValuesSection lang={lang} />
      <HowWeWorkSection lang={lang} />

      <SupportCallSection lang={lang} />

      <Footer lang={lang} />
    </>
  )
}

export default App
