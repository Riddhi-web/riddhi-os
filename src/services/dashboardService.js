import api from "./api";

const getToken = () => localStorage.getItem("token");

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get Dashboard Statistics
export const getDashboardStats = async () => {
  const response = await api.get(
    "/api/dashboard",
    authConfig()
  );

  return response.data;
};