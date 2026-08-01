import api from "./api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all experiences (Public)
export const fetchExperiences = async () => {
  const response = await api.get("/api/experience");
  return response.data.data;
};

// Add experience
export const saveExperience = async (experience) => {
  const response = await api.post(
    "/api/experience",
    experience,
    authConfig()
  );

  return response.data.data;
};

// Update experience
export const editExperience = async (id, experience) => {
  const response = await api.put(
    `/api/experience/${id}`,
    experience,
    authConfig()
  );

  return response.data.data;
};

// Delete experience
export const removeExperience = async (id) => {
  await api.delete(
    `/api/experience/${id}`,
    authConfig()
  );
};