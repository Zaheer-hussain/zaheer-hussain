import { motion } from "framer-motion";
import { Linkedin, Mail, FileDown } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-sm text-neon mb-4"
        >
          05. what's next?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold mb-6 tracking-tighter"
        >
          Let's <span className="text-gradient text-glow">build</span> something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted-foreground max-w-xl mx-auto mb-10"
        >
          I'm actively looking for internships and collaborations in DevOps,
          full-stack, and security-focused engineering. My inbox is open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:zaheerhussain9620@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 border border-neon bg-neon/10 text-neon hover:bg-neon hover:text-primary-foreground transition-all duration-300 rounded-sm border-glow"
          >
            <Mail className="w-4 h-4" /> email
          </a>
          <a
            href="https://www.linkedin.com/in/zaheer-hussain-468328306"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 border border-border text-foreground hover:border-neon hover:text-neon transition-all duration-300 rounded-sm"
          >
            <Linkedin className="w-4 h-4" /> linkedin
          </a>
          <a
            href="/Zaheer_Hussain_Resume.pdf"
            download="Zaheer_Hussain_Resume.pdf"
            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 border border-border text-foreground hover:border-neon hover:text-neon transition-all duration-300 rounded-sm"
          >
            <FileDown className="w-4 h-4" /> resume.pdf
          </a>
        </motion.div>

        <ContactForm />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t border-border font-mono text-xs text-muted-foreground"
        >
          <p>
            <span className="text-neon">©</span> 2026 Zaheer Hussain — crafted with
            React, Three.js & a lot of <span className="text-neon">{"<3"}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
