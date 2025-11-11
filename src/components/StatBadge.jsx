export default function StatBadge({ value, label }) {
  return (
    <div className="rounded-xl  bg-light-navy/60 badge-gradient p-10 text-center">
      <div className="text-3xl font-bold text-lightest-slate text-center sm:text-3xl">{value}</div>
      <div className="text-sm text-slate mt-1">{label}</div>
    </div>
  )
}
