import MainLayout from "../layouts/MainLayout";
import SkillModule from "../components/skills/SkillModule";
import { useSkillContext } from "../context/SkillContext";

export default function Skills() {
  const { skills } = useSkillContext();

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}

        <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Technical Skills
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Skills & Technologies
          </h1>

          <p className="mt-3 max-w-3xl text-slate-400">
            Technologies, programming languages, frameworks, and tools that
            I use to build modern, scalable, and user-friendly applications.
          </p>

        </section>

        {/* Skills Grid */}

        {skills.length > 0 ? (

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {skills.map((skill) => (
              <SkillModule
                key={skill._id}
                skill={skill}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-3xl border border-dashed border-orange-500/30 bg-orange-500/5 p-16 text-center">

            <h2 className="text-2xl font-bold text-orange-400">
              No Skills Added
            </h2>

            <p className="mt-3 text-slate-400">
              Add your first skill from the Admin Dashboard.
            </p>

          </div>

        )}

      </div>
    </MainLayout>
  );
}