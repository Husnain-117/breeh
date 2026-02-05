import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "90%",
    label: "Automation Rate",
    description: "of customer queries resolved autonomously without human intervention",
  },
  {
    icon: Clock,
    value: "<1s",
    label: "Response Time",
    description: "average first response time across all channels and languages",
  },
  {
    icon: DollarSign,
    value: "60%",
    label: "Cost Reduction",
    description: "average reduction in customer service operational costs",
  },
  {
    icon: Users,
    value: "50x",
    label: "Scale Factor",
    description: "handle 50x more conversations without additional headcount",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const StatsSection = () => {
  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-primary/5 blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase gradient-bg-primary text-primary-foreground mb-6">
            Impact
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-section-dark-foreground mb-6">
            Real results that
            <br />
            <span className="gradient-text">speak for themselves</span>
          </h2>
          <p className="text-lg text-section-dark-foreground/50 max-w-xl mx-auto">
            Enterprise-grade AI that delivers measurable business outcomes from day one.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="stat-card group hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg-primary flex items-center justify-center mx-auto mb-5">
                <stat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">
                {stat.value}
              </div>
              <div className="font-display font-semibold text-section-dark-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-section-dark-foreground/40 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
