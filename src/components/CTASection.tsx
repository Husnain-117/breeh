import { motion } from "framer-motion";
import ctaPerson from "@/assets/cta-person.jpg";

const CTASection = () => {
  return (
    <section className="section-lavender py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl"
        >
          {/* Left content */}
          <div className="lg:col-span-3 bg-background p-10 md:p-16 flex flex-col justify-center">
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Cut Costs, Boost Bookings, Delight Patients — Discover Breeh AI
            </h2>
            <div>
              <a href="#" className="inline-block bg-foreground text-background font-semibold rounded-full px-8 py-4 text-base transition-all duration-300 hover:bg-foreground/90 hover:-translate-y-0.5 hover:shadow-lg">
                Book a demo
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:col-span-2 relative">
            <img
              src={ctaPerson}
              alt="Dental professional using Breeh AI"
              className="w-full h-full object-cover min-h-[300px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
