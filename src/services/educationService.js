import api from "./api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all education (Public)
export const fetchEducations = async () => {
  const response = await api.get("/api/education");
  return response.data.data;
};

// Add education
export const saveEducation = async (education) => {
  const response = await api.post(
    "/api/education",
    education,
    authConfig()
  );

  return response.data.data;
};

// Update education
export const editEducation = async (id, education) => {
  const response = await api.put(
    `/api/education/${id}`,
    education,
    authConfig()
  );

  return response.data.data;
};

// Delete education
export const removeEducation = async (id) => {
  await api.delete(
    `/api/education/${id}`,
    authConfig()
  );
};