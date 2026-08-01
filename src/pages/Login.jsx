import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiLock, FiUser } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const success = await login(form.username, form.password);

    setLoading(false);

    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0b0f19] px-6">

      <div className="w-full max-w-md rounded-3xl border border-orange-500/20 bg-slate-900/70 p-8 shadow-2xl">

        <div className="mb-8 text-center">

          <h1 className="text-4xl font-bold text-orange-400">
            RIDDHI.OS
          </h1>

          <p className="mt-2 text-slate-400">
            Admin Workspace Login
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Username
            </label>

            <div className="relative">

              <FiUser
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={18}
              />

              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 py-3 pl-12 pr-4 outline-none transition focus:border-orange-500"
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-400">
              Password
            </label>

            <div className="relative">

              <FiLock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                size={18}
              />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 py-3 pl-12 pr-12 outline-none transition focus:border-orange-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-orange-400"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>

            </div>

          </div>

          {error && (
            <p className="rounded-xl bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-2xl bg-orange-500 py-3 font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}