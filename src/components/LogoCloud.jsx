function Logo({ label, imgSrc, href }) {
  const content = (
    <div className="cursor-pointer h-40 transition-all grid place-items-center text-lightest-slate/80 text-sm border border-lightest-navy/10 rounded-md px-3 badge-gradient logo-hover">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={label}
          className="max-h-18 object-contain opacity-100"
          onError={(e) => {
            e.currentTarget.replaceWith(document.createTextNode(label));
          }}
          loading="lazy"
        />
      ) : (
        label
      )}
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer noopener" aria-label={label}>
      {content}
    </a>
  ) : (
    content
  );
}

const clients = [
  { label: "Meta",       imgSrc: "https://cdn.simpleicons.org/meta" },
  { label: "Apple",      imgSrc: "https://cdn.simpleicons.org/apple" },
  { label: "Spotify",    imgSrc: "https://cdn.simpleicons.org/spotify" },
  { label: "Netflix",    imgSrc: "https://cdn.simpleicons.org/netflix" },
];

export default function LogoCloud() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 lg:px-16 xl:px-36">
      {clients.map((c) => (
        <Logo key={c.label} {...c} />
      ))}
    </div>
  );
}