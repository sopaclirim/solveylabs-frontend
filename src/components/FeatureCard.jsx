export default function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="feature-card section-gradient rounded-2xl border border-lightest-navy/20 p-8 group">
      <div className="text-accent mb-4">
        {Icon ? <Icon className="h-12 w-12" /> : null}
      </div>
      <h3 className="text-2xl font-bold text-lightest-slate mb-3">{title}</h3>
      <p className="text-light-slate">{children}</p>
    </div>
  )
}
