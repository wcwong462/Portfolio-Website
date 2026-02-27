"use client";

import { useState } from "react";
import { skills } from "@/lib/data";
import { AnimatedSection } from "../animated-section";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const SkillCard = ({ skill }: { skill: (typeof skills)[number] }) => (
  <li className="flex flex-col items-center text-center gap-2">
    {(skill as any).url ? (
      <a
        href={(skill as any).url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-20 h-20 md:w-24 md:h-24 p-3 rounded-lg bg-card hover:bg-secondary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        aria-label={skill.name}
      >
        <img
          src={skill.iconUrl}
          alt={`${skill.name} icon`}
          className="w-10 h-10 md:w-12 md:h-12 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </a>
    ) : (
      <div className="group flex items-center justify-center w-20 h-20 md:w-24 md:h-24 p-3 rounded-lg bg-card hover:bg-secondary transition-colors cursor-pointer">
        <img
          src={skill.iconUrl}
          alt={`${skill.name} icon`}
          className="w-10 h-10 md:w-12 md:h-12 opacity-80 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    )}
    <p className="text-xs md:text-sm font-medium w-24 truncate">{skill.name}</p>
  </li>
);

export function TechStackSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const midPoint = Math.ceil(skills.length / 2);
  const firstRowSkills = skills.slice(0, midPoint);
  const secondRowSkills = skills.slice(midPoint);

  return (
    <AnimatedSection
      id="tech-stack"
      className="w-full max-w-4xl mx-auto py-16 md:py-24 border-t"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">My Tech Stack</h2>
        <p className="text-muted-foreground mt-2">
          Technologies I love to work with.
        </p>
      </div>

      {/* Desktop: Scrolling Animation */}
      <div className={`hidden md:flex flex-col gap-8 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
            {firstRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll" aria-hidden="true">
            {firstRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
        <div
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]"
        >
          <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll [animation-direction:reverse]">
            {secondRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
           <ul className="flex items-start justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll [animation-direction:reverse]" aria-hidden="true">
            {secondRowSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile: Always Show Table View */}
      <div className="md:hidden">
        <div className="space-y-8">
          {(() => {
            // Group skills by category
            const skillsByCategory = skills.reduce((acc, skill) => {
              const category = (skill as any).category || "Other";
              if (!acc[category]) {
                acc[category] = [];
              }
              (acc[category] as any[]).push(skill);
              return acc;
            }, {} as Record<string, any[]>);

            const categories = Object.keys(skillsByCategory);

            return categories.map((category) => (
              <div key={category} className="bg-card/50 rounded-2xl p-6 border border-border/50 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <h3 className="text-2xl font-headline font-bold tracking-tight text-black dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skillsByCategory[category].map((skill) => (
                    <div
                      key={skill.name}
                      className="group bg-background/80 hover:bg-background border border-border/50 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/30"
                    >
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="relative w-14 h-14 flex-shrink-0 bg-gradient-to-br from-background to-muted rounded-2xl p-3 shadow-sm border border-border/50 group-hover:shadow-md group-hover:border-primary/40 group-hover:from-background group-hover:to-primary/5 transition-all duration-300">
                          {(skill as any).iconUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={(skill as any).iconUrl}
                              alt={`${skill.name} icon`}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted/50 rounded-xl flex items-center justify-center">
                              <span className="text-lg text-muted-foreground font-semibold">
                                {skill.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="min-h-[2.5rem] flex items-center justify-center">
                          <p className="font-medium text-sm text-center leading-tight text-black dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ));
          })()}
        </div>
      </div>

      {/* Expand Button - Desktop Only */}
      <div className="hidden md:block text-center mt-8">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          size="lg"
          className="group"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Collapse Detailed View
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Expand Detailed View
            </>
          )}
        </Button>
      </div>

      {/* Expanded Table View */}
      <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 mt-8' : 'opacity-0 h-0 overflow-hidden'}`}>
        {isExpanded && (
          <div className="space-y-8">
            {(() => {
              // Group skills by category
              const skillsByCategory = skills.reduce((acc, skill) => {
                const category = (skill as any).category || "Other";
                if (!acc[category]) {
                  acc[category] = [];
                }
                (acc[category] as any[]).push(skill);
                return acc;
              }, {} as Record<string, any[]>);

              const categories = Object.keys(skillsByCategory);

              return categories.map((category) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-headline font-bold tracking-tight border-b pb-2">
                    {category}
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {skillsByCategory[category].map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex flex-col items-center text-center gap-3 p-4 hover:bg-accent/20 transition-all duration-300 rounded-xl hover:scale-105"
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 bg-background rounded-xl p-3 shadow-sm border group-hover:shadow-md group-hover:border-primary/20 transition-all duration-300">
                          {(skill as any).iconUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={(skill as any).iconUrl}
                              alt={`${skill.name} icon`}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                              loading="lazy"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-lg text-muted-foreground font-medium">
                                {skill.name.charAt(0)}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="font-medium text-sm text-center leading-tight group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ));
            })()}
          </div>
        )}
      </div>

    </AnimatedSection>
  );
}
