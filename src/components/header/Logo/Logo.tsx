import React from 'react'
import styles from './Logo.module.css'

// Імпортуємо зображення логотипу з public.
// Vite дозволяє імпортувати файли як модулі.
import avatar from '../../../../public/logo2.png'

// Типи пропсів для компонента Logo.
// href — куди веде посилання при кліку на логотип
// alt — альтернативний текст для зображення (для SEO та доступності)
type LogoProps = {
  href?: string
  alt?: string
}

// Компонент Logo — простий, але важливий елемент інтерфейсу.
// Він відображає логотип і робить його клікабельним.
const Logo: React.FC<LogoProps> = ({ href = '/', alt = 'logo' }) => {
  return (
    // Контейнер для логотипу — дозволяє стилізувати блок окремо
    <div className={styles.logoContainer}>

      {/* 
        Посилання, яке веде на головну сторінку (або іншу, якщо передано href).
        aria-label="Головна" — важливо для доступності:
        screen-reader користувачі почують "Головна", а не просто "посилання".
      */}
      <a href={href} className={styles.logo} aria-label="Головна">

        {/* 
          Саме зображення логотипу.
          alt={alt} — альтернативний текст, який можна змінити через пропси.
          className — стилізація через CSS-модулі.
        */}
        <img
          src={avatar}
          alt={alt}
          className={styles.logoImg}
        />
      </a>
    </div>
  )
}

export default Logo
