import React, { useRef } from "react";
import styles from "./SupportModal.module.css";
import translations from "../../../translations/supportModal.json";

type Props = {
  lang: "UA" | "EN";
  onClose: () => void;
  onSelect: (direction: string) => void;
};

const SupportModal: React.FC<Props> = ({ lang, onClose, onSelect }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const t = translations[lang];

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <h2 className={styles.title}>{t.title}</h2>

        <div className={styles.grid}>

          {/* ARMY */}
          <div className={styles.section} onClick={() => onSelect("army")}>
            <div className={styles.icon}>🪖</div>
            <h3 className={styles.heading}>{t.army.title}</h3>
            <div className={styles.tags}>
              {t.army.tags.map((tag: string, i: number) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>

          {/* FAMILIES */} <div className={styles.section} onClick={() => onSelect("families")}> <div className={styles.icon}>👨‍👩‍👧‍👦</div> <h3 className={styles.heading}>{t.families.title}</h3> <div className={styles.tags}> {t.families.tags.map((tag: string, i: number) => ( <span key={i}>{tag}</span> ))} </div> </div>

          {/* FOUNDATION */}
          <div className={styles.section} onClick={() => onSelect("foundation")}>
            <div className={styles.icon}>💰</div>
            <h3 className={styles.heading}>{t.foundation.title}</h3>
            <div className={styles.tags}>
              {t.foundation.tags.map((tag: string, i: number) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SupportModal;
