import React from 'react';
import styles from './VisionSection.module.css';

const VisionSection: React.FC = () => {
  return (
    <section id="vision" className={styles.VisionSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Наше бачення</h2>

        <img
          src="/vision-one.png"
          srcSet="/vision-one.png 1x, /vision-one@2x.png 2x"
          alt="Волонтерка пакує коробки"
          className={styles.photo}
        />

        <p className={styles.text}>
          Ми віримо в сильну, незалежну, вільну Україну — країну, де кожен живе у безпеці, гідності й надії.
              </p>
              
              <p className={styles.text}>
          Ми бачимо, як днями та ночами народжується нова реальність:</p>

        <ul className={styles.list}>
          <li>де наші захисники мають усе необхідне спорядження і підтримку, щоб стояти на передовій;</li>
          <li>де громадяни, волонтери, бізнес і держава працюють як єдиний механізм захисту й відбудови;</li>
          <li>де тил — це не просто слово, а мовчазна, але потужна сила, яка підсилює фронт.</li>
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
