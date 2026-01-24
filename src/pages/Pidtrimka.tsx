import { useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import PartnersModal from "../components/PartnersModal/PartnersModal";
import styles from "./Pidtrimka.module.css";
import SupportButton from "../components/header/SupportButton/SupportButton";

type Currency = "EUR" | "USD" | "UAH";

export default function Pidtrimka() {
  const lang: "UA" | "EN" = "UA";
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);

  const [amount, setAmount] = useState("0");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [isAbroad, setIsAbroad] = useState(false);

const { type } = useParams();

const selectedDirection =
  (type as "army" | "humanitarian" | "foundation") || "army";


  const quickAmounts: Record<Currency, number[]> = {
    EUR: [20, 100, 300],
    USD: [20, 100, 300],
    UAH: [200, 500, 1000]
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
            <div className={styles.tabs}>
              <div className={`${styles.tab} ${styles.tabActive}`}>
                Внесок для підтримки
              </div>
            </div>

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
                  onChange={(e) => setCurrency(e.target.value as Currency)}
                >
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="UAH">UAH</option>
                </select>
              </div>
            </div>

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

            <div className={styles.profile}>
              <img src="/logo2.png" alt="Фонд Амондрекс" />
              <span className={styles.profileName}>Фонд Амондрекс</span>
            </div>

            <SupportButton lang={lang} className={styles.fullWidthButton} />
          </div>

{/* Права частина */}
<div className={styles.right}>

  {/* =========================
      БЛОК 1 — Перемикач країни
     ========================= */}
  <div className={`${styles.section} ${styles.switchSection}`}>

    <div className={styles.switchRow}>
      <span className={styles.switchLabel}>
        {isAbroad ? "Я знаходжусь за кордоном" : "Я знаходжусь в Україні"}
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

  {/* =========================
      РЕЖИМ: Я ЗНАХОДЖУСЬ ЗА КОРДОНОМ
      Показується тільки один блок
     ========================= */}
  {isAbroad && (
    <div className={`${styles.section} ${styles.abroadSection}`}>

      <h3 className={styles.sectionAbroadTitle}> 🌍 Якщо ви хочете переказати фонду кошти у валюті — робіть це на валютні рахунки, ми зможемо закупляти з цих рахунків за кордоном без комісії при обміні. Більша частина того що закупає фонд оплачується з валютних рахунків.</h3>
      <div className={styles.textBlock}>

        <p className={styles.textLineS}>SWIFT</p>

        <p className={styles.textLine}>
          Якщо ви плануєте благодійний внесок від імені юридичної особи та бажаєте поспілкуватись з командою партнерств, заповніть форму {" "} <button type="button" className={styles.linkButton} onClick={() => setIsPartnersModalOpen(true)} > за посиланням </button>, щоб ми сконтактували з вами.
        </p>

        <p className={styles.textLine}>Beneficiary: Serhiy Prytula Humanitarian Foundation</p>
        <p className={styles.textLine}>Beneficiary Address: 48 Shevchenka Tarasa avenue, lit. «A», office №23, Kyiv, 01032, Ukraine</p>
        <p className={styles.textLine}>Beneficiary bank: Public JSB «UKRGASBANK»</p>
        <p className={styles.textLine}>Bank Address: 1 Yerevanska street, Kyiv, 03087, Ukraine</p>
        <p className={styles.textLine}>SWIFT code: UGASUAUK</p>

        <ul className={styles.list}>
          <li> - Charitable donation for urgent medical equipment</li>
          <li> - Charitable donation for heating centers equipment</li>
          <li> - Charitable donation for urgent humanitarian aid for civilians</li>
        </ul>
<div className={styles.bankDetails}>
  
          <p className={styles.textLine}>
            USD / EUR / PLN / GBP / CZK / CAD / CNY / CHF / JPY
          </p>

          <div className={styles.bankDetailsRow}>
            <p className={styles.iban}>UA253220010000026002700011132</p>
    
            <button
              className={styles.copyButton}
              onClick={() =>
                navigator.clipboard.writeText("UA253220010000026002700011132")
              }
            >
              Скопіювати
            </button>
          </div>
</div>

        

                </div>
                <p className={styles.textLineD}>
          Грошові кошти, зібрані Фондом Амондрекс збираються задля гуманітарної допомоги цивільним на деокупованих та прифронтових територіях. Сплачуючи благодійний внесок через інструмент Монобанк або у випадку оплати за реквізитами Фонд Амондрекс ви даєте згоду на це, а також погоджуєтесь на те, що сума пожертвування не підлягає поверненню.
        </p>
    </div>
  )}

  {/* =========================
      РЕЖИМ: Я ЗНАХОДЖУСЬ В УКРАЇНІ
      Показуються 2 блоки: Bank + Crypto
     ========================= */}
  {!isAbroad && (
    <>
      {/* Блок 2 — Банківський переказ по Україні */}
      <div className={`${styles.section} ${styles.bankSection}`}>
        <h3 className={styles.sectionTitle}>Банківський переказ по Україні</h3>

<p className={styles.textLine}> Якщо ви плануєте благодійний внесок від імені юридичної особи та бажаєте поспілкуватись з командою партнерств, заповніть форму{" "} <button type="button" className={styles.linkButton} onClick={() => setIsPartnersModalOpen(true)} > за посиланням </button>. </p>

        <p className={styles.textLine}>"Благодійний Фонд Амондрекс"</p>
        <p className={styles.textLine}>ЄДРПОУ 46088898</p>

        <p className={styles.textLine}>Оберіть одне із призначень платежу:</p>
        <ul className={styles.list}>
          <li>- Допомога медзакладам: благодійний безповоротний внесок</li>
          <li>- Пункти обігріву: благодійний безповоротний внесок</li>
          <li>- Нагальні потреби громад: благодійний безповоротний внесок</li>
        </ul>

<div className={styles.bankDetails}>
          <p className={styles.textLine}>UAH</p>
          
  
                    <div className={styles.copyRow}>
                      <p className={styles.iban}>UA253220010000026002700011132</p>
            <button
              className={styles.copyButton}
              onClick={() =>
                navigator.clipboard.writeText("UA253220010000026002700011132")
              }
            >
              Скопіювати
            </button>
          </div>
</div>
                </div>
                     {/* Блок 3 — Переказ на карту */}
      <div className={`${styles.section} ${styles.bankSection}`}>
        <h3 className={styles.sectionTitle}>Переказ на карту</h3>

        <p className={styles.textLine}>Одержувач - Благодійний Фонд Амондрекс</p>
        <p className={styles.textLine}>IBAN UA253220010000026002700011132</p>

        <p className={styles.textLine}>ЄДРПОУ 46088898</p>
  <p className={styles.textLine}>Призначення платежу Благодійний безповоротний внесок</p>

<div className={styles.bankDetails}>
                    <div className={styles.copyRow}>
                      <p className={styles.cardPay}>5408 8100 4218 4266</p>
            <button
              className={styles.copyButton}
              onClick={() =>
                navigator.clipboard.writeText("5408810042184266")
              }
            >
              Скопіювати
            </button>
          </div>
</div>
      </div>

      {/* Блок 4 — Crypto */}
      <div className={`${styles.section} ${styles.cryptoSection}`}>

        <h3 className={styles.sectionTitle}>Crypto</h3>

        {[
          ["Bitcoin (BTC)", "1LJaFL2Yw4CD5yxFq8rtiF9NWGhPcvDhDY"],
          ["Ethereum ETH (ERC-20)", "0x973218f04ea4204fab32082ede9f2372abdba286"],
          ["Tether USDT (TRC20)", "TP6TKcDAavW5K49WQJ5Jf1WNKoqpQBJogu"],
          // ["Monero (XMR)", "87peiEboSyrBw9ENwNZvoa19tRVEZYbUdCCAm5NaMa2AZ15Ne78VYrD6RQFQU6QVQ6NWtnpdwhXrMKU6y2LB8NKmJX3usEb"],
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
                Скопіювати
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )}

</div>

        </div>
        {isPartnersModalOpen && ( <PartnersModal onClose={() => setIsPartnersModalOpen(false)} onSuccess={() => console.log("Success")} /> )}
      </main>

      <Footer lang="UA" />
    </>
  );
}
