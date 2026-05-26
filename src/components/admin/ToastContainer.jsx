import { usePortfolio } from "../../hooks/usePortfolio";

const ToastContainer = () => {
  const { toasts } = usePortfolio();

  if (!toasts.length) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none"
      aria-live="polite"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto px-4 py-3 rounded-lg shadow-lg text-sm font-medium animate-[slideIn_0.3s_ease-out] ${
            toast.type === "error"
              ? "bg-red-600 text-white"
              : toast.type === "info"
                ? "bg-blue-950 text-white"
                : "bg-emerald-600 text-white"
          }`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
