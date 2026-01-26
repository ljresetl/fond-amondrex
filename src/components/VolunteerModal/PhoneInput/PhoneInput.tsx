import React from "react";
import styles from "./PhoneInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

const PhoneInput: React.FC<Props> = ({ value, onChange, error }) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // дозволяємо тільки + і цифри
    val = val.replace(/[^+\d]/g, "");

    // якщо користувач почав вводити цифри без + — додаємо його
    if (val && !val.startsWith("+")) {
      val = "+" + val;
    }

    // стандарт E.164 — максимум 15 цифр після +
    const digits = val.replace(/\D/g, "");
    if (digits.length > 15) {
      val = "+" + digits.slice(0, 15);
    }

    onChange(val);
  };

  return (
    <input
      value={value}
      onChange={handlePhoneChange}
      placeholder="+420..., +380..., +48..., +1..."
      className={error ? styles.errorInput : styles.input}
      autoComplete="off"
    />
  );
};

export default PhoneInput;
