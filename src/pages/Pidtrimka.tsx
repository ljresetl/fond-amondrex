import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

import { supportLocal, supportAbroad } from "./supportContent";
import styles from "./Pidtrimka.module.css";
import SupportButton from "../components/header/SupportButton/SupportButton";
// import avatar from '../../../../public/logo2.png';

type Currency = "EUR" | "USD" | "UAH";

export default function Pidtrimka() {
  const lang: "UA" | "EN" = "UA"; // ДОДАНО

  const [amount, setAmount] = useState("0");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [isAbroad, setIsAbroad] = useState(false);
  const [copied, setCopied] = useState(false);

  const [searchParams] = useSearchParams();
  const selectedDirection =
    (searchParams.get("type") as "army" | "humanitarian" | "foundation") ||
    "army";

  const quickAmounts: Record<Currency, number[]> = {
    EUR: [20, 100, 300],
    USD: [20, 100, 300],
    UAH: [200, 500, 1000]
  };

  const iban = "UA473052990000026005026707459";

  const handleCopy = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getRightContent = () => {
    return isAbroad ? supportAbroad : supportLocal;
  };

  return (
    <>
      <Header lang="UA" setLang={() => {}} />

      <main className={styles.page}>
        <Breadcrumb type={selectedDirection} />

        <h1 className={styles.pageTitle}>
          {selectedDirection === "army" && "Підтримати армію"}
          {selectedDirection === "humanitarian" && "Підтримати гуманітарний напрям"}
          {selectedDirection === "foundation" && "Підтримати діяльність фонду"}
        </h1>

        <div className={styles.layout}>
          {/* Ліва частина */}
          <div className={`${styles.card} ${styles.left}`}>

            {/* Єдина вкладка */}
            <div className={styles.tabs}>
              <div className={`${styles.tab} ${styles.tabActive}`}>
                Внесок для підтримки
              </div>
            </div>

            {/* Сума + Валюта */}
            <div className={styles.amountRow}>
              <div className={styles.inputGroup}>
                <label>Сума</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <label>Валюта</label>
                <select
                  value={currency}
                  onChange={(e) =>
                    setCurrency(e.target.value as Currency)
                  }
                >
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="UAH">UAH</option>
                </select>
              </div>
            </div>

            {/* Швидкі суми */}
            <div className={styles.quickButtons}>
              {quickAmounts[currency].map((v) => (
                <button
                  key={v}
                  className={styles.quickBtn}
                  onClick={() =>
                    setAmount(String(Number(amount) + v))
                  }
                >
                  +{v} {currency}
                </button>
              ))}
            </div>

            {/* Профіль */}
            <div className={styles.profile}>
              <img src="/logo2.png" alt="Фонд Амондрекс" />
              <span className={styles.profileName}>Фонд Амондрекс</span>
            </div>

            {/* Кнопка */}
            <SupportButton lang={lang} className={styles.fullWidthButton} />
          </div>

          {/* Права частина */}
          <div className={`${styles.card} ${styles.right}`}>
            <label className={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={isAbroad}
                onChange={() => setIsAbroad(!isAbroad)}
              />
              Я знаходжусь за кордоном
            </label>

            <div className={styles.textBlock}>
              {getRightContent()
                .split("\n")
                .map((line, i) => (
                  <p key={i} className={styles.textLine}>
                    {line.trim()}
                  </p>
                ))}
            </div>

            <button className={styles.copyButton} onClick={handleCopy}>
              Скопіювати IBAN
            </button>

            {copied && <p className={styles.copySuccess}>Скопійовано</p>}
          </div>
        </div>
      </main>

      <Footer lang="UA" />
    </>
  );
}
