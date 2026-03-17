import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 20;
    const steps = duration / interval;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve for natural feel
      const t = step / steps;
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (step >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center"
    >
      {/* Scanning line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-primary/40"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 2.2, ease: "linear" }}
      />

      {/* Terminal text */}
      <div className="space-y-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs font-mono tracking-[0.4em] text-muted-foreground uppercase"
        >
          Initializing production_ready_env...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="clash-display text-5xl md:text-7xl text-foreground"
        >
          COBUILD
        </motion.h1>

        {/* Progress bar */}
        <div className="w-48 mx-auto">
          <div className="h-px bg-border overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-xs font-mono text-muted-foreground">
              System Status: Optimal
            </span>
            <span className="text-xs font-mono text-primary tabular-nums">
              {String(progress).padStart(2, "0")}%
            </span>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-6 left-6 w-4 h-4 border-l border-t border-primary/30" />
      <div className="absolute top-6 right-6 w-4 h-4 border-r border-t border-primary/30" />
      <div className="absolute bottom-6 left-6 w-4 h-4 border-l border-b border-primary/30" />
      <div className="absolute bottom-6 right-6 w-4 h-4 border-r border-b border-primary/30" />
    </motion.div>
  );
};

export default LoadingScreen;
