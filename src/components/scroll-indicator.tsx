"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ScrollIndicatorProps {
  sections: { id: string; label: string }[];
}

export function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    const currentObserver = observer.current;
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) currentObserver.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) currentObserver.unobserve(el);
      });
    };
  }, [sections]);

  const dotPositions = [
    { top: '15%', left: '50%' },
    { top: '25%', left: '30%' },
    { top: '35%', left: '70%' },
    { top: '50%', left: '50%' },
    { top: '65%', left: '30%' },
    { top: '75%', left: '70%' },
    { top: '85%', left: '50%' },
  ];

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 h-64 w-8 z-40 hidden md:block">
      <div className="relative h-full w-full">
        {sections.map((section, index) => {
          const pos = dotPositions[index % dotPositions.length];
          return (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: pos.top, left: pos.left }}
              aria-label={`Scroll to ${section.label}`}
            >
              <div
                className={cn(
                  'w-3 h-3 rounded-full bg-muted transition-all duration-300 ease-in-out',
                  { 'bg-primary scale-150 shadow-lg shadow-primary/50': activeSection === section.id }
                )}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
