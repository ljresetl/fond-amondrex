import React from 'react';
import styles from './ActiveSection.module.css';

// Імпортуємо переклади для секції.
// active.json містить тексти для UA та EN.
import translations from '../../translations/active.json';

// Тип пропсів, які приймає компонент.
// lang — поточна мова інтерфейсу.
type Props = {
  lang: 'UA' | 'EN';
};

export const ActiveSection: React.FC<Props> = ({ lang }) => {
  // Отримуємо переклади для поточної мови.
  // t.title, t.collected, t.volunteers, t.collections
  const t = translations[lang];

  return (
    <div className={styles.ActiveSection}>
      <div className={styles.container}>
        
        {/* Заголовок секції — перекладений */}
        <h2 id="collections" className={styles.heading}>{t.title}</h2>

        {/* 
          Блок статистики.
          Значення поки що статичні (0), але підписи — перекладені.
        */}
        <div className={styles.stats}>
          
          {/* Картка "Зібрано" */}
          <div className={styles.statCard}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>{t.collected}</span>
          </div>

          {/* Картка "Волонтерів" */}
          <div className={styles.statCard}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>{t.volunteers}</span>
          </div>

          {/* Картка "Зборів" */}
          <div className={styles.statCard}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>{t.collections}</span>
          </div>
        </div>

        {/* 
          Галерея зображень.
          alt-тексти поки українською — їх можна теж винести в JSON,
          якщо хочеш повний переклад.
        */}
        <div className={styles.gallery}>
          <img
            src="/img1.png"
            srcSet="/img1.png 1x, /img1@2x.png 2x"
            alt="Єдність"
            className={styles.photo}
          />
          <img
            src="/img2.png"
            srcSet="/img2.png 1x, /img2@2x.png 2x"
            alt="Боєць з прапором"
            className={styles.photo}
          />
          <img
            src="/img3.png"
            srcSet="/img3.png 1x, /img3@2x.png 2x"
            alt="Ангел"
            className={styles.photo}
          />
          <img
            src="/img4.png"
            srcSet="/img4.png 1x, /img4@2x.png 2x"
            alt="Камуфляж"
            className={styles.photo}
          />
        </div>

      </div>
    </div>
  );
};

export default ActiveSection;
