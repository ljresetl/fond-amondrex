import React, { useState } from 'react';
import styles from './LanguageSwitcher.module.css';

type Props = {
  // Функція, яку ми отримуємо від батьківського компонента (Header)
  // Вона повідомляє App.tsx, що мова змінилася
  onChange: (lang: 'UA' | 'EN') => void;
};

const LanguageSwitcher: React.FC<Props> = ({ onChange }) => {
  // -----------------------------
  // 1) СТАН ПОТОЧНОЇ МОВИ
  // -----------------------------
  // Спочатку пробуємо взяти мову з localStorage.
  // Якщо там нічого немає — ставимо 'UA' за замовчуванням.
  const [language, setLanguage] = useState<'UA' | 'EN'>(
    (localStorage.getItem('lang') as 'UA' | 'EN') || 'UA'
  );

  // -----------------------------
  // 2) СТАН ВІДКРИТТЯ МЕНЮ
  // -----------------------------
  // isOpen = false → меню закрите
  // isOpen = true → меню відкрите
  const [isOpen, setIsOpen] = useState(false);

  // -----------------------------
  // 3) ВІДКРИТИ / ЗАКРИТИ МЕНЮ
  // -----------------------------
  const toggleMenu = () => setIsOpen(!isOpen);

  // -----------------------------
  // 4) ПЕРЕМИКАННЯ МОВИ
  // -----------------------------
  // Коли користувач натискає на варіант у меню:
  // - визначаємо нову мову
  // - оновлюємо локальний стан
  // - записуємо мову в localStorage
  // - повідомляємо батьківський компонент через onChange()
  // - закриваємо меню
  const switchLanguage = () => {
    const newLang = language === 'UA' ? 'EN' : 'UA';

    setLanguage(newLang);                // оновлюємо стан
    localStorage.setItem('lang', newLang); // зберігаємо в браузері
    onChange(newLang);                   // повідомляємо Header → App
    setIsOpen(false);                    // закриваємо меню
  };

  return (
    <div className={styles.wrapper}>
      
      {/* 
        Кнопка, яка показує поточну мову (UA або EN)
        і відкриває/закриває меню вибору мови.
      */}
      <button
        className={styles.button}
        onClick={toggleMenu}
        aria-label="Змінити мову"
      >
        {language}
      </button>

      {/* 
        Якщо меню відкрите — показуємо випадаючий список.
        Тут лише одна кнопка — мова, на яку можна переключитися.
      */}
      {isOpen && (
        <div className={styles.dropdown}>
          <button className={styles.option} onClick={switchLanguage}>
            {/* Якщо зараз UA → показуємо EN, і навпаки */}
            {language === 'UA' ? 'EN' : 'UA'}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
