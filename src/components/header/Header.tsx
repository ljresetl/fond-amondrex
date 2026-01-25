import React, { useEffect, useRef } from 'react';
import styles from './Header.module.css';

import Logo from './Logo/Logo';
import SupportButton from './SupportButton/SupportButton';
import LanguageSwitcher from './LanguageSwitcher/LanguageSwitcher';
import menuIcon from '/MobilneMenu.svg';
import MobileMenu from '../MobileMenu/MobileMenu';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import SupportModal from './SupportButton/SupportModal';
import { useNavigate } from "react-router-dom";
import desktopTranslations from '../../translations/header-deskopt.json';


type Props = {
  lang: 'UA' | 'EN';
  setLang: (lang: 'UA' | 'EN') => void;
};

const Header: React.FC<Props> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [isSupportOpen, setIsSupportOpen] = React.useState(false);

  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  // Пункти меню — тепер ведуть на головну з параметром scrollTo
const t = desktopTranslations[lang].menu; const items = [ { href: "/?scrollTo=partners", label: t.becomePartner }, { href: "/?scrollTo=collections", label: t.activeCollections }, { href: "/?scrollTo=mission", label: t.mission }, { href: "/?scrollTo=vision", label: t.vision }, { href: "/?scrollTo=values", label: t.values }, { href: "/?scrollTo=how-we-work", label: t.howWeWork } ];

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

  const handleSupportSelect = (direction: string) => {
    setIsSupportOpen(false);
    navigate(`/pidtrimka/${direction}`);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>

        <Logo />

        {/* Навігація */}
        <nav className={styles.nav}>
          <ul className={styles.list}>

            {mainItems.map(item => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}

            {dropdownItems.map(item => (
              <li key={item.href} className={styles.desktopOnly}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}

            {/* Кнопка "ще" — планшет */}
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
          <SupportButton lang={lang} onClick={() => setIsSupportOpen(true)} />
          <LanguageSwitcher onChange={setLang} />
        </div>

        <button className={styles.iconBtn} onClick={() => setIsMenuOpen(true)}>
          <img src={menuIcon} alt="" className={styles.icon} />
        </button>
      </div>

      {isMenuOpen && (
        <MobileMenu
          onClose={() => setIsMenuOpen(false)}
          lang={lang}
          setLang={setLang}
        />
      )}

      {isSupportOpen && (
        <SupportModal
          onClose={() => setIsSupportOpen(false)}
          lang={lang}
          onSelect={handleSupportSelect}
        />
      )}
    </header>
  );
};

export default Header;
