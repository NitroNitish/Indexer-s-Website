import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Download, ExternalLink, Star } from "lucide-react";
import { useRef } from "react";
import { IDEMockup } from "./IDEMockup";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 80, damping: 18 });
  const sry = useSpring(ry, { stiffness: 80, damping: 18 });
  const tilt = useTransform(
    [srx, sry],
    ([x, y]) => `perspective(1400px) rotateX(${x}deg) rotateY(${y}deg)`,
  );

  const onMove = (e: React.PointerEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 8);
    rx.set(-py * 6);
  };
  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <section className="relative pt-36 pb-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.05fr_1.2fr]">
        <motion.div
          initial={{ y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10"
        >
          <h1 className="text-[clamp(2.6rem,5.6vw,4.4rem)] font-semibold leading-[1.02] tracking-tight">
            Optimize Codebase for <span className="text-gradient">AI Search Engines</span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Indexer performs instant local codebase sweeps to audit and generate AI-ready
            optimizations (GEO/AEO) directly inside Antigravity IDE and VS Code. Make your product
            discoverable and cite-ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticButton
              primary
              href="https://open-vsx.org/extension/indexer-app/indexer"
              ariaLabel="Install Indexer Extension from Open VSX Marketplace"
            >
              <Download className="h-4 w-4" /> Install Extension
            </MagneticButton>
            <MagneticButton
              href="vscode:extension/indexer-app.indexer"
              ariaLabel="Open Indexer Extension in Antigravity IDE"
            >
              Open in Antigravity <ExternalLink className="h-3.5 w-3.5" />
            </MagneticButton>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Developer Avatars & Count */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.1,
                      zIndex: 10,
                      transition: { duration: 0.2, ease: "easeOut" }
                    }}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background shadow-lg ring-1 ring-white/10 cursor-pointer"
                  >
                    <img
                      src={`/avatars/dev${num}.webp`}
                      alt={`Developer ${num}`}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col leading-snug">
                <div className="text-[14.5px] font-medium tracking-tight">
                  <span className="font-semibold text-primary">180+</span>{" "}
                  <span className="text-foreground/90">developers</span>
                </div>
                <div className="text-[13px] text-muted-foreground">
                  are already using Indexer
                </div>
              </div>
            </div>

            {/* Separator Line on desktop */}
            <div className="hidden sm:block h-8 w-px bg-white/10" />

            {/* Premium Rating Indicator */}
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[14px] font-medium text-foreground/90">4.9/5 rating</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          onPointerMove={onMove}
          onPointerLeave={reset}
          initial={{ y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          style={{ transform: tilt, transformStyle: "preserve-3d" }}
          className="relative will-change-transform"
        >
          <div className="absolute -inset-6 rounded-3xl bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.24_280/0.35),transparent_60%)] blur-2xl" />
          <IDEMockup />
        </motion.div>
      </div>
    </section>
  );
}

function MagneticButton({
  children,
  primary,
  href,
  ariaLabel,
}: {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  const onMove = (e: React.PointerEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const className = primary
    ? "inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-5 py-3 text-[14px] font-medium text-white shadow-[0_20px_50px_-20px_oklch(0.66_0.21_280/0.8)]"
    : "inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-[14px] font-medium text-foreground/90 backdrop-blur hover:bg-white/[0.06]";

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <motion.a
        ref={ref}
        href={href}
        onPointerMove={onMove}
        onPointerLeave={reset}
        style={{ x: sx, y: sy }}
        className={className}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
