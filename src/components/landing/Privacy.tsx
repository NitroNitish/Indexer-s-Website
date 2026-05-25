import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./Logo";
import { AmbientBackground } from "./Background";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-foreground pb-20">
      <AmbientBackground />
      
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto mt-4 flex max-w-4xl items-center justify-between rounded-2xl glass px-5 py-3">
          <a href="#" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight">Indexer</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-4 py-2 text-[13px] font-medium text-foreground/90 backdrop-blur hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Home
          </a>
        </div>
      </header>

      {/* Content Container */}
      <div className="mx-auto max-w-3xl px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative rounded-3xl border border-white/8 bg-white/[0.01] p-8 md:p-12 backdrop-blur-md"
        >
          {/* Subtle top edge lighting highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Title Header */}
          <div className="border-b border-white/5 pb-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-[13px] text-muted-foreground font-mono">
              Last Updated: May 2026
            </p>
          </div>

          {/* Privacy Content Blocks */}
          <div className="mt-8 space-y-8 text-[14.5px] leading-relaxed text-foreground/85">
            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight flex items-center gap-2">
                Hey there 👋
              </h2>
              <p className="font-light">
                Indexer is built by developers, for developers.
              </p>
              <p className="font-light">
                We believe privacy should be simple and understandable — not hidden behind complicated legal language.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                What Indexer Does
              </h2>
              <p className="font-light">
                Indexer helps analyze your project structure and generate discoverability and optimization suggestions for modern AI search systems.
              </p>
              <p className="font-light font-semibold text-primary">
                Your code always belongs to you.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                What We Collect
              </h2>
              <p className="font-light">
                We collect only the minimum information needed to improve the extension experience.
              </p>
              <p className="font-light">This may include:</p>
              <ul className="list-disc pl-5 space-y-2 font-light text-[14px]">
                <li>extension version</li>
                <li>anonymous usage insights</li>
                <li>crash or error reports</li>
                <li>optional emails if you contact us</li>
              </ul>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                Your Code & Projects
              </h2>
              <p className="font-light">
                Indexer may analyze parts of your project locally to generate suggestions and recommendations.
              </p>
              <p className="font-light">
                We do not claim ownership of your code or projects.
              </p>
              <p className="font-semibold text-foreground/90">
                We do not sell your data.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                Payments & Support
              </h2>
              <p className="font-light">
                Indexer is free to use.
              </p>
              <p className="font-light">
                If you decide to “buy the developer a coffee ☕”, payments are handled securely through your UPI app or payment provider.
              </p>
              <p className="font-light text-primary/95">
                We never see or store your banking information.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                Third-Party Services
              </h2>
              <p className="font-light">
                Some services used by Indexer (such as analytics, hosting, or email tools) may process limited technical information to help keep the product running smoothly.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                A Small Note
              </h2>
              <p className="font-light">
                Indexer provides suggestions and recommendations to help improve discoverability.
              </p>
              <p className="font-light italic text-muted-foreground">
                As with any developer tool, you should review changes before using them in production.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                Updates
              </h2>
              <p className="font-light">
                This Privacy Policy may occasionally be updated as the product evolves.
              </p>
            </section>

            <div className="h-px bg-gradient-to-r from-white/5 to-transparent" />

            <section className="space-y-4">
              <h2 className="text-[20px] font-semibold text-white tracking-tight">
                Contact
              </h2>
              <p className="font-light">
                Questions, feedback, or ideas?
              </p>
              <a
                href="mailto:support@indexer.dev"
                className="inline-block text-[15px] font-mono font-medium text-primary hover:underline hover:opacity-90"
              >
                support@indexer.dev
              </a>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
