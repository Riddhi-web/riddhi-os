import api from "./api";

const getToken = () => localStorage.getItem("token");

const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

// Send Message (Public)
export const sendMessage = async (data) => {
  const response = await api.post(
    "/api/messages",
    data
  );

  return response.data;
};

// Get All Messages (Admin)
export const getMessages = async () => {
  const response = await api.get(
    "/api/messages",
    {
      headers: authHeaders(),
    }
  );

  return response.data;
};

// Mark Message as Read
export const markMessageAsRead = async (id) => {
  const response = await api.put(
    `/api/messages/${id}/read`,
    {},
    {
      headers: authHeaders(),
    }
  );

  return response.data;
};

// Delete Message
export const deleteMessage = async (id) => {
  const response = await api.delete(
    `/api/messages/${id}`,
    {
      headers: authHeaders(),
    }
  );

  return response.data;
};