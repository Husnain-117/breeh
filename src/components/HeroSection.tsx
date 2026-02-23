import { motion } from "framer-motion";
import heroBg from "@/assets/hero-dental.jpg";

interface HeroSectionProps {
  onBookDemo?: () => void;
}

const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern dental office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[hsl(244_58%_52%)]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-primary-foreground/70 mb-8"
        >
          AI-Powered Dental Receptionist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-primary-foreground mb-8"
        >
          Never Miss a
          <br />
          Patient Call Again
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-primary-foreground/60 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Breeh AI answers, schedules, and follows up with patients 24/7 —
          so your team can focus on care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <button
            onClick={onBookDemo}
            className="bg-accent text-accent-foreground font-semibold rounded-full px-10 py-4 text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Book a Demo
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;
