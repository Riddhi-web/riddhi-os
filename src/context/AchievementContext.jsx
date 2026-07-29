import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchAchievements,
  saveAchievement,
  editAchievement,
  removeAchievement,
} from "../services/achievementService";

const AchievementContext = createContext();

export const AchievementProvider = ({ children }) => {
  const [achievements, setAchievements] = useState([]);
  const [editingAchievement, setEditingAchievement] = useState(null);

  const loadAchievements = async () => {
    try {
      const data = await fetchAchievements();
      setAchievements(data);
    } catch (error) {
      console.error("Load Achievements:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    loadAchievements();
  }, []);

  const addAchievement = async (achievementData) => {
    try {
      console.log("Sending Achievement:", achievementData);

      const newAchievement = await saveAchievement(achievementData);

      setAchievements((prev) => [newAchievement, ...prev]);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  const updateAchievementData = async (id, achievementData) => {
    try {
      console.log("Updating Achievement:", achievementData);

      const updatedAchievement = await editAchievement(id, achievementData);

      setAchievements((prev) =>
        prev.map((achievement) =>
          achievement._id === id ? updatedAchievement : achievement
        )
      );

      setEditingAchievement(null);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  const deleteAchievementData = async (id) => {
    try {
      await removeAchievement(id);

      setAchievements((prev) =>
        prev.filter((achievement) => achievement._id !== id)
      );
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <AchievementContext.Provider
      value={{
        achievements,
        editingAchievement,
        setEditingAchievement,
        addAchievement,
        updateAchievementData,
        deleteAchievementData,
      }}
    >
      {children}
    </AchievementContext.Provider>
  );
};

export const useAchievementContext = () => useContext(AchievementContext);