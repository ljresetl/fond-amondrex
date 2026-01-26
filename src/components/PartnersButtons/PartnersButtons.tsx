import React, { useState } from 'react';
import styles from './PartnersButtons.module.css';
import translations from '../../translations/partnersButtons.json';
import PartnersModal from '../PartnersModal/PartnersModal';

type Props = {
  lang: 'UA' | 'EN';
  onSuccess: () => void; // ← ДОДАНО
};

export const PartnersButtons: React.FC<Props> = ({ lang, onSuccess }) => {
  const t = translations[lang];
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.PartnersButtons}>
      <div className={styles.container}>
        <h2 id="partners" className={styles.heading}>
          {t.title}
        </h2>

        <div className={styles.buttons}>
          <button
            className={styles.becomePartner}
            onClick={() => setShowModal(true)}
          >
            {t.becomePartner}
          </button>
  
          <button className={styles.allPartners}>
            {t.allPartners}
          </button>
        </div>
      </div>

      {showModal && (
        <PartnersModal
          onClose={() => setShowModal(false)}
          onSuccess={onSuccess}
          lang={lang}
        />
      )}
    </div>
  );
};

export default PartnersButtons;
