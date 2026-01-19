import React, { useRef } from "react";
import styles from "./SupportModal.module.css";

type Props = {
  onClose: () => void;
};

const SupportModal: React.FC<Props> = ({ onClose }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal}>

        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>Благодійний Фонд Амондрекс</h2>

        <div className={styles.block}>
          <p className={styles.label}>IBAN</p>
          <p className={styles.value}>UA253220010000026002700011132</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>ЄДРПОУ</p>
          <p className={styles.value}>46088898</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>Акціонерне товариство</p>
          <p className={styles.value}>УНІВЕРСАЛ БАНК</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>МФО</p>
          <p className={styles.value}>322001</p>
        </div>

        <div className={styles.block}>
          <p className={styles.label}>ЄДРПОУ Банку</p>
          <p className={styles.value}>21133352</p>
        </div>

        <div className={styles.inputBlock}>
          <label className={styles.label}>Сума переказу (грн)</label>
          <input
            type="number"
            placeholder="Введіть суму"
            className={styles.input}
          />
        </div>

        <button className={styles.sendBtn}>
          Підтвердити переказ
        </button>

      </div>
    </div>
  );
};

export default SupportModal;
