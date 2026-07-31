export default function SkillModule({ skill }) {
  const categoryColor = {
    Frontend: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    Backend: "bg-green-500/20 text-green-400 border-green-500/30",
    Database: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    DevOps: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Tools: "bg-pink-500/20 text-pink-400 border-pink-500/30",
  };

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold">
            {skill.name}
          </h3>

          <span
            className={`mt-3 inline-block rounded-full border px-3 py-1 text-xs font-medium ${
              categoryColor[skill.category] ||
              "border-orange-500/30 bg-orange-500/10 text-orange-300"
            }`}
          >
            {skill.category}
          </span>

        </div>

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
          ACTIVE
        </span>

      </div>

      {/* Level */}

      {skill.level && (
        <div className="mt-6">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm text-slate-400">
              Proficiency
            </span>

            <span className="text-sm font-semibold text-orange-400">
              {skill.level}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-orange-500 transition-all duration-500"
              style={{
                width: `${skill.level}%`,
              }}
            />

          </div>

        </div>
      )}

    </div>
  );
}