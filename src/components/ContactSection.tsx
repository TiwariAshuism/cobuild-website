import { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – wire up to backend
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="clash-display text-5xl md:text-7xl">LET'S BUILD.</h2>
          <div className="space-y-2 font-mono text-sm opacity-60">
            <p>LONDON / SHENZHEN / SAN FRANCISCO</p>
            <p>HELLO@COBUILD.ENGINEERING</p>
            <p>+44 20 7946 0958</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2 block">
              Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-background/20 pb-3 text-background outline-none focus:border-primary transition-colors placeholder:opacity-30"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2 block">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-background/20 pb-3 text-background outline-none focus:border-primary transition-colors placeholder:opacity-30"
              placeholder="you@company.com"
              required
            />
          </div>
          <div>
            <label className="text-xs font-mono uppercase tracking-widest opacity-50 mb-2 block">
              Message
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border-b border-background/20 pb-3 text-background outline-none focus:border-primary transition-colors resize-none placeholder:opacity-30"
              placeholder="Tell us about your project"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-10 py-4 text-sm font-mono uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-sm"
          >
            SEND TRANSMISSION
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
