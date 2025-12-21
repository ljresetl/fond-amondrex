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

        <img
          src="/how1.png"
          srcSet="/how1.png 1x, /how1@2x.png 2x"
          alt="Процес роботи фонду"
          className={styles.photo}
        />

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
    </section>
  );
};

export default HowWeWorkSection;
