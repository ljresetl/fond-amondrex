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
        
        <h2 id="vision" className={styles.heading}>{t.title}</h2>

        <img
          src="/vision-one.png"
          srcSet="/vision-one.png 1x, /vision-one@2x.png 2x"
          alt="Волонтерка пакує коробки"
          className={styles.photo}
        />

        <p className={styles.text}>{t.p1}</p>
        <p className={styles.text}>{t.p2}</p>

        <ul className={styles.list}>
          <li>{t.li1}</li>
          <li>{t.li2}</li>
          <li>{t.li3}</li>
        </ul>

        <img
          src="/vision-two.png"
          srcSet="/vision-two.png 1x, /vision-two@2x.png 2x"
          alt="Підняття прапора біля зруйнованої будівлі"
          className={styles.photo}
        />
      </div>
    </section>
  );
};

export default VisionSection;
