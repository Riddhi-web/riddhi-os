import { createContext, useContext, useEffect, useState } from "react";
import {
  getSkills,
  saveSkill,
  updateSkill,
  deleteSkill,
} from "../services/skillService";

const SkillContext = createContext();

export function SkillProvider({ children }) {
  const [skills, setSkills] = useState([]);
  const [editingSkill, setEditingSkill] = useState(null);

  // Load Skills
  const loadSkills = async () => {
    try {
      const data = await getSkills();
      setSkills(data);
    } catch (error) {
      console.log("Load Skills Error:", error.response?.data);
      console.error(error);
    }
  };

  useEffect(() => {
    loadSkills();
  }, []);

  // Add Skill
  const addSkill = async (skill) => {
  try {
    const payload = { ...skill };

    console.log("Sending Skill:", payload);

    await saveSkill(payload);

    await loadSkills();
  } catch (error) {
    console.log("Backend Response:", error.response?.data);
    console.error("Failed to add skill:", error);
  }
};
  // Update Skill
  const editSkill = async (skill) => {
    try {
      await updateSkill(skill._id, skill);

      await loadSkills();

      setEditingSkill(null);
    } catch (error) {
      console.log("Backend Response:", error.response?.data);
      console.error("Failed to update skill:", error);
    }
  };

  // Delete Skill
  const removeSkill = async (id) => {
    try {
      await deleteSkill(id);

      await loadSkills();
    } catch (error) {
      console.log("Backend Response:", error.response?.data);
      console.error("Failed to delete skill:", error);
    }
  };

  return (
    <SkillContext.Provider
      value={{
        skills,
        addSkill,
        editSkill,
        removeSkill,
        editingSkill,
        setEditingSkill,
        loadSkills,
      }}
    >
      {children}
    </SkillContext.Provider>
  );
}

export function useSkillContext() {
  return useContext(SkillContext);
}