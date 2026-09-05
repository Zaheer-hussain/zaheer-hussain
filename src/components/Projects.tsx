import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    num: "01",
    title: "AI DevOps Log Analyzer",
    blurb:
      "AI-powered DevOps monitoring platform that analyzes Jenkins, Docker, and Kubernetes logs for issue detection, with Gemini-driven anomaly analysis and security risk assessment. Deployed across Render and Vercel with a production-ready CI workflow.",
    stack: [
      "React.js",
      "Node.js",
      "Express",
      "Gemini AI",
      "Docker",
      "Render",
      "Vercel",
    ],
    accent: "ai devops",
  },
  {
    num: "02",
    title: "AI Cyber Threat Detection Dashboard",
    blurb:
      "Cybersecurity dashboard detecting phishing URLs, malicious activity, and threat indicators — with AI-driven threat scoring, severity analysis, and AI-generated mitigation recommendations.",
    stack: ["React.js", "Node.js", "Express", "Gemini AI API", "Tailwind CSS"],
    accent: "security",
  },
  {
    num: "03",
    title: "Smart Bike Safety Light System",
    blurb:
      "Real-time vehicle detection running YOLOv5 on a Raspberry Pi with live IP camera integration. Glare reduction, CLAHE enhancement, multithreading, and frame skipping optimize inference on constrained hardware, driving red/green safety indicators.",
    stack: ["YOLOv5", "Raspberry Pi", "Python", "OpenCV"],
    accent: "computer vision",
  },
  {
    num: "04",
    title: "DevOps CI/CD Pipeline Project",
    blurb:
      "Automated CI/CD pipeline built with Jenkins and Docker, integrated with GitHub for source control. Build, test, and deployment stages streamlined via pipeline-as-code, cutting manual release steps.",
    stack: ["Jenkins", "Docker", "GitHub", "Jenkinsfile"],
    accent: "automation",
  },
  {
    num: "05",
    title: "Excel Analytics Platform",
    blurb:
      "Full-stack analytics platform for Excel dataset uploads and interactive data visualization, with REST APIs powering real-time chart generation and analytics processing.",
    stack: ["React.js", "Node.js", "Express", "REST APIs"],
    accent: "data viz",
    demo: "https://excel-analytics-frontend-x0l8.onrender.com/",
    repo: "https://github.com/Zaheer-hussain/Excel-Analytics-Platform.git",
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
    if (ref.current)
      ref.current.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="h-full transition-transform duration-200 will-change-transform"
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
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
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
                  {(p.demo || p.repo) && (
                    <div className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-neon hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> live_demo
                        </a>
                      )}
                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-neon transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" /> source
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
