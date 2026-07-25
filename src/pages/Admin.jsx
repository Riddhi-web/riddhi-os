import MainLayout from "../layouts/MainLayout";
import AddProjectForm from "../components/admin/AddProjectForm";

export default function Admin() {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Manage projects, skills, and portfolio content.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 p-6">
            <h2 className="text-lg font-semibold">
              Projects
            </h2>

            <p className="mt-2 text-slate-400">
              Manage project entries.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 p-6">
            <h2 className="text-lg font-semibold">
              Skills
            </h2>

            <p className="mt-2 text-slate-400">
              Update skill modules.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 p-6">
            <h2 className="text-lg font-semibold">
              Profile
            </h2>

            <p className="mt-2 text-slate-400">
              Edit personal information.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-xl bg-orange-500 px-5 py-3 font-medium text-black hover:bg-orange-400">
              Add Project
            </button>

            <button className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800">
              Add Skill
            </button>

            <button className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800">
              Update Profile
            </button>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
  <div className="lg:col-span-2">
    <AddProjectForm />
  </div>

  <div className="self-start rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
  <h2 className="text-xl font-bold">Admin Stats</h2>

  <div className="mt-6 space-y-6">
    <div>
      <p className="text-sm text-slate-400">Projects</p>
      <p className="text-3xl font-bold">3</p>
    </div>

    <div>
      <p className="text-sm text-slate-400">Skills</p>
      <p className="text-3xl font-bold">12</p>
    </div>

    <div>
      <p className="text-sm text-slate-400">Status</p>
      <p className="font-semibold text-green-400">
        Active
      </p>
    </div>
  </div>
</div>
</div>
      </div>
      
      
    </MainLayout>
  );
}