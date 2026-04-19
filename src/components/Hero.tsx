import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none scanlines opacity-40" />

      <div className="relative z-20 mx-auto max-w-6xl px-6 w-full pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs md:text-sm text-neon mb-6 cursor-blink"
        >
          $ whoami
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-foreground"
        >
          Zaheer
          <br />
          <span className="text-gradient text-glow">Hussain.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          CS undergrad building at the intersection of{" "}
          <span className="text-neon font-mono text-sm">DevOps</span>,{" "}
          <span className="text-neon font-mono text-sm">AI/ML</span>, and{" "}
          <span className="text-neon font-mono text-sm">Cybersecurity</span>.
          Crafting secure, intelligent, scalable systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4 pointer-events-auto"
        >
          <a
            href="#projects"
            className="group font-mono text-sm px-6 py-3 border border-neon bg-neon/10 text-neon hover:bg-neon hover:text-primary-foreground transition-all duration-300 rounded-sm border-glow"
          >
            view_projects.sh →
          </a>
          <a
            href="/Zaheer_Hussain_Resume.pdf"
            download="Zaheer_Hussain_Resume.pdf"
            className="font-mono text-sm px-6 py-3 border border-border text-foreground hover:border-neon hover:text-neon transition-all duration-300 rounded-sm"
          >
            ↓ resume.pdf
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-xs text-muted-foreground"
      >
        <span className="text-neon">↓</span> scroll to explore
      </motion.div>
    </section>
  );
}
