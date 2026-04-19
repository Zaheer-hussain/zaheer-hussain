import { motion } from "framer-motion";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-4 mb-12"
    >
      <span className="font-mono text-sm text-neon">{index}.</span>
      <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-neon/40 to-transparent" />
    </motion.div>
  );
}
