export default function StatBadge({ value, label }) {
  return (
    <div className="section-gradient rounded-2xl border border-lightest-navy/20 px-8 py-9 text-center shadow-lg shadow-black/10">
      <div className="text-2xl font-bold text-white text-center sm:text-3xl">{value}</div>
      <div className="text-sm text-white/90 mt-1">{label}</div>
    </div>
  )
}