import React, { useState } from "react";
import styles from "./CityInput.module.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
    error?: boolean;
    cities?: string[];
}

// Обласні центри + районні центри (після реформи 2020)
const cities = [
  // Обласні центри
  "Вінниця", "Луцьк", "Дніпро", "Донецьк", "Житомир", "Ужгород", "Запоріжжя",
  "Івано-Франківськ", "Київ", "Кропивницький", "Луганськ", "Львів",
  "Миколаїв", "Одеса", "Полтава", "Рівне", "Суми", "Тернопіль",
  "Харків", "Херсон", "Хмельницький", "Черкаси", "Чернівці", "Чернігів",

  // Районні центри (після реформи)
  "Бар", "Бершадь", "Гайсин", "Жмеринка", "Козятин", "Ладижин", "Могилів-Подільський",
  "Хмільник", "Камінь-Каширський", "Ковель", "Нововолинськ", "Володимир",
  "Павлоград", "Кам'янське", "Кривий Ріг", "Марганець", "Нікополь", "Покров",
  "Синельникове", "Бахмут", "Горлівка", "Краматорськ", "Маріуполь", "Макіївка",
  "Бердичів", "Коростень", "Малин", "Новоград-Волинський",
  "Мукачево", "Хуст", "Берегове", "Чоп",
  "Бердянськ", "Мелітополь", "Енергодар",
  "Калуш", "Коломия",
  "Біла Церква", "Бориспіль", "Бровари", "Вишгород", "Фастів", "Обухів",
  "Олександрія", "Світловодськ",
  "Алчевськ", "Сєвєродонецьк", "Лисичанськ",
  "Дрогобич", "Червоноград", "Стрий",
  "Первомайськ", "Вознесенськ", "Южноукраїнськ",
  "Ізмаїл", "Чорноморськ", "Білгород-Дністровський", "Подільськ",
  "Кременчук", "Лубни", "Миргород",
  "Дубно", "Вараш", "Костопіль",
  "Конотоп", "Охтирка", "Шостка",
  "Кременець", "Чортків",
  "Ізюм", "Лозова", "Куп'янськ",
  "Нова Каховка", "Каховка",
  "Кам'янець-Подільський", "Шепетівка", "Старокостянтинів",
  "Сміла", "Умань", "Золотоноша",
  "Новодністровськ",
  "Ніжин", "Прилуки"
];

const CityInput: React.FC<Props> = ({ value, onChange, error }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    onChange(val);

    if (!val.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = cities.filter((c) =>
      c.toLowerCase().startsWith(val.toLowerCase())
    );

    setSuggestions(filtered);
  };

  const handleSelect = (city: string) => {
    onChange(city);
    setSuggestions([]);
  };

  return (
    <div className={styles.wrapper}>
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

export default CityInput;
