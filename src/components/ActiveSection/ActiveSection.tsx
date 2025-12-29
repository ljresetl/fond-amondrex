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

  <picture>
    {/* Планшет Retina */}
    <source
      srcSet="/img1-tablet@2x.png"
      media="(min-width: 768px) and (min-resolution: 192dpi)"
    />

    {/* Планшет */}
    <source
      srcSet="/img1-tablet.png"
      media="(min-width: 768px)"
    />

    {/* Мобільний Retina */}
    <source
      srcSet="/img1@2x.png"
      media="(max-width: 767px) and (min-resolution: 192dpi)"
    />

    {/* Мобільний */}
    <source
      srcSet="/img1.png"
      media="(max-width: 767px)"
    />

    <img src="/img1.png" alt="Єдність" className={styles.photo} />
  </picture>

  <picture>
    <source srcSet="/img2-tablet@2x.png" media="(min-width: 768px) and (min-resolution: 192dpi)" />
    <source srcSet="/img2-tablet.png" media="(min-width: 768px)" />
    <source srcSet="/img2@2x.png" media="(max-width: 767px) and (min-resolution: 192dpi)" />
    <source srcSet="/img2.png" media="(max-width: 767px)" />
    <img src="/img2.png" alt="Боєць з прапором" className={styles.photo} />
  </picture>

  <picture>
    <source srcSet="/img3-tablet@2x.png" media="(min-width: 768px) and (min-resolution: 192dpi)" />
    <source srcSet="/img3-tablet.png" media="(min-width: 768px)" />
    <source srcSet="/img3@2x.png" media="(max-width: 767px) and (min-resolution: 192dpi)" />
    <source srcSet="/img3.png" media="(max-width: 767px)" />
    <img src="/img3.png" alt="Ангел" className={styles.photo} />
  </picture>

  <picture>
    <source srcSet="/img4-tablet@2x.png" media="(min-width: 768px) and (min-resolution: 192dpi)" />
    <source srcSet="/img4-tablet.png" media="(min-width: 768px)" />
    <source srcSet="/img4@2x.png" media="(max-width: 767px) and (min-resolution: 192dpi)" />
    <source srcSet="/img4.png" media="(max-width: 767px)" />
    <img src="/img4.png" alt="Камуфляж" className={styles.photo} />
  </picture>

</div>


      </div>
    </div>
  );
};

export default ActiveSection;
