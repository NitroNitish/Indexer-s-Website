export function Logo({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="white-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="purple-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6bbff" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      {/* Left White Wedge (3D Perspective Bar) */}
      <path d="M 28 25 L 44 18 L 44 82 L 28 75 Z" fill="url(#white-grad)" />

      {/* Top Purple Bar */}
      <path d="M 52 24 H 92 L 82 36 H 52 Z" fill="url(#purple-grad)" />

      {/* Middle Purple Bar */}
      <path d="M 52 44 H 92 L 82 56 H 52 Z" fill="url(#purple-grad)" />

      {/* Bottom Purple Bar */}
      <path d="M 52 64 H 92 L 82 76 H 52 Z" fill="url(#purple-grad)" />
    </svg>
  );
}
