import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import { ProjectProvider } from "./context/ProjectContext";
import { SkillProvider } from "./context/SkillContext";
import { ExperienceProvider } from "./context/ExperienceContext";
import { EducationProvider } from "./context/EducationContext";
import { CertificateProvider } from "./context/CertificateContext.jsx";
import { AchievementProvider } from "./context/AchievementContext";
import { SettingsProvider } from "./context/SettingsContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ProjectProvider>
      <SkillProvider>
        <ExperienceProvider>
          <EducationProvider>
            <CertificateProvider>
              <AchievementProvider>
                <SettingsProvider>

                  <App />

                  <Toaster
                    position="top-right"
                    reverseOrder={false}
                    toastOptions={{
                      duration: 3000,
                      style: {
                        background: "#0f172a",
                        color: "#fff",
                        border: "1px solid rgba(249,115,22,.3)",
                      },
                      success: {
                        iconTheme: {
                          primary: "#f97316",
                          secondary: "#fff",
                        },
                      },
                      error: {
                        iconTheme: {
                          primary: "#ef4444",
                          secondary: "#fff",
                        },
                      },
                    }}
                  />

                </SettingsProvider>
              </AchievementProvider>
            </CertificateProvider>
          </EducationProvider>
        </ExperienceProvider>
      </SkillProvider>
    </ProjectProvider>
  </AuthProvider>
);