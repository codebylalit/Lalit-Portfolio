import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="footer font-poppins bg-yellow-100 text-blue-950">
      <hr className="border-slate-200 mb-4" />

      <div className="footer-container flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Footer Text */}
        <p className="text-center text-sm md:text-base">
          © 2024 <strong>Lalit</strong>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-3 justify-center items-center">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
