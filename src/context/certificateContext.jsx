import { createContext, useContext, useEffect, useState } from "react";

import {
  fetchCertificates,
  saveCertificate,
  editCertificate,
  removeCertificate,
} from "../services/certificateService";

const CertificateContext = createContext();

export const CertificateProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);
  const [editingCertificate, setEditingCertificate] = useState(null);

  useEffect(() => {
    loadCertificates();
  }, []);

  const loadCertificates = async () => {
    try {
      const data = await fetchCertificates();
      setCertificates(data);
    } catch (error) {
      console.error("Error loading certificates:", error);
    }
  };

  const addCertificate = async (certificateData) => {
    try {
      console.log("Sending Certificate:", certificateData);

      const newCertificate = await saveCertificate({
        ...certificateData,
      });

      setCertificates((prev) => [newCertificate, ...prev]);
    } catch (error) {
      console.error(error.response?.data);
      console.error("Error adding certificate:", error);
    }
  };

  const updateCertificateData = async (id, certificateData) => {
    try {
      const updatedCertificate = await editCertificate(id, certificateData);

      setCertificates((prev) =>
        prev.map((certificate) =>
          certificate._id === id ? updatedCertificate : certificate
        )
      );

      setEditingCertificate(null);
    } catch (error) {
      console.error(error.response?.data);
      console.error("Error updating certificate:", error);
    }
  };

  const deleteCertificateData = async (id) => {
    try {
      await removeCertificate(id);

      setCertificates((prev) =>
        prev.filter((certificate) => certificate._id !== id)
      );
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  return (
    <CertificateContext.Provider
      value={{
        certificates,
        editingCertificate,
        setEditingCertificate,
        addCertificate,
        updateCertificateData,
        deleteCertificateData,
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
};

export const useCertificate = () => useContext(CertificateContext);