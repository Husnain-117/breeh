import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg1 from "@/assets/hero-dental-1.jpg";
import heroBg2 from "@/assets/hero-dental-2.jpg";

const slides = [heroBg1, heroBg2];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images with crossfade */}
      <AnimatePresence mode="sync">
        {slides.map((slide, i) => (
          i === currentSlide && (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-0"
            >
              <img
                src={slide}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold text-primary-foreground/80 tracking-wide mb-6"
          >
            AI-Powered Dental Receptionist Platform
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight mb-8"
          >
            <span className="text-primary-foreground">Smarter Interactions with </span>
            <span className="text-primary">AI Agents</span>
            <span className="text-primary-foreground"> That Think, Act, and Resolve</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base md:text-lg text-primary-foreground/70 mb-8 leading-relaxed"
          >
            Transform your dental practice with Breeh AI's Agentic platform to
            autonomously handle patient calls, bookings, and follow-ups at scale
          </motion.p>

          {/* Bullet Points */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="space-y-3 mb-10 text-primary-foreground/80"
          >
            <li className="flex items-center gap-2 text-sm md:text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              AI-powered call answering for increased bookings & accuracy
            </li>
            <li className="flex items-center gap-2 text-sm md:text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              Human-like conversations via voice, chat & SMS
            </li>
            <li className="flex items-center gap-2 text-sm md:text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
              Seamless PMS integrations to go live faster
            </li>
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a href="#" className="inline-block bg-primary text-primary-foreground font-semibold rounded-full px-10 py-4 text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5">
              Book a demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
