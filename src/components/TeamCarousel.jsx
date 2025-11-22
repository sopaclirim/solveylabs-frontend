import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function TeamCarousel() {
  const { t } = useTranslation('common');
  const [startIndex, setStartIndex] = useState(0);

  const members = [
    {
      name: t('team.members.member1.name'),
      role: t('team.members.member1.role'),
      img: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=240&q=80',
      bio: t('team.members.member1.bio'),
      key: 'member1',
    },
    {
      name: t('team.members.member2.name'),
      role: t('team.members.member2.role'),
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&q=80',
      bio: t('team.members.member2.bio'),
      key: 'member2',
    },
    {
      name: t('team.members.member3.name'),
      role: t('team.members.member3.role'),
      img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=240&q=80',
      bio: t('team.members.member3.bio'),
      key: 'member3',
    },
    {
      name: t('team.members.member4.name'),
      role: t('team.members.member4.role'),
      img: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=240&q=80',
      bio: t('team.members.member4.bio'),
      key: 'member4',
    },
    {
      name: t('team.members.member5.name'),
      role: t('team.members.member5.role'),
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=240&q=80',
      bio: t('team.members.member5.bio'),
      key: 'member5',
    },
  ];

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
    members[(startIndex + 3) % members.length],
  ];

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-10 relative">
      {/* Butonat e navigimit anash */}
      <button
        type="button"
        onClick={prev}
        className="hidden md:flex absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center text-lightest-slate hover:text-accent transition-colors border border-lightest-navy/40 hover:border-accent rounded-full z-10"
        aria-label={t('team.prevTeam')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 19.25L8.75 12l6.5-7.25" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        className="hidden md:flex absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center text-lightest-slate hover:text-accent transition-colors border border-lightest-navy/40 hover:border-accent rounded-full z-10"
        aria-label={t('team.nextTeam')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.75L15.25 12l-6.5 7.25" />
        </svg>
      </button>

      {/* Strip i kartave */}
      <div
        key={startIndex}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 sl-slide-fade"
      >
        {visible.map((m, idx) => (
          <article
            key={m.key + idx}
            className="section-gradient rounded-xl border border-lightest-navy/20 flex flex-col items-center text-center h-full px-10 py-14 min-h-[380px]"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-28 h-28 rounded-full object-cover border-2 border-accent mb-4"
            />
            <h3 className="text-lg font-semibold text-lightest-slate">{m.name}</h3>
            <p className="text-sm text-light-slate mt-1">{m.role}</p>
            <p className="text-sm mt-3 text-light-slate/90">
              {m.bio}
            </p>
          </article>
        ))}
      </div>

      {/* Butona për mobile (poshtë strip-it) */}
      <div className="mt-6 flex md:hidden items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="h-10 w-10 inline-flex items-center justify-center text-lightest-slate hover:text-accent transition-colors border border-lightest-navy/40 hover:border-accent rounded-full"
          aria-label={t('team.prevTeam')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 19.25L8.75 12l6.5-7.25" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="h-10 w-10 inline-flex items-center justify-center text-lightest-slate hover:text-accent transition-colors border border-lightest-navy/40 hover:border-accent rounded-full"
          aria-label={t('team.nextTeam')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.75L15.25 12l-6.5 7.25" />
          </svg>
        </button>
      </div>
    </div>
  );
}