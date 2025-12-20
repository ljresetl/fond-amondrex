import React from 'react';
import styles from './SupportCallSection.module.css';
import SupportButton from '../header/SupportButton/SupportButton';

const SupportCallSection: React.FC = () => {
  return (
    <section className={styles.SupportCallSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Підтримай тих, хто захищає нас</h2>

        <p className={styles.text}>
          Волонтери щодня доставляють на фронт необхідне спорядження, техніку та гуманітарну допомогу. <br />
          Кожна гривня, кожен внесок чи кілька годин твого часу — це реальна підтримка Збройних Сил України. <br />
          Разом ми сильніші, бо допомагаємо тим, хто боронить нашу свободу.
        </p>

        <SupportButton 
  text="ПІДТРИМАТИ"
  className={styles.bigButton}
/>

        <img
          src="/support-call.png"
          srcSet="/support-call.png 1x, /support-call@2x.png 2x"
          alt="Військовий із табличкою 'Хочеш допомогти?'"
          className={styles.photo}
        />
      </div>
    </section>
  );
};

export default SupportCallSection;
