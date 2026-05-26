import { NavLink } from "react-router-dom";

import { usePortfolio } from "../hooks/usePortfolio";
import EditableText from "./editing/EditableText";

const Navbar = () => {
  const { data, setData, isEditMode, isAuth } = usePortfolio();
  const { navbar } = data;
  const canEdit = isEditMode && isAuth;

  const renderName = (text) =>
    text.split("").map((char, index) => (
      <span
        key={`${text}-${index}`}
        className="inline-block transform transition duration-300 ease-in-out hover:scale-125"
      >
        {char}
      </span>
    ));

  return (
    <header className="header">
      <NavLink
        to="/about"
        className="w-auto h-10 rounded-lg items-center justify-center flex font-semibold px-4"
      >
        <h1 className="text-blue-950 font-sans inline-block text-xl md:text-2xl">
          {canEdit ? (
            <>
              <EditableText
                value={navbar.firstName}
                onChange={(v) =>
                  setData((p) => ({
                    ...p,
                    navbar: { ...p.navbar, firstName: v },
                  }))
                }
              />
              <span className="inline-block mx-0.5" />
              <EditableText
                value={navbar.lastName}
                onChange={(v) =>
                  setData((p) => ({
                    ...p,
                    navbar: { ...p.navbar, lastName: v },
                  }))
                }
              />
            </>
          ) : (
            <>
              {renderName(navbar.firstName)}
              <span className="inline-block mx-0.5" />
              {renderName(navbar.lastName)}
            </>
          )}
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
