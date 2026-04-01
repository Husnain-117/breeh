import { motion } from "framer-motion";

const logos = [
  "Mayo Clinic", "Cleveland Clinic", "Kaiser Permanente", "HCA Healthcare",
  "CommonSpirit", "Ascension Health", "Tenet Healthcare", "Providence",
  "AdventHealth", "Intermountain", "Atrium Health", "Ochsner Health",
];

const TrustedBy = () => {
  return (
    <section className="py-10 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(244 55% 58%), hsl(244 50% 52%))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0 hidden sm:block"
          >
            <p className="text-primary-foreground/80 text-sm font-semibold leading-tight">
              Trusted by
              <br />
              <span className="text-primary-foreground font-bold text-lg">Many healthcare organizations</span>
            </p>
          </motion.div>

          <div className="h-10 w-px bg-primary-foreground/20 flex-shrink-0 hidden sm:block" />

          {/* Scrolling Marquee */}
          <div className="relative overflow-hidden flex-1">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />

            <div className="flex animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center h-10"
                >
                  <span className="text-sm font-display font-semibold text-primary-foreground/40 whitespace-nowrap select-none hover:text-primary-foreground/70 transition-colors">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
