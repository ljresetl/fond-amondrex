import React, { useEffect, useRef } from 'react';
import styles from './MobileMenu.module.css';

import closeIcon from '/CloseMenu.svg';

import LanguageSwitcher from '../header/LanguageSwitcher/LanguageSwitcher';
import SupportButton from '../header/SupportButton/SupportButton';

import translations from '../../translations/header.json';
import { useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
  lang: 'UA' | 'EN';
  setLang: (lang: 'UA' | 'EN') => void;
};

const MobileMenu: React.FC<Props> = ({ onClose, lang, setLang }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const t = translations[lang].menu;

  // Закриття при кліку поза меню
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // ПЕРЕХІД НА ГОЛОВНУ + scrollTo
  const goTo = (section: string) => {
    onClose();
    navigate(`/?scrollTo=${section}`);
  };

  return (
    <div className={styles.overlay}>
      <nav className={styles.menu} ref={menuRef}>

        <div className={styles.topBar}>
          <LanguageSwitcher onChange={setLang} />

          <button className={styles.closeBtn} onClick={onClose}>
            <img src={closeIcon} alt="" />
          </button>
        </div>

        <ul className={styles.list}>
          <li><button onClick={() => goTo("partners")}>{t.becomePartner}</button></li>
          <li><button onClick={() => goTo("collections")}>{t.activeCollections}</button></li>
          <li><button onClick={() => goTo("mission")}>{t.mission}</button></li>
          <li><button onClick={() => goTo("vision")}>{t.vision}</button></li>
          <li><button onClick={() => goTo("values")}>{t.values}</button></li>
          <li><button onClick={() => goTo("how-we-work")}>{t.howWeWork}</button></li>
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
