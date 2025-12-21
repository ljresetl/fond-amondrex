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
      className={`${styles.supportBtn} ${className || ''}`}
      type="button"
      onClick={onClick}
    >
      {t}
    </button>
  );
};

export default SupportButton;
