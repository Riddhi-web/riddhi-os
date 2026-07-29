import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { ProjectProvider } from "./context/ProjectContext";
import { SkillProvider } from "./context/SkillContext";
import { AuthProvider } from "./context/AuthContext";
import { ExperienceProvider } from "./context/ExperienceContext";
import { EducationProvider } from "./context/EducationContext";
import { CertificateProvider } from "./context/CertificateContext";
import { AchievementProvider } from "./context/AchievementContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProjectProvider>
      <SkillProvider>
        <ExperienceProvider>
          <EducationProvider>
            <CertificateProvider>
              <AchievementProvider>
                <App />
              </AchievementProvider>
            </CertificateProvider>
          </EducationProvider>
        </ExperienceProvider>
      </SkillProvider>
    </ProjectProvider>
  </AuthProvider>
);