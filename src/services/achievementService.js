import api from "./api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all achievements (Public)
export const fetchAchievements = async () => {
  const response = await api.get("/api/achievements");
  return response.data.data;
};

// Add achievement
export const saveAchievement = async (achievementData) => {
  const response = await api.post(
    "/api/achievements",
    achievementData,
    authConfig()
  );

  return response.data.data;
};

// Update achievement
export const editAchievement = async (id, achievementData) => {
  const response = await api.put(
    `/api/achievements/${id}`,
    achievementData,
    authConfig()
  );

  return response.data.data;
};

// Delete achievement
export const removeAchievement = async (id) => {
  const response = await api.delete(
    `/api/achievements/${id}`,
    authConfig()
  );

  return response.data;
};