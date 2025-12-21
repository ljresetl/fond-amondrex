import React, { useEffect, useRef } from 'react';
import styles from './MobileMenu.module.css';

// Іконка закриття меню
import closeIcon from '/CloseMenu.svg';

// Перемикач мови та кнопка підтримки
import LanguageSwitcher from '../header/LanguageSwitcher/LanguageSwitcher';
import SupportButton from '../header/SupportButton/SupportButton';

// Переклади для пунктів меню
import translations from '../../translations/header.json';

// Тип пропсів, які отримує мобільне меню
type Props = {
  onClose: () => void;                 // функція закриття меню
  lang: 'UA' | 'EN';                   // поточна мова
  setLang: (lang: 'UA' | 'EN') => void; // зміна мови
};

const MobileMenu: React.FC<Props> = ({ onClose, lang, setLang }) => {
  // Посилання на DOM-елемент меню — потрібно для визначення кліку поза меню
  const menuRef = useRef<HTMLDivElement>(null);

  // Отримуємо переклади для пунктів меню
  const t = translations[lang].menu;

  // ----------------------------------------
  // Закриття меню при кліку поза його межами
  // ----------------------------------------
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Якщо клік був поза меню — закриваємо
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // При демонтажі компонента — прибираємо слухач
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    // Напівпрозорий фон позаду меню
    <div className={styles.overlay}>
      
      {/* Саме меню */}
      <nav className={styles.menu} ref={menuRef}>

        {/* Верхня панель: перемикач мови + кнопка закриття */}
        <div className={styles.topBar}>
          <LanguageSwitcher onChange={setLang} />

          <button 
            className={styles.closeBtn} 
            onClick={onClose} 
            aria-label="Закрити меню"
          >
            <img src={closeIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        {/* 
          Список навігаційних посилань.
          Кожен пункт — перекладений.
          onClick={onClose} закриває меню після переходу.
        */}
        <ul className={styles.list}>
          <li><a href="#partners" onClick={onClose}>{t.becomePartner}</a></li>
          <li><a href="#collections" onClick={onClose}>{t.activeCollections}</a></li>
          <li><a href="#mission" onClick={onClose}>{t.mission}</a></li>
          <li><a href="#vision" onClick={onClose}>{t.vision}</a></li>
          <li><a href="#values" onClick={onClose}>{t.values}</a></li>
          <li><a href="#how-we-work" onClick={onClose}>{t.howWeWork}</a></li>
        </ul>

        {/* Велика кнопка підтримки внизу меню */}
        <SupportButton
          lang={lang}
          className={styles.bigButton}
        />

      </nav>
    </div>
  );
};

export default MobileMenu;
