export default function StatBadge({ value, label }) {
  return (
    <div 
      className="rounded-xl sm:rounded-2xl border border-lightest-navy/20 px-2.5 xs:px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 py-3 xs:py-3.5 sm:py-4 md:py-5 lg:py-6 xl:py-8 2xl:py-10 text-center shadow-lg h-full flex flex-col items-center justify-center min-h-[65px] xs:min-h-[75px] sm:min-h-[85px] md:min-h-[95px] lg:min-h-[110px] xl:min-h-[130px] 2xl:min-h-[140px] transition-all duration-300 hover:border-accent/40 hover:shadow-xl"
      style={{
        background: 'radial-gradient(circle at 15% 20%, rgba(44, 116, 179, 0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 154, 225, 0.2), transparent 45%), var(--color-light-navy)'
      }}
    >
      <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold gradient-text text-center leading-tight mb-0.5 xs:mb-1 sm:mb-1.5 md:mb-2 lg:mb-2">{value}</div>
      <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-white/90 mt-0.5 xs:mt-1 sm:mt-1.5 md:mt-2 lg:mt-2 leading-tight font-medium">{label}</div>
    </div>
  )
}