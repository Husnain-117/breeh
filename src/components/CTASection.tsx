import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 gradient-bg-purple" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          
          {/* Floating orbs */}
          <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/20 blur-[60px] animate-float" />
          <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary/15 blur-[50px] animate-float" style={{ animationDelay: "2s" }} />

          <div className="relative z-10 py-20 px-8 md:px-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/90">Start transforming today</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Ready to build the future
              <br />
              of customer experience?
            </h2>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10">
              Join 1100+ enterprises already using Breeh AI to deliver 
              autonomous, human-like experiences at scale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#" className="btn-primary-gradient flex items-center gap-2 text-base">
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="btn-outline-light text-base">
                Calculate Your ROI
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
