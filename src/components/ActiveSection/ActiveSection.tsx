import React from 'react';
import styles from './ActiveSection.module.css';

export const ActiveSection: React.FC = () => {
  return (
    <div className={styles.ActiveSection}>
     <div className={styles.container}>
          <h2 className={styles.heading}>Активні</h2>
    
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}>Зібрано</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}>Волонтерів</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>0</span>
              <span className={styles.statLabel}>Зборів</span>
            </div>
          </div>
    
          <div className={styles.gallery}>
  <img
    src="/img1.png"
    srcSet="/img1.png 1x, /img1@2x.png 2x"
    alt="Єдність"
    className={styles.photo}
  />
  <img
    src="/img2.png"
    srcSet="/img2.png 1x, /img2@2x.png 2x"
    alt="Боєць з прапором"
    className={styles.photo}
  />
  <img
    src="/img3.png"
    srcSet="/img3.png 1x, /img3@2x.png 2x"
    alt="Ангел"
    className={styles.photo}
  />
  <img
    src="/img4.png"
    srcSet="/img4.png 1x, /img4@2x.png 2x"
    alt="Камуфляж"
    className={styles.photo}
  />
</div>

     </div>
    </div>
  );
};

export default ActiveSection;
