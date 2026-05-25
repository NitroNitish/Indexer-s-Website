import { motion } from "motion/react";
import { Search, Target, Sparkles, Code2, CheckCircle2, Download, ExternalLink, Github, Twitter, Heart, Send } from "lucide-react";
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
  { icon: Search, title: "Analyze Codebase", desc: "Understand your code, content, structure, and intent in depth." },
  { icon: Target, title: "Improve Discoverability", desc: "Get actionable insights to improve visibility in AI search systems." },
  { icon: Sparkles, title: "Generate Optimizations", desc: "Automatically generate AI-ready content and technical recommendations." },
  { icon: Code2, title: "AI Search Ready", desc: "Make your project ready for ChatGPT, Gemini, Perplexity and more." },
];

export function Features() {
  return (
    <section id="features" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p {...fadeUp} className="text-[11px] uppercase tracking-[0.18em] text-primary">
          Features
        </motion.p>
        <motion.h2 {...fadeUp} className="mt-4 max-w-2xl text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
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
        <motion.h2 {...fadeUp} className="mt-4 max-w-3xl text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
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
          <p className="text-[11px] uppercase tracking-[0.18em] text-primary">Built for developers</p>
          <h2 className="mt-4 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-tight">
            Works where you build.
          </h2>
          <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
            Indexer is built natively for Antigravity IDE, so you can analyze, optimize, and implement without leaving your flow.
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
    r: "Self-taught Developer"
  },
  {
    q: "tbh i just build things for the vibe, but having my projects show up correctly when people search on AI tools is so sick. this tool runs super fast in the IDE, one click and boom, everything is optimized.",
    a: "Aditya Rao",
    r: "Vibe Coder"
  },
  {
    q: "Building a product in 2026 without AI discoverability is a waste of time. Indexer is now a core part of our dev workflow. Super clean UI and the recommendations are spot on.",
    a: "Neha Gupta",
    r: "Techy Founder"
  },
];

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p {...fadeUp} className="text-[11px] uppercase tracking-[0.18em] text-primary">
          Loved by developers
        </motion.p>
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
                  <span key={k} className="text-[13px]">★</span>
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
            <a href="#" className="flex items-center gap-2.5 w-fit">
              <Logo className="h-6 w-6" />
              <span className="text-[17px] font-semibold tracking-tight text-white">Indexer</span>
            </a>
            <p className="max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
              Empowering developers to optimize their codebase and content for the age of AI search. Built natively for modern agentic workflows.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a 
                href="https://github.com/NitroNitish/Indexer-s-Website" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.05] hover:text-white transition-all text-muted-foreground" 
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.05] hover:text-white transition-all text-muted-foreground" 
                title="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-foreground/80">Product</h4>
            <ul className="flex flex-col gap-2.5 text-[13.5px]">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how" },
                { label: "Install Extension", href: "https://open-vsx.org/extension/indexer-app/indexer" }
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
            <h4 className="text-[11px] uppercase tracking-[0.18em] font-semibold text-foreground/80">Newsletter</h4>
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
          
          <div className="flex items-center gap-1.5 text-[12px] bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse mr-0.5" />
            <span>Systems fully operational</span>
          </div>

          <div className="flex items-center gap-1">
            <span>Built for the AI Web with</span>
            <Heart className="h-3.5 w-3.5 text-primary fill-primary mx-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}