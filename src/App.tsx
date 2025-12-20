import React from 'react'
import Header from './components/header/Header'
import HeroBlock from './components/HeroBlock/HeroBlock'
import  PartnersButtons  from './components/PartnersButtons/PartnersButtons'
import  ActiveSection  from './components/ActiveSection/ActiveSection'
import './App.css'
import MissionSection  from './components/MissionSection/MissionSection'
import VisionSection from './components/VisionSection/VisionSection'
import ValuesSection from './components/ValuesSection/ValuesSection'
import HowWeWorkSection from './components/HowWeWorkSection/HowWeWorkSection'
import TeamSection from './components/TeamSection/TeamSection'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBlock />
      <PartnersButtons />
      <ActiveSection />
      <MissionSection />
      <VisionSection />
      <ValuesSection />
      <HowWeWorkSection />
      <TeamSection />
    </>
  )
}

export default App
