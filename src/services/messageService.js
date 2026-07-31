import axios from "axios";

const API_URL = "http://localhost:5000/api/messages";

const getToken = () => localStorage.getItem("token");

// Public
export const sendMessage = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

// Admin
export const getMessages = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};

export const markMessageAsRead = async (id) => {
  const response = await axios.put(
    `${API_URL}/${id}/read`,
    {},
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return response.data;
};

export const deleteMessage = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data;
};