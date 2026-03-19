import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  { number: "01", title: "Research & Ideation", description: "Market analysis, user research, and concept exploration." },
  { number: "02", title: "Concept Development", description: "Architecture definition, feasibility studies, and initial specs." },
  { number: "03", title: "Prototyping", description: "Rapid prototyping, proof-of-concept, and early validation." },
  { number: "04", title: "Engineering & Testing", description: "Detailed design, EVT/DVT builds, and rigorous testing." },
  { number: "05", title: "Manufacturing", description: "DFM optimization, pilot builds, and production ramp-up." },
  { number: "06", title: "Certification", description: "Compliance testing, documentation, and market approvals." },
  { number: "07", title: "Launch", description: "Mass production, packaging, and market delivery." },
];

const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.65], ["0%", "100%"]);
  const [activeStep, setActiveStep] = useState(0);
  const activeStepRef = useRef(0);

  // Light up steps progressively as the user scrolls through the section.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const clamped = Math.max(0, Math.min(1, latest));
    const next = Math.floor(clamped * steps.length);
    const safeNext = Math.min(steps.length - 1, next);
    if (safeNext !== activeStepRef.current) {
      activeStepRef.current = safeNext;
      setActiveStep(safeNext);
    }
  });

  return (
    <div ref={containerRef}>
      <section id="process" className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="mb-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Our Process
            </p>
            <h2 className="clash-display text-4xl md:text-5xl text-foreground">
              Steps of Product Development
            </h2>
          </motion.div>

          {/* Progress line */}
          <div className="relative mb-12">
            <div className="h-[2px] bg-border w-full rounded-full" />
            <motion.div
              style={{
                width: lineWidth,
                backgroundImage:
                  "linear-gradient(90deg, rgb(96 165 250), hsl(214 90% 49%))",
              }}
              className="absolute top-0 left-0 h-[2px] rounded-full"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                activeStep={activeStep}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const StepCard = ({
  step,
  index,
  activeStep,
}: {
  step: typeof steps[0];
  index: number;
  activeStep: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const isPast = index <= activeStep;
  const isCurrent = index === activeStep;

  const circleStyle = isPast
    ? {
        backgroundImage:
          "linear-gradient(135deg, hsl(214 90% 49%), rgb(96 165 250))",
        borderColor: "hsl(var(--primary) / 0.55)",
        color: "hsl(var(--primary-foreground))",
      }
    : {
        background: "transparent",
        borderColor: "hsl(var(--border))",
        color: "hsl(var(--muted-foreground))",
      };

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="text-center space-y-3"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: index * 0.06,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={circleStyle}
        animate={{ scale: isCurrent ? 1.07 : isPast ? 1 : 0.98 }}
        className="w-12 h-12 mx-auto rounded-full border flex items-center justify-center text-xs font-mono font-bold"
      >
        {step.number}
      </motion.div>

      <h4
        className={`text-xs md:text-base font-semibold uppercase tracking-wide leading-tight ${
          isPast ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        {step.title}
      </h4>

      <p
        className="text-[10px] md:text-sm text-muted-foreground leading-relaxed"
        style={{
          opacity: isPast ? 1 : 0.85,
        }}
      >
        {step.description}
      </p>
    </motion.div>
  );
};

export default ProcessSection;
