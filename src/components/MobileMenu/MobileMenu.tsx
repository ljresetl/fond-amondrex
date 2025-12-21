import React, { useEffect, useRef } from 'react';
import styles from './MobileMenu.module.css';
import closeIcon from '/CloseMenu.svg';
import LanguageSwitcher from '../header/LanguageSwitcher/LanguageSwitcher';
import SupportButton from '../header/SupportButton/SupportButton';
import translations from '../../translations/header.json';

type Props = {
  onClose: () => void;
  lang: 'UA' | 'EN';
  setLang: (lang: 'UA' | 'EN') => void;
};

const MobileMenu: React.FC<Props> = ({ onClose, lang, setLang }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const t = translations[lang].menu;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <nav className={styles.menu} ref={menuRef}>

        <div className={styles.topBar}>
          <LanguageSwitcher onChange={setLang} />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Закрити меню">
            <img src={closeIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        <ul className={styles.list}>
          <li><a href="#partners" onClick={onClose}>{t.becomePartner}</a></li>
          <li><a href="#collections" onClick={onClose}>{t.activeCollections}</a></li>
          <li><a href="#mission" onClick={onClose}>{t.mission}</a></li>
          <li><a href="#vision" onClick={onClose}>{t.vision}</a></li>
          <li><a href="#values" onClick={onClose}>{t.values}</a></li>
          <li><a href="#how-we-work" onClick={onClose}>{t.howWeWork}</a></li>
        </ul>

        <SupportButton
          lang={lang}
          className={styles.bigButton}
        />
      </nav>
    </div>
  );
};

export default MobileMenu;
