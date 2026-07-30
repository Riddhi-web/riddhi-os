import { createContext, useContext, useEffect, useState } from "react";
import {
  getSettings,
  saveSettings,
} from "../services/settingsService";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({});

  // Load Portfolio Settings
  const loadSettings = async () => {
  try {
    const data = await getSettings();

    console.log("API Response:", data);

    setSettings(data || {});
  } catch (error) {
    console.error("Failed to load settings:", error);
  }
};
  useEffect(() => {
    loadSettings();
  }, []);

  // Save Portfolio Settings
  const updateSettings = async (data) => {
    try {
      const updatedSettings = await saveSettings(data);
      setSettings(updatedSettings);
    } catch (error) {
      console.error("Failed to save settings:", error);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        updateSettings,
        loadSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  return useContext(SettingsContext);
}