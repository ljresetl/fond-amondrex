import React from 'react'
import styles from './Logo.module.css'
import avatar from '../../../../public/logo.png'

type LogoProps = {
  href?: string
  alt?: string
}

const Logo: React.FC<LogoProps> = ({ href = '/', alt = 'logo' }) => {
  return (
   <div className={styles.logoContainer}>
        <a href={href} className={styles.logo} aria-label="Головна">
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
