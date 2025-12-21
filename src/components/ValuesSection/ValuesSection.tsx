import React from 'react';
import styles from './ValuesSection.module.css';

// Імпортуємо переклади для секції "Цінності".
// JSON містить тексти для UA та EN.
import translations from '../../translations/values.json';

// Тип пропсів — компонент отримує лише поточну мову
type Props = {
  lang: 'UA' | 'EN';
};

const ValuesSection: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для поточної мови
  const t = translations[lang];

  return (
    <section className={styles.ValuesSection}>
      <div className={styles.container}>

        {/* Заголовок секції — перекладений */}
        <h2 id="values" className={styles.heading}>{t.title}</h2>

        {/* 
          Перше зображення секції.
          srcSet дозволяє використовувати Retina-версію (2x).
        */}
        <img
          src="/values1.png"
          srcSet="/values1.png 1x, /values1@2x.png 2x"
          alt="Військові перед прапором"
          className={styles.photo}
        />

        {/* Основний текст секції — перекладений */}
        <p className={styles.text}>{t.text}</p>

        {/* Друге зображення секції */}
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
