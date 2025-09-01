import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/about"
        className="w-auto h-10 rounded-lg items-center justify-center flex font-semibold px-4"
      >
        <h1 className="text-blue-950 font-sans inline-block text-xl md:text-2xl">
          {"Lalit".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block transform transition duration-300 ease-in-out hover:scale-125"
            >
              {char}
            </span>
          ))}
          {/* Add a space between Lalit and Kumar */}
          <span className="inline-block mx-0.5"></span>
          {"Kumar".split("").map((char, index) => (
            <span
              key={index}
              className="inline-block transform transition duration-300 ease-in-out hover:scale-125"
            >
              {char}
            </span>
          ))}
        </h1>
      </NavLink>

      <nav className="flex text-lg gap-7 text-blue-950 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-blue-950"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : "text-blue-950"
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
