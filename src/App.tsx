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
import VolunteerModal from './components/VolunteerModal/VolunteerModal'
import PartnersModal from './components/PartnersModal/PartnersModal'

const App: React.FC = () => {
  const [lang, setLang] = useState<'UA' | 'EN'>(
    (localStorage.getItem('lang') as 'UA' | 'EN') || 'UA'
  )

  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false)
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false)

  const [successMessage, setSuccessMessage] = useState('')

  const handleSuccess = () => {
    setSuccessMessage('Повідомлення доставлено')

    setTimeout(() => {
      setSuccessMessage('')
    }, 2000)
  }

  return (
    <>
      <Header lang={lang} setLang={setLang} />

      <HeroBlock lang={lang} openVolunteerModal={() => setIsVolunteerModalOpen(true)} />

      <PartnersButtons
  lang={lang}
  onSuccess={handleSuccess}
/>


      <ActiveSection lang={lang} />
      <MissionSection lang={lang} />
      <VisionSection lang={lang} />
      <ValuesSection lang={lang} />
      <HowWeWorkSection lang={lang} />
      <SupportCallSection lang={lang} />
      <Footer lang={lang} />

      {isVolunteerModalOpen && (
        <VolunteerModal
          onClose={() => setIsVolunteerModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}

      {isPartnersModalOpen && (
        <PartnersModal
          onClose={() => setIsPartnersModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}

      {successMessage && (
        <div className="success-banner">
          {successMessage}
        </div>
      )}
    </>
  )
}

export default App
