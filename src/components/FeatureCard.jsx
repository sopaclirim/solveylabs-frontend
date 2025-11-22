export default function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div 
      className="feature-card rounded-2xl border border-lightest-navy/20 p-8 group shadow-sm hover:shadow-md transition-shadow"
      style={{
        background: 'radial-gradient(circle at 15% 20%, rgba(37, 99, 235, 0.22), transparent 50%), radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.18), transparent 45%), var(--color-light-navy)'
      }}
    >
      <div className="text-white mb-4">
        {Icon ? <Icon className="h-12 w-12" /> : null}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/90">{children}</p>
    </div>
  )
}
