import React from 'react';
import styles from './SupportCallSection.module.css';
import SupportButton from '../header/SupportButton/SupportButton';
import translations from '../../translations/supportCall.json';

type Props = {
  lang: 'UA' | 'EN';
};

const SupportCallSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className={styles.SupportCallSection}>
      <div className={styles.container}>
        
        <h2 className={styles.heading}>{t.title}</h2>

        <p className={styles.text}>
          {t.p1} <br />
          {t.p2} <br />
          {t.p3}
        </p>

        <SupportButton 
          lang={lang}
          className={styles.bigButton}
        />
      </div>
    </section>
  );
};

export default SupportCallSection;
