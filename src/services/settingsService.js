import axios from "axios";

const API_URL = "http://localhost:5000/api/settings";
const UPLOAD_URL = "http://localhost:5000/api/upload";

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

// Get Portfolio Settings
export const getSettings = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// Update Portfolio Settings
export const saveSettings = async (settings) => {
  const response = await axios.put(API_URL, settings, {
    headers: authHeaders(),
  });

  return response.data.data;
};

// Upload Profile Image
export const uploadProfileImage = async (file) => {
  const formData = new FormData();
  formData.append("profileImage", file);

  const response = await axios.post(
    `${UPLOAD_URL}/profile`,
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
  const response = await axios.delete(
    `${UPLOAD_URL}/profile`,
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

  const response = await axios.post(
    `${UPLOAD_URL}/resume`,
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
  const response = await axios.delete(
    `${UPLOAD_URL}/resume`,
    {
      headers: authHeaders(),
    }
  );

  return response.data.data;
};