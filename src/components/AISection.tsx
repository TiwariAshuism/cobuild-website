import { motion } from "framer-motion";

const aiCapabilities = [
  {
    title: "Edge AI & Embedded Intelligence",
    description: "We deploy AI models directly on devices for low latency and privacy.",
    details: [
      "Sensor data processing (EEG, ECG, PPG, IMU, audio, vision)",
      "On-device inference for low latency and privacy",
      "Power-optimized ML models for embedded systems",
      "Real-time decision-making without cloud dependency",
    ],
  },
  {
    title: "Signal Processing & Data Intelligence",
    description: "AI starts with clean, meaningful data.",
    details: [
      "Noise removal and signal enhancement",
      "Feature extraction and pattern recognition",
      "Time-series analysis and event detection",
      "Multimodal sensor fusion",
    ],
  },
  {
    title: "ML Model Development",
    description: "Custom models tailored to your product.",
    details: [
      "Classification, regression, and anomaly detection",
      "Personalization and adaptive learning",
      "Model training, validation, and optimization",
      "Explainability and performance benchmarking",
    ],
  },
  {
    title: "AI-Driven Applications",
    description: "AI insights delivered through intuitive software.",
    details: [
      "Mobile and desktop dashboards",
      "Real-time alerts and recommendations",
      "Trend analysis and reporting",
      "User feedback and adaptive systems",
    ],
  },
  {
    title: "Cloud & Scalable AI",
    description: "For connected products requiring cloud intelligence.",
    details: [
      "Secure data pipelines",
      "Model updates and lifecycle management",
      "Population-level analytics",
      "Integration with enterprise systems",
    ],
  },
  {
    title: "AI for Regulated Products",
    description: "AI designed with compliance in mind.",
    details: [
      "Traceable datasets and training pipelines",
      "Model validation and documentation",
      "Human-in-the-loop systems",
      "Safety, reliability, and audit readiness",
    ],
  },
];

const AISection = () => {
  return (
    <section id="ai" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Intelligence Layer
          </p>
          <h2 className="clash-display text-4xl md:text-5xl text-foreground mb-4">
            AI Technology
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            AI technology transforms electronic products from passive devices into intelligent
            systems. We design and integrate AI across hardware, firmware, software, and cloud.
            Our focus is real-world AI: reliable, explainable, and optimized for production hardware.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {aiCapabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass-card p-6 rounded-sm group hover:border-primary/30 transition-colors"
            >
              <span className="text-xs font-mono text-primary">0{i + 1}</span>
              <h3 className="clash-display text-lg mb-2 mt-2 text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>
              <ul className="space-y-1.5">
                {item.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 text-[10px]">→</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* AI Stack bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our AI Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {["Embedded ML", "Edge AI", "Signal Processing", "Data Analytics", "Cloud AI", "Product Intelligence"].map((t) => (
              <span
                key={t}
                className="px-4 py-2 text-xs font-mono uppercase tracking-wider border border-border rounded-sm text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            <span className="font-semibold text-foreground">Use cases:</span> Wearables • Medical Devices • Smart Sensors • Industrial Monitoring • Consumer Electronics
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AISection;
