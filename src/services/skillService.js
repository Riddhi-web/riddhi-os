import axios from "axios";

const API_URL = "http://localhost:5000/api/skills";

const getToken = () => localStorage.getItem("token");

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get all skills (Public)
export const getSkills = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// Add skill
export const saveSkill = async (skill) => {
  const response = await axios.post(API_URL, skill, authConfig());
  return response.data.data;
};

// Update skill
export const updateSkill = async (id, skill) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    skill,
    authConfig()
  );
  return response.data.data;
};

// Delete skill
export const deleteSkill = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`,
    authConfig()
  );
  return response.data;
};