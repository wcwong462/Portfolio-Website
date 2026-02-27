
import { education } from "@/lib/data";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Education</h2>
        <p className="text-muted-foreground mt-2">My academic background.</p>
      </div>

      <div className="flex flex-col gap-6">
        {education.map((edu, index) => (
          <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-primary/5">
            <div className="flex flex-col md:flex-row p-6 gap-6 items-start">
              {((edu as any).logoUrl || (edu as any).iconUrl) && (
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl bg-white border p-2 flex items-center justify-center overflow-hidden">
                  <Image
                    src={(edu as any).logoUrl || (edu as any).iconUrl}
                    alt={edu.institution}
                    fill
                    sizes="(max-width: 768px) 64px, 80px"
                    className="object-contain p-2"
                  />
                </div>
              )}
              
              <div className="flex-grow space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold font-headline group-hover:text-primary transition-colors">
                    {edu.institution}
                  </h3>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {edu.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-muted-foreground">{edu.degree}</h4>
                
                {edu.description && (
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed pt-2 whitespace-pre-line">
                    {edu.description}
                  </p>
                )}
                
                {(edu as any).url && (
                  <div className="pt-2">
                    <a 
                      href={(edu as any).url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-semibold uppercase tracking-wider text-primary hover:underline underline-offset-4"
                    >
                      Visit Institution →
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
}
