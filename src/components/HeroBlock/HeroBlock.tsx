import React from 'react'
import styles from './HeroBlock.module.css'

const HeroBlock: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img
          src="/hero-photo.png"
          srcSet="/hero-photo.png 1x, /hero-photo@2x.png 2x"
          alt="Hero"
          className={styles.heroImage}
        />
        <div className={styles.text}>
          <h1 className={styles.title}>Переможемо бо єдині</h1>
          <p className={styles.subtitle}>Благодійний Фонд «Амондрекс»</p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>ОТРИМАТИ ДОПОМОГУ</button>
          <button className={styles.secondaryBtn}>СТАТИ ВОЛОНТЕРОМ</button>
        </div>
      </div>
    </section>
  )
}

export default HeroBlock
