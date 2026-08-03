import MainLayout from "../layouts/MainLayout";
import StatusCard from "../components/dashboard/StatusCard";
import { useSettingsContext } from "../context/SettingsContext";
import { useProjectContext } from "../context/ProjectContext";
import { useSkillContext } from "../context/SkillContext";
import { trackResumeDownload } from "../services/analyticsService";

export default function Home() {
  const { settings } = useSettingsContext();
  const { projects } = useProjectContext();
  const { skills } = useSkillContext();

  const BASE_URL = import.meta.env.VITE_API_URL;
  const profileImage = settings.profileImage
  ? `${BASE_URL}/${settings.profileImage}`
  : null;

  const resume = settings.resume
  ? `${BASE_URL}/${settings.resume}`
  : null;
  
    const featuredProject =
      projects.find((project) => project.featured) || projects[0];

  const handleResumeDownload = async () => {
    try {
      await trackResumeDownload();
    } catch (error) {
      console.error(error);
    }

    window.open(resumeUrl, "_blank");
  };

  return (
    <MainLayout>
      <div className="space-y-6">

        {/* Hero */}

        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">

          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center">

            {profileImage && (
              <img
                src={profileImage}
                alt={settings.fullName}
                className="h-40 w-40 rounded-3xl border-2 border-orange-500 object-cover"
              />
            )}

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
                Currently Building
              </p>

              <h1 className="mt-4 text-5xl font-bold">
                {settings.fullName || "Riddhi Manga"}
              </h1>

              <p className="mt-4 max-w-2xl text-lg text-slate-400">
                {settings.bio ||
                  "A passionate MERN Stack Developer building modern web applications."}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
                <span>📍 {settings.location || "India"}</span>
                <span>⚡ {settings.title || "Full Stack MERN Developer"}</span>
                <span>🚀 Open to Opportunities</span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                {settings.github && (
                  <a
                    href={settings.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-orange-500 px-5 py-3 transition hover:bg-orange-500/10"
                  >
                    GitHub
                  </a>
                )}

                {settings.linkedin && (
                  <a
                    href={settings.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-orange-500 px-5 py-3 transition hover:bg-orange-500/10"
                  >
                    LinkedIn
                  </a>
                )}

                {settings.leetcode && (
                  <a
                    href={settings.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-orange-500 px-5 py-3 transition hover:bg-orange-500/10"
                  >
                    LeetCode
                  </a>
                )}

                {resumeUrl && (
                  <button
                    onClick={handleResumeDownload}
                    className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
                  >
                    Download Resume
                  </button>
                )}

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid gap-6 md:grid-cols-3">

          <StatusCard
            title="Projects"
            value={projects.length}
          />

          <StatusCard
            title="Skills"
            value={skills.length}
          />

          <StatusCard
            title="Availability"
            value="OPEN"
            color="text-green-400"
          />

        </div>

        {/* Bottom Section */}

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Featured Project */}

          <div className="rounded-3xl border border-orange-500/40 bg-orange-500/5 p-6">

            <h2 className="mb-4 text-2xl font-bold">
              Featured Project
            </h2>

            <h3 className="text-xl font-semibold">
              {featuredProject?.title || "No Project"}
            </h3>

            <p className="mt-3 text-slate-400">
              {featuredProject?.description ||
                "No featured project available."}
            </p>

          </div>

          {/* Tech Stack */}

          <div className="rounded-3xl border border-orange-500/40 bg-orange-500/5 p-6">

            <h2 className="mb-4 text-2xl font-bold">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">

              {skills.slice(0, 10).map((skill) => (
                <span
                  key={skill._id}
                  className="rounded-full border border-orange-500/30 bg-slate-900 px-4 py-2 text-sm text-orange-300"
                >
                  {skill.name}
                </span>
              ))}

            </div>

            {skills.length > 10 && (
              <p className="mt-4 text-sm text-slate-500">
                +{skills.length - 10} more skills
              </p>
            )}

          </div>

        </div>

      </div>
    </MainLayout>
  );
}