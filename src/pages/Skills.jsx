import MainLayout from "../layouts/MainLayout";
import SkillModule from "../components/skills/SkillModule";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <MainLayout>
      <div>
        <h1 className="mb-8 text-4xl font-bold">
          Active Modules
        </h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillModule
              key={skill}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}