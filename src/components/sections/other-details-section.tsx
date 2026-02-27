"use client";

import { personalData } from "@/lib/data";
import { AnimatedSection } from "../animated-section";
import { Badge } from "../ui/badge";
import { Award, Globe, Heart } from "lucide-react";

export function OtherDetailsSection() {
  const { certificates, languages, interests } = personalData as any;

  return (
    <AnimatedSection id="other-details" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Certificates */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold font-headline">Certificates</h3>
          </div>
          <ul className="space-y-4">
            {certificates?.map((cert: any, index: number) => (
              <li key={index} className="flex flex-col">
                <span className="font-semibold text-sm">{cert.name}</span>
                <span className="text-xs text-muted-foreground">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold font-headline">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {languages?.map((lang: string, index: number) => (
              <Badge key={index} variant="secondary">
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold font-headline">Interests</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests?.map((interest: string, index: number) => (
              <Badge key={index} variant="outline" className="border-primary/20">
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
