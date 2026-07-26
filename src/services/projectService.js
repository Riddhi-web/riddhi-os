import defaultProjects from "../data/projects";

const STORAGE_KEY = "riddhi_projects";

// Get all projects
export const getProjects = () => {
  const storedProjects = localStorage.getItem(STORAGE_KEY);

  if (!storedProjects) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultProjects));
    return defaultProjects;
  }

  return JSON.parse(storedProjects);
};

// Save new project
export const saveProject = (project) => {
  const projects = getProjects();

  const newProject = {
    id: Date.now(),
    ...project,
  };

  projects.push(newProject);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));

  return newProject;
};

// Delete project
export const deleteProject = (id) => {
  const projects = getProjects().filter((project) => project.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

// Update project
export const updateProject = (updatedProject) => {
  const projects = getProjects().map((project) =>
    project.id === updatedProject.id ? updatedProject : project
  );

  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};