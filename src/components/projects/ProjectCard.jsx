export default function ProjectCard({ project }) {
  const imageUrl = project.image
    ? `${import.meta.env.VITE_API_URL}/${project.image}`
    : null;

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-slate-900/30 p-6 transition hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10">

      {imageUrl && (
        <img
          src={imageUrl}
          alt={project.title}
          className="mb-6 h-56 w-full rounded-2xl object-cover"
        />
      )}

      <div className="flex flex-wrap items-center gap-3">

        <h2 className="text-2xl font-bold">
          {project.title}
        </h2>

        {project.featured && (
          <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-black">
            FEATURED
          </span>
        )}

      </div>

      <p className="mt-4 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {(project.techStack || []).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-orange-500 px-5 py-2 text-orange-400 transition hover:bg-orange-500 hover:text-black"
          >
            GitHub
          </a>
        )}

        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-orange-500 px-5 py-2 font-semibold text-black transition hover:bg-orange-400"
          >
            Live Demo
          </a>
        )}

      </div>

      <div className="mt-6">

        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          ● {project.status}
        </span>

      </div>

    </div>
  );
}