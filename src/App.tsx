import { AmbientBackground } from "@/components/landing/Background";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import {
  Logos,
  Features,
  HowItWorks,
  NativeShowcase,
  Testimonials,
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
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
