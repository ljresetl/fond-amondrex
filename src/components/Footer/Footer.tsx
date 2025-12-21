import React from 'react';
import styles from './Footer.module.css';
import { SiTiktok, SiInstagram, SiThreads } from "react-icons/si";


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
       <div className={styles.left_all}>
            <div className={styles.left}>
              <img
                src="/logo2.png"
                alt="Логотип"
                className={styles.logo}
                      />
                <p className={styles.description}>
                  Благодійний Фонд «Амондрекс»
                </p>
            </div>
    
            <div className={styles.center}>
              <ul className={styles.nav}>
                <li className={styles.navItem}><a href="#partners">Стати партнером</a></li>
                <li className={styles.navItem}><a href="#collections">Активні збори</a></li>
                <li className={styles.navItem}><a href="#mission">Наша місія</a></li>
                <li className={styles.navItem}><a href="#vision">Наше бачення</a></li>
                <li className={styles.navItem}><a href="#values">Цінності Фонду «Амондрекс»</a></li>
                <li className={styles.navItem}><a href="#how-we-work">Як ми працюємо?</a></li>
              </ul>
            </div>
    
       </div>
              <div className={styles.right_all}>
                  <div>
<ul className={styles.socials}>
  <li>
    <a 
      href="https://www.tiktok.com/@amondrexcf?_r=1&_t=ZM-92P9VXO9Ict" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <SiTiktok size={24} color="#e5f9ff" />
    </a>
  </li>

  <li>
    <a 
      href="https://www.instagram.com/amondrexcf?igsh=dThqMG5hNTlkYWoy" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <SiInstagram size={24} color="#e5f9ff" />
    </a>
  </li>

  <li>
    <a 
      href="https://www.threads.com/@amondrexcf" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <SiThreads size={24} color="#e5f9ff" />
    </a>
  </li>
</ul>

</div>

            <div className={styles.right}>
              <a href="#">Terms & Conditions</a>
                      <a href="#">Privacy Policy</a>
                      <a href="#">©2025 Company Name. All rights reserved</a>
                  </div>
                  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
