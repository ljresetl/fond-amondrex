import React from 'react';
import styles from './TeamSection.module.css';

// Секція "Команда" — статичний блок з фотографіями та підписами.
// Поки що без перекладу, але за бажанням можна винести тексти в JSON.
const TeamSection: React.FC = () => {
  return (
    <section className={styles.TeamSection}>
      <div className={styles.container}>

        {/* Заголовок секції (поки статичний) */}
        <h2 className={styles.heading}>Команда</h2>

        {/* 
          Один елемент команди.
          Складається з фото та підпису.
          У реальному проєкті можна замінити на масив і мапити.
        */}
        <div className={styles.member}>
          <img
            src="/team1.png"
            srcSet="/team1.png 1x, /team1@2x.png 2x"
            alt="Фото члена команди"
            className={styles.photo}
          />
          <p className={styles.caption}>Ім'я Прізвище — роль у фонді</p>
        </div>

        {/* Другий член команди */}
        <div className={styles.member}>
          <img
            src="/team1.png"
            srcSet="/team1.png 1x, /team1@2x.png 2x"
            alt="Фото члена команди"
            className={styles.photo}
          />
          <p className={styles.caption}>Ім'я Прізвище — роль у фонді</p>
        </div>

        {/* Третій член команди */}
        <div className={styles.member}>
          <img
            src="/team1.png"
            srcSet="/team1.png 1x, /team1@2x.png 2x"
            alt="Фото члена команди"
            className={styles.photo}
          />
          <p className={styles.caption}>Ім'я Прізвище — роль у фонді</p>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
