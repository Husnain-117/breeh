import { motion } from "framer-motion";
import { Plug, Settings, PhoneForwarded } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Integrate with PMS",
    description:
      "One-click integration to your practice management software.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure Breeh",
    description:
      "Our onboarding specialist will set up Breeh with your office information and preferences.",
  },
  {
    number: "03",
    icon: PhoneForwarded,
    title: "Forward & Go Live",
    description:
      "Forward calls from any phone system to your Breeh number.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary tracking-wide mb-4 justify-center">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            How It Works
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            It's Easy to Get Started with Breeh
          </h2>
          <p className="text-muted-foreground text-lg">
            Get started in as little as five days
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-muted/30 rounded-3xl p-8 lg:p-10 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group-hover:-translate-y-1">
                {/* Number */}
                <span className="font-display font-bold text-6xl text-primary/15 absolute top-6 right-8">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-block bg-primary text-primary-foreground font-bold rounded-full px-10 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
