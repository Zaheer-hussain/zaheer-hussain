import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    num: "01",
    title: "Excel Analytics Platform",
    blurb:
      "Full-stack web application that lets users upload Excel data and generate interactive, real-time charts for visualization.",
    stack: ["React", "Node.js", "Express", "MongoDB Atlas"],
    accent: "data viz",
  },
  {
    num: "02",
    title: "Arduino Bluetooth Control Car",
    blurb:
      "Remote-controlled vehicle built on Arduino Uno + HC-05 Bluetooth module. Wireless smartphone control with functional front/back LED safety signaling.",
    stack: ["Embedded C/C++", "Arduino IDE", "Bluetooth"],
    accent: "embedded",
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateZ(0)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="transition-transform duration-200 will-change-transform"
    >
      {children}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title="selected_work" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TiltCard>
                <article className="group relative h-full rounded-sm border border-border bg-card/60 backdrop-blur-sm p-8 hover:border-neon/60 hover:shadow-glow transition-all duration-300 overflow-hidden">
                  <div className="absolute -top-px -right-px w-20 h-20 bg-gradient-to-bl from-neon/20 to-transparent" />
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-xs text-neon/60">
                      project_{p.num}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border px-2 py-1 rounded-sm">
                      {p.accent}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-neon transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {p.blurb}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <li
                        key={s}
                        className="font-mono text-[11px] text-neon/80 bg-neon/5 border border-neon/20 px-2 py-1 rounded-sm"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
