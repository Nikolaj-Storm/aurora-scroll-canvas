
import React, { useEffect, useRef, useState } from 'react';

interface ScrollTriggerProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
}

const ScrollTrigger: React.FC<ScrollTriggerProps> = ({ 
  children, 
  delay = 0, 
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, isVisible]);

  return (
    <div
      ref={elementRef}
      className={`scrollytelling-trigger ${isVisible ? 'in-view' : ''}`}
    >
      {children}
    </div>
  );
};

export default ScrollTrigger;
