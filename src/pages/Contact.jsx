import MainLayout from "../layouts/MainLayout";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (
    <MainLayout>
      <div className="max-w-3xl">
        <h1 className="mb-8 text-4xl font-bold">
          Contact Terminal
        </h1>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-6">
          <div className="mb-6 font-mono text-orange-400">
            <p>{">"} initiate_contact</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <div>
              <label className="mb-2 block text-slate-400">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required",
                })}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 outline-none focus:border-orange-500"
              />

              {errors.name && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-slate-400">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                })}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 outline-none focus:border-orange-500"
              />

              {errors.email && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-slate-400">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Type your message..."
                {...register("message", {
                  required: "Message is required",
                })}
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 outline-none focus:border-orange-500"
              />

              {errors.message && (
                <p className="mt-1 text-sm text-red-400">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}