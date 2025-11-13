function Logo({ label, imgSrc, href }) {
  const content = (
    <div className="cursor-pointer h-40 opacity-80 hover:opacity-100 transition grid place-items-center text-lightest-slate/80 text-sm border border-lightest-navy/10 rounded-md px-3 badge-gradient">
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={label}
          className="max-h-18 object-contain"
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
  { label: "Shopify",    imgSrc: "https://cdn.simpleicons.org/shopify" },
  { label: "Netflix",    imgSrc: "https://cdn.simpleicons.org/netflix" },
];

export default function LogoCloud() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
      {clients.map((c) => (
        <Logo key={c.label} {...c} />
      ))}
    </div>
  );
}