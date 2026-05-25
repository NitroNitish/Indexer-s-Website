import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Target,
  Sparkles,
  Code2,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Twitter,
  Heart,
  Send,
  ChevronDown,
  X,
  Copy,
  Check,
} from "lucide-react";
import { IDEMockup } from "./IDEMockup";
import { Logo } from "./Logo";
import bannerImg from "./banner.png";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  initial: { y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
};

export function Logos() {
  return null;
}

const features = [
  {
    icon: Search,
    title: "Analyze Codebase",
    desc: "Understand your code, content, structure, and intent in depth.",
  },
  {
    icon: Target,
    title: "Improve Discoverability",
    desc: "Get actionable insights to improve visibility in AI search systems.",
  },
  {
    icon: Sparkles,
    title: "Generate Optimizations",
    desc: "Automatically generate AI-ready content and technical recommendations.",
  },
  {
    icon: Code2,
    title: "AI Search Ready",
    desc: "Make your project ready for ChatGPT, Gemini, Perplexity and more.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p {...fadeUp} className="text-[11px] uppercase tracking-[0.18em] text-primary">
          Features
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="mt-4 max-w-2xl text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight"
        >
          Everything you need for AI discoverability
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.04] hover:shadow-[0_30px_60px_-30px_oklch(0.55_0.24_280/0.5)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[oklch(0.6_0.22_280/0.35)] blur-3xl" />
              </div>
              <div className="relative">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary transition-transform duration-300 group-hover:scale-110">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[15px] font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { t: "Analyze", d: "Indexer scans your project and understands your codebase and content." },
  { t: "Understand", d: "Our engine extracts key entities, topics, and intent from your project." },
  { t: "Optimize", d: "Get tailored recommendations to improve your visibility in AI search." },
  { t: "Implement", d: "Apply changes directly in Antigravity and ship with confidence." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p {...fadeUp} className="text-[11px] uppercase tracking-[0.18em] text-primary">
          How it works
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="mt-4 max-w-3xl text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight"
        >
          From code to discoverability in 4 steps
        </motion.h2>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-4 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className="mb-5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-[12px] font-semibold text-white shadow-[0_10px_30px_-10px_oklch(0.66_0.21_280/0.7)]">
                  {i + 1}
                </div>
                <h3 className="text-[15px] font-semibold">{s.t}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function NativeShowcase() {
  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.2fr]">
        <motion.div {...fadeUp}>
          <p className="text-[11px] uppercase tracking-[0.18em] text-primary">
            Built for developers
          </p>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
            Works where you build.
          </h2>
          <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
            Indexer is built natively for Antigravity IDE, so you can analyze, optimize, and
            implement without leaving your flow.
          </p>
          <ul className="mt-6 space-y-3 text-[13.5px] text-foreground/85">
            {[
              "Zero-config indexing of your repo",
              "Live AI-readiness diagnostics",
              "One-click apply for every recommendation",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_center,oklch(0.55_0.24_280/0.3),transparent_65%)] blur-2xl" />
          <IDEMockup />
        </motion.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    q: "bro honestly this extension is a lifesaver. i was struggling so much to get my site ranked and cited on perplexity and chatgpt, but indexer literally pointed out exactly what was missing in my html and sitemap. highly recommend!",
    a: "Rohan Mehta",
    r: "Self-taught Developer",
  },
  {
    q: "tbh i just build things for the vibe, but having my projects show up correctly when people search on AI tools is so sick. this tool runs super fast in the IDE, one click and boom, everything is optimized.",
    a: "Aditya Rao",
    r: "Vibe Coder",
  },
  {
    q: "Building a product in 2026 without AI discoverability is a waste of time. Indexer is now a core part of our dev workflow. Super clean UI and the recommendations are spot on.",
    a: "Neha Gupta",
    r: "Techy Founder",
  },
];

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p {...fadeUp} className="text-[11px] uppercase tracking-[0.18em] text-primary">
          Loved by developers
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="mt-4 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight"
        >
          What the developer community is saying
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.a}
              initial={{ y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-colors hover:border-white/15"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className="text-[13px]">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[13.5px] leading-relaxed text-foreground/90">"{t.q}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] text-[12px] font-semibold text-white">
                  {t.a[0]}
                </div>
                <div>
                  <div className="text-[12.5px] font-medium">{t.a}</div>
                  <div className="text-[11.5px] text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How does Indexer optimize my website for AI search engines like ChatGPT, Gemini, and Perplexity?",
    a: "Indexer performs deep local codebase scans to detect semantic search issues, missing crawler configurations (like robots.txt and sitemap.xml), and suboptimal heading hierarchies. It then generates high-density JSON-LD schemas, LLM-targeted llms.txt files, and SEO-friendly copy to help conversational engines retrieve and cite your content.",
  },
  {
    q: "What is Generative Engine Optimization (GEO) and why does my codebase need it?",
    a: "Generative Engine Optimization (GEO) is the practice of structuring code, content, and metadata to be easily parsed, retrieved, and cited by Generative AI systems like ChatGPT Search, Perplexity, and Google AI Overviews. Traditional SEO is not enough; your codebase needs clean machine-readable paths so AI engines trust and reference your brand.",
  },
  {
    q: "Does Indexer support React, Vite, and other modern frameworks?",
    a: "Yes, Indexer is built to support modern JavaScript and TypeScript frameworks including React, Vite, Next.js, as well as traditional HTML and static documentation sites. It automatically detects your tech stack and provides copy-paste ready implementation recipes.",
  },
  {
    q: "Is my codebase data sent to external servers during analysis?",
    a: "No, Indexer runs entirely locally on your machine within your IDE (Antigravity or VS Code). Your proprietary codebase and sensitive credentials never leave your local workspace, ensuring total security and privacy.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <motion.p
          {...fadeUp}
          className="text-[11px] uppercase tracking-[0.18em] text-primary text-center"
        >
          Frequently Asked Questions
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="mt-4 text-center text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight"
        >
          Got Questions? We Have Answers.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="mt-4 text-center text-[14px] text-muted-foreground max-w-md mx-auto"
        >
          Learn how Indexer empowers you to take full control of your search discoverability in the
          generative AI era.
        </motion.p>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border border-white/8 bg-white/[0.01] hover:bg-white/[0.02] transition-colors overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-[15px] font-semibold tracking-tight text-foreground/90 pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className="text-muted-foreground/80 flex-shrink-0"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <div className="px-6 pb-6 text-[13.5px] leading-relaxed text-muted-foreground border-t border-white/5 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FAQSectionSpacer() {
  return null;
}

export function CTA() {
  return (
    <section id="install" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/5 transition-all duration-300 w-full"
        >
          {/* Direct Banner Graphic Image */}
          <img
            src={bannerImg}
            alt="Indexer - Build for the AI Web"
            className="w-full h-auto block select-none pointer-events-none"
          />

          {/* Clickable Transparent Hotspots */}
          <div className="absolute inset-0">
            {/* Install Extension Hotspot */}
            <a
              href="https://open-vsx.org/extension/indexer-app/indexer"
              target="_blank"
              rel="noopener noreferrer"
              title="Install Extension"
              className="absolute cursor-pointer rounded-[6px] md:rounded-xl transition-all hover:bg-white/5"
              style={{
                left: "56.7%",
                width: "14.9%",
                top: "56%",
                height: "25%",
              }}
            />

            {/* Open in Antigravity Hotspot */}
            <a
              href="vscode:extension/indexer-app.indexer"
              title="Open in Antigravity"
              className="absolute cursor-pointer rounded-[6px] md:rounded-xl transition-all hover:bg-white/5"
              style={{
                left: "73.2%",
                width: "16.9%",
                top: "56%",
                height: "25%",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/20 pt-20 pb-10 overflow-hidden">
      {/* Immersive Atmospheric Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-full max-w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_bottom,oklch(0.55_0.24_280/0.15),transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16 pb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-5 md:col-span-2">
            <a href="#" className="flex items-center gap-3 w-fit">
              <Logo className="h-8 w-8" />
              <span className="text-[22px] font-bold tracking-tight text-white">Indexer</span>
            </a>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
              Empowering developers to optimize their codebase and content for the age of AI search.
              Built natively for modern agentic workflows.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-foreground/80">
              Product
            </h4>
            <ul className="flex flex-col gap-2.5 text-[13.5px]">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how" },
                {
                  label: "Install Extension",
                  href: "https://open-vsx.org/extension/indexer-app/indexer",
                },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-muted-foreground hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1 group"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-foreground/80">
              Newsletter
            </h4>
            <p className="text-[13px] text-muted-foreground leading-normal">
              Stay updated on AI SEO optimizations and extension releases.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="relative mt-1 flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 pr-11 text-[13px] text-white placeholder-muted-foreground/60 backdrop-blur-md outline-none transition-all focus:border-primary/45 focus:bg-white/[0.05]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-1.5 p-1.5 rounded-lg bg-[image:var(--gradient-primary)] text-white hover:opacity-90 active:scale-95 transition-all shadow-[0_4px_12px_-4px_oklch(0.66_0.21_280/0.7)]"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom footer bar */}
        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-white/5 pt-8 text-[12.5px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <span>© 2026 Indexer. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 text-[9.5px] tracking-[0.25em] font-mono text-muted-foreground/60 uppercase select-none">
            <span>secure</span>
            <span className="h-1 w-1 rounded-full bg-primary/40" />
            <span>optimized</span>
            <span className="h-1 w-1 rounded-full bg-primary/40" />
            <span>ai-ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Pricing() {
  const [showDesktopModal, setShowDesktopModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const featuresList = [
    "Lifetime access",
    "Future updates included",
    "Full extension access",
    "AI search optimization",
    "Antigravity integration",
  ];

  const upiId = "nitronitish@fam";
  const amount = "99";
  const payeeName = "Indexer";
  const transactionNote = "Indexer Lifetime Access";
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiUrl)}&color=0-0-0&bgcolor=255-255-255`;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePayment = (e: React.MouseEvent) => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) {
      // On mobile, trigger standard deep link to launch user's UPI app directly
      window.location.href = upiUrl;
    } else {
      // On desktop, show QR code modal instead of doing nothing or causing browser crash
      e.preventDefault();
      setShowDesktopModal(true);
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Immersive Atmospheric Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.66_0.21_280/0.1),transparent_65%)] blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.62_0.22_278/0.04),transparent_70%)] blur-2xl" />

      <div className="relative mx-auto max-w-6xl px-6 z-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.p
          {...fadeUp}
          className="text-[11px] uppercase tracking-[0.18em] text-primary text-center"
        >
          Pricing
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="mt-4 text-center text-[clamp(2rem,3.2vw,2.5rem)] font-semibold leading-[1.05] tracking-tight"
        >
          Pay Once. Use Forever.
        </motion.h2>
        <motion.p
          {...fadeUp}
          className="mt-3.5 text-center text-[13.5px] text-muted-foreground max-w-sm"
        >
          Get full unlimited lifetime access to Indexer. No subscriptions, no hidden fees.
        </motion.p>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          whileHover={{ 
            y: -5,
            transition: { duration: 0.25, ease: "easeOut" }
          }}
          className="group relative mt-12 w-full max-w-[365px] rounded-2xl border border-white/8 bg-white/[0.02] p-6 backdrop-blur-md transition-all duration-300 hover:border-white/15 hover:bg-white/[0.03] hover:shadow-[0_30px_60px_-15px_oklch(0.66_0.21_280/0.2)]"
        >
          {/* Subtle top edge lighting gradient */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Early Adopter Tag */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/8 px-3 py-0.5 text-[10px] font-medium tracking-wide text-primary uppercase select-none">
              <Sparkles className="h-2.5 w-2.5 fill-current animate-pulse" /> Early Adopter Launch Offer
            </span>
          </div>

          {/* Pricing Details */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <span className="text-[16px] text-muted-foreground/60 line-through font-medium">
                ₹499
              </span>
              <span className="text-[50px] font-semibold tracking-tight text-white leading-none">
                ₹99
              </span>
            </div>
            <p className="mt-2.5 text-[13px] font-medium text-foreground/80 tracking-wide">
              "Pay once. Own forever."
            </p>
          </div>

          {/* Divider Line */}
          <div className="my-5.5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Feature List */}
          <ul className="space-y-3">
            {featuresList.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-[13px] text-foreground/85">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-light tracking-wide">{f}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-7">
            <button
              onClick={handlePayment}
              className="relative group inline-flex w-full items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] py-3 text-[13.5px] font-semibold text-white shadow-[0_15px_40px_-15px_oklch(0.66_0.21_280/0.7)] transition-all duration-300 hover:scale-[1.01] hover:opacity-95 active:scale-[0.99] glow-primary cursor-pointer"
            >
              {/* Button light hover glow overlay */}
              <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              Get Lifetime Access Now
            </button>
          </div>

          {/* Guarantee Subtext */}
          <p className="mt-3 text-center text-[9.5px] text-muted-foreground/80 tracking-wide font-mono">
            SECURE ONE-TIME PAYMENT
          </p>
        </motion.div>
      </div>

      {/* Desktop QR Modal */}
      <AnimatePresence>
        {showDesktopModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDesktopModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-[#13151a]/95 p-6 shadow-2xl backdrop-blur-xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowDesktopModal(false)}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground/80 hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="text-center">
                {/* Header */}
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                  <Sparkles className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-[16px] font-semibold text-white tracking-tight">
                  Pay with UPI
                </h3>
                <p className="mt-1 text-[12px] text-muted-foreground leading-normal px-2">
                  Scan the QR code with GPay, PhonePe, Paytm, or your UPI app.
                </p>

                {/* QR Code Container */}
                <div className="relative mt-5 mx-auto flex h-[200px] w-[200px] items-center justify-center rounded-xl border border-white/8 bg-white p-2.5 shadow-md">
                  <img
                    src={qrCodeUrl}
                    alt="UPI Payment QR Code"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Price Badge */}
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-0.5 text-[12px] font-medium text-white border border-white/5">
                  Amount to Pay: <span className="font-semibold text-primary">₹99</span>
                </div>

                {/* Divider */}
                <div className="my-4.5 flex items-center justify-center gap-3">
                  <div className="h-px w-full bg-white/5" />
                  <span className="text-[9.5px] font-semibold text-muted-foreground/50 uppercase tracking-widest">or</span>
                  <div className="h-px w-full bg-white/5" />
                </div>

                {/* Copy UPI ID */}
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/50">UPI Address</span>
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-white/8 bg-white/[0.01] p-2">
                    <code className="text-[12px] font-mono text-foreground/90 pl-1">{upiId}</code>
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center rounded-lg bg-white/5 p-1.5 text-muted-foreground/80 hover:text-white hover:bg-white/10 active:scale-95 transition-all cursor-pointer"
                      title="Copy UPI Address"
                    >
                      {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Help note */}
                <p className="mt-4 text-[10.5px] text-muted-foreground/45 leading-normal">
                  Once payment is complete, the extension license is instantly activated.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
