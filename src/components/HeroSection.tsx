import { motion } from "framer-motion";
import heroBg from "@/assets/hero-dental.jpg";

interface HeroSectionProps {
  onBookDemo?: () => void;
}

const HeroSection = ({ onBookDemo }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Single Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern dental office"
          className="w-full h-full object-cover"
        />
        {/* Overlay with primary color */}
        {/* Simple solid color overlay */}
        <div className="absolute inset-0 bg-[hsl(244_50%_22%)]/80" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center pt-20">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-primary-foreground/80 mb-8"
        >
          Dental Practice Owners
        </motion.p>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-primary-foreground uppercase mb-8"
        >
          Do You Want
          <br />
          More Appointments?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover how many dental practices are using Breeh AI to
          <br className="hidden md:block" />
          never miss a patient call and fill their schedules automatically.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <button
            onClick={onBookDemo}
            className="inline-block bg-accent text-accent-foreground font-bold rounded-lg px-12 py-5 text-lg uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-1 hover:brightness-110"
          >
            Yes! Show Me How!
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade - Simplified */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;
