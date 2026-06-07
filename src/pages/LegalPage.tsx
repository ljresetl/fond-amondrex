import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";
import Seo from "../hooks/Seo";
import legalTranslations from "../translations/legal.json";
import styles from "./LegalPage.module.css";

type Props = {
  lang: "UA" | "EN";
  setLang: (lang: "UA" | "EN") => void;
  page: "privacy" | "terms";
};

const LegalPage: React.FC<Props> = ({ lang, setLang, page }) => {
  const t = legalTranslations[lang];
  const content = t[page];
  const path = page === "privacy" ? "/privacy" : "/terms";

  return (
    <>
      <Seo title={content.metaTitle} description={content.metaDescription} path={path} />
      <Header lang={lang} setLang={setLang} />

      <main className={styles.page}>
        <h1 className={styles.title}>{content.title}</h1>
        <p className={styles.updated}>{content.updated}</p>
        <p className={styles.intro}>{content.intro}</p>

        {content.sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2 className={styles.sectionHeading}>{section.heading}</h2>
            <p className={styles.sectionText}>{section.text}</p>
          </section>
        ))}

        <Link to="/" className={styles.backLink}>{t.backHome}</Link>
      </main>

      <Footer lang={lang} />
    </>
  );
};

export default LegalPage;
