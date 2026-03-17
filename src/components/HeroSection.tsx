import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-pcb.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apple-style: content scales down and fades as you scroll away
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
          className="h-full w-full bg-background overflow-hidden"
        >
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
            className="h-full flex items-center"
          >
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
                  className="space-y-4"
                >
                  <p className="text-sm font-mono uppercase tracking-[0.3em] text-muted-foreground">
                    The Engineering Standard
                  </p>
                  <h1 className="clash-display text-5xl md:text-7xl leading-[0.9] text-foreground">
                    An Engineering-Led{" "}
                    <span className="gradient-text">Product Company.</span>
                  </h1>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
                  className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                >
                  We transform complex hardware visions into scalable, production-ready
                  reality. Brutal efficiency meets sophisticated engineering.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0, 1] }}
                  className="flex flex-wrap gap-4"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 text-sm font-mono uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 rounded-sm hover:scale-105"
                  >
                    Start Project
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-3 text-sm font-mono uppercase tracking-widest hover:bg-muted transition-all duration-300 rounded-sm hover:scale-105"
                  >
                    Explore
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0, 1] }}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </motion.div>
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 rounded-sm">
                  <span className="text-xs font-mono text-muted-foreground">LONDON / SHENZHEN / SF</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
