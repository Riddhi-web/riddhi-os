import { useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import AddProjectForm from "../components/admin/AddProjectForm";
import ManageProjects from "../components/admin/ManageProjects";
import AddSkillForm from "../components/admin/AddSkillForm";
import ManageSkills from "../components/admin/ManageSkills";
import { useProjectContext } from "../context/ProjectContext";

export default function Admin() {
  const { projects } = useProjectContext();

  const [activeTab, setActiveTab] = useState("dashboard");

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
      id: "settings",
      label: "Settings",
    },
  ];

  const stats = useMemo(() => {
    const completed = projects.filter(
      (project) => project.status === "Completed"
    ).length;

    const inProgress = projects.filter(
      (project) => project.status === "In Progress"
    ).length;

    const planned = projects.filter(
      (project) => project.status === "Planned"
    ).length;

    return {
      total: projects.length,
      completed,
      inProgress,
      planned,
    };
  }, [projects]);

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

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Total Projects
                  </p>

                  <h3 className="mt-4 text-5xl font-bold text-orange-400">
                    {stats.total}
                  </h3>

                </div>

                <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6">

                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Completed
                  </p>

                  <h3 className="mt-4 text-5xl font-bold text-green-400">
                    {stats.completed}
                  </h3>

                </div>

                <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">

                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    In Progress
                  </p>

                  <h3 className="mt-4 text-5xl font-bold text-yellow-400">
                    {stats.inProgress}
                  </h3>

                </div>

                <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-6">

                  <p className="text-sm uppercase tracking-wide text-slate-400">
                    Planned
                  </p>

                  <h3 className="mt-4 text-5xl font-bold text-blue-400">
                    {stats.planned}
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
                  onClick={() => setActiveTab("settings")}
                  className="rounded-xl border border-slate-700 px-6 py-3 transition hover:border-orange-500"
                >
                  Settings
                </button>

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

        {/* Settings */}

        {activeTab === "settings" && (

          <div className="space-y-8">

            <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">

              <h2 className="text-3xl font-bold text-orange-400">
                Workspace Settings
              </h2>

              <p className="mt-3 text-slate-400">
                Personalization and application settings will be added here.
              </p>

            </section>

            <div className="grid gap-6 lg:grid-cols-2">

              <div className="rounded-3xl border border-slate-700 bg-slate-900/40 p-6">

                <h3 className="text-xl font-semibold">
                  Appearance
                </h3>

                <p className="mt-2 text-slate-400">
                  Dark theme is currently enabled.
                </p>

              </div>

              <div className="rounded-3xl border border-slate-700 bg-slate-900/40 p-6">

                <h3 className="text-xl font-semibold">
                  Future Features
                </h3>

                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-400">

                  <li>Authentication</li>
                  <li>Cloud Database</li>
                  <li>Image Upload</li>
                  <li>Analytics</li>
                  <li>Backup & Restore</li>

                </ul>

              </div>

            </div>

          </div>

        )}

      </div>

    </MainLayout>

  );

}