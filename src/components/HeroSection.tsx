import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Cpu, Globe, Layers, Zap, type LucideIcon } from "lucide-react";
import heroImage from "@/assets/hero-pcb.jpg";

const stats = [
  { value: "150+", label: "Products Shipped" },
  { value: "12", label: "Countries Served" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "50+", label: "Engineers" },
] as const;

const capabilities: Array<{ icon: LucideIcon; label: string }> = [
  { icon: Cpu, label: "Hardware Design" },
  { icon: Layers, label: "PCB Engineering" },
  { icon: Zap, label: "Firmware Dev" },
  { icon: Globe, label: "Global Manufacturing" },
];

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], [0, 40]);
  const imgScale = useTransform(scrollYProgress, [0, 0.6], [1, 1.15]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="h-[150vh] relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale, borderRadius }}
          className="h-full w-full bg-background overflow-hidden animated-gradient-bg relative"
        >
          {/* Floating orbs for depth */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute w-[500px] h-[500px] rounded-full opacity-[0.07]"
              style={{
                background:
                  "radial-gradient(circle, hsl(214 90% 49%), transparent 70%)",
                top: "10%",
                right: "-5%",
                animation: "float-orb 8s ease-in-out infinite",
              }}
            />
            <div
              className="absolute w-[350px] h-[350px] rounded-full opacity-[0.05]"
              style={{
                background:
                  "radial-gradient(circle, hsl(214 70% 60%), transparent 70%)",
                bottom: "15%",
                left: "5%",
                animation: "float-orb 10s ease-in-out infinite reverse",
              }}
            />
            <div
              className="absolute w-[200px] h-[200px] rounded-full opacity-[0.04]"
              style={{
                background:
                  "radial-gradient(circle, hsl(214 90% 49%), transparent 70%)",
                top: "40%",
                left: "40%",
                animation: "float-orb 6s ease-in-out infinite 2s",
              }}
            />
          </div>

          {/* Background text */}
          <motion.div
            style={{ y: bgTextY }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          >
            <span className="text-outline text-[20vw] clash-display whitespace-nowrap">
              COBUILD
            </span>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="h-full flex flex-col justify-center pt-16 lg:pt-0"
          >
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
              {/* Top capability pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0, 1],
                }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {capabilities.map((cap, i) => (
                  <motion.div
                    key={cap.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                    }}
                    className="flex items-center gap-2 glass-card px-4 py-2 rounded-full"
                  >
                    <cap.icon
                      className="w-4 h-4 !text-primary"
                      style={{ color: "hsl(var(--primary))" }}
                    />
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {cap.label}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main grid */}
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      ease: [0.25, 0.1, 0, 1],
                    }}
                    className="space-y-5"
                  >
                    <p className="text-sm font-mono uppercase tracking-[0.3em] gradient-text font-bold">
                      The Engineering Standard
                    </p>
                    <h1 className="clash-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-foreground">
                      An Engineering-Led{" "}
                      <span className="gradient-text">Product Company.</span>
                    </h1>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.5,
                      ease: [0.25, 0.1, 0, 1],
                    }}
                    className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
                  >
                    We transform complex hardware visions into scalable,
                    production-ready reality - from concept through
                    manufacturing. Brutal efficiency meets sophisticated
                    engineering across PCB design, firmware, and full-stack
                    product development.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.7,
                      ease: [0.25, 0.1, 0, 1],
                    }}
                    className="flex flex-wrap gap-4"
                  >
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105"
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                      href="#about"
                      className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-muted transition-all duration-300 rounded-sm hover:scale-105"
                    >
                      How We Work
                    </a>
                  </motion.div>

                  {/* Trusted by line */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xs font-mono uppercase tracking-widest text-muted-foreground pt-2"
                  >
                    Trusted by startups & Fortune 500 companies worldwide
                  </motion.p>
                </div>

                {/* Image + overlay stats */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    ease: [0.25, 0.1, 0, 1],
                  }}
                  className="relative"
                >
                  <motion.div
                    style={{ scale: imgScale }}
                    className="relative rounded-lg overflow-hidden border border-border"
                  >
                    <img
                      src={heroImage}
                      alt="High-tech PCB engineering design"
                      className="w-full h-auto object-cover aspect-[4/3]"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                    {/* Overlay stats on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="grid grid-cols-2 gap-3">
                        {stats.map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.8 + i * 0.1,
                            }}
                            className="glass-card px-4 py-3 rounded-sm text-center"
                          >
                            <div className="text-xl md:text-2xl font-bold text-foreground clash-display">
                              {stat.value}
                            </div>
                            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mt-1">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Location badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-sm border border-primary/20"
                  >
                    <span className="text-xs font-mono text-primary font-bold">
                      LONDON / SHENZHEN / SF
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
