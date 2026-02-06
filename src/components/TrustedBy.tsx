import { motion } from "framer-motion";

const logos = [
  "Crossroads Dental", "T Management", "Impressions Dentistry", "Fuller Smiles",
  "ZenDentistry", "Aspen Dental", "Heartland", "Pacific Dental",
  "Smile Direct", "Dental365", "Western Dental", "Sage Dental",
];

const TrustedBy = () => {
  return (
    <section className="py-10 bg-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <p className="text-primary-foreground/60 text-xs font-semibold uppercase tracking-wider leading-tight">
              You are in great company with
              <br />
              <span className="text-primary-foreground font-bold text-sm normal-case tracking-normal">
                modern dental groups and DSOs
              </span>
            </p>
          </motion.div>

          <div className="h-10 w-px bg-primary-foreground/20 flex-shrink-0" />

          {/* Marquee */}
          <div className="relative overflow-hidden flex-1">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-foreground to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-foreground to-transparent z-10" />
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
