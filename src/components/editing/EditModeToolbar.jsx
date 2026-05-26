import { Link } from "react-router-dom";

import { usePortfolio } from "../../hooks/usePortfolio";

const EditModeToolbar = () => {
  const {
    isEditMode,
    isAuth,
    toggleEditMode,
    manualSave,
    resetToDefaults,
    handleExport,
    handleImport,
    logout,
  } = usePortfolio();

  if (!isAuth) return null;

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
    <>
      <div
        className={`fixed bottom-0 left-0 right-0 z-[9998] transition-transform duration-300 ${
          isEditMode ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-blue-950 text-white px-4 py-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
          <span className="text-xs sm:text-sm font-semibold text-orange-300 w-full sm:w-auto text-center">
            Edit mode — click text or images to change
          </span>
          <button
            type="button"
            onClick={manualSave}
            className="px-3 py-1.5 text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 rounded-lg font-medium"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleExport}
            className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 hover:bg-white/20 rounded-lg font-medium"
          >
            Export JSON
          </button>
          <button
            type="button"
            onClick={onImport}
            className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 hover:bg-white/20 rounded-lg font-medium"
          >
            Import JSON
          </button>
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Reset all content to defaults? This cannot be undone."
                )
              ) {
                resetToDefaults();
              }
            }}
            className="px-3 py-1.5 text-xs sm:text-sm bg-red-600/80 hover:bg-red-600 rounded-lg font-medium"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={toggleEditMode}
            className="px-3 py-1.5 text-xs sm:text-sm bg-orange-500 hover:bg-orange-400 rounded-lg font-medium"
          >
            Exit edit
          </button>
          <Link
            to="/admin"
            className="px-3 py-1.5 text-xs sm:text-sm bg-white/10 hover:bg-white/20 rounded-lg font-medium"
          >
            Dashboard
          </Link>
        </div>
      </div>

      {!isEditMode && (
        <button
          type="button"
          onClick={toggleEditMode}
          className="fixed bottom-6 left-6 z-[9997] px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
          title="Toggle inline edit mode"
        >
          Edit site
        </button>
      )}
    </>
  );
};

export default EditModeToolbar;
