import React from 'react';
import styles from './VisionSection.module.css';

// Імпортуємо переклади для секції "Бачення".
// JSON містить тексти для UA та EN.
import translations from '../../translations/vision.json';

// Тип пропсів — компонент отримує лише поточну мову
type Props = {
  lang: 'UA' | 'EN';
};

const VisionSection: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для поточної мови
  const t = translations[lang];

  return (
    <section className={styles.VisionSection}>
      <div className={styles.container}>

        {/* Заголовок секції — перекладений */}
        <h2 id="vision" className={styles.heading}>{t.title}</h2>

        {/* 
          Перше зображення секції.
          srcSet дозволяє використовувати Retina-версію (2x).
        */}
        <img
          src="/vision-one.png"
          srcSet="/vision-one.png 1x, /vision-one@2x.png 2x"
          alt="Волонтерка пакує коробки"
          className={styles.photo}
        />

        {/* Два основні абзаци тексту — перекладені */}
        <p className={styles.text}>{t.p1}</p>
        <p className={styles.text}>{t.p2}</p>

        {/* 
          Список ключових пунктів бачення.
          Кожен пункт перекладений через JSON.
        */}
        <ul className={styles.list}>
          <li>{t.li1}</li>
          <li>{t.li2}</li>
          <li>{t.li3}</li>
        </ul>

        {/* Друге зображення секції */}
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
