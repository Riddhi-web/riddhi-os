import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

const API_URL = "http://localhost:5000/api/auth";
const TOKEN_KEY = "token";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setIsAuthenticated(!!token);
  }, []);

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        username,
        password,
      });

      const token = response.data.token;

      localStorage.setItem(TOKEN_KEY, token);

      setIsAuthenticated(true);

      return true;
    } catch (error) {
      console.error("Login failed:", error);

      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
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