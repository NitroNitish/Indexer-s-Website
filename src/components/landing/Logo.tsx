export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.66 0.21 280)" />
          <stop offset="100%" stopColor="oklch(0.72 0.22 290)" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="28" height="28" rx="7" fill="url(#lg)" />
      <path d="M10 9h12v3h-9v3h7v3h-7v3h9v3H10z" fill="white" opacity="0.95" />
    </svg>
  );
}