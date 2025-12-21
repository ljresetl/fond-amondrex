import React from 'react';
import styles from './PartnersButtons.module.css';

// Імпортуємо переклади для секції кнопок партнерів.
// JSON містить тексти для UA та EN.
import translations from '../../translations/partnersButtons.json';

// Тип пропсів — компонент отримує лише поточну мову
type Props = {
  lang: 'UA' | 'EN';
};

export const PartnersButtons: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для поточної мови
  const t = translations[lang];

  return (
    <div className={styles.PartnersButtons}>
      <div className={styles.container}>

        {/* Заголовок секції — перекладений */}
        <h2 id="partners" className={styles.heading}>{t.title}</h2>

        {/* 
          Кнопка "Стати партнером".
          Текст береться з JSON.
        */}
        <button className={styles.becomePartner}>
          {t.becomePartner}
        </button>

        {/* 
          Кнопка "Всі партнери".
          Також перекладена.
        */}
        <button className={styles.allPartners}>
          {t.allPartners}
        </button>

      </div>
    </div>
  );
};

export default PartnersButtons;
