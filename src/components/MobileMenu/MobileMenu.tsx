import React, { useEffect, useRef } from 'react';
import styles from './MobileMenu.module.css';
import closeIcon from '/CloseMenu.svg';
import LanguageSwitcher from '../header/LanguageSwitcher/LanguageSwitcher';
import SupportButton from '../header/SupportButton/SupportButton';

type Props = {
  onClose: () => void;
};

const MobileMenu: React.FC<Props> = ({ onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);

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
          <LanguageSwitcher />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Закрити меню">
            <img src={closeIcon} alt="" aria-hidden="true" />
          </button>
        </div>

        <ul className={styles.list}>
          <li><a href="#partners" onClick={onClose}>Стати партнером</a></li>
          <li><a href="#collections" onClick={onClose}>Активні збори</a></li>
          <li><a href="#mission" onClick={onClose}>Наша місія</a></li>
          <li><a href="#vision" onClick={onClose}>Наше бачення</a></li>
          <li><a href="#values" onClick={onClose}>Цінності Фонду «Амондрекс»</a></li>
          <li><a href="#how-we-work" onClick={onClose}>Як ми працюємо?</a></li>
        </ul>

        <SupportButton 
  text="ПІДТРИМАТИ"
  className={styles.bigButton}
/>
      </nav>
    </div>
  );
};

export default MobileMenu;
