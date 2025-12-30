import React from 'react';
import styles from './ValuesSection.module.css';

import translations from '../../translations/values.json';

type Props = {
  lang: 'UA' | 'EN';
};

const ValuesSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className={styles.ValuesSection}>
      <div className={styles.container}>

        <h2 id="values" className={styles.heading}>{t.title}</h2>

        <div className={styles.content}>

          {/* Фото 1 — адаптивне */}
          <picture>
            {/* Планшет Retina */}
            <source
              srcSet="/values1-tablet@2x.avif"
              media="(min-width: 768px) and (min-resolution: 192dpi)"
            />
            {/* Планшет */}
            <source
              srcSet="/values1-tablet.avif"
              media="(min-width: 768px)"
            />
            {/* Мобільний Retina */}
            <source
              srcSet="/values1@2x.avif"
              media="(max-width: 767px) and (min-resolution: 192dpi)"
            />
            {/* Мобільний */}
            <source
              srcSet="/values1.avif"
              media="(max-width: 767px)"
            />
            <img
              src="/values1.avif"
              alt="Військові перед прапором"
              className={styles.photo}
            />
          </picture>

          {/* Текст */}
          <p className={styles.text}>{t.text}</p>

          {/* Фото 2 — адаптивне + приховане на планшеті */}
          <picture className={styles.hideOnTablet}>
            {/* Планшет Retina */}
            <source
              srcSet="/values2-tablet@2x.avif"
              media="(min-width: 768px) and (min-resolution: 192dpi)"
            />
            {/* Планшет */}
            <source
              srcSet="/values2-tablet.avif"
              media="(min-width: 768px)"
            />
            {/* Мобільний Retina */}
            <source
              srcSet="/values2@2x.avif"
              media="(max-width: 767px) and (min-resolution: 192dpi)"
            />
            {/* Мобільний */}
            <source
              srcSet="/values2.avif"
              media="(max-width: 767px)"
            />
            <img
              src="/values2.avif"
              alt="Військові та цивільні біля авто"
              className={styles.photo}
            />
          </picture>

        </div>

      </div>
    </section>
  );
};

export default ValuesSection;
