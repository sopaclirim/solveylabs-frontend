import { useState } from 'react';

const members = [
  {
    name: 'Çlirim Sopa',
    role: 'Lead Software Engineer',
    img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=240&q=80',
    bio: 'Udhëheq ekipin teknik dhe siguron që çdo projekt të jetë i shkallueshëm, i sigurt dhe performant.',
  },
  {
    name: 'Blerina Gashi',
    role: 'Product Designer',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
    bio: 'Dizajnon eksperienca moderne dhe intuitive duke kombinuar UX të mirë me UI të pastër.',
  },
  {
    name: 'Dren Morina',
    role: 'Project Manager',
    img: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&fit=crop&w=240&q=80',
    bio: 'Koordinon projektet nga ideja deri në lansim, duke mbajtur klientët të informuar në çdo hap.',
  },
  {
    name: 'Elira Berisha',
    role: 'Frontend Engineer',
    img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=240&q=80',
    bio: 'Specializohet në React dhe krijon UI ultra të shpejta dhe responsive për web.',
  },
  {
    name: 'Shkodran Sopa',
    role: 'Backend Engineer',
    img: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=240&q=80',
    bio: 'Ndërton API robuste dhe arkitekturë të sigurt që i përballon trafikun e lartë.',
  },
  {
    name: 'Rita Shala',
    role: 'Customer Success',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80',
    bio: 'Siguron që çdo klient të ndihet i mbështetur dhe që zgjidhjet tona japin vlerë reale.',
  },
];

export default function TeamCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % members.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  const visible = [
    members[startIndex],
    members[(startIndex + 1) % members.length],
    members[(startIndex + 2) % members.length],
  ];

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-10">
      <div className="relative px-2 md:px-8 lg:px-10">
        {/* Strip i kartave */}
        <div
          key={startIndex}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 sl-slide-fade"
        >
          {visible.map((m, idx) => (
            <article
              key={m.name + idx}
              className="section-gradient rounded-2xl border border-lightest-navy/20 flex flex-col items-center text-center h-full px-12 py-12"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-40 h-40 rounded-full object-cover border-2 border-accent mb-4"
              />
              <h3 className="text-lg font-semibold text-lightest-slate">{m.name}</h3>
              <p className="text-sm text-light-slate mt-1">{m.role}</p>
              <p className="text-sm mt-3 text-light-slate/90">
                {m.bio}
              </p>
            </article>
          ))}
        </div>

        {/* Butonat e navigimit */}
        <button
          type="button"
          onClick={prev}
          className="hidden md:flex absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center text-lightest-slate hover:text-accent transition-colors"
          aria-label="Ekipi i mëparshëm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 19.25L8.75 12l6.5-7.25" />
          </svg>
        </button>

        <button
          type="button"
          onClick={next}
          className="hidden md:flex absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center text-lightest-slate hover:text-accent transition-colors"
          aria-label="Ekipi tjetër"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.75L15.25 12l-6.5 7.25" />
          </svg>
        </button>
      </div>

      {/* Butona edhe në mobile (poshtë strip-it) */}
      <div className="mt-6 flex md:hidden items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="h-9 px-4 inline-flex items-center justify-center text-lightest-slate text-base"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          className="h-9 px-4 inline-flex items-center justify-center text-lightest-slate text-base"
        >
          →
        </button>
      </div>
    </div>
  );
}


