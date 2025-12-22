import React, { useState } from 'react';
import styles from './PartnersButtons.module.css';

// Переклади текстів для кнопок (UA / EN)
import translations from '../../translations/partnersButtons.json';

// Модальне вікно, яке відкривається при натисканні "Стати партнером"
import PartnersModal from '../PartnersModal/PartnersModal';

type Props = {
  lang: 'UA' | 'EN'; // Поточна мова інтерфейсу
};

export const PartnersButtons: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для вибраної мови
  const t = translations[lang];

  // Стан, який керує показом/приховуванням модального вікна
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.PartnersButtons}>
      <div className={styles.container}>

        {/* Заголовок секції партнерів */}
        <h2 id="partners" className={styles.heading}>
          {t.title}
        </h2>

        {/* 
          Кнопка "Стати партнером".
          При натисканні відкриває модальне вікно.
        */}
        <button
          className={styles.becomePartner}
          onClick={() => setShowModal(true)} // відкриваємо модалку
        >
          {t.becomePartner}
        </button>

        {/* Кнопка "Всі партнери" (поки без логіки) */}
        <button className={styles.allPartners}>
          {t.allPartners}
        </button>
      </div>

      {/* 
        Якщо showModal === true → показуємо модальне вікно.
        Передаємо в нього onClose, щоб модалка могла себе закрити.
      */}
      {showModal && (
        <PartnersModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default PartnersButtons;
