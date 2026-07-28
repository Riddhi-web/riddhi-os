import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useExperienceContext } from "../../context/ExperienceContext";

export default function AddExperienceForm() {
  const {
    addExperience,
    updateExperienceData,
    editingExperience,
    setEditingExperience,
  } = useExperienceContext();

const {
  register,
  handleSubmit,
  reset,
  watch,
} = useForm({
  defaultValues: {
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    currentlyWorking: false,
    description: "",
    technologies: "",
  },
});

console.log("WATCH:", watch());
  useEffect(() => {
    if (editingExperience) {
      reset({
        ...editingExperience,
        startDate: editingExperience.startDate?.slice(0, 10),
        endDate: editingExperience.endDate?.slice(0, 10),
        technologies: editingExperience.technologies?.join(", "),
      });
    } else {
      reset({
        company: "",
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
        technologies: "",
      });
    }
  }, [editingExperience, reset]);

  const onSubmit = async (data) => {
    console.log("Experience Form Data:", data);
    const payload = {
      ...data,
      technologies: data.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    };

    if (editingExperience) {
      await updateExperienceData({
        ...editingExperience,
        ...payload,
      });
    } else {
      await addExperience(payload);
    }

    reset();

    setEditingExperience(null);
  };

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/40 p-6">

      <h2 className="mb-6 text-2xl font-bold text-orange-400">
        {editingExperience ? "Edit Experience" : "Add Experience"}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <input
          {...register("company", { required: true })}
          placeholder="Company"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
        />

        <input
          {...register("position", { required: true })}
          placeholder="Position"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
        />

        <input
          {...register("location")}
          placeholder="Location"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
        />

        <div className="grid grid-cols-2 gap-4">

          <input
            type="date"
            {...register("startDate", { required: true })}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
          />

          <input
            type="date"
            {...register("endDate")}
            className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
          />

        </div>

        <label className="flex items-center gap-2">

          <input
            type="checkbox"
            {...register("currentlyWorking")}
          />

          Currently Working Here

        </label>

        <textarea
          {...register("description")}
          rows={4}
          placeholder="Description"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
        />

        <input
          {...register("technologies")}
          placeholder="React, Node.js, MongoDB"
          className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3"
        />

        <div className="flex gap-4">

          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-400"
          >
            {editingExperience ? "Update Experience" : "Add Experience"}
          </button>

          {editingExperience && (
            <button
              type="button"
              onClick={() => {
                setEditingExperience(null);
                reset();
              }}
              className="rounded-xl border border-slate-700 px-6 py-3 hover:border-red-500"
            >
              Cancel
            </button>
          )}

        </div>

      </form>

    </div>
  );
}
