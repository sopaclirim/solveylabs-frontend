export default function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div 
      className="feature-card rounded-2xl border border-lightest-navy/20 p-8 md:p-10 group shadow-lg"
      style={{
        background: 'radial-gradient(circle at 15% 20%, rgba(44, 116, 179, 0.25), transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 154, 225, 0.2), transparent 45%), var(--color-light-navy)'
      }}
    >
      <div className="text-white mb-6 relative z-10">
        {Icon ? (
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/20 p-3 group-hover:bg-accent/30 transition-colors duration-300">
            <Icon className="h-8 w-8 text-accent-bright" />
          </div>
        ) : null}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight relative z-10">{title}</h3>
      <p className="text-white/90 text-base leading-relaxed relative z-10">{children}</p>
    </div>
  )
}
