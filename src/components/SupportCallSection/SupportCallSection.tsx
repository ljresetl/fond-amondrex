import React from 'react';
import styles from './SupportCallSection.module.css';

import SupportButton from '../header/SupportButton/SupportButton';
import SupportModal from '../header/SupportButton/SupportModal';

import translations from '../../translations/supportCall.json';
import { useNavigate } from "react-router-dom";

type Props = {
  lang: 'UA' | 'EN';
};

const SupportCallSection: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  // Стан модалки
  const [isSupportOpen, setIsSupportOpen] = React.useState(false);

  const navigate = useNavigate();

  // Вибір напрямку → перехід на сторінку підтримки
  const handleSupportSelect = (direction: string) => {
    setIsSupportOpen(false);
    navigate(`/pidtrimka/${direction}`);
  };

  return (
    <section className={styles.SupportCallSection}>
      <div className={styles.container}>

        <h2 className={styles.heading}>{t.title}</h2>

        <p className={styles.text}>
          {t.p1} <br />
          {t.p2} <br />
          {t.p3}
        </p>

        {/* Кнопка відкриває модалку */}
        <SupportButton
          lang={lang}
          className={styles.bigButton}
          onClick={() => setIsSupportOpen(true)}
        />

      </div>

      {/* Модалка напрямків підтримки */}
      {isSupportOpen && (
        <SupportModal
          onClose={() => setIsSupportOpen(false)}
          lang={lang}
          onSelect={handleSupportSelect}
        />
      )}
    </section>
  );
};

export default SupportCallSection;
