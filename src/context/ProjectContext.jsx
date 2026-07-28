import { createContext, useContext, useEffect, useState } from "react";
import {
  getProjects,
  saveProject,
  deleteProject,
  updateProject,
} from "../services/projectService";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

  // Load all projects from backend
  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Add Project
  const addProject = async (project) => {
    try {
      await saveProject(project);
      await loadProjects();
    } catch (error) {
      console.error("Failed to add project:", error);
    }
  };

  // Delete Project
  const removeProject = async (id) => {
    try {
      await deleteProject(id);
      await loadProjects();
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  };

  // Update Project
  const editProject = async (project) => {
    try {
      await updateProject(project._id, project);
      await loadProjects();
      setEditingProject(null);
    } catch (error) {
      console.error("Failed to update project:", error);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        addProject,
        removeProject,
        editProject,
        editingProject,
        setEditingProject,
        loadProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  return useContext(ProjectContext);
}