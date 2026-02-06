import { motion } from "framer-motion";

const stats = [
  { label: "Calls go unanswered", value: "30%" },
  { label: "Book with first responder", value: "78%" },
  { label: "Available 24/7", value: "100%" },
];

const MissionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary tracking-wide mb-6">
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              Our Mission
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-tight mb-6">
              <span className="text-primary">30%</span> of dental practice calls
              go unanswered, and{" "}
              <span className="text-primary">78%</span> of patients book with the
              first practice that responds.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our AI dental receptionist instantly responds to missed callers
              through text or voice with empathetic, human-like messages that feel
              genuine and book appointments 24/7. Unlike traditional virtual
              receptionists, our dental AI never sleeps.{" "}
              <span className="font-semibold text-foreground">
                Always On. Always Caring.
              </span>
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3.5 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Read Case Studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Right stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="bg-muted/50 rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-300"
              >
                <p className="font-display font-bold text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
