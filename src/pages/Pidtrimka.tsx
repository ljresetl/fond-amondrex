import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import PartnersModal from "../components/PartnersModal/PartnersModal";
import styles from "./Pidtrimka.module.css";
import SupportButton from "../components/header/SupportButton/SupportButton";
import translations from "../translations/pidtrimka-left.json";
import rightTranslations from "../translations/pidtrimka-right.json";
type Currency = "EUR" | "USD" | "UAH"; type Props = { lang: "UA" | "EN"; setLang: (lang: "UA" | "EN") => void; };
const Pidtrimka: React.FC<Props> = ({ lang, setLang }) => {
  const t = translations[lang]; const tr = rightTranslations[lang];
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);
  const [amount, setAmount] = useState("0");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [isAbroad, setIsAbroad] = useState(false);
  const [limitMessage, setLimitMessage] = useState("");
  const { type } = useParams();
  const selectedDirection = (type as "army" | "families" | "foundation") || "army";
  const quickAmounts: Record<Currency, number[]> = { EUR: [20, 100, 300], USD: [20, 100, 300], UAH: [200, 500, 1000], };
  const EUR_RATE = 40; const USD_RATE = 37;
  const MAX_MONO_AMOUNT = 29999;
  const convertToUAH = (amount: number, currency: Currency) =>
  {
    switch (currency) {
      case "EUR": return Math.round(amount * EUR_RATE);
      case "USD": return Math.round(amount * USD_RATE);
      case "UAH": return Math.round(amount); default: return Math.round(amount);
    }
  }; const getMaxAllowedInCurrency = (currency: Currency): number =>
  {
    switch (currency) {
      case "EUR": return Math.floor(MAX_MONO_AMOUNT / EUR_RATE);
      case "USD": return Math.floor(MAX_MONO_AMOUNT / USD_RATE);
      case "UAH": return MAX_MONO_AMOUNT; default: return MAX_MONO_AMOUNT;
    }
  }; let convertedAmount = convertToUAH(Number(amount), currency); if (!convertedAmount || convertedAmount < 10) { convertedAmount = 10; } return (
 <>
        <Header lang={lang} setLang={setLang} />
        <main className={styles.page}>
          <Breadcrumb type={selectedDirection} lang={lang} />

        <h1 className={styles.pageTitle}>
          {selectedDirection === "army" && t.title.army}
          {selectedDirection === "families" && t.title.families}
          {selectedDirection === "foundation" && t.title.foundation} </h1>

          <div className={styles.layout}>
{/* Ліва частина */}
<div className={`${styles.card} ${styles.left}`}>
  <div className={styles.tabs}>
    <div className={`${styles.tab} ${styles.tabActive}`}>
      {t.tab}
    </div>
  </div>

  <div className={styles.amountRow}>
    {/* Сума */}
    <div className={styles.inputGroup}>
      <label>{t.amount}</label>

      <input
        type="number"
        value={amount}
        onFocus={() => amount === "0" && setAmount("")}
onChange={(e) => {
  const raw = e.target.value.replace(/^0+/, "");
  const newAmount = raw === "" ? "0" : raw;

  setAmount(newAmount);

  const numericAmount = Number(newAmount);
  const converted = convertToUAH(numericAmount, currency);

  if (converted > MAX_MONO_AMOUNT) {
    const maxInCurrency = getMaxAllowedInCurrency(currency);
    const currencyLabel = t.currencyNames[currency];

    const message = t.limitMessage
      .replace("{max}", String(MAX_MONO_AMOUNT))
      .replaceAll("{currency}", currencyLabel)
      .replace("{converted}", String(maxInCurrency));

    setLimitMessage(message);
  } else {
    setLimitMessage("");
  }
}}

      />
    </div>

    {/* Повідомлення про ліміт */}
    {limitMessage && (
      <div className={styles.limitWarning}>{limitMessage}</div>
    )}

    {/* Валюта */}
    <div className={styles.inputGroup}>
      <label>{t.currency}</label>
      <select
  value={currency}
  onChange={(e) => {
    const newCurrency = e.target.value as Currency;
    setCurrency(newCurrency);

    const numericAmount = Number(amount);
    const converted = convertToUAH(numericAmount, newCurrency);

    if (converted > MAX_MONO_AMOUNT) {
      const maxInCurrency = getMaxAllowedInCurrency(newCurrency);
      const currencyLabel = t.currencyNames[newCurrency];

      const message = t.limitMessage
        .replace("{max}", String(MAX_MONO_AMOUNT))
        .replaceAll("{currency}", currencyLabel)
        .replace("{converted}", String(maxInCurrency));

      setLimitMessage(message);
    } else {
      setLimitMessage("");
    }
  }}
>
  <option value="EUR">EUR</option>
  <option value="USD">USD</option>
  <option value="UAH">UAH</option>
</select>

    </div>
  </div>

  {/* Швидкі кнопки */}
  <div className={styles.quickButtons}>
    {quickAmounts[currency].map((v) => (
      <button
        key={v}
        className={styles.quickBtn}
        onClick={() => setAmount(String(Number(amount) + v))}
      >
        +{v} {currency}
      </button>
    ))}
  </div>

  {/* Профіль */}
  <div className={styles.profile}>
    <img src="/logo2.png" alt={t.foundationName} />
    <span className={styles.profileName}>{t.foundationName}</span>
  </div>

  {/* Кнопка підтримки */}
  <a
    href={`https://send.monobank.ua/jar/4HivR59zpP?amount=${convertedAmount}&comment=Pidtrimka`}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.fullWidthButton}
  >
    <SupportButton lang={lang} className={styles.fullWidthButton} />
  </a>
</div>


{/* Права частина */}
<div className={styles.right}>

  {/* Блок 1 — Перемикач країни */}
  <div className={`${styles.section} ${styles.switchSection}`}>
    <div className={styles.switchRow}>
      <span className={styles.switchLabel}>
        {isAbroad ? tr.switch.abroad : tr.switch.inUkraine}
      </span>

      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={isAbroad}
          onChange={() => setIsAbroad(!isAbroad)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </div>

  {/* Режим: За кордоном */}
  {isAbroad && (
    <div className={`${styles.section} ${styles.abroadSection}`}>

      <h3 className={styles.sectionAbroadTitle}>{tr.abroad.title}</h3>

      <div className={styles.textBlock}>
        <p className={styles.textLineS}>{tr.abroad.swift}</p>

        <p className={styles.textLine}>
          {tr.abroad.legal}{" "}
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => setIsPartnersModalOpen(true)}
          >
            {tr.abroad.legalLink}
          </button>
          .
        </p>

        {/* <p className={styles.textLine}>{tr.abroad.beneficiary}</p>
        <p className={styles.textLine}>{tr.abroad.beneficiaryAddress}</p>
        <p className={styles.textLine}>{tr.abroad.bank}</p>
        <p className={styles.textLine}>{tr.abroad.bankAddress}</p>
        <p className={styles.textLine}>{tr.abroad.swiftCode}</p> */}

        <ul className={styles.list}>
          {tr.abroad.donationPurposes.map((item, i) => (
            <li key={i}>- {item}</li>
          ))}
        </ul>

        <div className={styles.bankDetails}>
          <p className={styles.textLine}>{tr.abroad.currencies}</p>

          <div className={styles.bankDetailsRow}>
            <p className={styles.iban}>UA253220010000026002700011132</p>

            <button
              className={styles.copyButton}
              onClick={() =>
                navigator.clipboard.writeText("UA253220010000026002700011132")
              }
            >
              {tr.abroad.copy}
            </button>
          </div>
        </div>
      </div>

      <p className={styles.textLineD}>{tr.abroad.disclaimer}</p>
    </div>
  )}

  {/* Режим: В Україні */}
  {!isAbroad && (
    <>
      {/* Блок 2 — Банківський переказ */}
      <div className={`${styles.section} ${styles.bankSection}`}>
        <h3 className={styles.sectionTitle}>{tr.bank.title}</h3>

        <p className={styles.textLine}>
          {tr.bank.legal}{" "}
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => setIsPartnersModalOpen(true)}
          >
            {tr.bank.legalLink}
          </button>
          .
        </p>

        <p className={styles.textLine}>{tr.bank.foundation}</p>
        <p className={styles.textLine}>{tr.bank.edrpou}</p>

        <p className={styles.textLine}>{tr.bank.choosePurpose}</p>
        <ul className={styles.list}>
          {tr.bank.purposes.map((item, i) => (
            <li key={i}>- {item}</li>
          ))}
        </ul>

        <div className={styles.bankDetails}>
          <p className={styles.textLine}>{tr.bank.uah}</p>

          <div className={styles.copyRow}>
            <p className={styles.iban}>UA253220010000026002700011132</p>
            <button
              className={styles.copyButton}
              onClick={() =>
                navigator.clipboard.writeText("UA253220010000026002700011132")
              }
            >
              {tr.bank.copy}
            </button>
          </div>
        </div>
      </div>

      {/* Блок 3 — Переказ на карту */}
      <div className={`${styles.section} ${styles.bankSection}`}>
        <h3 className={styles.sectionTitle}>{tr.card.title}</h3>

        <p className={styles.textLine}>{tr.card.receiver}</p>
        <p className={styles.textLine}>{tr.card.iban}</p>
        <p className={styles.textLine}>{tr.card.edrpou}</p>
        <p className={styles.textLine}>{tr.card.purpose}</p>

        <div className={styles.bankDetails}>
          <div className={styles.copyRow}>
            <p className={styles.cardPay}>5408 8100 4218 4266</p>
            <button
              className={styles.copyButton}
              onClick={() =>
                navigator.clipboard.writeText("5408810042184266")
              }
            >
              {tr.card.copy}
            </button>
          </div>
        </div>
      </div>

      {/* Блок 4 — Crypto */}
      <div className={`${styles.section} ${styles.cryptoSection}`}>
        <h3 className={styles.sectionTitle}>{tr.crypto.title}</h3>

        {[
          ["Bitcoin (BTC)", "1LJaFL2Yw4CD5yxFq8rtiF9NWGhPcvDhDY"],
          ["Ethereum ETH (ERC-20)", "0x973218f04ea4204fab32082ede9f2372abdba286"],
          ["Tether USDT (TRC20)", "TP6TKcDAavW5K49WQJ5Jf1WNKoqpQBJogu"],
          ["Solana (SOL)", "AFxaLYv1efipBXCoKHzzjyoarmA2opJpKiD7hUJRCMaG"]
        ].map(([label, value]) => (
          <div key={label} className={styles.cryptoItem}>
            <p>{label}</p>
            <div className={styles.copyRow}>
              <p className={styles.cryptoValue}>{value}</p>
              <button
                className={styles.copyButton}
                onClick={() => navigator.clipboard.writeText(value)}
              >
                {tr.crypto.copy}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )}

</div>


          </div>
{isPartnersModalOpen && ( <PartnersModal onClose={() => setIsPartnersModalOpen(false)} onSuccess={() => console.log("Success")} lang={lang} /> )}

        </main>

        <Footer lang={lang} />
      </>
  );
};

export default Pidtrimka;


