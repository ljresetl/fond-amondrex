import React from 'react';
import styles from './VisionSection.module.css';

import translations from '../../translations/vision.json';

type Props = {
  lang: 'UA' | 'EN';
};

const VisionSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className={styles.VisionSection}>
      <div className={styles.container}>

        {/* Заголовок всередині контейнера */}
        <h2 id="vision" className={styles.heading}>{t.title}</h2>

        {/* Фото 1 — адаптивне */}
        <picture>
          {/* Планшет Retina */}
          <source
            srcSet="/vision-one-tablet@2x.png"
            media="(min-width: 768px) and (min-resolution: 192dpi)"
          />
          {/* Планшет */}
          <source
            srcSet="/vision-one-tablet.png"
            media="(min-width: 768px)"
          />
          {/* Мобільний Retina */}
          <source
            srcSet="/vision-one@2x.png"
            media="(max-width: 767px) and (min-resolution: 192dpi)"
          />
          {/* Мобільний */}
          <source
            srcSet="/vision-one.png"
            media="(max-width: 767px)"
          />
          <img
            src="/vision-one.png"
            alt="Волонтерка пакує коробки"
            className={styles.photo}
          />
        </picture>

        {/* Текстовий блок */}
        <div className={styles.textBlock}>
          <p className={styles.text}>{t.p1}</p>
          <p className={styles.text}>{t.p2}</p>
          <ul className={styles.list}>
            <li>{t.li1}</li>
            <li>{t.li2}</li>
            <li>{t.li3}</li>
          </ul>
        </div>

        {/* Фото 2 — адаптивне */}
        <picture>
          {/* Планшет Retina */}
          <source
            srcSet="/vision-two-tablet@2x.png"
            media="(min-width: 768px) and (min-resolution: 192dpi)"
          />
          {/* Планшет */}
          <source
            srcSet="/vision-two-tablet.png"
            media="(min-width: 768px)"
          />
          {/* Мобільний Retina */}
          <source
            srcSet="/vision-two@2x.png"
            media="(max-width: 767px) and (min-resolution: 192dpi)"
          />
          {/* Мобільний */}
          <source
            srcSet="/vision-two.png"
            media="(max-width: 767px)"
          />
          <img
            src="/vision-two.png"
            alt="Підняття прапора біля зруйнованої будівлі"
            className={styles.photo}
          />
        </picture>

      </div>
    </section>
  );
};

export default VisionSection;
