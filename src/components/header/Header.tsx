import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import SupportButton from './SupportButton/SupportButton';
import TranslateButton from './LanguageSwitcher/LanguageSwitcher';
import menuIcon from '/MobilneMenu.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <SupportButton />
        <TranslateButton />

        <button
          className={styles.iconBtn}
          type="button"
          aria-label="Відкрити меню"
          onClick={toggleMenu}
        >
          <img src={menuIcon} alt="" aria-hidden="true" className={styles.icon} />
        </button>
      </div>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;
