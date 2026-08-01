import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { trackVisit } from "./services/analyticsService";

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f19] text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-orange-400">404</h1>

        <p className="mt-4 text-xl text-slate-400">
          Page Not Found
        </p>

        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

function App() {
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("portfolioVisited");

    if (!hasVisited) {
      trackVisit().catch((error) => {
        console.error("Failed to track visit:", error);
      });

      sessionStorage.setItem("portfolioVisited", "true");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />

        {/* 404 */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;