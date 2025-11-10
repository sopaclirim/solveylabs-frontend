export default function StatBadge({ value, label }) {
  return (
    <div className="rounded-xl bg-light-navy/60 border border-lightest-navy/20 p-8 text-center">
      <div className="text-3xl font-bold text-lightest-slate">{value}</div>
      <div className="text-sm text-slate mt-1">{label}</div>
    </div>
  )
}
