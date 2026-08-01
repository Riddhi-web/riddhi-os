import api from "./api";

const getToken = () => localStorage.getItem("token");

const authConfig = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

// Get all projects
export const getProjects = async () => {
  const response = await api.get("/api/projects");
  return response.data.data;
};

// Create project
export const saveProject = async (project) => {
  const response = await api.post(
    "/api/projects",
    project,
    authConfig()
  );

  return response.data.data;
};

// Update project
export const updateProject = async (id, project) => {
  const response = await api.put(
    `/api/projects/${id}`,
    project,
    authConfig()
  );

  return response.data.data;
};

// Delete project
export const deleteProject = async (id) => {
  await api.delete(
    `/api/projects/${id}`,
    authConfig()
  );
};