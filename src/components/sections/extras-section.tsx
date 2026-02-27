"use client";

import { personalData } from "@/lib/data";
import { AnimatedSection } from "../animated-section";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Book, Users } from "lucide-react";

export function ExtrasSection() {
  const { recommendedBooks, extracurricularActivities } = personalData as any;

  return (
    <AnimatedSection id="extras" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Recommended Books */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Book className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold font-headline">Recommended Books</h2>
          </div>
          <div className="grid gap-4">
            {recommendedBooks?.map((book: any, index: number) => (
              <Card key={index} className="transition-all hover:shadow-md border-primary/10">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {book.author}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold font-headline">Extracurriculars</h2>
          </div>
          <div className="space-y-4">
            {extracurricularActivities?.map((activity: any, index: number) => (
              <div key={index} className="pl-4 border-l-2 border-primary/20 py-2">
                <h3 className="font-bold text-base">{activity.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 text-pretty">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
