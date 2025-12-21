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
