import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 150);
    setScrolled(latest > 50);
  });

  const links = [
    { label: "About", href: "#about" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Services", href: "#services" },
    { label: "Software", href: "#software" },
    { label: "AI", href: "#ai" },
    { label: "Manufacturing", href: "#manufacturing" },
    { label: "Industries", href: "#industries" },
    { label: "Connect", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="clash-display text-xl tracking-tight text-foreground">
          COBUILD
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <span className="text-xs font-mono text-muted-foreground">v.2.0.25</span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
