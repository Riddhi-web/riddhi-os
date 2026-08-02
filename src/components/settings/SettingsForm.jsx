import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSettingsContext } from "../../context/SettingsContext";
const BASE_URL = import.meta.env.VITE_API_URL + "/";
export default function SettingsForm() {
  const {
    settings,
    updateSettings,
    uploadProfileImage,
    deleteProfileImage,
    uploadResume,
    deleteResume,
  } = useSettingsContext();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const [profileFile, setProfileFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);

  useEffect(() => {
    reset(settings);
  }, [settings, reset]);

    const onSubmit = async (data) => {
      await updateSettings(data);
      alert("Settings Updated Successfully!");
    };
  const handleProfileUpload = async () => {
    if (!profileFile) return alert("Select an image first.");

    await uploadProfileImage(profileFile);
    setProfileFile(null);
    alert("Profile Image Uploaded!");
  };

  const handleResumeUpload = async () => {
    if (!resumeFile) return alert("Select a resume first.");

    await uploadResume(resumeFile);
    setResumeFile(null);
    alert("Resume Uploaded!");
  };

  return (
    <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

      <h2 className="text-2xl font-bold mb-6">
        Portfolio Settings
      </h2>

      {/* Profile Image */}

      <div className="mb-10">

        <h3 className="text-lg font-semibold text-orange-400 mb-4">
          Profile Image
        </h3>

        {settings.profileImage && (
          <img
            src={BASE_URL + settings.profileImage}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-orange-500 mb-4"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfileFile(e.target.files[0])}
          className="mb-3 block"
        />

        <div className="flex gap-3">

          <button
            type="button"
            onClick={handleProfileUpload}
            className="rounded-lg bg-orange-500 px-4 py-2 text-black"
          >
            Upload
          </button>

          <button
            type="button"
            onClick={deleteProfileImage}
            className="rounded-lg bg-red-600 px-4 py-2"
          >
            Delete
          </button>

        </div>

      </div>

      {/* Resume */}

      <div className="mb-10">

        <h3 className="text-lg font-semibold text-orange-400 mb-4">
          Resume
        </h3>

        {settings.resume && (
          <a
            href={BASE_URL + settings.resume}
            target="_blank"
            rel="noreferrer"
            className="block text-orange-400 underline mb-4"
          >
            View Current Resume
          </a>
        )}

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setResumeFile(e.target.files[0])}
          className="mb-3 block"
        />

        <div className="flex gap-3">

          <button
            type="button"
            onClick={handleResumeUpload}
            className="rounded-lg bg-orange-500 px-4 py-2 text-black"
          >
            Upload
          </button>

          <button
            type="button"
            onClick={deleteResume}
            className="rounded-lg bg-red-600 px-4 py-2"
          >
            Delete
          </button>

        </div>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >

        <div className="space-y-4">

          <h3 className="text-lg font-semibold text-orange-400">
            Basic Information
          </h3>

          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />

          <input
            {...register("title")}
            placeholder="Professional Title"
            className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                      />

          <textarea
            {...register("bio")}
            rows={4}
            placeholder="Bio"
            className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
          />

        </div>

        <div className="space-y-4">

          <h3 className="text-lg font-semibold text-orange-400">
            Contact
          </h3>

<input
  {...register("email")}
  placeholder="Email"
  onChange={(e) => {
    register("email").onChange(e);
    console.log("EMAIL:", e.target.value);
  }}
  className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white"
/>         <input {...register("phone")} placeholder="Phone" className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
          <input {...register("location")} placeholder="Location" className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"/>

        </div>

        <div className="space-y-4">

          <h3 className="text-lg font-semibold text-orange-400">
            Social Links
          </h3>

          <input {...register("github")} placeholder="GitHub" className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
          <input {...register("linkedin")} placeholder="LinkedIn" className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
          <input {...register("leetcode")} placeholder="LeetCode" className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
          <input {...register("portfolio")} placeholder="Portfolio" className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />
          <input {...register("instagram")} placeholder="Instagram" className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20" />

        </div>

        <button
          type="submit"
          className="rounded-xl bg-orange-500 px-6 py-3 font-medium text-black"
        >
          Save Settings
        </button>

      </form>

    </div>
  );
}