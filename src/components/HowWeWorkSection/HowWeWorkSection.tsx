import React from 'react';
import styles from './HowWeWorkSection.module.css';

import translations from '../../translations/howWeWork.json';

type Props = {
  lang: 'UA' | 'EN';
};

const HowWeWorkSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className={styles.HowWeWorkSection}>
      <div className={styles.container}>

        <h2 id="how-we-work" className={styles.heading}>{t.title}</h2>

        <div className={styles.content}>

          <div className={styles.photos}>
            {/* Фото — адаптивне */}
            <div className={styles.photos}>
              
              {/* Перше фото — видно завжди */}
              <picture className={styles.foto_main}>

                {/* 🖥 Десктоп Retina */}
                <source
                  srcSet="/how1-desktop@2x.png"
                  media="(min-width: 1296px) and (min-resolution: 192dpi)"
                />

                {/* 🖥 Десктоп */}
                <source
                  srcSet="/how1-desktop.png"
                  media="(min-width: 1296px)"
                />

                {/* Планшет Retina */}
                <source
                  srcSet="/how1-tablet@2x.avif"
                  media="(min-width: 768px) and (min-resolution: 192dpi)"
                />

                {/* Планшет */}
                <source
                  srcSet="/how1-tablet.avif"
                  media="(min-width: 768px)"
                />

                {/* Мобільний Retina */}
                <source
                  srcSet="/how1@2x.avif"
                  media="(max-width: 767px) and (min-resolution: 192dpi)"
                />

                {/* Мобільний */}
                <source
                  srcSet="/how1.avif"
                  media="(max-width: 767px)"
                />

                <img
                  src="/how1.avif"
                  alt="Процес роботи фонду"
                  className={styles.photo}
                />
              </picture>

              {/* Друге фото — тільки на планшеті */}
              <picture className={styles.foto_tabletOnly}>
                <source
                  srcSet="/values2-tablet@2x.avif"
                  media="(min-width: 768px) and (min-resolution: 192dpi)"
                />
                <source
                  srcSet="/values2-tablet.avif"
                  media="(min-width: 768px)"
                />
                <img
                  src="/values2.avif"
                  alt="Військові та цивільні біля авто"
                  className={styles.photo}
                />
              </picture>

            </div>
          </div>

          <div className={styles.texts}>
            <p className={styles.text}>{t.p1}</p>
            <p className={styles.text}>{t.p2}</p>
            <p className={styles.text}>{t.p3}</p>
            <p className={styles.text}>{t.p4}</p>
            <p className={styles.text}>{t.p5}</p>

            <ul className={styles.list}>
              <li>{t.li1}</li>
              <li>{t.li2}</li>
            </ul>

            <p className={styles.text_bold}>{t.bold}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
