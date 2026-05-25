import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/landing/Background";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import {
  Logos,
  Features,
  HowItWorks,
  NativeShowcase,
  Testimonials,
  CTA,
  Footer,
} from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Indexer — Optimize for AI Search" },
      {
        name: "description",
        content:
          "Indexer analyzes your codebase and generates AI-ready optimizations directly inside Antigravity IDE. Built for discoverability in ChatGPT, Gemini, and Perplexity.",
      },
      { property: "og:title", content: "Indexer — Optimize for AI Search" },
      {
        property: "og:description",
        content:
          "AI-ready optimizations for your project, built natively for Antigravity IDE.",
      },
    ],
  }),
});

function Index() {
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
      <CTA />
      <Footer />
    </main>
  );
}
