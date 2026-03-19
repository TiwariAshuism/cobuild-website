import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

const stages = [
  {
    stage: "01",
    title: "PCB / PCBA Production",
    description: "High-speed SMT lines and component sourcing from vetted global vendors. Includes solder paste printing, pick-and-place, reflow soldering, AOI, and functional testing.",
    details: ["PCB stack-up & material selection", "SMT & THT assembly", "Reflow soldering", "Automated optical inspection", "In-circuit & functional testing"],
  },
  {
    stage: "02",
    title: "Quality Assurance",
    description: "Custom functional test fixtures (FCT) designed for 100% yield verification. We review designs with manufacturers and define test strategies early.",
    details: ["Design review with manufacturers", "Layout optimization for yield", "Test strategy definition", "Pilot & volume build support"],
  },
  {
    stage: "03",
    title: "Injection Molding",
    description: "T1 samples to final production run. Precision tooling and texture matching. DFM optimization for wall thickness, draft angles, and material selection.",
    details: ["DFM for injection molding", "Material selection (ABS, PC, Nylon)", "Tooling design & validation", "T0/T1/T2 sampling & approval"],
  },
  {
    stage: "04",
    title: "Product Assembly",
    description: "Individual components—PCBs, molded parts, cables, firmware—integrated into a finished product with consistency and traceability.",
    details: ["Assembly process planning", "Sub-assembly & mechanical integration", "Firmware flashing & calibration", "End-of-line testing & inspection"],
  },
  {
    stage: "05",
    title: "Packaging & Shipping",
    description: "Packaging that balances protection, usability, branding, and compliance. From retail cartons to custom inserts and hard cases.",
    details: ["Retail & die-cut carton boxes", "Custom inserts & protection", "Labeling & compliance", "Secure shipping & logistics"],
  },
];

const ManufacturingSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: containerScrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(
    containerScrollYProgress,
    [0.1, 0.8],
    ["0%", "100%"],
  );

  const [activeStage, setActiveStage] = useState(0);
  const activeStageRef = useRef(0);

  // Light up/activate manufacturing stages progressively while scrolling.
  useMotionValueEvent(
    containerScrollYProgress,
    "change",
    (latest) => {
      const clamped = Math.max(0, Math.min(1, latest));
      const next = Math.floor(clamped * stages.length);
      const safeNext = Math.min(stages.length - 1, next);

      if (safeNext !== activeStageRef.current) {
        activeStageRef.current = safeNext;
        setActiveStage(safeNext);
      }
    },
  );

  return (
    <section ref={ref} id="manufacturing" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Production Pipeline
          </p>
          <h2 className="clash-display text-4xl md:text-5xl text-foreground mb-4">
            THE JOURNEY TO SCALE
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            From PCB fabrication to final packaging and shipping, we manage the complete
            manufacturing pipeline with engineering precision.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 top-0 w-px bg-primary hidden md:block origin-top"
          />

          <div className="space-y-10">
            {stages.map((s, i) => (
              <StageCard
                key={s.stage}
                stage={s}
                index={i}
                activeStage={activeStage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StageCard = ({
  stage,
  index,
  activeStage,
}: {
  stage: (typeof stages)[0];
  index: number;
  activeStage: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const isPast = index <= activeStage;
  const isCurrent = index === activeStage;

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
      className="md:pl-20 relative"
    >
      <motion.div
        style={circleStyle}
        animate={{ scale: isCurrent ? 1.07 : isPast ? 1 : 0.98 }}
        className="hidden md:flex absolute left-4 top-2 w-8 h-8 rounded-full border items-center justify-center text-xs font-mono font-bold"
      >
        {stage.stage}
      </motion.div>

      <motion.div className="glass-card p-8 rounded-sm">
        <span
          className="md:hidden text-xs font-mono mb-2 block"
          style={{
            color: isPast
              ? "hsl(var(--primary))"
              : "hsl(var(--muted-foreground))",
          }}
        >
          STAGE {stage.stage}
        </span>

        <h3
          className={`clash-display text-2xl mb-3 ${
            isPast ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {stage.title}
        </h3>

        <p
          className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-lg"
          style={{ opacity: isPast ? 1 : 0.85 }}
        >
          {stage.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {stage.details.map((d) => (
            <span
              key={d}
              className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider border border-border rounded-sm text-muted-foreground"
            >
              {d}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ManufacturingSection;
