import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo/Logo'
import SupportButton from './SupportButton/SupportButton'
import TranslateButton from './LanguageSwitcher/LanguageSwitcher'
import menuIcon from '../../../public/MobilneMenu.svg'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <SupportButton />
        <TranslateButton />


        <button className={styles.iconBtn} type="button" aria-label="Відкрити меню">
          <img src={menuIcon} alt="" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}

export default Header
