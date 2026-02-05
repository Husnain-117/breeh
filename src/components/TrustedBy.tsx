import { motion } from "framer-motion";

const logos = [
  "Shopify", "Sony", "Hyundai", "Pelago", "Domino's",
  "Randstad", "Tiket.com", "Xiaomi", "Cipla", "Lion Parcel",
  "Waste Connections", "Indigo", "Bajaj", "Spencer's",
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-10 tracking-widest uppercase"
        >
          Trusted by 1100+ enterprises worldwide
        </motion.p>
      </div>

      {/* Scrolling Logo Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo}-${i}`}
              className="flex-shrink-0 mx-10 flex items-center justify-center h-12"
            >
              <span className="text-lg font-display font-semibold text-muted-foreground/40 whitespace-nowrap select-none hover:text-foreground/60 transition-colors">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
