import { Link } from "react-router-dom";
import {
  FiGrid,
  FiFolder,
  FiCode,
  FiMail,
  FiSettings,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-xl font-bold tracking-wider text-orange-400">
          DEVFOLIO.OS
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Developer Command Center
        </p>
      </div>

      <nav className="p-4">
        <div className="space-y-2">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-900"
          >
            <FiGrid />
            Dashboard
          </Link>

          <Link
            to="/projects"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-900"
          >
            <FiFolder />
            Projects
          </Link>

          <Link
            to="/skills"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-900"
          >
            <FiCode />
            Skills
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-900"
          >
            <FiMail />
            Contact
          </Link>

          <Link
            to="/admin"
            className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-slate-900"
          >
            <FiSettings />
            Admin
          </Link>
        </div>
      </nav>
    </aside>
  );
}