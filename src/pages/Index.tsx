import { lazy, Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { CursorGlow } from "@/components/CursorGlow";

const About = lazy(() => import("@/components/sections/About").then(m => ({ default: m.About })));
const CrmShowcase = lazy(() => import("@/components/sections/CrmShowcase").then(m => ({ default: m.CrmShowcase })));
const Cases = lazy(() => import("@/components/sections/Cases").then(m => ({ default: m.Cases })));
const SocialProof = lazy(() => import("@/components/sections/SocialProof").then(m => ({ default: m.SocialProof })));
const Process = lazy(() => import("@/components/sections/Process").then(m => ({ default: m.Process })));
const Faq = lazy(() => import("@/components/sections/Faq").then(m => ({ default: m.Faq })));
const FinalCta = lazy(() => import("@/components/sections/FinalCta").then(m => ({ default: m.FinalCta })));
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })));

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      {/* Subtle grid */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      {/* Blur edges top & bottom */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-16 backdrop-blur-[1.5px]" style={{ maskImage: "linear-gradient(to bottom, black, transparent)" }} />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] h-16 backdrop-blur-[1.5px]" style={{ maskImage: "linear-gradient(to top, black, transparent)" }} />

      {/* Cursor light */}
      <CursorGlow />

      <Hero />
      <Suspense fallback={null}>
        <About />
        <Cases />
        <CrmShowcase />
        <SocialProof />
        <Process />
        <Faq />
        <FinalCta />
        <Footer />
      </Suspense>
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
