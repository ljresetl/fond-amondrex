import React from 'react';
import styles from './SupportCallSection.module.css';

// Кнопка підтримки — текст залежить від мови
import SupportButton from '../header/SupportButton/SupportButton';

// Переклади для секції "Підтримати"
// JSON містить тексти для UA та EN
import translations from '../../translations/supportCall.json';

// Тип пропсів — компонент отримує лише поточну мову
type Props = {
  lang: 'UA' | 'EN';
};

const SupportCallSection: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для поточної мови
  const t = translations[lang];

  return (
    <section className={styles.SupportCallSection}>
      <div className={styles.container}>

        {/* Заголовок секції — перекладений */}
        <h2 className={styles.heading}>{t.title}</h2>

        {/* 
          Основний текст секції.
          Використовуємо <br /> для розбиття на рядки,
          оскільки текст складається з трьох окремих частин.
        */}
        <p className={styles.text}>
          {t.p1} <br />
          {t.p2} <br />
          {t.p3}
        </p>

        {/* 
          Велика кнопка підтримки.
          Текст кнопки перекладається всередині SupportButton.
        */}
        <SupportButton 
          lang={lang}
          className={styles.bigButton}
        />

      </div>
    </section>
  );
};

export default SupportCallSection;
