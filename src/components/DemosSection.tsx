import { motion } from "framer-motion";
import { BarChart3, PhoneCall, CalendarCheck, Shield, Zap, Users } from "lucide-react";

const demos = [
  {
    icon: PhoneCall,
    title: "AI Call Handling",
    description: "Every inbound call answered instantly — triage, FAQs, and routing handled seamlessly.",
    stats: "99.7% answer rate",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=200&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Call Analytics",
    description: "Track call volume, peak hours, patient sentiment, and booking conversion in real-time.",
    stats: "Real-time insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&q=80",
  },
  {
    icon: CalendarCheck,
    title: "Smart Scheduling",
    description: "Patients book, reschedule, and confirm 24/7 via voice or SMS. Directly syncs with your PMS.",
    stats: "24/7 scheduling",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=200&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant",
    description: "End-to-end encryption, SOC 2 Type II certified infrastructure. Fully compliant.",
    stats: "SOC 2 & HIPAA",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=400&h=200&fit=crop&q=80",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Go live in under 48 hours. Connects with Dentrix, Eaglesoft, Open Dental, and more.",
    stats: "< 48hr setup",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop&q=80",
  },
  {
    icon: Users,
    title: "Patient Follow-Up",
    description: "Automated recall, reminders, and post-visit follow-ups that reduce no-shows by 40%.",
    stats: "40% fewer no-shows",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop&q=80",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const DemosSection = () => {
  return (
    <section className="py-24 lg:py-32 section-alt relative overflow-hidden" id="demos">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-semibold text-accent tracking-wide mb-3">
            Platform
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Everything Your Practice Needs
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            A complete AI-powered suite designed for modern dental practices.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              {/* Card image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                {/* Icon floating on image */}
                <div className="absolute bottom-3 left-5 w-10 h-10 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <demo.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  {demo.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {demo.description}
                </p>
                <span className="inline-block text-xs font-semibold text-accent bg-accent/10 rounded-full px-3 py-1">
                  {demo.stats}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
