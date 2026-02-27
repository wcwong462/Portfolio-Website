"use client"
import { personalData } from "@/lib/data";
import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import { Briefcase, Mail, User, BookText } from "lucide-react";

const SocialButton = ({
  href,
  "aria-label": ariaLabel,
  icon: Icon,
  label,
  onClick
}: {
  href?: string;
  "aria-label": string;
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
}) => {
  const content = (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-transparent transition-transform duration-300 ease-in-out group-hover/button:scale-125"
      onClick={onClick}
    >
      <Icon className="h-6 w-6 transition-transform duration-300 group-hover/button:scale-125" />
    </Button>
  );

  return (
    <div className="group/button relative flex items-center">
      {href ? (
         <Link href={href} aria-label={ariaLabel} target={href.startsWith("#") ? "" : "_blank"}>
            {content}
         </Link>
      ): content}
      <span className="absolute bottom-full mb-2 w-auto p-2 min-w-max rounded-md shadow-md text-xs bg-card text-card-foreground scale-0 group-hover/button:scale-100 transition-all origin-bottom duration-300">
        {label}
      </span>
    </div>
  );
};

export function SocialLinks() {
  return (
    <div className="group fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 md:gap-4 p-2 md:p-3 rounded-full bg-card/80 backdrop-blur-sm border shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
        <div className="hidden md:flex items-center gap-4">
          <SocialButton href="#hero" aria-label="About Me" icon={User} label="About" />
          <SocialButton href="#experience" aria-label="My Experience" icon={BookText} label="Experience" />
          <SocialButton href="#projects" aria-label="View My Work" icon={Briefcase} label="Projects" />
          <SocialButton href="#contact" aria-label="Contact Me" icon={Mail} label="Contact" />
          <div className="h-6 w-px bg-border mx-2" />
        </div>
        
        {personalData.socials.map((social) => (
           <SocialButton 
              key={social.name}
              href={social.url}
              aria-label={social.name}
              icon={social.icon}
              label={social.name}
            />
        ))}
        <div className="h-6 w-px bg-border mx-2" />
        
        <ThemeToggle />
      </div>
    </div>
  );
}
