import React from 'react';
import styles from './HeroBlock.module.css';

import translations from '../../translations/hero.json';

type Props = {
  lang: 'UA' | 'EN';
  openVolunteerModal: () => void;
};

const HeroBlock: React.FC<Props> = ({ lang, openVolunteerModal }) => {
  const t = translations[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <div className={styles.content}>

          {/* Адаптивне зображення для телефону / планшету / десктопу */}
          <picture>

            {/* 🖥 Десктоп Retina */}
            <source
              srcSet="/hero-desktop@2x.png"
              media="(min-width: 1296px) and (min-resolution: 192dpi)"
            />

            {/* 🖥 Десктоп */}
            <source
              srcSet="/hero-desktop.png"
              media="(min-width: 1296px)"
            />

            {/* Планшет Retina */}
            <source
              srcSet="/hero-tablet@2x.avif"
              media="(min-width: 768px) and (-webkit-min-device-pixel-ratio: 2), 
                     (min-width: 768px) and (min-resolution: 192dpi)"
            />

            {/* Планшет звичайний */}
            <source
              srcSet="/hero-tablet.avif"
              media="(min-width: 768px)"
            />

            {/* Телефон Retina */}
            <source
              srcSet="/hero-photo@2x.avif"
              media="(max-width: 767px) and (-webkit-min-device-pixel-ratio: 2), 
                     (max-width: 767px) and (min-resolution: 192dpi)"
            />

            {/* Телефон звичайний */}
            <source
              srcSet="/hero-photo.avif"
              media="(max-width: 767px)"
            />

            {/* Фолбек */}
            <img
              src="/hero-photo.avif"
              alt="Hero"
              className={styles.heroImage}
            />
          </picture>

          <div className={styles.text}>
            <p className={styles.subtitle}>{t.subtitle}</p>
            <h1 className={styles.title}>{t.title}</h1>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            {t.helpBtn}
          </button>

          <button
            className={styles.secondaryBtn}
            onClick={openVolunteerModal}
          >
            {t.volunteerBtn}
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroBlock;
