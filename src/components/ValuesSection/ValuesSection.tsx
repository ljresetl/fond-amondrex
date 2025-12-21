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

        <img
          src="/values1.png"
          srcSet="/values1.png 1x, /values1@2x.png 2x"
          alt="Військові перед прапором"
          className={styles.photo}
        />

        <p className={styles.text}>{t.text}</p>

        <img
          src="/values2.png"
          srcSet="/values2.png 1x, /values2@2x.png 2x"
          alt="Військові та цивільні біля авто"
          className={styles.photo}
        />
      </div>
    </section>
  );
};

export default ValuesSection;
