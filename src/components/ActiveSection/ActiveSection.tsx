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
  const t = translations[lang];

  return (
    <div className={styles.ActiveSection}>
      <div className={styles.container}>
        
        {/* Заголовок секції — перекладений */}
        <h2 id="collections" className={styles.heading}>{t.title}</h2>

        {/* Блок статистики */}
        <div className={styles.stats}>
          
          <div className={styles.statCard}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>{t.collected}</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>{t.volunteers}</span>
          </div>

          <div className={styles.statCard}>
            <span className={styles.statValue}>0</span>
            <span className={styles.statLabel}>{t.collections}</span>
          </div>
        </div>

        {/* Галерея зображень */}
        <div className={styles.gallery}>

          <picture>
            {/* 🖥 Десктоп Retina */}
            <source
              srcSet="/img1-desktop@2x.png"
              media="(min-width: 1296px) and (min-resolution: 192dpi)"
            />
            {/* 🖥 Десктоп */}
            <source
              srcSet="/img1-desktop.png"
              media="(min-width: 1296px)"
            />

            <source
              srcSet="/img1-tablet@2x.avif"
              media="(min-width: 768px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img1-tablet.avif"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/img1@2x.avif"
              media="(max-width: 767px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img1.avif"
              media="(max-width: 767px)"
            />
            <img src="/img1.avif" alt="Єдність" className={styles.photo} />
          </picture>

          <picture>
            {/* 🖥 Десктоп Retina */}
            <source
              srcSet="/img2-desktop@2x.png"
              media="(min-width: 1296px) and (min-resolution: 192dpi)"
            />
            {/* 🖥 Десктоп */}
            <source
              srcSet="/img2-desktop.png"
              media="(min-width: 1296px)"
            />

            <source
              srcSet="/img2-tablet@2x.avif"
              media="(min-width: 768px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img2-tablet.avif"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/img2@2x.avif"
              media="(max-width: 767px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img2.avif"
              media="(max-width: 767px)"
            />
            <img src="/img2.avif" alt="Боєць з прапором" className={styles.photo} />
          </picture>

          <picture>
            {/* 🖥 Десктоп Retina */}
            <source
              srcSet="/img3-desktop@2x.png"
              media="(min-width: 1296px) and (min-resolution: 192dpi)"
            />
            {/* 🖥 Десктоп */}
            <source
              srcSet="/img3-desktop.png"
              media="(min-width: 1296px)"
            />

            <source
              srcSet="/img3-tablet@2x.avif"
              media="(min-width: 768px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img3-tablet.avif"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/img3@2x.avif"
              media="(max-width: 767px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img3.avif"
              media="(max-width: 767px)"
            />
            <img src="/img3.avif" alt="Ангел" className={styles.photo} />
          </picture>

          <picture>
            {/* 🖥 Десктоп Retina */}
            <source
              srcSet="/img4-desktop@2x.png"
              media="(min-width: 1296px) and (min-resolution: 192dpi)"
            />
            {/* 🖥 Десктоп */}
            <source
              srcSet="/img4-desktop.png"
              media="(min-width: 1296px)"
            />

            <source
              srcSet="/img4-tablet@2x.avif"
              media="(min-width: 768px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img4-tablet.avif"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/img4@2x.avif"
              media="(max-width: 767px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/img4.avif"
              media="(max-width: 767px)"
            />
            <img src="/img4.avif" alt="Камуфляж" className={styles.photo} />
          </picture>

        </div>

      </div>
    </div>
  );
};

export default ActiveSection;
