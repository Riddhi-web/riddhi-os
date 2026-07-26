import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const STORAGE_KEY = "riddhi_auth";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem(STORAGE_KEY);
    setIsAuthenticated(auth === "true");
  }, []);

  const login = (username, password) => {
    // Temporary credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsAuthenticated(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}