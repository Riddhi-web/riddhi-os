import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ProjectProvider } from "./context/ProjectContext";
import { SkillProvider } from "./context/SkillContext";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <SkillProvider>
          <App />
        </SkillProvider>
      </ProjectProvider>
    </AuthProvider>
  </StrictMode>
);