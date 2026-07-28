import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchExperiences,
  saveExperience,
  editExperience,
  removeExperience,
} from "../services/experienceService";

const ExperienceContext = createContext();

export function ExperienceProvider({ children }) {
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);

  // Load Experiences
  const loadExperiences = async () => {
    try {
      const data = await fetchExperiences();
      setExperiences(data);
    } catch (error) {
      console.log("Load Experiences Error:", error.response?.data);
      console.error(error);
    }
  };

  useEffect(() => {
    loadExperiences();
  }, []);

  // Add Experience
  const addExperience = async (experience) => {
    try {
      const payload = { ...experience };
      console.log("Sending Experience:", payload);
      await saveExperience(payload);

      await loadExperiences();
    } catch (error) {
      console.log("Backend Response:", error.response?.data);
      console.error("Failed to add experience:", error);
    }
  };

  // Update Experience
  const updateExperienceData = async (experience) => {
    try {
      await editExperience(experience._id, experience);

      await loadExperiences();

      setEditingExperience(null);
    } catch (error) {
      console.log("Backend Response:", error.response?.data);
      console.error("Failed to update experience:", error);
    }
  };

  // Delete Experience
  const deleteExperienceData = async (id) => {
    try {
      await removeExperience(id);

      await loadExperiences();
    } catch (error) {
      console.log("Backend Response:", error.response?.data);
      console.error("Failed to delete experience:", error);
    }
  };

  return (
    <ExperienceContext.Provider
      value={{
        experiences,
        addExperience,
        updateExperienceData,
        deleteExperienceData,
        editingExperience,
        setEditingExperience,
        loadExperiences,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
}

export function useExperienceContext() {
  return useContext(ExperienceContext);
}