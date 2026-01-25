import React from 'react';
import styles from './Footer.module.css';

import { SiTiktok, SiInstagram, SiThreads } from "react-icons/si";
import translations from '../../translations/footer.json';

type Props = {
  lang: 'UA' | 'EN';
};

const Footer: React.FC<Props> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Ліва частина */}
        <div className={styles.left_all}>
          <div className={styles.left}>
            <img
              src="/logo2.png"
              alt="Логотип"
              className={styles.logo}
            />
            <p className={styles.description}>{t.foundation}</p>
          </div>

          {/* Навігація */}
          <div className={styles.center}>
            <ul className={styles.nav}>
              <li className={styles.navItem}>
                <a href="/?scrollTo=partners">{t.partners}</a>
              </li>

              <li className={styles.navItem}>
                <a href="/?scrollTo=collections">{t.collections}</a>
              </li>

              <li className={styles.navItem}>
                <a href="/?scrollTo=mission">{t.mission}</a>
              </li>

              <li className={styles.navItem}>
                <a href="/?scrollTo=vision">{t.vision}</a>
              </li>

              <li className={styles.navItem}>
                <a href="/?scrollTo=values">{t.values}</a>
              </li>

              <li className={styles.navItem}>
                <a href="/?scrollTo=how-we-work">{t.how}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Права частина */}
        <div className={styles.right_all}>

          {/* Соцмережі */}
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

          {/* Юридичні посилання */}
          <div className={styles.right}>
            <a href="#">{t.terms}</a>
            <a href="#">{t.privacy}</a>
            <a href="#">{t.rights}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
