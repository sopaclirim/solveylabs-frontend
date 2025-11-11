import {
    SiDotnet, SiAngular, SiReact, SiTailwindcss, SiBootstrap, SiLaravel,
    SiNodedotjs, SiExpress, SiMongodb, SiRedis, SiPostgresql, SiDocker,
} from 'react-icons/si'

export default function TechMarquee() {
    const items = [
        { label: '.NET',       Icon: SiDotnet,      cls: 'text-[#512BD4] bg-[#512BD4]/8  border-[#512BD4]/25', url: 'https://dotnet.microsoft.com/' },
        { label: 'Angular',    Icon: SiAngular,     cls: 'text-[#DD0031] bg-[#DD0031]/8  border-[#DD0031]/25', url: 'https://angular.io/docs' },
        { label: 'React',      Icon: SiReact,       cls: 'text-[#61DAFB] bg-[#61DAFB]/10 border-[#61DAFB]/25', url: 'https://react.dev/' },
        { label: 'Tailwind',   Icon: SiTailwindcss, cls: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/25', url: 'https://tailwindcss.com/docs' },
        { label: 'Bootstrap',  Icon: SiBootstrap,   cls: 'text-[#7952B3] bg-[#7952B3]/10 border-[#7952B3]/25', url: 'https://getbootstrap.com/docs/' },
        { label: 'Laravel',    Icon: SiLaravel,     cls: 'text-[#FF2D20] bg-[#FF2D20]/10 border-[#FF2D20]/25', url: 'https://laravel.com/docs' },
        { label: 'Node.js',    Icon: SiNodedotjs,   cls: 'text-[#68A063] bg-[#68A063]/10 border-[#68A063]/25', url: 'https://nodejs.org/en' },
        { label: 'Express',    Icon: SiExpress,     cls: 'text-white bg-white/5          border-white/15',     url: 'https://expressjs.com/' },
        { label: 'MongoDB',    Icon: SiMongodb,     cls: 'text-[#47A248] bg-[#47A248]/10 border-[#47A248]/25', url: 'https://www.mongodb.com/docs/' },
        { label: 'Redis',      Icon: SiRedis,       cls: 'text-[#D82C20] bg-[#D82C20]/10 border-[#D82C20]/25', url: 'https://redis.io/docs/' },
        { label: 'PostgreSQL', Icon: SiPostgresql,  cls: 'text-[#336791] bg-[#336791]/10 border-[#336791]/25', url: 'https://www.postgresql.org/docs/' },
        { label: 'Docker',     Icon: SiDocker,      cls: 'text-[#2496ED] bg-[#2496ED]/10 border-[#2496ED]/25', url: 'https://docs.docker.com/' },
    ]


     // Badge klikues (anchor)
    const Badge = ({ label, Icon, cls, i, url }) => {
        const up = i % 2 === 0
        const delay = (i % 7) * 0.18
        const duration = 2.7 + (i % 5) * .2
        return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} – open docs`}
            title={label}
            className={`
                mx-3 my-2 inline-flex shrink-0 flex-col items-center justify-center
                rounded-4xl border backdrop-blur-sm
                shadow-sm hover:shadow transition-shadow
                h-24 w-26 sm:h-28 sm:w-28 md:h-32 md:w-32
                focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                ${cls} ${up ? 'sl-bob-up' : 'sl-bob-down'}
            `}
            style={{ ['--bob-delay']: `${delay}s`, ['--bob-dur']: `${duration}s` }}
        >
            <Icon className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14" aria-hidden="true" />
            <span className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-current">{label}</span>
        </a>
        )
    }

    return (
        <section className="pt-10 pb-0 md:py-14">
            {/* edge-to-edge pa scroll horizontal */}
            <div className="pb-9 relative w-screen left-1/2 right-1/2 -mx-[50vw] overflow-hidden">
                <div className="container-page [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="group relative h-[10rem] sm:h-[11rem] md:h-[12.5rem]">
                    <div
                        className="
                            absolute inset-y-0 left-0 flex w-[200%] items-center whitespace-nowrap
                            [animation:sl-marquee_24s_linear_infinite]
                            group-hover:[animation-play-state:paused]
                            will-change-transform
                        "
                    >
                    <div className="flex items-center">
                        {items.map((it, i) => <Badge key={`a-${i}`} {...it} i={i} />)}
                    </div>
                    <div className="flex items-center">
                        {items.map((it, i) => <Badge key={`b-${i}`} {...it} i={i} />)}
                    </div>
                    </div>
                </div>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
            </div>
        </section>
    )
}
