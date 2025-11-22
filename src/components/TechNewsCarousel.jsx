import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function TechNewsCarousel() {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation('common');

  useEffect(() => {
    fetchTechNews();
  }, []);

  const fetchTechNews = async () => {
    try {
      // Përdor NewsAPI - kërkon API key
      // Për demo, po përdor një API publik ose mock data
      const apiKey = import.meta.env.VITE_NEWS_API_KEY || '';
      
      if (apiKey) {
        // Nëse ka API key, përdor NewsAPI
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=10&apiKey=${apiKey}`
        );
        const data = await response.json();
        if (data.articles) {
          setNews(data.articles.filter(article => article.urlToImage));
        }
      } else {
        // Mock data për demo
        setNews([
          {
            title: "AI Breakthrough: New Model Surpasses Human Performance",
            description: "Researchers develop advanced AI system that outperforms humans in complex reasoning tasks.",
            urlToImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
            url: "#",
            publishedAt: new Date().toISOString()
          },
          {
            title: "Quantum Computing Reaches New Milestone",
            description: "Scientists achieve quantum supremacy with 1000-qubit processor, opening new possibilities.",
            urlToImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
            url: "#",
            publishedAt: new Date().toISOString()
          },
          {
            title: "Revolutionary Web Framework Released",
            description: "New framework promises 10x faster development and better performance.",
            urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
            url: "#",
            publishedAt: new Date().toISOString()
          },
          {
            title: "Cybersecurity: New Threats and Solutions",
            description: "Latest security protocols protect against emerging cyber threats in 2024.",
            urlToImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
            url: "#",
            publishedAt: new Date().toISOString()
          },
          {
            title: "Cloud Computing Revolutionizes Business",
            description: "Enterprise adoption of cloud infrastructure reaches all-time high.",
            urlToImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            url: "#",
            publishedAt: new Date().toISOString()
          }
        ]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      // Fallback to mock data on error
      setNews([
        {
          title: "Tech News Update",
          description: "Latest technology news and updates from around the world.",
          urlToImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
          url: "#",
          publishedAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  if (loading) {
    return (
      <div className="mt-10 max-w-6xl mx-auto mb-10 text-center">
        <p className="text-light-slate">{t('common.loading')}</p>
      </div>
    );
  }

  if (news.length === 0) {
    return null;
  }

  const currentNews = news[currentIndex];

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-10 relative">
      {/* Navigation Buttons */}
      <button
        type="button"
        onClick={prev}
        className="hidden md:flex absolute left-0 -translate-x-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center text-lightest-slate hover:text-accent transition-colors border border-lightest-navy/40 hover:border-accent rounded-full z-10"
        aria-label="Lajmi i mëparshëm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 19.25L8.75 12l6.5-7.25" />
        </svg>
      </button>

      <button
        type="button"
        onClick={next}
        className="hidden md:flex absolute right-0 translate-x-12 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center text-lightest-slate hover:text-accent transition-colors border border-lightest-navy/40 hover:border-accent rounded-full z-10"
        aria-label="Lajmi tjetër"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.75L15.25 12l-6.5 7.25" />
        </svg>
      </button>

      {/* News Card */}
      <a
        href={currentNews.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-64 md:h-auto overflow-hidden bg-lightest-navy/10">
            {currentNews.urlToImage ? (
              <img
                src={currentNews.urlToImage}
                alt={currentNews.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-accent/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-3">
              <span className="text-xs text-accent font-semibold uppercase tracking-wider">
                {t('techNews.category')}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors line-clamp-2">
              {currentNews.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 mb-6 line-clamp-3">
              {currentNews.description || currentNews.content}
            </p>
            <div className="flex items-center text-accent text-sm font-semibold">
              <span>{t('latestPosts.readMore')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>

      {/* Dots Indicator */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {news.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? 'w-8 bg-accent'
                : 'w-2 bg-lightest-navy/40 hover:bg-lightest-navy/60'
            }`}
            aria-label={`Go to news ${idx + 1}`}
          />
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="mt-6 flex md:hidden items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          className="h-10 w-10 inline-flex items-center justify-center text-gray-700 hover:text-accent transition-colors border border-gray-300 hover:border-accent rounded-full bg-white"
          aria-label="Lajmi i mëparshëm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 19.25L8.75 12l6.5-7.25" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="h-10 w-10 inline-flex items-center justify-center text-gray-700 hover:text-accent transition-colors border border-gray-300 hover:border-accent rounded-full bg-white"
          aria-label="Lajmi tjetër"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.75 4.75L15.25 12l-6.5 7.25" />
          </svg>
        </button>
      </div>
    </div>
  );
}

