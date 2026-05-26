import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { getDefaultPortfolioData } from "../data/portfolioData";
import {
  isAuthenticated as checkAuth,
  setAuthenticated,
  verifyPassword,
} from "../utils/auth";
import { generateId } from "../utils/dataHelpers";
import {
  clearPortfolioData,
  exportPortfolioJson,
  importPortfolioJson,
  loadPortfolioData,
  mergeWithDefaults,
  savePortfolioData,
} from "../utils/storage";

const PortfolioContext = createContext(null);

const ADMIN_THEME_KEY = "portfolio_admin_theme";

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() =>
    mergeWithDefaults(loadPortfolioData())
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const [isAuth, setIsAuth] = useState(checkAuth);
  const [adminTheme, setAdminTheme] = useState(
    () => localStorage.getItem(ADMIN_THEME_KEY) || "light"
  );
  const [toasts, setToasts] = useState([]);
  const saveTimerRef = useRef(null);

  const showToast = useCallback((message, type = "success") => {
    const id = generateId();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const persistData = useCallback(
    (nextData, message = "Changes saved") => {
      setData(nextData);
      savePortfolioData(nextData);
      showToast(message);
    },
    [showToast]
  );

  const scheduleAutoSave = useCallback((nextData) => {
    setData(nextData);
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      savePortfolioData(nextData);
    }, 400);
  }, []);

  useEffect(
    () => () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    },
    []
  );

  const updateData = useCallback(
    (updater, { silent = false } = {}) => {
      setData((prev) => {
        const next = typeof updater === "function" ? updater(prev) : updater;
        if (!silent) {
          if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
          saveTimerRef.current = setTimeout(() => {
            savePortfolioData(next);
          }, 400);
        }
        return next;
      });
    },
    []
  );

  const login = useCallback(
    (password) => {
      const valid = verifyPassword(password, data.meta?.adminPassword);
      if (!valid) return false;
      setAuthenticated(true);
      setIsAuth(true);
      showToast("Welcome back!");
      return true;
    },
    [data.meta?.adminPassword, showToast]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    setIsAuth(false);
    setIsEditMode(false);
    showToast("Logged out", "info");
  }, [showToast]);

  const resetToDefaults = useCallback(() => {
    const defaults = getDefaultPortfolioData();
    clearPortfolioData();
    setData(defaults);
    showToast("Reset to default content", "info");
  }, [showToast]);

  const manualSave = useCallback(() => {
    savePortfolioData(data);
    showToast("All changes saved");
  }, [data, showToast]);

  const handleExport = useCallback(() => {
    exportPortfolioJson(data);
    showToast("JSON exported");
  }, [data, showToast]);

  const handleImport = useCallback(
    async (file) => {
      try {
        const imported = await importPortfolioJson(file);
        const merged = mergeWithDefaults(imported);
        persistData(merged, "Portfolio imported successfully");
        return true;
      } catch {
        showToast("Import failed — check JSON file", "error");
        return false;
      }
    },
    [persistData, showToast]
  );

  const updateAdminPassword = useCallback(
    (newPassword) => {
      updateData((prev) => ({
        ...prev,
        meta: { ...prev.meta, adminPassword: newPassword },
      }));
      showToast("Admin password updated");
    },
    [showToast, updateData]
  );

  const toggleEditMode = useCallback(() => {
    if (!isAuth) {
      showToast("Log in at /admin first", "error");
      return;
    }
    setIsEditMode((v) => !v);
  }, [isAuth, showToast]);

  const value = useMemo(
    () => ({
      data,
      setData: updateData,
      scheduleAutoSave,
      persistData,
      isEditMode,
      setIsEditMode,
      toggleEditMode,
      isAuth,
      login,
      logout,
      adminTheme,
      setAdminTheme: (theme) => {
        setAdminTheme(theme);
        localStorage.setItem(ADMIN_THEME_KEY, theme);
      },
      toasts,
      showToast,
      resetToDefaults,
      manualSave,
      handleExport,
      handleImport,
      updateAdminPassword,
    }),
    [
      data,
      updateData,
      scheduleAutoSave,
      persistData,
      isEditMode,
      toggleEditMode,
      isAuth,
      login,
      logout,
      adminTheme,
      toasts,
      showToast,
      resetToDefaults,
      manualSave,
      handleExport,
      handleImport,
      updateAdminPassword,
    ]
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const ctx = useContext(PortfolioContext);
  if (!ctx) {
    throw new Error("usePortfolio must be used within PortfolioProvider");
  }
  return ctx;
};

export default PortfolioContext;
