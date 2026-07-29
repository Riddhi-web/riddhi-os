import axios from "axios";

const API_URL = "http://localhost:5000/api/achievements";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// GET
export const fetchAchievements = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// POST
export const saveAchievement = async (achievementData) => {
  const response = await axios.post(
    API_URL,
    achievementData,
    authConfig()
  );

  return response.data.data;
};

// PUT
export const editAchievement = async (id, achievementData) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    achievementData,
    authConfig()
  );

  return response.data.data;
};

// DELETE
export const removeAchievement = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    authConfig()
  );

  return response.data;
};