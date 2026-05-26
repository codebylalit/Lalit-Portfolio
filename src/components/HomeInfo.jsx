import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { usePortfolio } from "../hooks/usePortfolio";
import EditableText from "./editing/EditableText";

const HomeInfo = ({ currentStage }) => {
  const { data, setData } = usePortfolio();
  const stage = data.hero.stages[currentStage - 1];
  if (!stage) return null;

  const updateStage = (patch) => {
    setData((prev) => {
      const stages = [...prev.hero.stages];
      const idx = currentStage - 1;
      stages[idx] = { ...stages[idx], ...patch };
      return { ...prev, hero: { ...prev.hero, stages } };
    });
  };

  if (stage.type === "intro") {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        <EditableText
          value={stage.line1}
          onChange={(v) => updateStage({ line1: v })}
        />
        <span className="font-semibold mx-2 text-white">
          <EditableText
            value={stage.name}
            onChange={(v) => updateStage({ name: v })}
          />
        </span>
        👋
        <br />
        <EditableText
          value={stage.line2}
          onChange={(v) => updateStage({ line2: v })}
        />
      </h1>
    );
  }

  const textLines = stage.text.split("\n");

  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">
        {textLines.map((line, i) => (
          <span key={i}>
            <EditableText
              value={line}
              onChange={(v) => {
                const lines = [...textLines];
                lines[i] = v;
                updateStage({ text: lines.join("\n") });
              }}
            />
            {i < textLines.length - 1 && <br />}
          </span>
        ))}
      </p>

      <Link to={stage.link} className="neo-brutalism-white neo-btn">
        <EditableText
          value={stage.buttonText}
          onChange={(v) => updateStage({ buttonText: v })}
        />
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

export default HomeInfo;
