export default function SectionHeading({ kicker, title, subtitle, center=true }) {
    return (
        <div className={`max-w-4xl ${center ? 'mx-auto text-center' : ''}`}>
            {kicker && <p className="text-accent text-sm md:text-base font-semibold tracking-wider uppercase mb-4">{kicker}</p>}
            {title && <h2 className="section-title accent-underline">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
    )
}