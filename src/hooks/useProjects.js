import { useEffect, useState } from "react";
import {
  getProjects,
  saveProject,
  deleteProject,
  updateProject,
} from "../services/projectService";

export default function useProjects() {
  const [projects, setProjects] = useState([]);

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

  return {
    projects,
    addProject,
    removeProject,
    editProject,
  };
}