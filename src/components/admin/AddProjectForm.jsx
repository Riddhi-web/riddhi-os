import { useForm } from "react-hook-form";

export default function AddProjectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

        <div className="pt-2">
          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-5 py-3 font-medium text-black transition hover:bg-orange-400"
          >
            Save Project
          </button>
        </div>
      </form>
    </div>
  );
}