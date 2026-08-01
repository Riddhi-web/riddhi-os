import api from "./api";

const getToken = () => localStorage.getItem("token");

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get all skills (Public)
export const getSkills = async () => {
  const response = await api.get("/api/skills");
  return response.data.data;
};

// Add skill
export const saveSkill = async (skill) => {
  const response = await api.post(
    "/api/skills",
    skill,
    authConfig()
  );

  return response.data.data;
};

// Update skill
export const updateSkill = async (id, skill) => {
  const response = await api.put(
    `/api/skills/${id}`,
    skill,
    authConfig()
  );

  return response.data.data;
};

// Delete skill
export const deleteSkill = async (id) => {
  const response = await api.delete(
    `/api/skills/${id}`,
    authConfig()
  );

  return response.data;
};