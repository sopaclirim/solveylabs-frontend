export default function StatBadge({ value, label }) {
  return (
    <div 
      className="rounded-2xl border border-lightest-navy/20 px-6 sm:px-8 py-8 sm:py-9 text-center shadow-sm h-full flex flex-col items-center justify-center min-h-[120px]"
      style={{
        background: 'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.18), transparent 45%), var(--color-light-navy)'
      }}
    >
      <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-white text-center leading-tight">{value}</div>
      <div className="text-sm sm:text-sm text-white/90 mt-1 sm:mt-2 leading-tight">{label}</div>
    </div>
  )
}