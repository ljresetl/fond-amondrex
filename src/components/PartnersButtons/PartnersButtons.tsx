import React from 'react';
import styles from './PartnersButtons.module.css';
import translations from '../../translations/partnersButtons.json';

type Props = {
  lang: 'UA' | 'EN';
};

export const PartnersButtons: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className={styles.PartnersButtons}>
      <div className={styles.container}>
        <h2 id="partners" className={styles.heading}>{t.title}</h2>

        <button className={styles.becomePartner}>
          {t.becomePartner}
        </button>

        <button className={styles.allPartners}>
          {t.allPartners}
        </button>
      </div>
    </div>
  );
};

export default PartnersButtons;
