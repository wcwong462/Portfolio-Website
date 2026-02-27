
"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { personalData } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { AnimatedSection } from "./animated-section";

export function SuggestedContent() {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated AI response for testing since Genkit server isn't running in current dev/build environment
    const timer = setTimeout(() => {
      setSuggestions([
        {
          title: "The BAB Alpha in Micro-Caps",
          description: "Analyzing the Betting-Against-Beta anomaly in high-volatility, low-liquidity stock segments."
        },
        {
          title: "Reinforcement Learning for Gamma Hedging",
          description: "Using deep Q-learning to minimize hedging error in non-Gaussian volatility environments."
        },
        {
          title: "LLM Sentiment as an ESG Factor",
          description: "Leveraging Large Language Models to extract ESG signal from unstructured earnings calls."
        }
      ]);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatedSection id="suggestions" className="w-full max-w-4xl py-12 border-t">
         <div className="flex flex-col items-center gap-4 animate-pulse">
            <Sparkles className="h-6 w-6 text-primary opacity-50" />
            <p className="text-sm text-muted-foreground uppercase tracking-widest">Generating AI Research Ideas...</p>
         </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection id="suggestions" className="w-full max-w-4xl py-16 md:py-24 border-t">
       <div className="flex flex-col items-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
             <Sparkles className="h-5 w-5 text-primary" />
             <span className="text-sm font-bold uppercase tracking-widest text-primary">AI Suggested Research</span>
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
             Based on your experience in <strong>{personalData.title}</strong>, our model suggests these future research paths:
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suggestions.map((s, idx) => (
             <Card key={idx} className="bg-card/30 backdrop-blur-md border border-primary/20 hover:scale-[1.02] transition-transform">
                <CardHeader>
                   <CardTitle className="text-lg text-primary">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                   <p className="text-sm text-muted-foreground">{s.description}</p>
                </CardContent>
             </Card>
          ))}
       </div>
    </AnimatedSection>
  );
}
