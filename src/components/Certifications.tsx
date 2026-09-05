import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certifications = [
  "Oracle Cloud Infrastructure Foundations Associate",
  "YUVA AI Certification",
  "HackerRank Python (Basic) Certificate",
  "IELTS Academic — Band Score 6.5/9.0 (Jan 2026)",
];

const achievements = [
  "Built and independently deployed 5+ full-stack projects spanning AI, DevOps, analytics, and cybersecurity.",
  "Active learner of scalable system design, automation workflows, and intelligent monitoring systems.",
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" title="credentials" />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-sm border border-border bg-card/40 backdrop-blur-sm p-8"
          >
            <h3 className="font-mono text-xs text-neon mb-6 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" /> certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-neon mt-1 text-[10px]">▸</span>
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-sm border border-border bg-card/40 backdrop-blur-sm p-8"
          >
            <h3 className="font-mono text-xs text-neon mb-6 uppercase tracking-wider flex items-center gap-2">
              <Trophy className="w-4 h-4" /> achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((a) => (
                <li key={a} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-neon mt-1 text-[10px]">▸</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
