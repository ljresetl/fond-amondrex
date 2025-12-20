import React from 'react';
import styles from './TeamSection.module.css';

const TeamSection: React.FC = () => {
  return (
    <section className={styles.TeamSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Команда</h2>

        <div className={styles.member}>
          <img
            src="/team1.png"
            srcSet="/team1.png 1x, /team1@2x.png 2x"
            alt="Фото члена команди"
            className={styles.photo}
          />
          <p className={styles.caption}>Ім'я Прізвище — роль у фонді</p>
        </div>

        <div className={styles.member}>
          <img
            src="/team1.png"
            srcSet="/team1.png 1x, /team1@2x.png 2x"
            alt="Фото члена команди"
            className={styles.photo}
          />
          <p className={styles.caption}>Ім'я Прізвище — роль у фонді</p>
        </div>

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
