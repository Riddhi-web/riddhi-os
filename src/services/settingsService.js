import api from "./api";

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

// Get Portfolio Settings
export const getSettings = async () => {
  const response = await api.get("/api/settings");
  return response.data.data;
};

// Update Portfolio Settings
export const saveSettings = async (settings) => {
  const response = await api.put(
    "/api/settings",
    settings,
    {
      headers: authHeaders(),
    }
  );

  return response.data.data;
};

// Upload Profile Image
export const uploadProfileImage = async (file) => {
  const formData = new FormData();
  formData.append("profileImage", file);

  const response = await api.post(
    "/api/upload/profile",
    formData,
    {
      headers: {
        ...authHeaders(),
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
};

// Delete Profile Image
export const deleteProfileImage = async () => {
  const response = await api.delete(
    "/api/upload/profile",
    {
      headers: authHeaders(),
    }
  );

  return response.data.data;
};

// Upload Resume
export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append("resume", file);

  const response = await api.post(
    "/api/upload/resume",
    formData,
    {
      headers: {
        ...authHeaders(),
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data.data;
};

// Delete Resume
export const deleteResume = async () => {
  const response = await api.delete(
    "/api/upload/resume",
    {
      headers: authHeaders(),
    }
  );

  return response.data.data;
};