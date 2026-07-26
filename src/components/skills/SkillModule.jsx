export default function SkillModule({ skill }) {
  return (
    <div className="rounded-2xl border border-slate-800 p-4 transition hover:border-orange-500 hover:bg-slate-900/50">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {skill.name}
          </h3>

          <p className="text-sm text-slate-400">
            {skill.category}
          </p>
        </div>

        <span className="text-green-400">
          ● ACTIVE
        </span>
      </div>
    </div>
  );
}