const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
  { id: "social", label: "Social links" },
  { id: "navbar", label: "Navbar & footer" },
  { id: "settings", label: "Settings" },
];

const AdminSidebar = ({ active, onSelect, adminTheme, onThemeToggle, onLogout }) => {
  const dark = adminTheme === "dark";

  return (
    <aside
      className={`w-full md:w-56 shrink-0 border-r ${
        dark
          ? "bg-slate-900 border-slate-700 text-slate-100"
          : "bg-white border-slate-200 text-blue-950"
      }`}
    >
      <div className="p-4 border-b border-inherit">
        <h2 className="font-poppins font-semibold text-lg">CMS</h2>
        <p className={`text-xs mt-1 ${dark ? "text-slate-400" : "text-slate-500"}`}>
          Frontend-only editor
        </p>
      </div>
      <nav className="p-2 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(s.id)}
            className={`text-left px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              active === s.id
                ? "bg-orange-500 text-white"
                : dark
                  ? "hover:bg-slate-800 text-slate-300"
                  : "hover:bg-yellow-50 text-blue-950"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>
      <div className="p-4 mt-auto border-t border-inherit flex flex-col gap-2">
        <button
          type="button"
          onClick={onThemeToggle}
          className={`text-sm px-3 py-2 rounded-lg ${
            dark ? "bg-slate-800 hover:bg-slate-700" : "bg-yellow-100 hover:bg-yellow-200"
          }`}
        >
          {dark ? "Light UI" : "Dark UI"}
        </button>
        <button
          type="button"
          onClick={onLogout}
          className="text-sm px-3 py-2 rounded-lg text-red-600 hover:bg-red-50"
        >
          Log out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
