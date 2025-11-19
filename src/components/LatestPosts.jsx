import { useTranslation } from 'react-i18next';

// Icon për blog/article
function IconArticle(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

// Icon për arrow/link
function IconArrowRight(props) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

// Blog Card Component
function BlogCard({ title, excerpt, date, category, image, slug }) {
  const { t } = useTranslation('common');
  return (
    <a 
      href={`/blog/${slug}`}
      className="group section-gradient rounded-2xl border border-lightest-navy/20 overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-lightest-navy/10">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <IconArticle className="w-16 h-16 text-accent/30" />
          </div>
        )}
        {category && (
          <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent/90 text-dark-navy rounded-full border border-accent/50">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {date && (
          <p className="text-xs text-accent font-medium mb-2">{date}</p>
        )}
        <h3 className="text-xl font-bold text-lightest-slate mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-sm text-light-slate mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Read More Link */}
        <div className="flex items-center text-accent text-sm font-semibold group-hover:gap-2 transition-all">
          <span>{t('latestPosts.readMore')}</span>
          <IconArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
}

// Main LatestPosts Component
export default function LatestPosts() {
  const { t } = useTranslation('common');

  // Mock data - në të ardhmen mund të vijnë nga API
  const posts = [
    {
      id: 1,
      slug: 'modern-web-development-trends-2024',
      title: 'Modern Web Development Trends në 2024',
      excerpt: 'Zbulo tendencat më të fundit në zhvillimin e web-it që po transformojnë industrinë dixhitale dhe si mund t\'i përdorësh ato për biznesin tënd.',
      date: 'May 15, 2024',
      category: 'Web Dev',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      slug: 'react-performance-optimization',
      title: 'Si të Optimizosh Performance në React',
      excerpt: 'Teknika dhe best practices për të krijuar aplikacione React super të shpejta që ofrojnë përvojë të shkëlqyer për përdoruesit.',
      date: 'May 10, 2024',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      slug: 'importance-of-ux-design',
      title: 'Pse UX/UI Design është Kritik për Suksesin',
      excerpt: 'Një dizajn i mirë nuk është vetëm estetikë - është strategji biznesi. Shiko si ndikon UX në konvertim dhe lojalitet.',
      date: 'May 5, 2024',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      slug: 'choosing-right-tech-stack',
      title: 'Si të Zgjedhësh Tech Stack-un e Duhur',
      excerpt: 'Nga React te Node.js, nga PostgreSQL te MongoDB - udhëzues praktik për të zgjedhur teknologjitë e duhura për projektin tënd.',
      date: 'Apr 28, 2024',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}