import { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../layouts/MainLayout";
import { sendMessage } from "../services/messageService";
import { useSettingsContext } from "../context/SettingsContext";

export default function Contact() {
  const { settings } = useSettingsContext();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await sendMessage(data);

      alert("✅ Message sent successfully!");

      reset();
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}

        <section className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-8">

          <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Contact Me
          </h1>

          <p className="mt-3 max-w-3xl text-slate-400">
            Have a project, internship opportunity, or just want to connect?
            Feel free to send me a message.
          </p>

        </section>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Contact Information */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

              <h2 className="text-xl font-bold">
                Contact Information
              </h2>

              <div className="mt-6 space-y-4 text-slate-300">

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>

                  <p>{settings.email || "-"}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>

                  <p>{settings.phone || "-"}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>

                  <p>{settings.location || "-"}</p>
                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-orange-500/5 p-6">

              <h2 className="text-xl font-bold">
                Social Links
              </h2>

              <div className="mt-6 flex flex-col gap-3">

                {settings.github && (
                  <a
                    href={settings.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-orange-500 px-4 py-3 transition hover:bg-orange-500/10"
                  >
                    GitHub
                  </a>
                )}

                {settings.linkedin && (
                  <a
                    href={settings.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-orange-500 px-4 py-3 transition hover:bg-orange-500/10"
                  >
                    LinkedIn
                  </a>
                )}

                {settings.leetcode && (
                  <a
                    href={settings.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-orange-500 px-4 py-3 transition hover:bg-orange-500/10"
                  >
                    LeetCode
                  </a>
                )}

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="lg:col-span-2 rounded-3xl border border-orange-500/20 bg-slate-900/40 p-8">

            <div className="mb-6 font-mono text-orange-400">
              {">"} initiate_contact
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Your Name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 outline-none transition focus:border-orange-500"
              />

              {errors.name && (
                <p className="text-red-400">
                  {errors.name.message}
                </p>
              )}

              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 outline-none transition focus:border-orange-500"
              />

              {errors.email && (
                <p className="text-red-400">
                  {errors.email.message}
                </p>
              )}

              <input
                type="text"
                placeholder="Subject"
                {...register("subject", {
                  required: "Subject is required",
                })}
                className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 outline-none transition focus:border-orange-500"
              />

              {errors.subject && (
                <p className="text-red-400">
                  {errors.subject.message}
                </p>
              )}

              <textarea
                rows={6}
                placeholder="Write your message..."
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full rounded-2xl border border-orange-500/20 bg-orange-500/5 p-4 outline-none transition focus:border-orange-500"
              />

              {errors.message && (
                <p className="text-red-400">
                  {errors.message.message}
                </p>
              )}

              <button
                disabled={loading}
                type="submit"
                className="rounded-2xl bg-orange-500 px-8 py-3 font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}