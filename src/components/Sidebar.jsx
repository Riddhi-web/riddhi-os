import { NavLink } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiCode,
  FiMail,
  FiSettings,
  FiX,
} from "react-icons/fi";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: FiGrid,
  },
  {
    name: "Projects",
    path: "/projects",
    icon: FiFolder,
  },
  {
    name: "Skills",
    path: "/skills",
    icon: FiCode,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: FiMail,
  },
  {
    name: "Admin",
    path: "/admin",
    icon: FiSettings,
  },
];

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-orange-500/20 bg-slate-950 transition-transform duration-300 lg:sticky lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Close */}

        <div className="flex justify-end p-4 lg:hidden">

          <button
            onClick={() => setSidebarOpen(false)}
            className="rounded-xl p-2 hover:bg-orange-500/10"
          >
            <FiX size={24} />
          </button>

        </div>

        {/* Logo */}

        <div className="border-b border-orange-500/20 p-8">

          <h1 className="text-2xl font-extrabold tracking-wider text-orange-400">
            RIDDHI.OS
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Full Stack MERN Portfolio
          </p>

        </div>

        {/* Navigation */}

        <nav className="flex-1 px-4 py-6">

          <div className="space-y-3">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-orange-500 text-black shadow-lg shadow-orange-500/30"
                        : "text-slate-300 hover:bg-orange-500/10 hover:text-orange-400"
                    }`
                  }
                >
                  <Icon size={20} />
                  {item.name}
                </NavLink>
              );
            })}

          </div>

        </nav>

        {/* Footer */}

        <div className="border-t border-orange-500/20 p-6">

          <p className="text-center text-xs text-slate-500">
            RIDDHI.OS v1.0
          </p>

        </div>

      </aside>
    </>
  );
}