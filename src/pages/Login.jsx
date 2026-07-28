import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(form.username, form.password);

    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-orange-500/20 bg-slate-900 p-8 shadow-2xl">

        <h1 className="mb-2 text-center text-4xl font-bold text-orange-400">
          Admin Login
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Sign in to access RIDDHI.OS
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="mb-2 block">
              Username
            </label>

            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-orange-500"
              placeholder="Username"
            />

          </div>

          <div>

            <label className="mb-2 block">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-orange-500"
              placeholder="Password"
            />

          </div>

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-black transition hover:bg-orange-400"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}