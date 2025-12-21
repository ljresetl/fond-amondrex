import React from 'react';
import styles from './Header.module.css';
import Logo from './Logo/Logo';
import SupportButton from './SupportButton/SupportButton';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import menuIcon from '/MobilneMenu.svg';
import MobileMenu from '../MobileMenu/MobileMenu';

type Props = {
  lang: 'UA' | 'EN';
  setLang: (lang: 'UA' | 'EN') => void;
};

const Header: React.FC<Props> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />

        {/* Кнопка підтримки */}
        <SupportButton lang={lang} />

        {/* Перемикач мови */}
        <LanguageSwitcher onChange={setLang} />

<button
  className={styles.iconBtn}
  type="button"
  aria-label="Open menu"
  onClick={toggleMenu}
>
  <img src={menuIcon} alt="" aria-hidden="true" className={styles.icon} />
</button>
      </div>

      {isMenuOpen && (
        <MobileMenu 
          onClose={() => setIsMenuOpen(false)}
          lang={lang}
          setLang={setLang}
        />
      )}
    </header>
  );
};

export default Header;
