import api from "./api";

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// Get all certificates (Public)
export const fetchCertificates = async () => {
  const response = await api.get("/api/certificates");
  return response.data.data;
};

// Add certificate
export const saveCertificate = async (certificate) => {
  const response = await api.post(
    "/api/certificates",
    certificate,
    authConfig()
  );

  return response.data.data;
};

// Update certificate
export const editCertificate = async (id, certificate) => {
  const response = await api.put(
    `/api/certificates/${id}`,
    certificate,
    authConfig()
  );

  return response.data.data;
};

// Delete certificate
export const removeCertificate = async (id) => {
  await api.delete(
    `/api/certificates/${id}`,
    authConfig()
  );
};