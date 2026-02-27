
import { workExperience } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { AnimatedSection } from "../animated-section";

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Work Experience</h2>
        <p className="text-muted-foreground mt-2">My professional journey so far.</p>
      </div>
      <div className="relative">
        <div className="absolute left-3 md:left-1/2 top-0 h-full w-px bg-border -translate-x-1/2"></div>
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div key={index} className="relative group">
              {/* Desktop timeline dot */}
              <div className="hidden md:block md:absolute md:left-1/2 md:top-4 md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-background"></div>
              
              <div className="md:relative md:flex md:items-start md:gap-8 group-even:md:flex-row-reverse">
                {/* Mobile: Meta on top */}
                <div className="flex md:hidden items-center gap-4 mb-4 ml-10">
                   <p className="font-semibold text-muted-foreground">{job.period}</p>
                </div>
                
                {/* Desktop: Meta aligned with timeline */}
                <div className="hidden md:flex md:w-1/2 md:items-center md:group-odd:justify-end md:group-even:justify-start gap-4">
                   <p className="font-semibold text-muted-foreground">{job.period}</p>
                </div>

                <div className="md:w-1/2">
                  <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ml-10 md:ml-0">
                    <a
                      href={(job as any).url || '#'}
                      target={(job as any).url ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-lg ${(job as any).url ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <CardHeader>
                          <CardTitle className="font-headline">{job.role}</CardTitle>
                          <CardDescription>{job.company}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{job.description}</p>
                      </CardContent>
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
