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

    // залишаємо тільки цифри
    val = val.replace(/\D/g, "");

    // додаємо 380 якщо користувач почав вводити не з нього
    if (!val.startsWith("380")) {
      val = "380" + val;
    }

    // обмеження довжини (380 + 9 цифр = 12)
    if (val.length > 12) {
      val = val.slice(0, 12);
    }

    // фінальний формат
    const formatted = "+" + val;

    onChange(formatted);
  };

  return (
    <input
      value={value}
      onChange={handlePhoneChange}
      placeholder="+380XXXXXXXXX"
      className={error ? styles.errorInput : styles.input}
      autoComplete="off"
    />
  );
};

export default PhoneInput;
