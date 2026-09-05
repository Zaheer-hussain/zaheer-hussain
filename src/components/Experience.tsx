import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    role: "Web Development Intern",
    org: "Zidio Development",
    date: "Jun 2025 – Jul 2025",
    location: "Remote",
    points: [
      "Built responsive web application components, streamlining frontend integration workflows across the codebase.",
      "Collaborated with the development team using Git and GitHub, managing feature branches and merges in a team-based workflow.",
      "Strengthened debugging, REST API integration, and deployment skills through hands-on feature delivery.",
    ],
  },
  {
    role: "Java Programming Intern",
    org: "Interpe",
    date: "Aug 2024 – Sep 2024",
    location: "Remote",
    points: [
      "Created Java-based applications including Tic-Tac-Toe and Connect 4, applying Object-Oriented Programming concepts.",
      "Strengthened core problem-solving and software development fundamentals through applied coding exercises and peer code reviews.",
    ],
  },
  {
    role: "B.Tech in Computer Science & Technology (DevOps)",
    org: "Presidency University",
    date: "2023 – 2027 (expected)",
    location: "Bangalore, India",
    points: [
      "CGPA: 8.50/10.00",
      "Coursework: Cloud Computing, DevSecOps, Data Structures, Competitive Programming.",
    ],
  },
  {
    role: "Pre-University Certificate (12th Grade)",
    org: "Reva PU College",
    date: "Completed",
    location: "Karnataka, India",
    points: ["Scored 87%"],
  },
  {
    role: "Matriculation (10th Grade)",
    org: "St. Michael's High School",
    date: "Completed",
    location: "Karnataka, India",
    points: ["Scored 84%"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading index="04" title="trajectory" />
        <div className="relative pl-8 md:pl-12">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-neon/30 to-transparent" />
          {items.map((it, i) => (
            <motion.div
              key={it.role + it.org}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <div className="absolute -left-[34px] md:-left-[50px] top-1 w-4 h-4 rounded-full bg-background border-2 border-neon shadow-glow" />
              <div className="font-mono text-xs text-neon mb-2">{it.date}</div>
              <h3 className="font-display text-xl md:text-2xl font-bold">
                {it.role} <span className="text-muted-foreground font-normal">@ {it.org}</span>
              </h3>
              <div className="font-mono text-xs text-muted-foreground mb-3">{it.location}</div>
              <ul className="space-y-1.5 text-muted-foreground text-sm leading-relaxed">
                {it.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-neon mt-1.5 text-[10px]">▸</span>
                    {pt}
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
