import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Slides me foto teknologjike - mund të zëvendësohen me foto/video tuajat
  const slides = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
      alt: 'Code Development'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80',
      alt: 'Web Development'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80',
      alt: 'Mobile Development'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80',
      alt: 'Cloud Technology'
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Ndrysho çdo 5 sekonda
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsPlaying(false);
    // Rikthe autoplay pas 3 sekondave
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 3000);
  };

  // Touch handlers për swipe në mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swipe majtas - shko te slide tjetër
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swipe djathtas - shko te slide i mëparshëm
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div 
      className="relative w-full h-full min-h-screen overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image/Video */}
            <div className="absolute inset-0">
              {slide.type === 'image' ? (
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              {/* Dark overlay për kontrast më të mirë */}
              <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/75 via-dark-navy/65 to-dark-navy/85"></div>
              {/* Gradient overlay për efekt më të bukur */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent-light/20"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - fshihen në mobile për të mos penguar */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 group shadow-lg pointer-events-auto"
        aria-label="Slide i mëparshëm"
      >
        <Icon icon="mdi:chevron-left" className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 group shadow-lg pointer-events-auto"
        aria-label="Slide tjetër"
      >
        <Icon icon="mdi:chevron-right" className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-2 md:gap-3 pointer-events-auto">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-10 md:w-12 h-3 md:h-4 bg-accent shadow-lg shadow-accent/50'
                : 'w-3 md:w-4 h-3 md:h-4 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Shko te slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {isPlaying && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-40">
          <div
            className="h-full bg-accent transition-all duration-5000 ease-linear"
            style={{
              width: '100%',
              animation: 'progress 5s linear'
            }}
            key={currentSlide}
          />
        </div>
      )}

      {/* Play/Pause Button */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 md:top-6 right-4 md:right-8 z-40 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all duration-300 shadow-lg pointer-events-auto"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        <Icon
          icon={isPlaying ? 'mdi:pause' : 'mdi:play'}
          className="w-5 h-5 md:w-6 md:h-6 text-white"
        />
      </button>
    </div>
  );
}

