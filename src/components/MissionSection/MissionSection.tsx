import React from 'react';
import styles from './MissionSection.module.css';

import translations from '../../translations/mission.json';

type Props = {
  lang: 'UA' | 'EN';
};

export const MissionSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className={styles.MissionSection}>
      <div className={styles.container}>

        <h2 id="mission" className={styles.heading}>{t.title}</h2>

        <p className={styles.text}>{t.p1}</p>

        <ul className={styles.list}>
          <li>{t.li1}</li>
          <li>{t.li2}</li>
          <li>{t.li3}</li>
        </ul>

        <div className={styles.gallery}>

          {/* m1 */}
          <picture>
            <source
              srcSet="/m1-tablet@2x.avif"
              media="(min-width: 768px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/m1-tablet.avif"
              media="(min-width: 768px)"
            />
            <source
              srcSet="/m1@2x.avif"
              media="(max-width: 767px) and (min-resolution: 192dpi)"
            />
            <source
              srcSet="/m1.avif"
              media="(max-width: 767px)"
            />
            <img src="/m1.avif" alt="Drone and equipment" className={styles.photo} />
          </picture>

          {/* m2 */}
          <picture>
            <source srcSet="/m2-tablet@2x.avif" media="(min-width: 768px) and (min-resolution: 192dpi)" />
            <source srcSet="/m2-tablet.avif" media="(min-width: 768px)" />
            <source srcSet="/m2@2x.avif" media="(max-width: 767px) and (min-resolution: 192dpi)" />
            <source srcSet="/m2.avif" media="(max-width: 767px)" />
            <img src="/m2.avif" alt="Soldier in medical facility" className={styles.photo} />
          </picture>

          {/* m3 */}
          <picture>
            <source srcSet="/m3-tablet@2x.avif" media="(min-width: 768px) and (min-resolution: 192dpi)" />
            <source srcSet="/m3-tablet.avif" media="(min-width: 768px)" />
            <source srcSet="/m3@2x.avif" media="(max-width: 767px) and (min-resolution: 192dpi)" />
            <source srcSet="/m3.avif" media="(max-width: 767px)" />
            <img src="/m3.avif" alt="Drone operator" className={styles.photo} />
          </picture>

          {/* m4 */}
          <picture>
            <source srcSet="/m4-tablet@2x.avif" media="(min-width: 768px) and (min-resolution: 192dpi)" />
            <source srcSet="/m4-tablet.avif" media="(min-width: 768px)" />
            <source srcSet="/m4@2x.avif" media="(max-width: 767px) and (min-resolution: 192dpi)" />
            <source srcSet="/m4.avif" media="(max-width: 767px)" />
            <img src="/m4.avif" alt="Prosthetics" className={styles.photo} />
          </picture>

        </div>

      </div>
    </div>
  );
};

export default MissionSection;
