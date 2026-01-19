import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';

import Logo from './Logo/Logo';
import SupportButton from './SupportButton/SupportButton';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import menuIcon from '/MobilneMenu.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

// 🔥 Додаємо модалку
import SupportModal from './SupportButton/SupportModal';

type Props = {
  lang: 'UA' | 'EN';
  setLang: (lang: 'UA' | 'EN') => void;
};

const Header: React.FC<Props> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  // 🔥 Додаємо стан модалки
  const [isSupportOpen, setIsSupportOpen] = React.useState(false);

  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  // Повний список пунктів
  const items = [
    { href: "#partners", label: "Стати партнером" },
    { href: "#collections", label: "Активні збори" },
    { href: "#mission", label: "Наша місія" },
    { href: "#vision", label: "Наше бачення" },
    { href: "#values", label: "Цінності" },
    { href: "#how-we-work", label: "Як ми працюємо?" }
  ];

  const mainItems = items.slice(0, 3);
  const dropdownItems = items.slice(3);

  // Закриття dropdown при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };

    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expanded]);

  const handleDropdownClick = () => {
    setExpanded(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <Logo />

        {/* Навігація */}
        <nav className={styles.nav}>
          <ul className={styles.list}>

            {/* 3 пункти — завжди */}
            {mainItems.map(item => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}

            {/* Додаткові 3 пункти — тільки на десктопі */}
            {dropdownItems.map(item => (
              <li key={item.href} className={styles.desktopOnly}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}

            {/* Кнопка "ще" — тільки планшет */}
            <li className={styles.moreWrapper} ref={dropdownRef}>
              <button
                className={styles.moreBtn}
                onClick={() => setExpanded(prev => !prev)}
              >
                {expanded
                  ? <MdKeyboardArrowUp className={styles.chevron} />
                  : <MdKeyboardArrowDown className={styles.chevron} />
                }
              </button>

              {expanded && (
                <ul className={styles.dropdown}>
                  {dropdownItems.map(item => (
                    <li key={item.href}>
                      <a href={item.href} onClick={handleDropdownClick}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>

          </ul>
        </nav>

        <div className={styles.rightButtons}>
          {/* 🔥 Додаємо відкриття модалки */}
          <SupportButton lang={lang} onClick={() => setIsSupportOpen(true)} />
          <LanguageSwitcher onChange={setLang} />
        </div>

        {/* Бургер — тільки мобільний */}
        <button
          className={styles.iconBtn}
          type="button"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <img src={menuIcon} alt="" aria-hidden="true" className={styles.icon} />
        </button>
      </div>

      {isMenuOpen && (
        <MobileMenu
          onClose={() => setIsMenuOpen(false)}
          lang={lang}
          setLang={setLang}
        />
      )}

      {/* 🔥 Рендеримо модалку */}
      {isSupportOpen && (
        <SupportModal onClose={() => setIsSupportOpen(false)} />
      )}
    </header>
  );
};

export default Header;
