import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.rpc("submit_contact_message", {
      p_name: parsed.data.name,
      p_email: parsed.data.email,
      p_message: parsed.data.message,
    });
    setLoading(false);
    if (error) {
      toast.error("Could not send message. Try again.");
      return;
    }
    toast.success("Message sent — I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
      className="mt-12 max-w-xl mx-auto text-left space-y-4 rounded-sm border border-border bg-card/40 backdrop-blur-sm p-6"
    >
      <div className="font-mono text-xs text-neon mb-2">
        $ ./compose --message
      </div>

      <div>
        <label className="font-mono text-xs text-muted-foreground">name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          maxLength={100}
          className="mt-1 w-full bg-background/60 border border-border focus:border-neon focus:outline-none rounded-sm px-3 py-2 font-mono text-sm transition-colors"
          placeholder="your name"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted-foreground">email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          maxLength={255}
          className="mt-1 w-full bg-background/60 border border-border focus:border-neon focus:outline-none rounded-sm px-3 py-2 font-mono text-sm transition-colors"
          placeholder="you@domain.com"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted-foreground">
          message
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          maxLength={2000}
          rows={5}
          className="mt-1 w-full bg-background/60 border border-border focus:border-neon focus:outline-none rounded-sm px-3 py-2 font-mono text-sm resize-none transition-colors"
          placeholder="what's on your mind?"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full font-mono text-sm px-6 py-3 border border-neon bg-neon/10 text-neon hover:bg-neon hover:text-primary-foreground transition-all duration-300 rounded-sm border-glow disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "transmitting..." : "→ send_message()"}
      </button>
    </motion.form>
  );
}
