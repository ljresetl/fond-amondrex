import React from 'react';
import styles from './MissionSection.module.css';

export const MissionSection: React.FC = () => {
  return (
    <div id="mission" className={styles.MissionSection}>
     <div className={styles.container}  >
          <h2 className={styles.heading}>Наша місія</h2>
    
          <p className={styles.text}>
            Надійно та системно підтримувати ЗСУ та захисників. Ефективна оборона неможлива без постійної допомоги.
          </p>
    
          <ul className={styles.list}>
            <li>Закупівля та доставка сучасного обладнання, дронів, медичної допомоги.</li>
            <li>Реабілітація поранених та допомога після боїв.</li>
            <li>Ініціативи для зміцнення обороноздатності та єдності суспільства.</li>
          </ul>
    
          <div className={styles.gallery}>
            <img
              src="/m1.png"
              srcSet="/m1.png 1x, /m1@2x.png 2x"
              alt="Дрон та спорядження"
              className={styles.photo}
            />
            <img
              src="/m2.png"
              srcSet="/m2.png 1x, /m2@2x.png 2x"
              alt="Військовий у медзакладі"
              className={styles.photo}
            />
            <img
              src="/m3.png"
              srcSet="/m3.png 1x, /m3@2x.png 2x"
              alt="Оператор дрону"
              className={styles.photo}
            />
            <img
              src="/m4.png"
              srcSet="/m4.png 1x, /m4@2x.png 2x"
              alt="Протезування"
              className={styles.photo}
            />
          </div>
     </div>
    </div>
  );
};

export default MissionSection;