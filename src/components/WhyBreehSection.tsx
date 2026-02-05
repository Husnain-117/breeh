import { motion } from "framer-motion";
import { MessageSquare, Calendar, Phone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Answer every patient call, 24/7",
    description: "Build, test and deploy powerful AI agents with simple natural language prompts. These agents can think, respond and act autonomously, handling patient calls across complex scheduling scenarios with human-like conversation.",
  },
  {
    icon: Calendar,
    title: "Smart appointment scheduling",
    description: "Automatically book, reschedule and confirm appointments in real-time. Breeh AI syncs with your practice management system so your calendar is always up to date.",
  },
  {
    icon: MessageSquare,
    title: "Patient follow-up & reminders",
    description: "Send automated appointment reminders, recall notices, and post-visit follow-ups via SMS, email, and voice — reducing no-shows by up to 40%.",
  },
  {
    icon: BarChart3,
    title: "Practice analytics & insights",
    description: "Real-time dashboards with call analytics, booking trends, patient satisfaction scores, and staff performance metrics to optimize your practice.",
  },
];

const WhyBreehSection = () => {
  return (
    <section className="section-lavender py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-semibold text-accent tracking-wide mb-3">
            Why Breeh AI
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-6">
            The Power of Agentic at Every Stage
            <br />
            of Dental Practice Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delight patients, empower staff and provide useful insights to practice owners 
            with our powerful agentic AI platform that understands dental workflows, 
            maintains context and achieves complex business goals.
          </p>
        </motion.div>

        {/* Feature Cards - Dark Purple Cards */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Dark Left Panel */}
              <div className="lg:col-span-3 bg-section-dark p-10 md:p-14 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-section-dark-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-section-dark-foreground/60 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>

              {/* Light Right Panel - Chat mockup */}
              <div className="lg:col-span-2 bg-background p-8 flex items-center justify-center">
                <div className="bg-muted rounded-2xl p-6 w-full max-w-xs">
                  <div className="space-y-3">
                    <div className="bg-primary/10 rounded-xl rounded-bl-sm p-3">
                      <p className="text-xs text-foreground">Hi! I'd like to schedule a cleaning appointment for next week.</p>
                    </div>
                    <div className="bg-accent/10 rounded-xl rounded-br-sm p-3 ml-6">
                      <p className="text-xs text-foreground">Of course! I have openings on Tuesday at 2pm and Thursday at 10am. Which works best for you?</p>
                    </div>
                    <div className="bg-primary/10 rounded-xl rounded-bl-sm p-3">
                      <p className="text-xs text-foreground">Tuesday at 2pm works perfectly!</p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary-foreground">B</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">Breeh AI Assistant</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBreehSection;
