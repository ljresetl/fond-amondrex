import React from 'react';
import styles from './SupportButton.module.css';

// Імпортуємо переклади з header.json.
// У цьому файлі зберігається текст кнопки "ПІДТРИМАТИ" / "SUPPORT".
import translations from '../../../translations/header.json';

// Типи пропсів, які може приймати кнопка підтримки.
type SupportButtonProps = {
  // Поточна мова інтерфейсу (UA або EN)
  lang: 'UA' | 'EN';

  // Опціональний обробник кліку — батьківський компонент може передати свою функцію
  onClick?: () => void;

  // Додатковий клас для стилізації (наприклад, великий варіант кнопки)
  className?: string;
};

// Компонент кнопки підтримки.
// Відображає текст залежно від мови та викликає onClick при натисканні.
const SupportButton: React.FC<SupportButtonProps> = ({
  lang,
  onClick,
  className
}) => {

  // Отримуємо перекладений текст кнопки.
  // translations[lang] → вибираємо потрібну мову
  // .buttons.support → дістаємо текст кнопки
  const t = translations[lang].buttons.support;

  return (
    <button
      // Основний клас + додатковий, якщо передано className
      className={`${styles.supportBtn} ${className || ''}`}
      type="button"
      onClick={onClick}
    >
      {/* Вставляємо перекладений текст */}
      {t}
    </button>
  );
};

export default SupportButton;
