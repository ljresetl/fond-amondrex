import React from 'react';
import styles from './HowWeWorkSection.module.css';

// Імпортуємо переклади для секції "Як ми працюємо".
// JSON містить тексти для UA та EN.
import translations from '../../translations/howWeWork.json';

// Тип пропсів — компонент отримує лише поточну мову
type Props = {
  lang: 'UA' | 'EN';
};

const HowWeWorkSection: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для поточної мови
  const t = translations[lang];

  return (
    <section className={styles.HowWeWorkSection}>
      <div className={styles.container}>

        {/* Заголовок секції — перекладений */}
        <h2 id="how-we-work" className={styles.heading}>{t.title}</h2>

        {/* 
          Головне зображення секції.
          srcSet дозволяє використовувати Retina-версію (2x).
        */}
        <img
          src="/how1.png"
          srcSet="/how1.png 1x, /how1@2x.png 2x"
          alt="Процес роботи фонду"
          className={styles.photo}
        />

        {/* 
          Основні текстові блоки.
          Кожен абзац перекладений через JSON.
        */}
        <p className={styles.text}>{t.p1}</p>
        <p className={styles.text}>{t.p2}</p>
        <p className={styles.text}>{t.p3}</p>
        <p className={styles.text}>{t.p4}</p>
        <p className={styles.text}>{t.p5}</p>

        {/* 
          Список ключових пунктів.
          li1 та li2 — перекладені.
        */}
        <ul className={styles.list}>
          <li>{t.li1}</li>
          <li>{t.li2}</li>
        </ul>

        {/* Завершальний жирний текст — також перекладений */}
        <p className={styles.text_bold}>{t.bold}</p>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
