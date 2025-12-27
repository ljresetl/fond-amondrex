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

const App: React.FC = () => {
  // Мова
  const [lang, setLang] = useState<'UA' | 'EN'>(
    (localStorage.getItem('lang') as 'UA' | 'EN') || 'UA'
  )

  // Стан модалки
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Повідомлення про успіх
  const [successMessage, setSuccessMessage] = useState('')

  const handleSuccess = () => {
    setSuccessMessage('Повідомлення доставлено')

    // Автоматичне приховування через 5 секунд
    setTimeout(() => {
      setSuccessMessage('')
    }, 2000)
  }

  return (
    <>
      {/* Header */}
      <Header lang={lang} setLang={setLang} />

      {/* Контент */}
      <HeroBlock lang={lang} openVolunteerModal={() => setIsModalOpen(true)} />
      <PartnersButtons lang={lang} />
      <ActiveSection lang={lang} />
      <MissionSection lang={lang} />
      <VisionSection lang={lang} />
      <ValuesSection lang={lang} />
      <HowWeWorkSection lang={lang} />
      <SupportCallSection lang={lang} />
      <Footer lang={lang} />

      {/* Модалка волонтера */}
      {isModalOpen && (
        <VolunteerModal
          onClose={() => setIsModalOpen(false)}
          onSuccess={handleSuccess}
        />
      )}

      {/* Повідомлення про успіх */}
      {successMessage && (
        <div className="success-banner">
          {successMessage}
        </div>
      )}
    </>
  )
}

export default App
