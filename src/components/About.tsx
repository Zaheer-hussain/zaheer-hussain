import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title="about_me" />
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I'm a third-year B.Tech Computer Science student at{" "}
              <span className="text-foreground">Presidency University</span>, currently holding a
              CGPA of <span className="text-neon font-mono">8.52/10</span>. My focus lies in DevOps,
              with a deep curiosity for how AI/ML and Cybersecurity converge to shape the next
              generation of intelligent systems.
            </p>
            <p>
              I build full-stack web applications, tinker with embedded hardware, and spend a lot of
              time thinking about the boundary between code that ships and code that's secure,
              observable, and scalable.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new tech, contributing to team projects,
              and constantly learning at the bleeding edge.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-sm border border-border bg-card/50 backdrop-blur-sm p-6 font-mono text-xs space-y-3"
          >
            <div className="flex items-center gap-2 text-neon">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse" />
              <span>STATUS: AVAILABLE</span>
            </div>
            <div className="border-t border-border pt-3 space-y-2 text-muted-foreground">
              <div>
                <span className="text-neon">{">"}</span> location: Bangalore, IN
              </div>
              <div>
                <span className="text-neon">{">"}</span> degree: B.Tech CSE (DevOps)
              </div>
              <div>
                <span className="text-neon">{">"}</span> graduation: May 2027
              </div>
              <div>
                <span className="text-neon">{">"}</span> cgpa: 8.52/10
              </div>
              <div>
                <span className="text-neon">{">"}</span> focus: AI/ML × CyberSec
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
