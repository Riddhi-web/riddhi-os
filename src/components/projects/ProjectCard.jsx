export default function ProjectCard({ project }) {
  return (
    <div className="rounded-3xl border border-slate-800 p-6 transition hover:border-cyan-500">
      <p className="font-mono text-sm text-orange-400">
        {project.code}
      </p>

      <h2 className="mt-3 text-2xl font-bold">
        {project.name}
      </h2>

      <p className="mt-2 text-slate-400">
        {project.description}
      </p>

      <div className="mt-4">
        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm text-green-400">
          {project.status}
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-slate-900 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}