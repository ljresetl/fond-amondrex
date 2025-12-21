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
                <li className={styles.navItem}><a href="#">Допомога армії</a></li>
                <li className={styles.navItem}><a href="#">Допомога</a></li>
                <li className={styles.navItem}><a href="#">Про Фонд</a></li>
                <li className={styles.navItem}><a href="#">Питання-відповіді</a></li>
                <li className={styles.navItem}><a href="#">Стати партнером</a></li>
                <li className={styles.navItem}><a href="#">Звітність</a></li>
              </ul>
            </div>
    
       </div>
              <div className={styles.right_all}>
                  <div>
  <ul className={styles.socials}>
    <li><a href="#"><SiTiktok size={24} color="#e5f9ff" /></a></li>
    <li><a href="#"><SiInstagram size={24} color="#e5f9ff" /></a></li>
    {/* <li><a href="#"><SiFacebook size={24} color="#e5f9ff" /></a></li> */}
    <li><a href="#"><SiThreads size={24} color="#e5f9ff" /></a></li>
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
