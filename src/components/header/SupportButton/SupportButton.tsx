import React from 'react';
import styles from './SupportButton.module.css';
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
