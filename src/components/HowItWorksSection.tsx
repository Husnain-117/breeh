"use client";

import { motion } from "framer-motion";
import { Plug, Settings, PhoneForwarded } from "lucide-react";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Integrate with PMS",
    description:
      "One-click integration to your practice management software.",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure Breeh",
    description:
      "Our onboarding specialist will set up Breeh with your office information and preferences.",
  },
  {
    icon: PhoneForwarded,
    number: "03",
    title: "Forward & Go Live",
    description:
      "Forward calls from any phone system to your Breeh number.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const iconVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: (i: number) => ({
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
      delay: i * 0.2 + 0.3,
    },
  }),
};

const numberVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.2 + 0.1,
    },
  }),
};

interface HowItWorksSectionProps {
  onBookDemo?: () => void;
}

const HowItWorksSection = ({ onBookDemo }: HowItWorksSectionProps) => {
  return (
    <section className="py-24 lg:py-32 section-lavender relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              How It Works
            </span>
          </motion.div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            It's Easy to Get Started with Breeh
          </h2>
          <p className="text-muted-foreground text-base">
            Get started in as little as five days
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-card border border-border rounded-2xl p-8 md:p-10 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-shadow duration-500"
            >
              {/* Large background number */}
              <motion.span
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={numberVariants}
                className="absolute top-4 right-6 font-display font-bold text-[5rem] leading-none text-primary/[0.07] select-none pointer-events-none"
              >
                {step.number}
              </motion.span>

              {/* Connecting line for non-last cards */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-primary/20 z-10" />
              )}

              {/* Icon */}
              <motion.div
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
                className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 relative z-10"
              >
                <step.icon className="w-5 h-5 text-primary" />
              </motion.div>

              {/* Content */}
              <h3 className="font-display font-bold text-lg text-foreground mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={onBookDemo}
            className="inline-block bg-primary text-primary-foreground font-bold rounded-full px-10 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
