export default function StatusCard({
  title,
  value,
  color = "text-orange-400",
}) {
  return (
    <div className="rounded-2xl border border-slate-800 p-6">
      <p className="text-slate-500 text-sm uppercase tracking-wider">
        {title}
      </p>

      <h2 className={`mt-3 text-3xl font-bold ${color}`}>
        {value}
      </h2>
    </div>
  );
}