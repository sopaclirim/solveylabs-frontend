export default function SectionHeading({ kicker, title, subtitle, center=true }) {
    return (
        <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
            {kicker && <p className="text-accent tracking-wide mb-2">{kicker}</p>}
            {title && <h2 className="section-title accent-underline">{title}</h2>}
            {subtitle && <p className="text-lg text-light-slate mt-4">{subtitle}</p>}
        </div>
    )
}