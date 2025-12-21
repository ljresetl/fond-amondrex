import React, { useState } from 'react';
import styles from './LanguageSwitcher.module.css';

type Props = {
  onChange: (lang: 'UA' | 'EN') => void;
};

const LanguageSwitcher: React.FC<Props> = ({ onChange }) => {
  const [language, setLanguage] = useState<'UA' | 'EN'>(
    (localStorage.getItem('lang') as 'UA' | 'EN') || 'UA'
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const switchLanguage = () => {
    const newLang = language === 'UA' ? 'EN' : 'UA';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
    onChange(newLang); // ← повідомляємо Header
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
