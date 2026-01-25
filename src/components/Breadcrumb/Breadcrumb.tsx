import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import translations from "../../translations/breadcrumb.json";

type Props = {
  type: string;
  lang: "UA" | "EN";
};

const Breadcrumb: React.FC<Props> = ({ type, lang }) => {
  const t = translations[lang];

  const label =
    t[type as "foundation" | "humanitarian" | "army"] || t.default;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontSize: "14px",
        marginBottom: "20px",
        color: "#555"
      }}
    >
      <Link
        to="/"
        style={{
          color: "#888",
          textDecoration: "none",
          display: "flex",
          alignItems: "center"
        }}
      >
        {t.home}
      </Link>

      <MdKeyboardArrowRight size={18} color="#888" />

      <span>{label}</span>
    </div>
  );
};

export default Breadcrumb;
