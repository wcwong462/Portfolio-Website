import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { SocialLinks } from "@/components/social-links";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { Header } from "@/components/header";
import { QuantBackground } from "@/components/quant-background";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Samuel Portfolio",
  description:
    "Personal portfolio of Samuel, a Quant Finance & Computer Science student.",
};

const sections = [
  { id: "hero", label: "Hero" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "quote", label: "Quote" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${outfit.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <QuantBackground />
          <Header />
          <ScrollIndicator sections={sections} />
          
          <div className="relative z-0 min-h-screen bg-white/20 dark:bg-slate-950/30 backdrop-blur-md w-full max-w-6xl mx-auto border-x border-primary/10 shadow-2xl transition-all duration-500">
            {children}
          </div>
          
          <SocialLinks />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
