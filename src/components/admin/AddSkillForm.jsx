import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSkillContext } from "../../context/SkillContext";

export default function AddSkillForm() {
  const {
    addSkill,
    editSkill,
    editingSkill,
    setEditingSkill,
  } = useSkillContext();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      category: "",
    },
  });

  useEffect(() => {
    if (editingSkill) {
      reset(editingSkill);
    } else {
      reset({
        name: "",
        category: "",
      });
    }
  }, [editingSkill, reset]);

  const onSubmit = (data) => {
    if (editingSkill) {
      editSkill({
        ...editingSkill,
        ...data,
      });
    } else {
      addSkill(data);
    }

    reset();

    setEditingSkill(null);
  };

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/40 p-6">

      <h2 className="mb-6 text-2xl font-bold text-orange-400">
        {editingSkill ? "Edit Skill" : "Add New Skill"}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        <div>

          <label className="mb-2 block text-sm font-medium">
            Skill Name
          </label>

          <input
            {...register("name", {
              required: true,
            })}
            placeholder="React"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-orange-500"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-medium">
            Category
          </label>

          <select
            {...register("category", {
              required: true,
            })}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-orange-500"
          >
            <option value="">Select Category</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Database">Database</option>
            <option value="Programming">Programming</option>
            <option value="Tools">Tools</option>
            <option value="Other">Other</option>
          </select>

        </div>

        <div className="flex gap-4">

          <button
            type="submit"
            className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black hover:bg-orange-400"
          >
            {editingSkill ? "Update Skill" : "Add Skill"}
          </button>

          {editingSkill && (
            <button
              type="button"
              onClick={() => {
                setEditingSkill(null);
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