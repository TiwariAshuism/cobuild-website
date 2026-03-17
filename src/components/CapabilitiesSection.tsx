import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const capabilities = [
  {
    number: "01",
    label: "ENGINEERING",
    title: "Mechanical Engineering",
    description: "Complex assemblies, structural analysis, thermal management.",
  },
  {
    number: "02",
    label: "EMBEDDED",
    title: "Electrical & Firmware",
    description: "Custom PCBA design, ARM-based firmware, wireless protocols.",
  },
  {
    number: "03",
    label: "RAPID",
    title: "Prototyping",
    description: "In-house CNC, SLA/SLS 3D printing, and functional testing labs.",
  },
  {
    number: "04",
    label: "ECOSYSTEM",
    title: "Software Integration",
    description: "Cloud backends, mobile apps, and device management platforms.",
  },
];

const CapabilitiesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll driven by vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="h-[300vh] relative" id="capabilities">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="clash-display text-4xl md:text-6xl text-foreground mb-4">
              FULL STACK HARDWARE.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              From industrial design to mass production logistics, we cover the
              entire lifecycle.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              className="glass-card p-10 rounded-lg min-w-[80vw] md:min-w-[42vw] lg:min-w-[32vw] flex flex-col justify-between group hover:border-primary/30 transition-all duration-500"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs font-mono text-primary">
                    {cap.number} / {cap.label}
                  </span>
                  <svg
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                <h3 className="clash-display text-3xl md:text-4xl text-foreground mb-4">
                  {cap.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <div className="max-w-7xl mx-auto px-6 w-full mt-10">
          <div className="flex items-center gap-3">
            <div className="h-px bg-border flex-1 max-w-[200px]">
              <motion.div
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                className="h-full bg-primary"
              />
            </div>
            <span className="text-xs font-mono text-muted-foreground">Scroll to explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
