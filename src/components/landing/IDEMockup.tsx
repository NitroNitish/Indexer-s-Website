import { motion } from "motion/react";
import {
  Search,
  Sparkles,
  Rocket,
  Settings,
  History,
  User,
  ChevronRight,
  GitBranch,
  FileCode,
  Play,
  Boxes,
} from "lucide-react";
import { Logo } from "./Logo";

export function IDEMockup() {
  return (
    <div className="relative w-full">
      {/* outer chrome */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.13_0.02_270)] shadow-[0_60px_120px_-40px_oklch(0_0_0/0.8),0_30px_80px_-30px_oklch(0.55_0.24_280/0.35)]">
        {/* tab bar */}
        <div className="flex items-center gap-1 border-b border-white/5 bg-[oklch(0.16_0.02_270)] px-3 py-2">
          <div className="flex gap-1.5 pr-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.6_0.18_25)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_85)]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.16_145)]/70" />
          </div>
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1">
              <span className="h-3 w-3 rounded-sm bg-gradient-to-br from-zinc-500 to-zinc-700" />
              Antigravity
              <span className="ml-1 opacity-60">×</span>
            </div>
            <div className="flex items-center gap-1.5 rounded-md bg-[oklch(0.2_0.04_275)] px-2 py-1 text-foreground/90">
              <Logo className="h-3 w-3" />
              Indexer
              <span className="ml-1 opacity-60">×</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[44px_280px_1fr]">
          {/* activity bar */}
          <div className="flex flex-col items-center gap-4 border-r border-white/5 bg-[oklch(0.14_0.02_270)] py-4 text-muted-foreground">
            {[FileCode, Search, GitBranch, Play, Boxes].map((I, i) => (
              <I key={i} className="h-4 w-4" />
            ))}
            <div className="mt-1 rounded-md bg-[oklch(0.22_0.05_280)] p-1.5 text-primary">
              <Logo className="h-4 w-4" />
            </div>
          </div>

          {/* extension panel */}
          <div className="flex flex-col gap-4 border-r border-white/5 bg-[oklch(0.145_0.02_270)] p-4">
            <div className="flex items-center gap-2">
              <Logo className="h-7 w-7" />
              <div>
                <div className="text-[13px] font-semibold leading-tight">Indexer</div>
                <div className="text-[10.5px] text-muted-foreground">Built for Discoverability</div>
                <div className="mt-1 inline-flex items-center gap-1 text-[10px] text-[oklch(0.78_0.16_150)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.78_0.16_150)] shadow-[0_0_8px_oklch(0.78_0.16_150)]" />
                  Active
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ y: -1 }}
              className="flex items-center justify-center gap-2 rounded-lg bg-[image:var(--gradient-primary)] px-3 py-2 text-[12px] font-medium text-white shadow-[0_10px_30px_-10px_oklch(0.66_0.21_280/0.7)]"
            >
              <Sparkles className="h-3.5 w-3.5" /> Analyze Project
            </motion.button>

            <div className="flex flex-col gap-2">
              {[
                { icon: Search, title: "Understand", desc: "Analyze your codebase and content for AI search." },
                { icon: Sparkles, title: "Optimize", desc: "Get actionable recommendations to improve discoverability." },
                { icon: Rocket, title: "Implement", desc: "Apply optimizations and generate AI-ready content." },
              ].map((row) => (
                <div
                  key={row.title}
                  className="group flex items-start gap-2.5 rounded-lg border border-transparent bg-white/[0.02] p-2.5 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <row.icon className="mt-0.5 h-3.5 w-3.5 text-primary" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[11.5px] font-medium">{row.title}</div>
                    <div className="text-[10.5px] leading-snug text-muted-foreground">{row.desc}</div>
                  </div>
                  <ChevronRight className="mt-0.5 h-3 w-3 text-muted-foreground" />
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3 text-[11px] text-muted-foreground">
              <User className="h-3.5 w-3.5" />
              <div className="flex items-center gap-1.5"><History className="h-3.5 w-3.5" /> History</div>
              <div className="flex items-center gap-1.5"><Settings className="h-3.5 w-3.5" /> Settings</div>
            </div>
          </div>

          {/* editor */}
          <div className="relative bg-[oklch(0.12_0.02_270)] p-4 font-mono text-[11.5px] leading-relaxed">
            <div className="mb-3 flex items-center gap-2 text-[11px] text-muted-foreground">
              <span className="rounded bg-white/5 px-2 py-0.5 text-foreground/80">page.tsx</span>
              <span>sitemap.xml</span>
            </div>
            <CodeLines />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-4 right-4 w-[220px] rounded-xl border border-white/10 bg-[oklch(0.18_0.03_275)]/90 p-3 shadow-[0_20px_50px_-20px_oklch(0_0_0/0.8)] backdrop-blur"
            >
              <div className="flex items-center gap-2 text-[11px] text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Suggestion
              </div>
              <div className="mt-1 text-[11px] text-foreground/90">
                Add structured data for <span className="text-primary">Article</span> to improve AI citation.
              </div>
              <button className="mt-2 w-full rounded-md bg-white/10 px-2 py-1 text-[10.5px] hover:bg-white/15">
                Apply optimization
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* reflection glow */}
      <div className="pointer-events-none absolute inset-x-10 -bottom-10 h-24 rounded-full bg-[oklch(0.55_0.24_280/0.35)] blur-3xl" />
    </div>
  );
}

function CodeLines() {
  const lines = [
    { n: 1, t: <><span className="text-[oklch(0.7_0.15_310)]">export default function</span> <span className="text-[oklch(0.78_0.16_85)]">Page</span>() {"{"}</> },
    { n: 2, t: <>  <span className="text-[oklch(0.7_0.15_310)]">return</span> (</> },
    { n: 3, t: <>    {"<"}<span className="text-[oklch(0.7_0.16_200)]">main</span> <span className="text-[oklch(0.78_0.16_85)]">className</span>=<span className="text-[oklch(0.75_0.15_140)]">"prose"</span>{">"}</> },
    { n: 4, t: <>      {"<"}<span className="text-[oklch(0.7_0.16_200)]">h1</span>{">"}Built for the AI Web{"</"}<span className="text-[oklch(0.7_0.16_200)]">h1</span>{">"}</> },
    { n: 5, t: <>      {"<"}<span className="text-[oklch(0.7_0.16_200)]">p</span>{">"}Indexer makes your project</> },
    { n: 6, t: <>         discoverable by AI systems.{"</"}<span className="text-[oklch(0.7_0.16_200)]">p</span>{">"}</> },
    { n: 7, t: <>    {"</"}<span className="text-[oklch(0.7_0.16_200)]">main</span>{">"}</> },
    { n: 8, t: <>  );</> },
    { n: 9, t: <>{"}"}</> },
  ];
  return (
    <div className="space-y-1 text-foreground/85">
      {lines.map((l) => (
        <div key={l.n} className="grid grid-cols-[28px_1fr] gap-2">
          <span className="text-right text-muted-foreground/60">{l.n}</span>
          <span className="whitespace-pre">{l.t}</span>
        </div>
      ))}
    </div>
  );
}