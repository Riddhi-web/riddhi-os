import axios from "axios";

const API_URL = "http://localhost:5000/api/analytics";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAnalytics = async () => {
  const response = await axios.get(
    API_URL,
    authConfig()
  );

  return response.data;
};

export const trackVisit = async () => {
  await axios.post(`${API_URL}/visit`);
};

export const trackResumeDownload = async () => {
  await axios.post(`${API_URL}/resume-download`);
};