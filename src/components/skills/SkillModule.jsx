export default function SkillModule({ skill }) {
  return (
    <div className="rounded-2xl border border-slate-800 p-4 transition hover:border-cyan-500 hover:bg-slate-900/50">
      <div className="flex items-center justify-between">
        <span>{skill}</span>

        <span className="text-green-400">
          ● ACTIVE
        </span>
      </div>
    </div>
  );
}