import { HeroSection } from "@/components/sections/hero-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EducationSection } from "@/components/sections/education-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { OtherDetailsSection } from "@/components/sections/other-details-section";
import { ExtrasSection } from "@/components/sections/extras-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-24 md:gap-32 pb-24">
      <HeroSection />
      <div className="w-full max-w-5xl px-4 flex flex-col gap-32">
        <ExperienceSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <ExtrasSection />
        <OtherDetailsSection />
        <ContactSection />
      </div>
    </main>
  );
}
