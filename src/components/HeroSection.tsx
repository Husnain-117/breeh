import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero/60 via-hero/80 to-hero" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/15 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <span className="w-2 h-2 rounded-full gradient-bg-primary animate-pulse" />
            <span className="text-sm font-medium text-hero-foreground/80">
              Introducing Breeh AI Agentic Platform
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-primary" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
          >
            <span className="text-hero-foreground">Autonomous AI </span>
            <br />
            <span className="gradient-text">experiences</span>
            <span className="text-hero-foreground"> that</span>
            <br />
            <span className="text-hero-foreground">deliver </span>
            <span className="gradient-text-purple">results</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-hero-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transform customer and employee experiences with human-like AI agents
            that resolve issues, boost conversions, and reduce costs — across
            voice, chat, and email.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#" className="btn-primary-gradient flex items-center gap-2 text-base">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="btn-outline-light flex items-center gap-2 text-base">
              <Play className="w-4 h-4" />
              Watch Video
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "1100+", label: "Enterprise Clients" },
              { value: "35+", label: "Languages Supported" },
              { value: "90%", label: "Automation Rate" },
              { value: "70%", label: "Cost Reduction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-bold text-3xl md:text-4xl gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-hero-foreground/50">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
