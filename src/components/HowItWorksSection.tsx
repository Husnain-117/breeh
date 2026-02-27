import { motion, useInView } from "framer-motion";
import { Plug, Settings, PhoneForwarded, Check } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Connect Your PMS",
    description:
      "One-click integration with your practice management software. We support all major platforms.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&q=80",
    imageAlt: "Software integration dashboard",
    features: ["Dentrix", "Eaglesoft", "Open Dental"],
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure Breeh",
    description:
      "Our team sets up Breeh with your office info, preferences, and custom workflows.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80",
    imageAlt: "Team configuring settings",
    features: ["Custom scripts", "Office hours", "Insurance rules"],
  },
  {
    icon: PhoneForwarded,
    number: "03",
    title: "Go Live",
    description:
      "Forward calls to your Breeh number and start capturing every patient opportunity.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&q=80",
    imageAlt: "Dental professional on call",
    features: ["Instant activation", "24/7 coverage", "Real-time analytics"],
  },
];

interface HowItWorksSectionProps {
  onBookDemo?: () => void;
}

const HowItWorksSection = ({ onBookDemo }: HowItWorksSectionProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  return (
    <section
      className="py-24 lg:py-32 section-lavender relative overflow-hidden"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Live in <span className="gradient-text">5 Days</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Three simple steps to transform your front desk into an always-on
            AI-powered reception.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[68px] left-[calc(16.67%-12px)] right-[calc(16.67%-12px)] h-[2px]">
            {/* Track */}
            <div className="absolute inset-0 bg-border rounded-full" />
            {/* Animated fill */}
            <motion.div
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary to-purple-500 rounded-full"
            />
          </div>

          {/* Step cards */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative group"
              >
                {/* Number badge */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0.8, borderColor: "hsl(220, 13%, 91%)" }}
                    animate={
                      isInView
                        ? {
                          scale: 1,
                          borderColor: "hsl(244, 58%, 61%)",
                        }
                        : {}
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + i * 0.3,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="relative w-[52px] h-[52px] rounded-full border-2 flex items-center justify-center bg-background z-10 shadow-md"
                  >
                    {/* Fill circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.7 + i * 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute inset-1 rounded-full bg-gradient-to-br from-primary to-purple-500"
                    />
                    <span className="relative z-10 text-sm font-bold text-white">
                      {step.number}
                    </span>
                  </motion.div>
                </div>

                {/* Card */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:-translate-y-1 group-hover:border-primary/20">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-2">
                      {step.features.map((feat) => (
                        <span
                          key={feat}
                          className="inline-flex items-center gap-1 text-[10px] font-medium text-primary bg-primary/8 px-2.5 py-1 rounded-full"
                        >
                          <Check className="w-3 h-3" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBookDemo}
            className="group bg-primary text-primary-foreground font-semibold rounded-full px-10 py-3.5 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 inline-flex items-center gap-2"
          >
            Get Started
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
