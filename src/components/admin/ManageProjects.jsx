import { useProjectContext } from "../../context/ProjectContext";

export default function ManageProjects() {
  const {
    projects,
    removeProject,
    setEditingProject,
  } = useProjectContext();

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="text-2xl font-bold">
        Manage Projects
      </h2>

      <div className="mt-6 space-y-5">

        {projects.length > 0 ? (
          projects.map((project) => {
          const imageUrl = project.image
           ? `${import.meta.env.VITE_API_URL}/${project.image}`
             : null;
            return (
              <div
                key={project._id}
                className="rounded-3xl border border-orange-500/20 bg-slate-900/30 p-5 transition hover:border-orange-500"
              >

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                  {/* Left */}

                  <div className="flex flex-1 gap-5">

                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="h-28 w-28 rounded-2xl object-cover"
                      />
                    )}

                    <div className="flex-1">

                      <div className="flex flex-wrap items-center gap-3">

                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>

                        {project.featured && (
                          <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-black">
                            FEATURED
                          </span>
                        )}

                      </div>

                      <p className="mt-3 text-slate-400">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">

                        {(project.techStack || []).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs text-orange-300"
                          >
                            {tech}
                          </span>
                        ))}

                      </div>

                      <span className="mt-5 inline-block rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                        ● {project.status}
                      </span>

                    </div>

                  </div>

                  {/* Right */}

                  <div className="flex flex-wrap gap-3 lg:flex-col">

                    <button
                      onClick={() => setEditingProject(project)}
                      className="rounded-xl border border-orange-500 px-5 py-2 transition hover:bg-orange-500/10"
                    >
                      ✏ Edit
                    </button>

                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            `Delete "${project.title}"?\n\nThis action cannot be undone.`
                          )
                        ) {
                          removeProject(project._id);
                        }
                      }}
                      className="rounded-xl border border-red-500 px-5 py-2 text-red-400 transition hover:bg-red-500/10"
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              </div>
            );
          })
        ) : (
          <div className="rounded-2xl border border-dashed border-orange-500/30 p-12 text-center">

            <h3 className="text-2xl font-bold text-orange-400">
              No Projects Found
            </h3>

            <p className="mt-3 text-slate-400">
              Add your first project to get started.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}