import { personalData, education } from "@/lib/data";
import { MapPin, GraduationCap, Mail } from "lucide-react";
import { AnimatedSection } from "../animated-section";

export function HeroSection() {
  const topEducation = education[0];

  return (
    <AnimatedSection
      id="hero"
      className="w-full max-w-5xl flex flex-col items-center text-center justify-center min-h-[80vh] gap-12 px-4 py-32"
    >
      <div className="flex flex-col items-center max-w-3xl z-20">
        <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter mb-4 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
          {personalData.name}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-primary mb-6">
          {personalData.title}
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-muted-foreground mb-8 text-sm md:text-base">
          {topEducation && (
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span>{topEducation.institution}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a href={`mailto:${personalData.email}`} className="hover:text-primary transition-colors">{personalData.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{personalData.location}</span>
          </div>
        </div>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          {personalData.about}
        </p>

        <figure className="relative pl-6 border-l-2 border-primary/30 py-2">
          <blockquote className="font-quote text-xl md:text-2xl italic text-foreground/80 leading-snug">
            “Risk come from not knowing what you are doing”
          </blockquote>
          <figcaption className="mt-2 text-xs md:text-sm text-muted-foreground">— Warren Buffett</figcaption>
        </figure>
      </div>
    </AnimatedSection>
  );
}
