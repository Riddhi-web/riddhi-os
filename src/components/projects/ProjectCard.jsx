export default function ProjectCard({ project }) {
  const imageUrl = project.image
    ? `http://localhost:5000/${project.image}`
    : null;

  return (
    <div className="overflow-hidden rounded-3xl border border-orange-500/20 bg-slate-900/30 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/10">

      {/* Project Image */}

      {imageUrl && (
        <img
          src={imageUrl}
          alt={project.title}
          className="h-56 w-full object-cover"
        />
      )}

      <div className="p-6">

        {/* Header */}

        <div className="flex items-start justify-between gap-4">

          <h2 className="text-2xl font-bold">
            {project.title}
          </h2>

          {project.featured && (
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-black">
              FEATURED
            </span>
          )}

        </div>

        {/* Description */}

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-6 flex flex-wrap gap-2">

          {(project.techStack || []).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-sm text-orange-300"
            >
              {tech}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-3">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-orange-500 px-5 py-2 font-medium text-orange-400 transition hover:bg-orange-500/10"
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

        {/* Status */}

        <div className="mt-6">

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-400"
                : project.status === "In Progress"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-blue-500/20 text-blue-400"
            }`}
          >
            ● {project.status}
          </span>

        </div>

      </div>

    </div>
  );
}