import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/projects/ProjectCard";
import { useProjectContext } from "../context/ProjectContext";

export default function Projects() {
  const { projects } = useProjectContext();

  return (
    <MainLayout>
      <div>
        <h1 className="mb-8 text-4xl font-bold">
          Deployments
        </h1>

        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}