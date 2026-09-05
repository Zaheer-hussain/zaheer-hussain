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
              I'm a DevOps-focused B.Tech Computer Science student at{" "}
              <span className="text-foreground">Presidency University</span>, currently holding a
              CGPA of <span className="text-neon font-mono">8.50/10</span>. I have hands-on
              experience building and deploying AI-powered full-stack applications, streamlined
              CI/CD pipelines, and cybersecurity tooling.
            </p>
            <p>
              I'm comfortable taking projects from development through cloud deployment using{" "}
              <span className="text-foreground">React.js, Node.js, Docker, Jenkins, and AI APIs</span>{" "}
              — with relevant coursework in Cloud Computing, DevSecOps, Data Structures, and
              Competitive Programming.
            </p>
            <p>
              I've independently built and deployed 5+ full-stack projects spanning AI, DevOps,
              analytics, and cybersecurity — and I'm open to DevOps, Software Engineering, and
              Full-Stack Development roles.
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
                <span className="text-neon">{">"}</span> cgpa: 8.50/10
              </div>
              <div>
                <span className="text-neon">{">"}</span> github: Zaheer-hussain
              </div>
              <div>
                <span className="text-neon">{">"}</span> focus: DevOps × AI × Security
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
