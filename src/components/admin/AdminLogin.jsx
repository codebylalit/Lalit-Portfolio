import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { usePortfolio } from "../../hooks/usePortfolio";

const AdminLogin = () => {
  const { login, isAuth } = usePortfolio();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuth) navigate("/admin/dashboard", { replace: true });
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(password)) {
      navigate("/admin/dashboard");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
        <p className="text-xs text-slate-400 mb-2 text-center">
          Hidden admin — default password in portfolioData.js
        </p>
        <h1 className="text-2xl font-poppins font-semibold text-blue-950 text-center">
          Portfolio Admin
        </h1>
        <p className="text-slate-500 text-sm text-center mt-2 mb-8">
          Sign in to manage your site content
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-sm font-medium text-blue-950">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              className="input mt-1"
              placeholder="Enter admin password"
              autoComplete="current-password"
            />
          </label>
          {error && (
            <p className="text-red-600 text-sm" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="btn w-full">
            Sign in
          </button>
        </form>
        <Link
          to="/about"
          className="block text-center text-sm text-blue-600 mt-6 hover:underline"
        >
          ← Back to portfolio
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
