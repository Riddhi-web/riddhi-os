import MainLayout from "../layouts/MainLayout";
import StatusCard from "../components/dashboard/StatusCard";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Hero Section */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Currently Building
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              RIDDHI.OS
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-slate-400">
              A personal developer workspace where I
              showcase projects, skills, and everything
              I'm learning as a frontend developer.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
              <span>📍 India</span>
              <span>⚡ React Developer</span>
              <span>🚀 Open to Opportunities</span>
            </div>
          </div>
          
        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatusCard
            title="Latest Build"
            value="RIDDHI.OS"
          />

          <StatusCard
            title="Learning"
            value="Next.js"
          />

          <StatusCard
            title="Availability"
            value="OPEN"
            color="text-green-400"
          />  
        </div>

        {/* Command Center */}
       <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-orange-500/40 bg-orange-500/5 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Featured Project
          </h2>

          <h3 className="text-xl font-semibold">
            RIDDHI.OS
          </h3>

          <p className="mt-3 text-slate-400">
            A React-powered developer workspace
            designed to showcase projects, skills,
            and continuous learning.
          </p>
        </div>

        <div className="rounded-3xl border border-orange-500/40 bg-orange-500/5 p-6">
          <h2 className="mb-4 text-2xl font-bold">
            Recent Activity
          </h2>

          <div className="space-y-3 text-slate-400">
            <p>• Built project showcase section</p>
            <p>• Added React Hook Form validation</p>
            <p>• Switched portfolio to orange theme</p>
          </div>
        </div>
      </div>
        
      </div>
    </MainLayout>
  );
}