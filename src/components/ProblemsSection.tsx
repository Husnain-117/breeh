import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const metrics = [
  { value: "5-7 hours", label: "weekly time savings for staff" },
  { value: "41 new patients", label: "captured in 30 days" },
  { value: "$81K", label: "revenue captured in 30 days" },
];

const ProblemsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(244 50% 12%) 0%, hsl(244 45% 18%) 50%, hsl(244 40% 22%) 100%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/60 tracking-wide mb-4">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            The Problems We Solve
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary-foreground leading-tight">
            Real Practices,
            <br />
            <span className="text-primary">Real Growth</span>
          </h2>
        </motion.div>

        {/* Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-primary-foreground/10"
          style={{
            background:
              "linear-gradient(135deg, hsla(244, 50%, 25%, 0.8) 0%, hsla(244, 45%, 20%, 0.9) 100%)",
          }}
        >
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-primary-foreground/70 text-lg mb-4 leading-relaxed max-w-2xl">
              See how <span className="text-primary-foreground font-semibold">Facial & Oral Surgery Associates</span> captured{" "}
              <span className="text-primary font-bold">$81,000</span> in 30 days.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 mb-12"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4" />
            </a>

            {/* Metrics */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                  className="border-t border-primary-foreground/15 pt-6"
                >
                  <p className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">
                    {metric.value}
                  </p>
                  <p className="text-primary-foreground/50 text-sm">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemsSection;
