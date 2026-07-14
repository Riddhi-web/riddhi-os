import MainLayout from "../layouts/MainLayout";
import StatusCard from "../components/dashboard/StatusCard";

export default function Home() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-green-500"></div>

            <span className="text-sm font-medium text-green-400">
              SYSTEM ONLINE
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold">
            Harsh Sharma
          </h1>

          <p className="mt-3 max-w-2xl text-lg text-slate-400">
            Building modern web applications with React,
            JavaScript, and modern frontend technologies.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button className="rounded-xl bg-orange-500 px-5 py-3 font-medium text-black transition hover:bg-orange-400">
              View Projects
            </button>

            <button className="rounded-xl border border-slate-700 px-5 py-3 font-medium transition hover:bg-slate-800">
              Download Resume
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatusCard
            title="Projects"
            value="12+"
          />

          <StatusCard
            title="Tech Stack"
            value="15+"
          />

          <StatusCard
            title="Status"
            value="ONLINE"
            color="text-green-400"
          />
        </div>

        {/* Command Center */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-6">
          <h2 className="mb-4 text-xl font-semibold">
            Command Center
          </h2>

          <div className="space-y-3 font-mono text-orange-400">
            <p>{">"} view projects</p>
            <p>{">"} view skills</p>
            <p>{">"} download resume</p>
            <p>{">"} contact me</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}