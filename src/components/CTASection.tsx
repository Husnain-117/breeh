import { motion } from "framer-motion";
import breehLogo from "@/assets/breeh-logo.png";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(244 50% 12%) 0%, hsl(244 45% 18%) 50%, hsl(244 40% 22%) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center mb-8">
            <img
              src={breehLogo}
              alt="Breeh AI"
              className="w-16 h-16 object-contain"
            />
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary tracking-wide mb-6">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            Get Started Today
          </span>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Ready to Capture Every
            <br />
            <span className="text-primary">Patient Opportunity?</span>
          </h2>

          <p className="text-primary-foreground/60 text-lg mb-10 max-w-xl mx-auto">
            Join practices already growing with Breeh AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-primary text-primary-foreground font-bold rounded-full px-10 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Schedule Your Demo
            </a>
            <a
              href="#"
              className="inline-block border-2 border-primary-foreground/20 text-primary-foreground font-bold rounded-full px-10 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>
          </div>

          <p className="text-primary-foreground/40 text-sm mt-6">
            No setup fees, cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
