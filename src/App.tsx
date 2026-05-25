import { useEffect, useState } from "react";
import { AmbientBackground } from "@/components/landing/Background";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { PrivacyPage } from "@/components/landing/Privacy";
import { Analytics } from "@vercel/analytics/react";
import {
  Logos,
  Features,
  HowItWorks,
  NativeShowcase,
  Testimonials,
  Pricing,
  FAQ,
  CTA,
  Footer,
} from "@/components/landing/Sections";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    return window.location.hash === "#/privacy" ? "/privacy" : "/";
  });

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash === "#/privacy" ? "/privacy" : "/");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentRoute === "/privacy") {
    return (
      <>
        <PrivacyPage />
        <Analytics />
      </>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-foreground">
      <AmbientBackground />
      <Nav />
      <Hero />
      <Logos />
      <Features />
      <HowItWorks />
      <NativeShowcase />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      <Analytics />
    </main>
  );
}
