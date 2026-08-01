import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* Mobile Header */}

      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-orange-500/20 bg-slate-950 px-5 py-4 lg:hidden">

        <h1 className="text-xl font-bold text-orange-400">
          RIDDHI.OS
        </h1>

        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-xl border border-orange-500/30 p-2 hover:bg-orange-500/10"
        >
          <FiMenu size={24} />
        </button>

      </header>

      <div className="mx-auto flex min-h-screen max-w-[1600px]">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto p-5 md:p-8 lg:p-10">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>

      </div>

    </div>
  );
}