import MainLayout from "../layouts/MainLayout";
import AddProjectForm from "../components/admin/AddProjectForm";
import ManageProjects from "../components/admin/ManageProjects";
import { useProjectContext } from "../context/ProjectContext";

export default function Admin() {
  const { projects } = useProjectContext();

  return (
    <MainLayout>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <AddProjectForm />
        </div>

        <div className="self-start rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
          <h2 className="text-xl font-bold">Admin Stats</h2>

          <div className="mt-6 space-y-6">
            <div>
              <p className="text-sm text-slate-400">Projects</p>
              <p className="text-3xl font-bold">
                {projects.length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <ManageProjects />
      </div>
    </MainLayout>
  );
}