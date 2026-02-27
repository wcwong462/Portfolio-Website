"use client";

import { useRef, useEffect, useState, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, id, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const internalRef = useRef<HTMLElement>(null);
    const sectionRef = (ref || internalRef) as React.RefObject<HTMLElement>;

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [sectionRef]);

    return (
      <section
        id={id}
        ref={sectionRef}
        className={cn(
          'transition-all duration-700 ease-out',
          'opacity-0 translate-y-8',
          { 'opacity-100 translate-y-0': isVisible },
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';
