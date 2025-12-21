import React from 'react';
import styles from './PartnersButtons.module.css';

export const PartnersButtons: React.FC = () => {
  return (
    <div className={styles.PartnersButtons}>
      <div className={styles.container}>
          <h2 id="partners" className={styles.heading}>Партнери</h2>
          <button className={styles.becomePartner}>СТАТИ ПАРТНЕРОМ</button>
          <button className={styles.allPartners}>УСІ ПАРТНЕРИ</button>
      </div>
    </div>
  );
};

export default PartnersButtons;