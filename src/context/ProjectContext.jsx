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
  const loadProjects = () => {
    setProjects(getProjects());
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const addProject = (project) => {
    saveProject(project);
    loadProjects();
  };

  const removeProject = (id) => {
    deleteProject(id);
    loadProjects();
  };

  const editProject = (project) => {
    updateProject(project);
    loadProjects();
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
}}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext() {
  return useContext(ProjectContext);
}