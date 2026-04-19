import { motion } from "framer-motion";

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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="mailto:zaheerhussain9620@gmail.com"
            className="font-mono text-sm px-6 py-3 border border-neon bg-neon/10 text-neon hover:bg-neon hover:text-primary-foreground transition-all duration-300 rounded-sm border-glow"
          >
            ✉  zaheerhussain9620@gmail.com
          </a>
          <a
            href="tel:+919964939469"
            className="font-mono text-sm px-6 py-3 border border-border text-foreground hover:border-neon hover:text-neon transition-all duration-300 rounded-sm"
          >
            ☎  +91 99649 39469
          </a>
        </motion.div>

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
