import { useEffect, useState } from "react";
import { getAnalytics } from "../services/analyticsService";
import { getDashboardStats } from "../services/dashboardService";
import MainLayout from "../layouts/MainLayout";
import AddProjectForm from "../components/admin/AddProjectForm";
import ManageProjects from "../components/admin/ManageProjects";
import AddSkillForm from "../components/admin/AddSkillForm";
import ManageSkills from "../components/admin/ManageSkills";
import AddExperienceForm from "../components/admin/AddExperienceForm";
import ManageExperiences from "../components/admin/ManageExperiences";
import AddEducationForm from "../components/admin/AddEducationForm";
import ManageEducations from "../components/admin/ManageEducations";
import AddCertificateForm from "../components/admin/AddCertificateForm";
import ManageCertificates from "../components/admin/ManageCertificates";
import AddAchievementForm from "../components/admin/AddAchievementForm";
import ManageAchievements from "../components/admin/ManageAchievements";
import ManageSettings from "../components/admin/ManageSettings";
import ManageMessages from "../components/admin/ManageMessages";
import { useProjectContext } from "../context/ProjectContext";

export default function Admin() {
  const { projects } = useProjectContext();

  const [activeTab, setActiveTab] = useState("dashboard");
  const [analytics, setAnalytics] = useState({
  totalVisitors: 0,
  resumeDownloads: 0,
  totalMessages: 0,
  unreadMessages: 0,
});
const [dashboardStats, setDashboardStats] = useState({
  totalProjects: 0,
  totalSkills: 0,
  totalExperience: 0,
  totalEducation: 0,
  totalCertificates: 0,
  totalAchievements: 0,
});
  const tabs = [
  {
    id: "dashboard",
    label: "Dashboard",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
  id: "education",
  label: "Education",
},
{
  id: "certificates",
  label: "Certificates",
},
{
  id: "achievements",
  label: "Achievements",
},
{
  id: "messages",
  label: "Messages",
},
  {
    id: "settings",
    label: "Settings",
  },

];
useEffect(() => {
  const loadDashboard = async () => {
    try {
      const [stats, analyticsData] = await Promise.all([
        getDashboardStats(),
        getAnalytics(),
      ]);

      setDashboardStats(stats);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error(error);
    }
  };

  loadDashboard();
}, []);
 
  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Workspace Header */}

        <section className="rounded-3xl border border-orange-500/20 bg-slate-900/40 p-8">

          <h1 className="text-4xl font-bold text-orange-400">
            RIDDHI.OS Workspace
          </h1>

          <p className="mt-3 max-w-2xl text-slate-400">
            Manage your developer portfolio from one workspace.
            Add projects, manage skills, and monitor your progress.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {tabs.map((tab) => (

              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-6 py-3 font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-black shadow-lg shadow-orange-500/30"
                    : "border border-slate-700 bg-slate-800 text-slate-300 hover:border-orange-500 hover:text-white"
                }`}
              >
                {tab.label}
              </button>

            ))}

          </div>

        </section>

        {/* Dashboard */}

        {activeTab === "dashboard" && (

          <div className="space-y-8">

            <section>
              <h2 className="mb-6 text-2xl font-bold">
                Portfolio Overview
              </h2>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Total Projects
                  </p>
                  <h3 className="mt-4 text-5xl font-bold text-orange-400">
                    {dashboardStats.totalProjects}
                  </h3>
                  </div>

                  <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Skills
                    </p>
                    <h3 className="mt-4 text-5xl font-bold text-cyan-400">
                      {dashboardStats.totalSkills}
                    </h3>
                  </div>

              <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  Experience
                </p>
                <h3 className="mt-4 text-5xl font-bold text-green-400">
                  {dashboardStats.totalExperience}
                </h3>
              </div>

              <div className="rounded-3xl border border-purple-500/20 bg-purple-500/5 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  Education
                </p>
                <h3 className="mt-4 text-5xl font-bold text-purple-400">
                  {dashboardStats.totalEducation}
                </h3>
              </div>

              <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  Certificates
                </p>
                <h3 className="mt-4 text-5xl font-bold text-yellow-400">
                  {dashboardStats.totalCertificates}
                </h3>
              </div>

              <div className="rounded-3xl border border-pink-500/20 bg-pink-500/5 p-6">
                <p className="text-sm uppercase tracking-wide text-slate-400">
                  Achievements
                </p>
                <h3 className="mt-4 text-5xl font-bold text-pink-400">
                  {dashboardStats.totalAchievements}
                </h3>
              </div>

                </div>

            </section>

            <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">

              <h2 className="text-2xl font-bold">
                Quick Actions
              </h2>

              <p className="mt-2 text-slate-400">
                Jump directly to the module you want to manage.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  onClick={() => setActiveTab("projects")}
                  className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
                >
                  Manage Projects
                </button>

                <button
                  onClick={() => setActiveTab("skills")}
                  className="rounded-xl border border-orange-500 px-6 py-3 transition hover:bg-orange-500/10"
                >
                  Manage Skills
                </button>

                <button
                  onClick={() => setActiveTab("experience")}
                  className="rounded-xl border border-orange-500 px-6 py-3 transition hover:bg-orange-500/10"
                >
                  Manage Experience
                </button>

                <button
                onClick={() => setActiveTab("education")}
                className="rounded-xl border border-orange-500 px-6 py-3 transition hover:bg-orange-500/10"
              >
                Manage Education
              </button>
              <button
                onClick={() => setActiveTab("certificates")}
                className="rounded-xl border border-orange-500 px-6 py-3 transition hover:bg-orange-500/10"
              >
                Manage Certificates
              </button>
              <button
                onClick={() => setActiveTab("messages")}
                className="rounded-xl border border-orange-500 px-6 py-3 transition hover:bg-orange-500/10"
              >
                Manage Messages
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className="rounded-xl border border-orange-500 px-6 py-3 transition hover:bg-orange-500/10"
              >
                Settings
              </button>

              </div>

                        </section>

            {/* Portfolio Analytics */}

            <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">

              <h2 className="mb-6 text-2xl font-bold">
                Portfolio Analytics
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-6">
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Total Visitors
                  </p>
                  <h3 className="mt-4 text-5xl font-bold text-indigo-400">
                    {analytics.totalVisitors}
                  </h3>
                </div>

                <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">
                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Resume Downloads
                  </p>
                  <h3 className="mt-4 text-5xl font-bold text-blue-400">
                    {analytics.resumeDownloads}
                  </h3>
                </div>
                  <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/5 p-6">
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Total Messages
                    </p>
                    <h3 className="mt-4 text-5xl font-bold text-indigo-400">
                      {analytics.totalMessages}
                    </h3>
                  </div>
                  <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">
                    <p className="text-sm uppercase tracking-wide text-slate-400">
                      Unread Messages
                    </p>
                    <h3 className="mt-4 text-5xl font-bold text-blue-400">
                      {analytics.unreadMessages}
                    </h3>
                  </div>
              </div>

            </section>

          </div>

        )}

        {/* Projects */}

        {activeTab === "projects" && (

          <div className="space-y-8">

            <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

              <h2 className="text-2xl font-bold text-orange-400">
                Project Management
              </h2>

              <p className="mt-2 text-slate-400">
                Add, edit and manage all portfolio projects.
              </p>

            </section>

            <AddProjectForm />

            <ManageProjects />

          </div>

        )}

        {/* Skills */}

        {activeTab === "skills" && (
      <div className="space-y-8">

          <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

            <h2 className="text-2xl font-bold text-orange-400">
              Skills Management
            </h2>

            <p className="mt-2 text-slate-400">
              Add, edit and organize your technical skills.
            </p>

          </section>

          <AddSkillForm />

          <ManageSkills />

        </div>
      )}

  {/* Experience */}

  {activeTab === "experience" && (
    <div className="space-y-8">

      <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

        <h2 className="text-2xl font-bold text-orange-400">
          Experience Management
        </h2>

        <p className="mt-2 text-slate-400">
          Add, edit and manage your work experience.
        </p>

      </section>

      <AddExperienceForm />

      <ManageExperiences />

    </div>
  )}
  {/* Education */}

{activeTab === "education" && (
  <div className="space-y-8">

    <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="text-2xl font-bold text-orange-400">
        Education Management
      </h2>

      <p className="mt-2 text-slate-400">
        Add, edit and manage your education details.
      </p>

    </section>

    <AddEducationForm />

    <ManageEducations />

  </div>
)}
 {/* certificates */}
    {activeTab === "certificates" && (
  <div className="space-y-8">

    <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="text-2xl font-bold text-orange-400">
        Certificate Management
      </h2>

      <p className="mt-2 text-slate-400">
        Add, edit and manage your certificates.
      </p>

    </section>

    <AddCertificateForm />

    <ManageCertificates />

  </div>
)}
 {/* achievements*/}
{activeTab === "achievements" && (
  <div className="space-y-8">

    <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="text-2xl font-bold text-orange-400">
        Achievement Management
      </h2>

      <p className="mt-2 text-slate-400">
        Add, edit and manage your achievements.
      </p>

    </section>

    <AddAchievementForm />

    <ManageAchievements />

  </div>
)}
 {/* messages*/}

{activeTab === "messages" && (
  <div className="space-y-8">
    <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
      <h2 className="text-2xl font-bold text-orange-400">
        Messages
      </h2>

      <p className="mt-2 text-slate-400">
        View and manage messages sent from your portfolio.
      </p>
    </section>

    <ManageMessages />
  </div>
)}
 
        {/* Settings */}

{activeTab === "settings" && (
  <div className="space-y-8">

    <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="text-2xl font-bold text-orange-400">
        Portfolio Settings
      </h2>

      <p className="mt-2 text-slate-400">
        Manage your personal information and social links.
      </p>

    </section>

    <ManageSettings />

  </div>
)}
      </div>

    </MainLayout>

  );

}