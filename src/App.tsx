import React from 'react'
import Header from './components/header/Header'
import HeroBlock from './components/HeroBlock/HeroBlock'
import  PartnersButtons  from './components/PartnersButtons/PartnersButtons'
import  ActiveSection  from './components/ActiveSection/ActiveSection'
import './App.css'
import MissionSection  from './components/MissionSection/MissionSection'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HeroBlock />
      <PartnersButtons />
      <ActiveSection />
      <MissionSection />
    </>
  )
}

export default App
