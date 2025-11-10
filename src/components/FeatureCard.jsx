export default function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="card group">
      <div className="text-accent mb-4">
        {Icon ? <Icon className="h-12 w-12" /> : null}
      </div>
      <h3 className="text-2xl font-bold text-lightest-slate mb-3">{title}</h3>
      <p className="text-slate">{children}</p>
    </div>
  )
}
