import React, { useState } from 'react';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher: React.FC = () => {
  const [language, setLanguage] = useState<'UA' | 'EN'>('UA');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const switchLanguage = () => {
    setLanguage(prev => (prev === 'UA' ? 'EN' : 'UA'));
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        onClick={toggleMenu}
        aria-label="Змінити мову"
      >
        {language}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <button className={styles.option} onClick={switchLanguage}>
            {language === 'UA' ? 'EN' : 'UA'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
