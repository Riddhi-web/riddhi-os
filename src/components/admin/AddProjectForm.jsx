import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useProjectContext } from "../../context/ProjectContext";

export default function AddProjectForm() {
  const {
  register,
  handleSubmit,
  reset,
  setValue,
  formState: { errors },
} = useForm();

    const {
    addProject,
    editProject,
    editingProject,
    setEditingProject,
  } = useProjectContext();

 useEffect(() => {
  if (!editingProject) return;

  console.log("editingProject changed:", editingProject);

  setValue("name", editingProject.name);
  setValue("description", editingProject.description);
  setValue("github", editingProject.github);
  setValue("demo", editingProject.demo);
  setValue("status", editingProject.status);
}, [editingProject, setValue]);

    const onSubmit = (data) => {
  if (editingProject) {
    editProject({
      ...editingProject,
      ...data,
    });

    alert("✅ Project updated successfully!");

    setEditingProject(null);
  } else {
    addProject(data);

    alert("✅ Project added successfully!");
  }

  reset();
};
  return (
    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">
      <h2 className="mb-2 text-2xl font-bold">
        Add Project
      </h2>

      <p className="mb-6 text-slate-400">
        Create a new project entry for your portfolio.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Project Name
          </label>

          <input
            {...register("name", {
              required: "Project name is required",
            })}
            placeholder="RIDDHI.OS"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none transition focus:border-orange-500"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Description
          </label>

          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Describe your project..."
            rows={4}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none transition focus:border-orange-500"
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            GitHub URL
          </label>

          <input
            {...register("github")}
            placeholder="https://github.com/..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Live Demo URL
          </label>

          <input
            {...register("demo")}
            placeholder="https://..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none transition focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Status
          </label>

          <select
            {...register("status")}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none transition focus:border-orange-500"
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Planned">Planned</option>
          </select>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-5 py-3 font-medium text-black transition hover:bg-orange-400"
          >
            {editingProject ? "Update Project" : "Save Project"}
          </button>
          {editingProject && (
  <button
    type="button"
    onClick={() => {
      setEditingProject(null);
      reset();
    }}
    className="rounded-xl border border-slate-700 px-5 py-3 hover:bg-slate-800"
  >
    Cancel
  </button>
)}
        </div>
      </form>
    </div>
  );
}