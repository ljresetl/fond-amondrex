import React from 'react';
import styles from './MissionSection.module.css';

// Імпортуємо переклади для секції "Наша місія".
// JSON містить тексти для UA та EN.
import translations from '../../translations/mission.json';

// Тип пропсів — компонент отримує лише поточну мову
type Props = {
  lang: 'UA' | 'EN';
};

export const MissionSection: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для поточної мови
  const t = translations[lang];

  return (
    <div className={styles.MissionSection}>
      <div className={styles.container}>
        
        {/* Заголовок секції — перекладений */}
        <h2 id="mission" className={styles.heading}>{t.title}</h2>

        {/* Перший абзац тексту — перекладений */}
        <p className={styles.text}>{t.p1}</p>

        {/* 
          Список ключових пунктів місії.
          Кожен пункт перекладений через JSON.
        */}
        <ul className={styles.list}>
          <li>{t.li1}</li>
          <li>{t.li2}</li>
          <li>{t.li3}</li>
        </ul>

        {/* 
          Галерея зображень.
          alt-тексти поки англійською — за бажанням можна винести в JSON.
        */}
        <div className={styles.gallery}>
          <img
            src="/m1.png"
            srcSet="/m1.png 1x, /m1@2x.png 2x"
            alt="Drone and equipment"
            className={styles.photo}
          />
          <img
            src="/m2.png"
            srcSet="/m2.png 1x, /m2@2x.png 2x"
            alt="Soldier in medical facility"
            className={styles.photo}
          />
          <img
            src="/m3.png"
            srcSet="/m3.png 1x, /m3@2x.png 2x"
            alt="Drone operator"
            className={styles.photo}
          />
          <img
            src="/m4.png"
            srcSet="/m4.png 1x, /m4@2x.png 2x"
            alt="Prosthetics"
            className={styles.photo}
          />
        </div>

      </div>
    </div>
  );
};

export default MissionSection;
