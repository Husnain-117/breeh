import { motion } from "framer-motion";
import { Plug, Settings, PhoneForwarded } from "lucide-react";

const steps = [
  {
    icon: Plug,
    number: "01",
    title: "Connect Your PMS",
    description: "One-click integration with your practice management software.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&q=80",
    imageAlt: "Software integration dashboard",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure Breeh",
    description: "Our team sets up Breeh with your office info and preferences.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&q=80",
    imageAlt: "Team configuring settings on screen",
  },
  {
    icon: PhoneForwarded,
    number: "03",
    title: "Go Live",
    description: "Forward calls to your Breeh number and start capturing every patient.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop&q=80",
    imageAlt: "Dental professional on a phone call",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
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
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent tracking-wide mb-3">
            How It Works
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
            Live in 5 Days
          </h2>
          <p className="text-muted-foreground text-sm">
            Three simple steps to transform your front desk.
          </p>
        </motion.div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              {/* Step image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                {/* Step number badge */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-primary/30">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-[2px] bg-primary/15 z-10" />
                )}

                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2 relative z-10">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onBookDemo}
            className="bg-primary text-primary-foreground font-semibold rounded-full px-10 py-3.5 text-sm transition-all duration-300 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
          >
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
