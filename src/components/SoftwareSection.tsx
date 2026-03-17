import { motion } from "framer-motion";

const SoftwareSection = () => {
  return (
    <section id="software" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Software
          </p>
          <h2 className="clash-display text-4xl md:text-5xl text-foreground mb-4">
            Software Development
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From mobile apps to desktop platforms, we develop software that seamlessly integrates
            with hardware—enabling control, visualization, analytics, and user interaction across
            devices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-sm space-y-6"
          >
            <h3 className="clash-display text-xl text-foreground">Cross-Platform Apps</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">📱 Mobile</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Android – Native, performance-optimized</li>
                  <li>iOS – Secure, App Store–ready</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono text-primary uppercase tracking-wider mb-2">💻 Desktop</p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Windows – Industrial & enterprise apps</li>
                  <li>macOS – Clean, professional applications</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Hardware-Software Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 rounded-sm space-y-4"
          >
            <h3 className="clash-display text-xl text-foreground">HW–SW Integration</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We design software around the hardware, not the other way around.
            </p>
            <ul className="space-y-2">
              {[
                "BLE, Wi-Fi, USB, UART, CAN integrations",
                "Real-time data streaming from sensors",
                "Device state management & control",
                "Secure pairing & encryption",
                "Optimized for low-power embedded systems",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* UX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 rounded-sm space-y-4"
          >
            <h3 className="clash-display text-xl text-foreground">UX & Product Design</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Usability-focused design for hardware-driven products.
            </p>
            <ul className="space-y-2">
              {[
                "Simple onboarding and setup flows",
                "Clear data visualization",
                "Error handling and diagnostics",
                "Design aligned with real-world usage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Android • iOS • Windows • macOS
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
