import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ProjectProvider } from "./context/ProjectContext";
import { SkillProvider } from "./context/SkillContext";
import { AuthProvider } from "./context/AuthContext";
import { ExperienceProvider } from "./context/ExperienceContext";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
  <ProjectProvider>
    <SkillProvider>
      <ExperienceProvider>
        <App />
      </ExperienceProvider>
    </SkillProvider>
  </ProjectProvider>
</AuthProvider>
);