"use client";
import { personalData } from "@/lib/data";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AnimatedSection } from "../animated-section";

export function ContactSection() {
  return (
    <AnimatedSection id="contact" className="w-full max-w-4xl py-16 md:py-24 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Contact Me</h2>
        <p className="text-muted-foreground mt-2">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
      </div>
      <form
        className="max-w-xl mx-auto space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const data = new FormData(form);
          const name = (data.get("name") as string) || "";
          const email = (data.get("email") as string) || "";
          const message = (data.get("message") as string) || "";
          const subject = `Portfolio inquiry from ${name}`;
          const body = `From: ${name} <${email}>\n\n${message}`;
          const mailto = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          window.location.href = mailto;
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input type="text" name="name" placeholder="Name" required />
          <Input type="email" name="email" placeholder="Email" required />
        </div>
        <Textarea name="message" placeholder="Message" rows={5} required />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </AnimatedSection>
  );
}
