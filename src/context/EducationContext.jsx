import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchEducations,
  saveEducation,
  editEducation,
  removeEducation,
} from "../services/educationService";

const EducationContext = createContext();

export const EducationProvider = ({ children }) => {
  const [educations, setEducations] = useState([]);
  const [editingEducation, setEditingEducation] = useState(null);

  useEffect(() => {
    loadEducations();
  }, []);

  const loadEducations = async () => {
    try {
      const data = await fetchEducations();
      setEducations(data);
    } catch (error) {
      console.error("Error loading educations:", error);
    }
  };

  const addEducation = async (educationData) => {
    try {
      const newEducation = await saveEducation({ ...educationData });
      setEducations((prev) => [newEducation, ...prev]);
    } catch (error) {
      console.error("Error adding education:", error);
    }
  };

  const updateEducationData = async (id, educationData) => {
    try {
      const updatedEducation = await editEducation(id, {
        ...educationData,
      });

      setEducations((prev) =>
        prev.map((education) =>
          education._id === id ? updatedEducation : education
        )
      );

      setEditingEducation(null);
    } catch (error) {
      console.error("Error updating education:", error);
    }
  };

  const deleteEducationData = async (id) => {
    try {
      await removeEducation(id);

      setEducations((prev) =>
        prev.filter((education) => education._id !== id)
      );
    } catch (error) {
      console.error("Error deleting education:", error);
    }
  };

  return (
    <EducationContext.Provider
      value={{
        educations,
        editingEducation,
        setEditingEducation,
        addEducation,
        updateEducationData,
        deleteEducationData,
        loadEducations,
      }}
    >
      {children}
    </EducationContext.Provider>
  );
};

export const useEducation = () => useContext(EducationContext);