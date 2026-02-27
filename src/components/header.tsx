
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, Code } from "lucide-react";
import { personalData } from "@/lib/data";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? 'border-b bg-background/80 backdrop-blur-sm' : 'border-b border-transparent'
    )}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-12">
        <Link href="#hero">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground">
            <Code className="h-6 w-6" />
          </div>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-auto">
            <div className="flex flex-col gap-4 p-4">
              {navLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    href={link.href}
                    className="text-lg font-medium hover:underline text-center"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
