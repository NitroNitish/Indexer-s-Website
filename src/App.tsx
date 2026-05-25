import { AmbientBackground } from "@/components/landing/Background";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
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
