import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StartupCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Apple-style: section scales up from small rounded card to full screen
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.88, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.1, 0.35], [50, 0]);

  return (
    <div ref={containerRef} className="px-4 md:px-0">
      <motion.section
        style={{ scale, borderRadius }}
        className="py-24 bg-foreground text-background overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-mono text-primary uppercase tracking-widest">Partnership</span>
                <div className="h-px w-12 bg-primary" />
              </div>
              <h2 className="clash-display text-4xl md:text-5xl">ARE YOU A START-UP?</h2>
            </div>

            <div className="space-y-4 text-base opacity-70 leading-relaxed max-w-xl mx-auto text-left">
              <p>
                In addition to our traditional fee-for-services model, we also invest directly in the
                form of capital or services for qualified startups. We pride ourselves on being a
                startup for startups and understand the certain limitations that come with building a
                brand from the ground up.
              </p>
              <p>
                Whether your goal is to establish your brand, ship your first product, or raise a seed
                round, we are ready and willing to wear many hats as your longtime partners. We
                frequently evaluate partnership opportunities, and will occasionally invest design as
                capital directly into your company.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 text-sm font-mono uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-sm"
            >
              PITCH US.
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default StartupCTA;
