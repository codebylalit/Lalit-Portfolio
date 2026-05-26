import { Link } from "react-router-dom";

import { usePortfolio } from "../hooks/usePortfolio";
import EditableText from "./editing/EditableText";

const CTA = () => {
  const { data, setData } = usePortfolio();
  const { cta } = data;

  return (
    <section className="cta">
      <p className="cta-text">
        <EditableText
          value={cta.text}
          onChange={(v) =>
            setData((p) => ({ ...p, cta: { ...p.cta, text: v } }))
          }
        />
        <br className="sm:block hidden" />
        <EditableText
          value={cta.textLine2}
          onChange={(v) =>
            setData((p) => ({ ...p, cta: { ...p.cta, textLine2: v } }))
          }
        />
      </p>
      <Link
        to={cta.link}
        className="font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center bg-blue-950 text-white"
      >
        <EditableText
          value={cta.buttonText}
          onChange={(v) =>
            setData((p) => ({ ...p, cta: { ...p.cta, buttonText: v } }))
          }
        />
      </Link>
    </section>
  );
};

export default CTA;
