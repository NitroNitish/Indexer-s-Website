import { motion } from "motion/react";
import { Github } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -20 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl glass px-5 py-3">
        <a href="#" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">Indexer</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13.5px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground">
            <Github className="h-4 w-4" />
          </a>
        </nav>
        <a
          href="https://open-vsx.org/extension/indexer-app/indexer"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] px-4 py-2 text-[13.5px] font-medium text-primary-foreground shadow-[0_8px_30px_-10px_oklch(0.66_0.21_280/0.7)] transition-transform hover:-translate-y-px"
        >
          Install Extension
        </a>
      </div>
    </motion.header>
  );
}