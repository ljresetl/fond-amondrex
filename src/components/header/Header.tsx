import React from 'react';
import styles from './Header.module.css';

// Логотип — клікабельний елемент, який веде на головну
import Logo from './Logo/Logo';

// Кнопка підтримки — текст залежить від мови
import SupportButton from './SupportButton/SupportButton';

// Перемикач мови — керує UA / EN
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';

// Іконка мобільного меню (бургер)
import menuIcon from '/MobilneMenu.svg';

// Компонент мобільного меню, яке відкривається при натисканні на бургер
import MobileMenu from '../MobileMenu/MobileMenu';

// Типи пропсів, які Header отримує від App.tsx
type Props = {
  lang: 'UA' | 'EN';                 // поточна мова
  setLang: (lang: 'UA' | 'EN') => void; // функція зміни мови
};

const Header: React.FC<Props> = ({ lang, setLang }) => {

  // -----------------------------
  // 1) СТАН ВІДКРИТТЯ МОБІЛЬНОГО МЕНЮ
  // -----------------------------
  // isMenuOpen = false → меню закрите
  // isMenuOpen = true → меню відкрите
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // -----------------------------
  // 2) ВІДКРИТИ / ЗАКРИТИ МОБІЛЬНЕ МЕНЮ
  // -----------------------------
  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Логотип з посиланням на головну */}
        <Logo />

        {/* Кнопка підтримки — текст залежить від мови */}
        <SupportButton lang={lang} />

        {/* Перемикач мови — передаємо setLang нагору */}
        <LanguageSwitcher onChange={setLang} />

        {/* 
          Кнопка відкриття мобільного меню.
          aria-label — для доступності (screen readers).
        */}
        <button
          className={styles.iconBtn}
          type="button"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <img 
            src={menuIcon} 
            alt="" 
            aria-hidden="true" 
            className={styles.icon} 
          />
        </button>
      </div>

      {/* 
        Якщо меню відкрите — рендеримо MobileMenu.
        Передаємо:
        - onClose → щоб закрити меню
        - lang → поточна мова
        - setLang → щоб можна було змінити мову всередині меню
      */}
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
