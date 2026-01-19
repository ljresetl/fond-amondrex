import React from 'react';
import styles from './SupportButton.module.css';

// Переклади кнопки SUPPORT / ПІДТРИМАТИ
import translations from '../../../translations/header.json';

type SupportButtonProps = {
  lang: 'UA' | 'EN';
  onClick?: () => void;
  className?: string;
};

const SupportButton: React.FC<SupportButtonProps> = ({
  lang,
  onClick,
  className
}) => {
  // Текст кнопки залежно від мови
  const t = translations[lang].buttons.support;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.supportBtn} ${className || ''}`}
    >
      {t}
    </button>
  );
};

export default SupportButton;
