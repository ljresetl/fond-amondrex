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
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={onClick}
        className={`${styles.supportBtn} ${className || ''}`}
      >
        {t}
      </button>

      {/* Технічне SEO-посилання */}
      <a
        href="/pidtrymka/families"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
          opacity: 0.01,
          pointerEvents: 'none'
        }}
      >
        families
      </a>
    </div>
  );
};

export default SupportButton;
