import { motion } from "framer-motion";
import { BarChart3, PhoneCall, CalendarCheck, Shield, Zap, Users } from "lucide-react";

const demos = [
  {
    icon: PhoneCall,
    title: "AI Call Handling",
    description:
      "Every inbound call is answered instantly by Breeh AI — triaging emergencies, answering FAQs, and routing complex cases to your team seamlessly.",
    stats: "99.7% answer rate",
  },
  {
    icon: BarChart3,
    title: "Call Analytics Dashboard",
    description:
      "Track call volume, peak hours, patient sentiment scores, and booking conversion rates in a real-time analytics dashboard built for dental practices.",
    stats: "Real-time insights",
  },
  {
    icon: CalendarCheck,
    title: "Smart Appointment Scheduler",
    description:
      "Patients book, reschedule, and confirm appointments 24/7 via voice or SMS. Breeh AI syncs directly with your PMS to keep your calendar full.",
    stats: "24/7 scheduling",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant Security",
    description:
      "All patient data is encrypted end-to-end and processed in HIPAA-compliant infrastructure. Your practice stays protected at every touchpoint.",
    stats: "SOC 2 & HIPAA",
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description:
      "Go live in under 48 hours. Breeh AI connects with Dentrix, Eaglesoft, Open Dental and more — no hardware or complex setup required.",
    stats: "< 48hr setup",
  },
  {
    icon: Users,
    title: "Patient Follow-Up Engine",
    description:
      "Automated recall, reminders, and post-visit follow-ups via SMS, email, and voice reduce no-shows by up to 40% and keep patients engaged.",
    stats: "40% fewer no-shows",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
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
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-accent tracking-wide mb-3">
            Platform Capabilities
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Everything Your Front Desk Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete AI-powered suite designed for modern dental practices.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <demo.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {demo.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {demo.description}
              </p>
              <span className="inline-block text-xs font-semibold text-accent bg-accent/10 rounded-full px-3 py-1">
                {demo.stats}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemosSection;
