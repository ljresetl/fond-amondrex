import React from 'react'
import styles from './HeroBlock.module.css'

// Імпортуємо переклади для секції Hero.
// hero.json містить тексти для UA та EN.
import translations from '../../translations/hero.json'

// Тип пропсів — компонент отримує лише поточну мову
type Props = {
  lang: 'UA' | 'EN';
}

const HeroBlock: React.FC<Props> = ({ lang }) => {
  // Отримуємо перекладені тексти для поточної мови
  const t = translations[lang]

  return (
    <section className={styles.hero}>
      <div className={styles.container}>

        {/* 
          Головне зображення Hero-секції.
          srcSet дозволяє використовувати Retina-версію (2x).
        */}
        <img
          src="/hero-photo.png"
          srcSet="/hero-photo.png 1x, /hero-photo@2x.png 2x"
          alt="Hero"
          className={styles.heroImage}
        />

        {/* 
          Текстовий блок:
          - підзаголовок
          - головний заголовок
          Обидва тексти перекладені через JSON.
        */}
        <div className={styles.text}>
          <p className={styles.subtitle}>{t.subtitle}</p>
          <h1 className={styles.title}>{t.title}</h1>
        </div>

        {/* 
          Блок кнопок:
          - основна кнопка (допомога)
          - вторинна кнопка (стати волонтером)
          Обидві кнопки перекладені.
        */}
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>{t.helpBtn}</button>
          <button className={styles.secondaryBtn}>{t.volunteerBtn}</button>
        </div>

      </div>
    </section>
  )
}

export default HeroBlock