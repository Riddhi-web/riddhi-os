import api from "./api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get Dashboard Analytics (Admin)
export const getAnalytics = async () => {
  const response = await api.get(
    "/api/analytics",
    authConfig()
  );

  return response.data;
};

// Track Portfolio Visit (Public)
export const trackVisit = async () => {
  await api.post("/api/analytics/visit");
};

// Track Resume Download (Public)
export const trackResumeDownload = async () => {
  await api.post("/api/analytics/resume-download");
};