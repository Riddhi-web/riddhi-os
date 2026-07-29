import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAchievementContext } from "../../context/AchievementContext";

export default function AddAchievementForm() {
  const {
    addAchievement,
    editingAchievement,
    updateAchievementData,
  } = useAchievementContext();

  const {
    register,
    handleSubmit,
    reset,
    watch,
  } = useForm();

  useEffect(() => {
    if (editingAchievement) {
      reset({
        title: editingAchievement.title,
        organization: editingAchievement.organization,
        date: editingAchievement.date
          ? editingAchievement.date.split("T")[0]
          : "",
        achievementUrl: editingAchievement.achievementUrl,
        description: editingAchievement.description,
      });
    } else {
      reset({
        title: "",
        organization: "",
        date: "",
        achievementUrl: "",
        description: "",
      });
    }
  }, [editingAchievement, reset]);

  console.log("Achievement Form:", watch());

  const onSubmit = async (data) => {
    console.log("Submit Data:", data);

    const payload = { ...data };

    console.log("Payload:", payload);

    if (editingAchievement) {
      await updateAchievementData(editingAchievement._id, payload);
    } else {
      await addAchievement(payload);
    }

    reset();
  };

  return (
    <section className="rounded-3xl border border-orange-500/20 bg-slate-900/40 p-8">
      <h2 className="text-2xl font-bold text-orange-400">
        {editingAchievement ? "Edit Achievement" : "Add Achievement"}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 grid gap-5"
      >
        <input
          {...register("title", { required: true })}
          placeholder="Achievement Title"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3"
        />

        <input
          {...register("organization")}
          placeholder="Organization"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3"
        />

        <input
          type="date"
          {...register("date")}
          className="rounded-xl border border-slate-700 bg-slate-800 p-3"
        />

        <input
          {...register("achievementUrl")}
          placeholder="Achievement URL"
          className="rounded-xl border border-slate-700 bg-slate-800 p-3"
        />

        <textarea
          {...register("description")}
          placeholder="Description"
          rows={4}
          className="rounded-xl border border-slate-700 bg-slate-800 p-3"
        />

        <button
          type="submit"
          className="rounded-xl bg-orange-500 py-3 font-semibold text-black hover:bg-orange-400"
        >
          {editingAchievement ? "Update Achievement" : "Add Achievement"}
        </button>
      </form>
    </section>
  );
}