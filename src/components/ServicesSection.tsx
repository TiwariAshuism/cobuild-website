import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "mechanical",
    number: "01",
    label: "HARDWARE",
    title: "Mechanical Engineering",
    tagline: "We design and engineer robust, manufacturable mechanical systems that turn electronic concepts into real-world products.",
    items: [
      { name: "Product Architecture & Enclosure Design", desc: "Complete mechanical architecture including enclosures, internal structures, mounting strategies, and assembly concepts." },
      { name: "CAD Modeling & Detailed Engineering", desc: "Production-grade 3D CAD models and drawings ready for tooling and manufacturing." },
      { name: "Material Selection & Structural Analysis", desc: "Right materials based on strength, weight, cost, environmental conditions, and regulatory requirements." },
      { name: "Design for Manufacturing (DFM)", desc: "Designs optimized for cost-effective and scalable manufacturing from day one." },
      { name: "Prototyping & Mechanical Validation", desc: "Build and test mechanical prototypes to validate fit, function, and durability." },
      { name: "Manufacturing Support & Production Handoff", desc: "Support during tooling, pilot builds, and mass production." },
    ],
    benefits: ["Reduced manufacturing cost", "Faster time to market", "Fewer production failures", "Better product reliability"],
  },
  {
    id: "electrical",
    number: "02",
    label: "EMBEDDED",
    title: "Electrical Engineering",
    tagline: "Our electrical engineers ensure electronics are functionally correct, physically integrated, compliant, and manufacturable.",
    items: [
      { name: "System Architecture & Circuit Design", desc: "Complete electrical architecture translating functional requirements into robust circuit designs." },
      { name: "Schematic Design & Component Selection", desc: "Production-grade schematics with components optimized for performance, availability, and cost." },
      { name: "PCB Design & Layout", desc: "High-quality PCB layouts focused on signal integrity, EMI/EMC robustness, and manufacturability." },
      { name: "Power & Signal Integrity", desc: "Stable power delivery and clean signals across all operating conditions." },
      { name: "DFM & Design for Test (DFT)", desc: "Designs optimized to move smoothly from prototype to mass production." },
      { name: "Prototype Bring-Up & Debugging", desc: "Hardware bring-up and debugging to ensure first prototypes work reliably." },
    ],
    benefits: ["Stable and reliable electronics", "Lower EMI/EMC risk", "Reduced power consumption", "Fewer board re-spins"],
  },
  {
    id: "firmware",
    number: "03",
    label: "INTELLIGENCE",
    title: "Firmware Engineering",
    tagline: "The intelligence layer that brings electronic hardware to life—reliable, efficient, and scalable firmware.",
    items: [
      { name: "Hardware Bring-Up & Board Support", desc: "Firmware development from the very first prototype." },
      { name: "Embedded Application Development", desc: "Firmware implementing core product functionality with stability and responsiveness." },
      { name: "Power Optimization & Low-Power Design", desc: "Battery life as a primary constraint, especially for wearables and IoT." },
      { name: "Communication & Connectivity", desc: "Reliable stacks for BLE, Wi-Fi, NFC, USB, UART, CAN." },
      { name: "Firmware Architecture & Maintainability", desc: "Structured for scalability, reuse, and long-term support." },
      { name: "Testing & Production Support", desc: "Consistent firmware behavior across devices and production batches." },
    ],
    benefits: ["Faster hardware bring-up", "Stable device behavior", "Longer battery life", "Reduced field failures"],
  },
  {
    id: "prototyping",
    number: "04",
    label: "RAPID",
    title: "Prototyping",
    tagline: "Where ideas become real, testable products—validating form, function, performance, and manufacturability.",
    items: [
      { name: "Concept & Proof-of-Concept", desc: "Early-stage prototypes to validate core ideas and technical feasibility." },
      { name: "Engineering Prototypes (EVT/DVT)", desc: "Engineering-grade prototypes that closely represent the final product." },
      { name: "Rapid Iteration & Refinement", desc: "Quick iteration based on testing feedback to improve reliability." },
      { name: "Pilot Builds & Pre-Production", desc: "Low-volume pilot builds to validate manufacturing readiness." },
      { name: "Testing & Validation Support", desc: "Testing under real-world conditions to uncover issues early." },
    ],
    benefits: ["Faster product validation", "Early risk identification", "Reduced rework costs"],
  },
  {
    id: "certification",
    number: "05",
    label: "COMPLIANCE",
    title: "Product Certification",
    tagline: "Navigate regulatory requirements early in the design cycle—reducing certification risk, cost, and time to market.",
    items: [
      { name: "Regulatory Strategy & Mapping", desc: "Identify applicable standards based on product type, geography, and use case." },
      { name: "EMC/EMI & Safety Readiness", desc: "EMI/EMC-aware PCB and enclosure design, grounding, shielding, and filtering." },
      { name: "Wireless & RF Compliance", desc: "RF performance and compliance readiness for connected products." },
      { name: "Mechanical & Environmental Compliance", desc: "Mechanical design for certification outcomes." },
      { name: "Pre-Compliance Testing & Debug", desc: "Pre-compliance evaluations to reduce certification risk." },
      { name: "Documentation & Certification Support", desc: "Technical documentation for certification bodies." },
    ],
    benefits: ["Compliance from concept stage", "Fewer test failures", "Faster certification timelines", "Smooth market entry across regions"],
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("mechanical");
  const active = services.find((s) => s.id === activeService)!;

  return (
    <section id="services" className="py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Hardware Services
          </p>
          <h2 className="clash-display text-4xl md:text-5xl text-foreground">
            Engineering Disciplines
          </h2>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {services.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveService(s.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm border transition-all ${
                activeService === s.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {s.number} {s.title}
            </button>
          ))}
        </div>

        {/* Active service detail */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - overview */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <span className="text-xs font-mono text-primary">{active.number} / {active.label}</span>
                <h3 className="clash-display text-3xl text-foreground mt-2">{active.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{active.tagline}"
              </p>
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                  Why it matters
                </p>
                {active.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-primary">✔</span> {b}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - capabilities grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {active.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card p-5 rounded-sm hover:border-primary/20 transition-colors"
                >
                  <h4 className="text-base font-semibold text-foreground mb-2">{item.name}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
