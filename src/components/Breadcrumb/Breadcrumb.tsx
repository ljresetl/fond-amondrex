import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

type Props = {
  type: string;
};

const Breadcrumb: React.FC<Props> = ({ type }) => {
  const labels: Record<string, string> = {
    foundation: "Підтримати операційну діяльність фонду",
    humanitarian: "Підтримати гуманітарний напрям",
    army: "Підтримати армію"
  };

  const label = labels[type] || "Підтримка";

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
        Головна
      </Link>

      <MdKeyboardArrowRight size={18} color="#888" />

      <span>{label}</span>
    </div>
  );
};

export default Breadcrumb;
