import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/projects/ProjectCard";
import { useProjectContext } from "../context/ProjectContext";

export default function Projects() {
  const { projects } = useProjectContext();

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}

        <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Portfolio
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Projects
          </h1>

          <p className="mt-3 max-w-3xl text-slate-400">
            A collection of projects I've built while learning and working with
            modern web technologies. Each project represents practical
            experience in solving real-world problems.
          </p>

        </section>

        {/* Projects */}

        {projects.length > 0 ? (

          <div className="grid gap-8 lg:grid-cols-2">

            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-dashed border-orange-500/30 bg-orange-500/5 p-16 text-center">

            <h2 className="text-2xl font-bold text-orange-400">
              No Projects Found
            </h2>

            <p className="mt-3 text-slate-400">
              Add your first project from the Admin Dashboard.
            </p>

          </div>

        )}

      </div>
    </MainLayout>
  );
}