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
          <li><a href="#" onClick={onClose}>Допомога військовим</a></li>
          <li><a href="#" onClick={onClose}>Гуманітарна допомога</a></li>
          <li><a href="#" onClick={onClose}>Збори</a></li>
          <li><a href="#" onClick={onClose}>Про Фонд</a></li>
          <li><a href="#" onClick={onClose}>Звіти</a></li>
          <li><a href="#" onClick={onClose}>Партнери</a></li>
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
