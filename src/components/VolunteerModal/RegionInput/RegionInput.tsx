import React, { useState, useRef } from "react";
import styles from "./RegionInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  error?: boolean;
}

const regions = [
  "Вінницька",
  "Волинська",
  "Дніпропетровська",
  "Донецька",
  "Житомирська",
  "Закарпатська",
  "Запорізька",
  "Івано-Франківська",
  "Київська",
  "Кіровоградська",
  "Луганська",
  "Львівська",
  "Миколаївська",
  "Одеська",
  "Полтавська",
  "Рівненська",
  "Сумська",
  "Тернопільська",
  "Харківська",
  "Херсонська",
  "Хмельницька",
  "Черкаська",
  "Чернівецька",
  "Чернігівська",
  "м. Київ",
];

const RegionInput: React.FC<Props> = ({ value, onChange, error }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);

    if (!val.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = regions.filter((r) =>
      r.toLowerCase().startsWith(val.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSelect = (region: string) => {
    onChange(region);
    setSuggestions([]);
  };

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <input
        value={value}
        onChange={handleInput}
        placeholder="Ваша відповідь"
        className={error ? styles.errorInput : styles.input}
        autoComplete="off"
      />

      {suggestions.length > 0 && (
        <ul className={styles.suggestions}>
          {suggestions.map((item) => (
            <li key={item} onClick={() => handleSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RegionInput;
