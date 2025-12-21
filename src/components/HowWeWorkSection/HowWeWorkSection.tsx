import React from 'react';
import styles from './HowWeWorkSection.module.css';

const HowWeWorkSection: React.FC = () => {
  return (
    <section className={styles.HowWeWorkSection}>
      <div className={styles.container}>
        <h2 id="how-we-work" className={styles.heading}>Як ми працюємо</h2>

        <img
          src="/how1.png"
          srcSet="/how1.png 1x, /how1@2x.png 2x"
          alt="Процес роботи фонду"
          className={styles.photo}
        />

        <p className={styles.text}>
          Ми будуємо нашу діяльність на принципах повної прозорості, відповідальності та максимального фокусу на результат:
        </p>
        <p className={styles.text}>
          Кожен внесок — цеглинка у фундамент нашої перемоги.
        </p>
        <p className={styles.text}>
          Кожен проєкт — чіткий план, обґрунтована потреба, відкрита звітність.
        </p>
        <p className={styles.text}>
          Кожна передача — це не просто речі чи техніка: це конкретна підтримка тим, хто зараз обороняє нашу землю.
        </p>
        <p className={styles.text}>
          Зараз, як ніколи, важливо діяти спільно. Запрошуємо вас стати частиною цього руху:
        </p>

        <ul className={styles.list}>
          <li>Вдягніться в броню віри — і долучіться до нашої спільної справи.</li>
          <li>Поширюйте інформацію: кожен репост, кожне слово — це підсилення фронту допомоги.</li>
        </ul>

        <p className={styles.text_bold}>
          Переможемо бо єдині
        </p>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
