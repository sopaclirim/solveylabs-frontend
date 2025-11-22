import { useMemo } from 'react';

export default function AnimatedText({ text, className = '', delay = 0, delayPerLetter = 0.03 }) {
  const letters = useMemo(() => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="hero-letter-space">&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className="hero-letter"
          style={{
            animationDelay: `${delay + index * delayPerLetter}s`
          }}
        >
          {char}
        </span>
      );
    });
  }, [text, delay, delayPerLetter]);

  return <span className={className}>{letters}</span>;
}

