import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0
}) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const getAnimationClass = () => {
    const baseClass = `animate-on-scroll${animation.includes('slide') ? `-${animation.split('-')[1]}` : ''}`;
    return `${baseClass} ${isIntersecting ? 'animate' : ''}`;
  };

  return (
    <div
      ref={targetRef}
      className={`${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;