import { useAchievementContext } from "../../context/AchievementContext";

export default function ManageAchievements() {
  const {
    achievements,
    setEditingAchievement,
    deleteAchievementData,
  } = useAchievementContext();

  return (
    <section className="rounded-3xl border border-orange-500/20 bg-slate-900/40 p-8">
      <h2 className="text-2xl font-bold text-orange-400">
        Manage Achievements
      </h2>

      <div className="mt-6 space-y-4">
        {achievements.length === 0 ? (
          <p className="text-slate-400">No achievements found.</p>
        ) : (
          achievements.map((achievement) => (
            <div
              key={achievement._id}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-5"
            >
              <h3 className="text-xl font-semibold text-white">
                {achievement.title}
              </h3>

              <p className="mt-1 text-slate-400">
                <strong>Organization:</strong> {achievement.organization}
              </p>

              <p className="text-slate-400">
                <strong>Date:</strong>{" "}
                {achievement.date
                  ? new Date(achievement.date).toLocaleDateString()
                  : "-"}
              </p>

              <p className="text-slate-400 break-all">
                <strong>URL:</strong>{" "}
                {achievement.achievementUrl || "-"}
              </p>

              <p className="mt-3 text-slate-300">
                {achievement.description}
              </p>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setEditingAchievement(achievement)}
                  className="rounded-lg bg-yellow-500 px-4 py-2 font-medium text-black hover:bg-yellow-400"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteAchievementData(achievement._id)}
                  className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-400"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}