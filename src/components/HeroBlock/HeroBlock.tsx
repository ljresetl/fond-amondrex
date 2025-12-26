import React, { useState } from 'react';
import styles from './HeroBlock.module.css';

import translations from '../../translations/hero.json';
import VolunteerModal from '../VolunteerModal/VolunteerModal';

type Props = {
  lang: 'UA' | 'EN';
};

const HeroBlock: React.FC<Props> = ({ lang }) => {
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);

  const t = translations[lang];

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        <img
          src="/hero-photo.png"
          srcSet="/hero-photo.png 1x, /hero-photo@2x.png 2x"
          alt="Hero"
          className={styles.heroImage}
        />

        <div className={styles.text}>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <h1 className={styles.title}>{t.title}</h1>
        </div>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            {t.helpBtn}
          </button>

          <button
            className={styles.secondaryBtn}
            onClick={() => setShowVolunteerModal(true)}
          >
            {t.volunteerBtn}
          </button>
        </div>

      </div>

      {/* Модалка */}
      {showVolunteerModal && (
        <VolunteerModal onClose={() => setShowVolunteerModal(false)} />
      )}
    </section>
  );
};

export default HeroBlock;
