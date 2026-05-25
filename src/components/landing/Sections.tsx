import { motion } from "motion/react";
import { Search, Target, Sparkles, Code2, CheckCircle2, Download, ExternalLink } from "lucide-react";
import { IDEMockup } from "./IDEMockup";
import { Logo } from "./Logo";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
};

export function Logos() {
  const items = ["Vercel", "Linear", "Supabase", "Tailwind", "Clerk", "Acme"];
  return (
    <section className="border-y border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by developers at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {items.map((n) => (
            <span key={n} className="text-[18px] font-semibold tracking-tight text-foreground/70">
              {n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
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
              initial={{ opacity: 0, y: 24 }}
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
                initial={{ opacity: 0, y: 24 }}
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
          initial={{ opacity: 0, y: 30 }}
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
  { q: "Indexer helped us optimize our docs and site for AI search. We're now discoverable in ChatGPT and Perplexity.", a: "Alex R.", r: "Developer Relations @ Vercel" },
  { q: "A must-have for every modern dev team. The recommendations are spot on and super easy to implement.", a: "Sarah K.", r: "Engineering Lead @ Linear" },
  { q: "Finally, an extension that understands AI search. Clean, fast and incredibly useful.", a: "Thomas D.", r: "Founder @ ShipFast" },
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
              initial={{ opacity: 0, y: 24 }}
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
    <section id="install" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.16_0.025_270)] p-10 md:p-14"
        >
          <div className="absolute -top-40 left-1/2 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,oklch(0.6_0.24_285/0.4),transparent_60%)] blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-primary">Built for the AI Web</p>
              <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
                Build for the AI Web.{" "}
                <span className="text-gradient">Be discovered everywhere.</span>
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                Join thousands of developers who trust Indexer to optimize their projects for the future of search.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <div className="flex items-center gap-3">
                <Logo className="h-10 w-10" />
                <div>
                  <div className="text-[15px] font-semibold">Indexer</div>
                  <div className="text-[11.5px] text-muted-foreground">Built for Discoverability</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-[14px] font-medium text-white shadow-[0_20px_50px_-20px_oklch(0.66_0.21_280/0.7)]">
                  <Download className="h-4 w-4" /> Install Extension
                </a>
                <a className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-[14px] font-medium text-foreground/90 hover:bg-white/[0.06]">
                  Open in Antigravity <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-[12.5px] text-muted-foreground">
        <div className="flex items-center gap-2.5">
          <Logo className="h-5 w-5" />
          <span className="font-medium text-foreground/90">Indexer</span>
          <span>© 2026. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#how" className="hover:text-foreground">How it works</a>
          <a href="#docs" className="hover:text-foreground">Docs</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
        </div>
      </div>
    </footer>
  );
}