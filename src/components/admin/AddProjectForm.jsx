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

    setValue("title", editingProject.title);
    setValue("description", editingProject.description);
    setValue("github", editingProject.github);
    setValue("liveDemo", editingProject.liveDemo);
    setValue("status", editingProject.status);
    setValue("techStack", (editingProject.techStack || []).join(", "));
    setValue("category", editingProject.category);
    setValue("featured", editingProject.featured);

  }, [editingProject, setValue]);

  const onSubmit = (data) => {
    const payload = {
      ...data,
      techStack: data.techStack
        ? data.techStack
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean)
        : [],
      featured: data.featured || false,
    };

    if (editingProject) {
      editProject({
        ...editingProject,
        ...payload,
      });

      alert("✅ Project updated successfully!");

      setEditingProject(null);
    } else {
      addProject(payload);

      alert("✅ Project added successfully!");
    }

    reset();
  };

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="mb-2 text-2xl font-bold">
        {editingProject ? "Update Project" : "Add Project"}
      </h2>

      <p className="mb-6 text-slate-400">
        Create or update your portfolio projects.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Project Title
          </label>

          <input
            {...register("title", {
              required: "Project title is required",
            })}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
            placeholder="RIDDHI.OS"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-400">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Description
          </label>

          <textarea
            rows={4}
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-400">
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Tech Stack
          </label>

          <input
            {...register("techStack")}
            placeholder="React, Node.js, MongoDB"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            GitHub URL
          </label>

          <input
            {...register("github")}
            placeholder="https://github.com/..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Live Demo URL
          </label>

          <input
            {...register("liveDemo")}
            placeholder="https://..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Category
          </label>

          <select
            {...register("category")}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          >
            <option value="Web">Web</option>
            <option value="Mobile">Mobile</option>
            <option value="AI">AI</option>
            <option value="UI/UX">UI/UX</option>
            <option value="Open Source">Open Source</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Status
          </label>

          <select
            {...register("status")}
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          >
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Planned">Planned</option>
          </select>
        </div>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            {...register("featured")}
          />
          Featured Project
        </label>

        <div className="flex gap-3">

          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-400"
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
              className="rounded-xl border border-slate-700 px-6 py-3 hover:bg-slate-800"
            >
              Cancel
            </button>
          )}

        </div>

      </form>
    </div>
  );
}