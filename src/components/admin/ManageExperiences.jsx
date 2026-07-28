import { useExperienceContext } from "../../context/ExperienceContext";

export default function ManageExperiences() {
  const {
    experiences,
    deleteExperienceData,
    setEditingExperience,
  } = useExperienceContext();

  if (experiences.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-700 bg-slate-900/40 p-8 text-center">
        <h2 className="text-2xl font-bold text-orange-400">
          No Experience Found
        </h2>

        <p className="mt-3 text-slate-400">
          Add your first work experience to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/40 p-6">

      <h2 className="mb-6 text-2xl font-bold text-orange-400">
        Manage Experience
      </h2>

      <div className="grid gap-5">

        {experiences.map((experience) => (

          <div
            key={experience._id}
            className="rounded-2xl border border-slate-700 bg-slate-800 p-5 transition hover:border-orange-500"
          >

            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-xl font-bold text-white">
                  {experience.position}
                </h3>

                <p className="text-orange-400 font-medium">
                  {experience.company}
                </p>

                <p className="text-slate-400 text-sm">
                  {experience.location}
                </p>

              </div>

              <div className="text-sm text-slate-400">

                {new Date(experience.startDate).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}

                {" - "}

                {experience.currentlyWorking
                  ? "Present"
                  : new Date(experience.endDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}

              </div>

            </div>

            {experience.description && (
              <p className="mt-4 text-slate-300">
                {experience.description}
              </p>
            )}

            {experience.technologies?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">

                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            )}

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => setEditingExperience(experience)}
                className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-black transition hover:bg-orange-400"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  if (
                    window.confirm(
                      `Delete "${experience.position}" at "${experience.company}"?\n\nThis action cannot be undone.`
                    )
                  ) {
                    deleteExperienceData(experience._id);
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