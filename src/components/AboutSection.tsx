import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Staggered word reveals - Apple style
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);
  const headingY = useTransform(scrollYProgress, [0.05, 0.2], [60, 0]);
  const p1Opacity = useTransform(scrollYProgress, [0.12, 0.25], [0, 1]);
  const p1Y = useTransform(scrollYProgress, [0.12, 0.25], [40, 0]);
  const p2Opacity = useTransform(scrollYProgress, [0.18, 0.3], [0, 1]);
  const p2Y = useTransform(scrollYProgress, [0.18, 0.3], [40, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.22, 0.38], [0, 1]);
  const rightY = useTransform(scrollYProgress, [0.22, 0.38], [60, 0]);

  const questions = [
    "Will this scale in manufacturing?",
    "Will it pass certification?",
    "Will it survive real-world usage?",
    "Can it be supported long-term?",
  ];

  const clients = [
    "Startups building zero-to-one products",
    "Companies expanding existing hardware",
    "Research & innovation teams",
    "Regulated & performance-critical domains",
  ];

  const products = [
    "Consumer Electronics",
    "Wearables",
    "Medical Devices",
    "Industrial Systems",
    "Connected Products",
  ];

  return (
    <div ref={sectionRef}>
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <motion.p
                style={{ opacity: headingOpacity }}
                className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground"
              >
                About CoBuild
              </motion.p>
              <motion.h2
                style={{ opacity: headingOpacity, y: headingY }}
                className="clash-display text-4xl md:text-5xl text-foreground"
              >
                An engineering-led product development company
              </motion.h2>
              <motion.p
                style={{ opacity: p1Opacity, y: p1Y }}
                className="text-muted-foreground leading-relaxed"
              >
                We help companies transform ideas into production-ready electronic products. Our work
                spans the complete product lifecycle—ideation, mechanical and electronics design,
                firmware and software development, manufacturing support, certification readiness,
                and AI integration.
              </motion.p>
              <motion.p
                style={{ opacity: p2Opacity, y: p2Y }}
                className="text-muted-foreground leading-relaxed"
              >
                Unlike traditional design houses or contract manufacturers, we operate as a product
                partner. We think beyond prototypes and focus on how products will be built, tested,
                certified, and scaled in the real world.
              </motion.p>
            </div>

            <motion.div
              style={{ opacity: rightOpacity, y: rightY }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h3 className="clash-display text-xl text-foreground">What Makes Us Different</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Modern hardware products sit at the intersection of multiple disciplines—mechanical
                  design, electronics, embedded systems, software, manufacturing, and data
                  intelligence. Problems arise when these domains are handled in isolation.
                </p>
                <ul className="space-y-2">
                  {questions.map((q) => (
                    <li key={q} className="flex items-start gap-3 text-base text-muted-foreground">
                      <span className="text-primary mt-0.5">→</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="clash-display text-xl text-foreground">Who We Work With</h3>
                <div className="grid grid-cols-2 gap-3">
                  {clients.map((item) => (
                    <div key={item} className="glass-card p-4 rounded-sm">
                      <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Industries bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20 pt-10 border-t border-border"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Products We Build
            </p>
            <div className="flex flex-wrap gap-3">
              {products.map((ind) => (
                <span
                  key={ind}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider border border-border rounded-sm text-muted-foreground"
                >
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
