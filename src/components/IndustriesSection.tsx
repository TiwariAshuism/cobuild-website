import { motion } from "framer-motion";

const industries = [
  {
    title: "Healthtech",
    description: "Medical devices, clinical-grade wearables, patient monitoring systems.",
    icon: "🏥",
  },
  {
    title: "Wearables",
    description: "Smart watches, fitness trackers, bio-sensing wearables.",
    icon: "⌚",
  },
  {
    title: "IoT Products",
    description: "Connected devices, smart home, industrial IoT solutions.",
    icon: "📡",
  },
  {
    title: "Consumer Electronics",
    description: "Audio devices, smart accessories, personal electronics.",
    icon: "🎧",
  },
  {
    title: "Driver Health & Safety",
    description: "Fleet monitoring, driver alertness, in-vehicle safety systems.",
    icon: "🚗",
  },
  {
    title: "General Embedded",
    description: "Custom embedded systems, industrial controllers, edge computing.",
    icon: "⚙️",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Verticals
          </p>
          <h2 className="clash-display text-4xl md:text-5xl text-foreground mb-4">
            Industries We Build For
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            CoBuild partners with startups and product companies building technology-driven
            products across high-impact industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card p-6 rounded-sm group hover:border-primary/30 transition-colors"
            >
              <span className="text-2xl mb-4 block">{ind.icon}</span>
              <h3 className="clash-display text-lg text-foreground mb-2">{ind.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{ind.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
