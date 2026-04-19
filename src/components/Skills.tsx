import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const skillGroups = [
  {
    label: "languages",
    items: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "web",
    items: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    label: "tools",
    items: ["Git", "GitHub", "VS Code", "Linux", "Arduino IDE"],
  },
  {
    label: "concepts",
    items: ["DevOps", "OOP", "Data Structures", "Embedded Systems"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title="skill_stack" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="group relative rounded-sm border border-border bg-card/40 backdrop-blur-sm p-6 hover:border-neon/60 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 font-mono text-[10px] text-neon/40 px-2 py-1">
                /{String(gi + 1).padStart(2, "0")}
              </div>
              <h3 className="font-mono text-xs text-neon mb-4 uppercase tracking-wider">
                {group.label}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <span className="text-neon/60 text-xs">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
