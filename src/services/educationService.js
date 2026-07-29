import axios from "axios";

const API_URL = "http://localhost:5000/api/education";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const fetchEducations = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const saveEducation = async (education) => {
  const response = await axios.post(
    API_URL,
    education,
    authConfig()
  );

  return response.data.data;
};

export const editEducation = async (id, education) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    education,
    authConfig()
  );

  return response.data.data;
};

export const removeEducation = async (id) => {
  await axios.delete(
    `${API_URL}/${id}`,
    authConfig()
  );
};