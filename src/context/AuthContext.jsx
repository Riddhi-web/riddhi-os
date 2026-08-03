import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import api from "../services/api";

const AuthContext = createContext();

const TOKEN_KEY = "token";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setIsAuthenticated(!!token);
  }, []);

  const login = async (username, password) => {
    try {
     const response = await api.post("/api/auth/login", credentials);

      const token = response.data.token;

      localStorage.setItem(TOKEN_KEY, token);

      setIsAuthenticated(true);

      toast.success("Login successful!");

      return true;
    } catch (error) {
      console.error("Login failed:", error);

      toast.error("Invalid username or password.");

      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);

    setIsAuthenticated(false);

    toast.success("Logged out successfully.");
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