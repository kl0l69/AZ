import React, { useEffect, useRef, useState } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 40, className }) => {
  const [displayed, setDisplayed] = useState('');
  const i = useRef(0);

  useEffect(() => {
    setDisplayed('');
    i.current = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i.current]);
      i.current++;
      if (i.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{displayed}<span className="animate-pulse">|</span></span>;
};

export default Typewriter;
