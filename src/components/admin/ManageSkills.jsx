import { useSkillContext } from "../../context/SkillContext";

export default function ManageSkills() {
  const {
    skills,
    removeSkill,
    setEditingSkill,
  } = useSkillContext();

  if (skills.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-700 bg-slate-900/40 p-8 text-center">
        <h2 className="text-2xl font-bold text-orange-400">
          No Skills Found
        </h2>

        <p className="mt-3 text-slate-400">
          Add your first skill to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/40 p-6">

      <h2 className="mb-6 text-2xl font-bold text-orange-400">
        Manage Skills
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {skills.map((skill) => (

          <div
            key={skill._id}
            className="rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-orange-500"
          >

            <h3 className="text-xl font-bold text-white">
              {skill.name}
            </h3>

            <p className="mt-2 text-slate-400">
              {skill.category}
            </p>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => setEditingSkill(skill)}
                className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-black transition hover:bg-orange-400"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  if (
                    window.confirm(
                      `Delete "${skill.name}"?\n\nThis action cannot be undone.`
                    )
                  ) {
                    removeSkill(skill._id);
                  }
                }}
                className="rounded-lg border border-red-500 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}