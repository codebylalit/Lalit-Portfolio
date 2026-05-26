import { Link } from "react-router-dom";

import { usePortfolio } from "../hooks/usePortfolio";
import EditableImage from "./editing/EditableImage";
import EditableText from "./editing/EditableText";

const Footer = () => {
  const { data, setData } = usePortfolio();
  const { footer, socialLinks } = data;

  const updateSocial = (index, field, value) => {
    setData((prev) => {
      const next = [...prev.socialLinks];
      next[index] = { ...next[index], [field]: value };
      return { ...prev, socialLinks: next };
    });
  };

  return (
    <footer className="footer font-poppins bg-yellow-100 text-blue-950">
      <hr className="border-slate-200 mb-4" />

      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center text-sm md:text-base">
          ©{" "}
          <EditableText
            as="span"
            value={footer.year}
            onChange={(v) =>
              setData((p) => ({
                ...p,
                footer: { ...p.footer, year: v },
              }))
            }
          />{" "}
          <strong>
            <EditableText
              value={footer.copyrightName}
              onChange={(v) =>
                setData((p) => ({
                  ...p,
                  footer: { ...p.footer, copyrightName: v },
                }))
              }
            />
          </strong>
          . All rights reserved.
        </p>

        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link, i) => (
            <Link key={link.id} to={link.link} target="_blank">
              <EditableImage
                src={link.iconUrl}
                alt={link.name}
                imgClassName="w-6 h-6 object-contain"
                onChange={(v) => updateSocial(i, "iconUrl", v)}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
