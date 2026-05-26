export const AUTH_SESSION_KEY = "portfolio_admin_session";

export const isAuthenticated = () =>
  sessionStorage.getItem(AUTH_SESSION_KEY) === "true";

export const setAuthenticated = (value) => {
  if (value) {
    sessionStorage.setItem(AUTH_SESSION_KEY, "true");
  } else {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
  }
};

export const verifyPassword = (input, storedPassword) =>
  input === storedPassword;
