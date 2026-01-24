import React, { useRef } from "react";
import styles from "./SupportModal.module.css";

type Props = {
  onClose: () => void;
  onSelect: (direction: string) => void;
};

const SupportModal: React.FC<Props> = ({ onClose, onSelect }) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} ref={overlayRef} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>

        <h2 className={styles.title}>Оберіть напрямок підтримки</h2>

        <div className={styles.grid}>

          <div className={styles.section} onClick={() => onSelect("army")}>
            <div className={styles.icon}>🪖</div>
            <h3 className={styles.heading}>Підтримати армію</h3>
            <div className={styles.tags}>
              <span>Транспорт</span>
              <span>Оптика</span>
              <span>Зв’язок</span>
              <span>Дрони</span>
              <span>БПЛА</span>
              <span>Тактична медицина</span>
              <span>FPV-дрони</span>
              <span>Трофейна броня</span>
              <span>Обладнання КШМ</span>
            </div>
          </div>

          <div className={styles.section} onClick={() => onSelect("humanitarian")}>
            <div className={styles.icon}>📦</div>
            <h3 className={styles.heading}>Підтримати гуманітарний напрям</h3>
            <div className={styles.tags}>
              <span>Медичні проекти</span>
              <span>Safe & Smart</span>
              <span>Проект NEST</span>
              <span>Швидке кризове реагування</span>
            </div>
          </div>

          <div className={styles.section} onClick={() => onSelect("foundation")}>
            <div className={styles.icon}>💰</div>
            <h3 className={styles.heading}>Підтримати діяльність фонду</h3>
            <div className={styles.tags}>
              <span>Розвиток фонду</span>
              <span>Адміністративна діяльність</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SupportModal;
