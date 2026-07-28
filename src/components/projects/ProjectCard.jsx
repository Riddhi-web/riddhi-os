export default function ProjectCard({ project }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-6">
      <h2 className="text-2xl font-bold">
        {project.title}
      </h2>

      <p className="mt-3 text-slate-400">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {(project.techStack || []).map((tech) => (
          <span
            key={tech}
            className="rounded-lg bg-slate-800 px-3 py-1 text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-orange-500 px-4 py-2 text-orange-400"
        >
          GitHub
        </a>

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-orange-500 px-4 py-2 text-black"
        >
          Live Demo
        </a>
      </div>

      <p className="mt-5 text-sm text-green-400">
        ● {project.status}
      </p>
    </div>
  );
}