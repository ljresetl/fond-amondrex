import React from "react";
import styles from "./EmailInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

const EmailInput: React.FC<Props> = ({ value, onChange, error }) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.trim();

    // Забороняємо пробіли
    val = val.replace(/\s+/g, "");

    // Забороняємо кирилицю
    val = val.replace(/[а-яА-ЯёЁ]/g, "");

    onChange(val);
  };

  return (
    <input
      value={value}
      onChange={handleEmailChange}
      placeholder="example@gmail.com"
      className={error ? styles.errorInput : styles.input}
      autoComplete="off"
    />
  );
};

export default EmailInput;
