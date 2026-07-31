import { createContext, useContext, useEffect, useState } from "react";
import {
  getSettings,
  saveSettings,
  uploadProfileImage as uploadProfileImageService,
  deleteProfileImage as deleteProfileImageService,
  uploadResume as uploadResumeService,
  deleteResume as deleteResumeService,
} from "../services/settingsService";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({});

  const loadSettings = async () => {
    try {
      const data = await getSettings();
      setSettings(data || {});
    } catch (error) {
      console.error("Failed to load settings:", error);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const updateSettings = async (data) => {
    try {
      const updatedSettings = await saveSettings(data);
      setSettings(updatedSettings);
      return updatedSettings;
    } catch (error) {
      console.error("Failed to save settings:", error);
      throw error;
    }
  };

  const uploadProfileImage = async (file) => {
    try {
      const updatedSettings = await uploadProfileImageService(file);
      setSettings(updatedSettings);
      return updatedSettings;
    } catch (error) {
      console.error("Failed to upload profile image:", error);
      throw error;
    }
  };

  const deleteProfileImage = async () => {
    try {
      const updatedSettings = await deleteProfileImageService();
      setSettings(updatedSettings);
      return updatedSettings;
    } catch (error) {
      console.error("Failed to delete profile image:", error);
      throw error;
    }
  };

  const uploadResume = async (file) => {
    try {
      const updatedSettings = await uploadResumeService(file);
      setSettings(updatedSettings);
      return updatedSettings;
    } catch (error) {
      console.error("Failed to upload resume:", error);
      throw error;
    }
  };

  const deleteResume = async () => {
    try {
      const updatedSettings = await deleteResumeService();
      setSettings(updatedSettings);
      return updatedSettings;
    } catch (error) {
      console.error("Failed to delete resume:", error);
      throw error;
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        loadSettings,
        updateSettings,
        uploadProfileImage,
        deleteProfileImage,
        uploadResume,
        deleteResume,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettingsContext() {
  return useContext(SettingsContext);
}