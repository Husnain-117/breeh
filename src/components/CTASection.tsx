import { motion } from "framer-motion";
import ctaPerson from "@/assets/cta-person.jpg";

interface CTASectionProps {
  onBookDemo?: () => void;
}

const CTASection = ({ onBookDemo }: CTASectionProps) => {
  return (
    <section className="section-lavender pt-16 lg:pt-24 pb-0 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-t-3xl overflow-hidden shadow-xl"
          style={{
            background:
              "linear-gradient(135deg, hsl(244 50% 22%) 0%, hsl(244 58% 40%) 50%, hsl(244 58% 61%) 100%)",
          }}
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left content */}
            <div className="lg:col-span-3 p-10 md:p-16 flex flex-col justify-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6 leading-tight"
              >
                Hire Your AI Receptionist Today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-primary-foreground/60 mb-8 text-base leading-relaxed max-w-lg"
              >
                Automate your front desk with Breeh AI. Join many dental practices already using Breeh AI to never miss a call and fill their schedules automatically.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <button
                  onClick={onBookDemo}
                  className="inline-block bg-primary-foreground text-foreground font-semibold rounded-full px-8 py-4 text-base transition-all duration-300 hover:bg-primary-foreground/90 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Book a demo
                </button>
              </motion.div>
            </div>

            {/* Right image */}
            <div className="lg:col-span-2 relative">
              <img
                src={ctaPerson}
                alt="Dental professional using Breeh AI"
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(244_50%_22%)] to-transparent opacity-30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
