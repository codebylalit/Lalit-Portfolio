import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AdminSidebar from "../components/admin/AdminSidebar";
import {
  AboutPanel,
  ContactPanel,
  ExperiencePanel,
  HeroPanel,
  NavbarPanel,
  ProjectsPanel,
  SettingsPanel,
  SkillsPanel,
  SocialPanel,
} from "../components/admin/AdminPanels";
import { usePortfolio } from "../hooks/usePortfolio";

const PANEL_MAP = {
  hero: HeroPanel,
  about: AboutPanel,
  skills: SkillsPanel,
  projects: ProjectsPanel,
  experience: ExperiencePanel,
  contact: ContactPanel,
  social: SocialPanel,
  navbar: NavbarPanel,
  settings: SettingsPanel,
};

const Admin = () => {
  const navigate = useNavigate();
  const {
    data,
    setData,
    isAuth,
    logout,
    adminTheme,
    setAdminTheme,
    manualSave,
    handleExport,
    handleImport,
    resetToDefaults,
    updateAdminPassword,
    toggleEditMode,
    setIsEditMode,
    showToast,
  } = usePortfolio();

  const [active, setActive] = useState("about");
  const dark = adminTheme === "dark";

  useEffect(() => {
    if (!isAuth) navigate("/admin", { replace: true });
  }, [isAuth, navigate]);

  if (!isAuth) return null;

  const Panel = PANEL_MAP[active];

  const onImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json,.json";
    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (file) handleImport(file);
    };
    input.click();
  };

  return (
    <div
      className={`min-h-screen flex flex-col md:flex-row ${
        dark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-blue-950"
      }`}
    >
      <AdminSidebar
        active={active}
        onSelect={setActive}
        adminTheme={adminTheme}
        onThemeToggle={() =>
          setAdminTheme(adminTheme === "dark" ? "light" : "dark")
        }
        onLogout={() => {
          logout();
          navigate("/admin");
        }}
      />

      <main className="flex-1 flex flex-col min-h-0">
        <header
          className={`flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b ${
            dark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-white"
          }`}
        >
          <div>
            <h1 className="text-xl font-poppins font-semibold capitalize">
              {active.replace("-", " ")}
            </h1>
            <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Changes auto-save to localStorage
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={manualSave}
              className="px-4 py-2 bg-emerald-600 text-white text-sm rounded-lg font-medium"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditMode(true);
                showToast("Inline edit enabled — visit your site");
                window.open("/about", "_blank");
              }}
              className="px-4 py-2 bg-orange-500 text-white text-sm rounded-lg font-medium"
            >
              Preview site
            </button>
            <Link
              to="/about"
              className={`px-4 py-2 text-sm rounded-lg font-medium border ${
                dark ? "border-slate-600" : "border-slate-300"
              }`}
            >
              View live
            </Link>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 max-w-3xl">
          {active === "settings" ? (
            <SettingsPanel
              data={data}
              setData={setData}
              dark={dark}
              onPasswordChange={updateAdminPassword}
              onExport={handleExport}
              onImport={onImport}
              onReset={() => {
                if (window.confirm("Reset all content to defaults?")) {
                  resetToDefaults();
                }
              }}
              onSave={manualSave}
              onToggleEdit={toggleEditMode}
            />
          ) : (
            <Panel data={data} setData={setData} dark={dark} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
