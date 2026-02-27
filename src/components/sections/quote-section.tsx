import { AnimatedSection } from "../animated-section";
import { Separator } from "../ui/separator";

export function QuoteSection() {
  return (
    <AnimatedSection
      id="quote"
      className="w-full"
    >
      <div className="w-full max-w-4xl mx-auto py-24 md:py-32 px-4 text-center">
        <Separator className="mb-12" />
        <div className="relative">
          <blockquote className="font-quote text-2xl md:text-4xl text-foreground italic leading-tight md:leading-tight">
            &quot;Risk comes from not knowing what you’re doing.&quot;
          </blockquote>
          <cite className="block text-right mt-8 text-lg text-muted-foreground font-body not-italic">
            - Warren Buffett
          </cite>
        </div>
      </div>
    </AnimatedSection>
  );
}
