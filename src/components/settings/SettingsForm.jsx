import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSettingsContext } from "../../context/SettingsContext";

export default function SettingsForm() {
  const {
    settings,
    updateSettings,
  } = useSettingsContext();

  const {
  register,
  handleSubmit,
  reset,
  watch,
} = useForm();

  useEffect(() => {
    reset(settings);
  }, [settings, reset]);

  const onSubmit = async (data) => {
    await updateSettings(data);
    alert("✅ Portfolio settings updated successfully!");
  };
 
  return (
    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="mb-2 text-2xl font-bold">
        Portfolio Settings
      </h2>

      <p className="mb-6 text-slate-400">
        Update your portfolio information.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >

        {/* Basic Information */}

        <div className="space-y-4">

          <h3 className="text-lg font-semibold text-orange-400">
            Basic Information
          </h3>

          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("title")}
            placeholder="Professional Title"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <textarea
            {...register("bio")}
            rows={4}
            placeholder="Short Bio"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

        </div>

        {/* Contact */}

        <div className="space-y-4">

          <h3 className="text-lg font-semibold text-orange-400">
            Contact
          </h3>

          <input
            {...register("email")}
            placeholder="Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("phone")}
            placeholder="Phone"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("location")}
            placeholder="Location"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

        </div>

        {/* Social Links */}

        <div className="space-y-4">

          <h3 className="text-lg font-semibold text-orange-400">
            Social Links
          </h3>

          <input
            {...register("github")}
            placeholder="GitHub URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("linkedin")}
            placeholder="LinkedIn URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("leetcode")}
            placeholder="LeetCode URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("portfolio")}
            placeholder="Portfolio URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("instagram")}
            placeholder="Instagram URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

        </div>

        {/* Assets */}

        <div className="space-y-4">

          <h3 className="text-lg font-semibold text-orange-400">
            Assets
          </h3>

          <input
            {...register("resume")}
            placeholder="Resume URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

          <input
            {...register("profileImage")}
            placeholder="Profile Image URL"
            className="w-full rounded-xl border border-slate-700 bg-slate-900/20 p-3 outline-none focus:border-orange-500"
          />

        </div>

        <button
          type="submit"
          className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-black transition hover:bg-orange-400"
        >
          Save Settings
        </button>

      </form>

    </div>
  );
}