import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

const getToken = () => localStorage.getItem("token");

// Get all projects
export const getProjects = async () => {
  const response = await axios.get(API_URL);
  return response.data.data;
};

// Create project
export const saveProject = async (project) => {
  const response = await axios.post(API_URL, project, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data.data;
};

// Update project
export const updateProject = async (id, project) => {
  const response = await axios.put(`${API_URL}/${id}`, project, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return response.data.data;
};

// Delete project
export const deleteProject = async (id) => {
  await axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};