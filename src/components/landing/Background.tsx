import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function AmbientBackground() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.3);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const bgX = useTransform(sx, (v) => (v - 0.5) * 40);
  const bgY = useTransform(sy, (v) => (v - 0.5) * 30);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base */}
      <div className="absolute inset-0 bg-background" />
      {/* mesh gradient orbs */}
      <motion.div
        style={{ x: useTransform(sx, (v) => (v - 0.5) * 60), y: useTransform(sy, (v) => (v - 0.5) * 40) }}
        className="absolute -top-40 left-1/4 h-[40rem] w-[40rem] rounded-full opacity-50 blur-3xl will-change-transform"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,oklch(0.55_0.24_280/0.55),transparent_60%)]" />
      </motion.div>
      <motion.div
        style={{ x: useTransform(sx, (v) => (0.5 - v) * 80), y: useTransform(sy, (v) => (0.5 - v) * 60) }}
        className="absolute top-[20rem] right-0 h-[36rem] w-[36rem] rounded-full opacity-40 blur-3xl will-change-transform"
      >
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle_at_center,oklch(0.48_0.2_265/0.5),transparent_60%)]" />
      </motion.div>
      {/* grid */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute -inset-10 bg-grid bg-grid-fade opacity-60 will-change-transform"
      />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,oklch(0.08_0.02_270)_100%)]" />
      {/* noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
    </div>
  );
}