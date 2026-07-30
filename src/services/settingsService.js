import axios from "axios";

const API_URL = "http://localhost:5000/api/settings";

const getToken = () => localStorage.getItem("token");

// Get Portfolio Settings
export const getSettings = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// Create / Update Portfolio Settings
export const saveSettings = async (settings) => {
  const response = await axios.put(API_URL, settings, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data.data;
};