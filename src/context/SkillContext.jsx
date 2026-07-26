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

  const loadSkills = () => {
    setSkills(getSkills());
  };

  useEffect(() => {
    loadSkills();
  }, []);

  const addSkill = (skill) => {
    saveSkill(skill);
    loadSkills();
  };

  const editSkill = (skill) => {
    updateSkill(skill);
    loadSkills();
    setEditingSkill(null);
  };

  const removeSkill = (id) => {
    deleteSkill(id);
    loadSkills();
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
      }}
    >
      {children}
    </SkillContext.Provider>
  );
}

export function useSkillContext() {
  return useContext(SkillContext);
}