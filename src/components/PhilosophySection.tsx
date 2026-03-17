import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const principles = [
  {
    number: "01",
    title: "Built for production, not just demos.",
    description:
      "A prototype that doesn't scale is a liability. We engineer with the assembly line in mind from day zero.",
  },
  {
    number: "02",
    title: "Will it scale?",
    description:
      "DFM (Design for Manufacturing) is our religion. Every component is vetted for global supply chain availability.",
  },
  {
    number: "03",
    title: "Good products are not accidents.",
    description:
      "Iterative rigor and physical testing cycles ensure that performance matches the CAD simulations perfectly.",
  },
];

const beliefs = [
  "Engineering discipline over shortcuts",
  "Engineering decisions backed by data",
  "Designing with manufacturing and compliance in mind",
  "Building products that last",
];

const PhilosophySection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  // Apple-style large text scale effect
  const bigTextScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const bigTextOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 0.3]);

  return (
    <section ref={ref} id="philosophy" className="py-32 bg-secondary relative overflow-hidden">
      <motion.div
        style={{ y: bgY, scale: bigTextScale, opacity: bigTextOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[18vw] clash-display whitespace-nowrap text-foreground">
          PHILOSOPHY
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Our Philosophy
          </p>
          <h2 className="clash-display text-4xl md:text-5xl text-foreground mb-4">
            What We Believe
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Good products are not accidents. They are the result of disciplined engineering,
            clear thinking, and attention to detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {principles.map((p, i) => (
            <PrincipleCard key={p.number} principle={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          {beliefs.map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 px-4 py-2 text-xs font-mono border border-border rounded-sm text-muted-foreground"
            >
              <span className="text-primary">✔</span> {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const PrincipleCard = ({ principle, index }: { principle: typeof principles[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="glass-card p-8 rounded-sm group hover:border-primary/30 transition-colors"
    >
      <span className="text-xs font-mono text-primary">// {principle.number}</span>
      <h3 className="clash-display text-xl mt-4 mb-4 text-foreground">
        {principle.title}
      </h3>
      <p className="text-base text-muted-foreground leading-relaxed">
        {principle.description}
      </p>
    </motion.div>
  );
};

export default PhilosophySection;
