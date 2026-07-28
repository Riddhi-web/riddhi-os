import axios from "axios";

const API_URL = "http://localhost:5000/api/experience";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const fetchExperiences = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const saveExperience = async (experience) => {
  const response = await axios.post(
    API_URL,
    experience,
    authConfig()
  );

  return response.data.data;
};

export const editExperience = async (id, experience) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    experience,
    authConfig()
  );

  return response.data.data;
};

export const removeExperience = async (id) => {
  await axios.delete(
    `${API_URL}/${id}`,
    authConfig()
  );
};