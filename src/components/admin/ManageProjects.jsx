import { useProjectContext } from "../../context/ProjectContext";

export default function ManageProjects() {
  const {
  projects,
  removeProject,
  setEditingProject,
} = useProjectContext();
console.log(projects);
  return (
    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
      <h2 className="text-2xl font-bold">Manage Projects</h2>

      <div className="mt-6 space-y-4">
       {projects.map((project) => (
  <div
    key={project.id}
    className="rounded-2xl border border-slate-800 bg-slate-900/20 p-5"
  >
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-semibold">
          {project.name}
        </h3>

        <p className="mt-2 text-slate-400">
          {project.description}
        </p>

        <span className="mt-3 inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
          {project.status}
        </span>
      </div>

      <div className="flex gap-3">
      <button
  onClick={() => {
    console.log("Clicked:", project);
    setEditingProject(project);
  }}
  className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800"
>
  ✏ Edit
</button>
        <button
              onClick={() => {
                if (
                  window.confirm(
                    `Delete "${project.name}"?\n\nThis action cannot be undone.`
                  )
                ) {
                  removeProject(project.id);
                }
              }}
              className="rounded-xl border border-red-500 px-4 py-2 text-red-400 hover:bg-red-500/10"
            >
              🗑 Delete
      </button>
      </div>
    </div>
  </div>
))}
      </div>
    </div>
  );
}