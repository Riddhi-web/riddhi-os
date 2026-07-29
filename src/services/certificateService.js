import axios from "axios";

const API_URL = "http://localhost:5000/api/certificates";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const fetchCertificates = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

export const saveCertificate = async (certificate) => {
  const response = await axios.post(
    API_URL,
    certificate,
    authConfig()
  );

  return response.data.data;
};

export const editCertificate = async (id, certificate) => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    certificate,
    authConfig()
  );

  return response.data.data;
};

export const removeCertificate = async (id) => {
  await axios.delete(
    `${API_URL}/${id}`,
    authConfig()
  );
};