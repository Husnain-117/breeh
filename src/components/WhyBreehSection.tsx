import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Calendar, Phone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Answer every patient call, 24/7",
    description:
      "Build, test and deploy powerful AI agents with simple natural language prompts. These agents can think, respond and act autonomously, handling patient calls across complex scheduling scenarios with human-like conversation.",
    chat: [
      { from: "patient", text: "Hi! I'd like to schedule a cleaning appointment for next week." },
      { from: "ai", text: "Of course! I have openings on Tuesday at 2pm and Thursday at 10am. Which works best for you?" },
      { from: "patient", text: "Tuesday at 2pm works perfectly!" },
    ],
  },
  {
    icon: Calendar,
    title: "Smart appointment scheduling",
    description:
      "Automatically book, reschedule and confirm appointments in real-time. Breeh AI syncs with your practice management system so your calendar is always up to date.",
    chat: [
      { from: "patient", text: "I need to reschedule my Thursday appointment." },
      { from: "ai", text: "No problem! I can move it to Friday at 3pm or Monday at 11am. Your preference?" },
      { from: "patient", text: "Monday at 11am please." },
    ],
  },
  {
    icon: MessageSquare,
    title: "Patient follow-up & reminders",
    description:
      "Send automated appointment reminders, recall notices, and post-visit follow-ups via SMS, email, and voice — reducing no-shows by up to 40%.",
    chat: [
      { from: "ai", text: "Hi Sarah! Just a reminder about your cleaning tomorrow at 10am with Dr. Smith." },
      { from: "patient", text: "Thanks! I'll be there." },
      { from: "ai", text: "Great! We'll see you then. Reply HELP if you need to reschedule." },
    ],
  },
  {
    icon: BarChart3,
    title: "Practice analytics & insights",
    description:
      "Real-time dashboards with call analytics, booking trends, patient satisfaction scores, and staff performance metrics to optimize your practice.",
    chat: [
      { from: "ai", text: "Weekly report: 142 calls handled, 95% satisfaction, 23 new appointments booked." },
      { from: "patient", text: "Show me the busiest hours this week." },
      { from: "ai", text: "Peak hours were Mon & Wed 9-11am. I recommend adding capacity during those slots." },
    ],
  },
];

const WhyBreehSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
            Delight patients, empower staff and provide useful insights to practice
            owners with our powerful agentic AI platform that understands dental
            workflows, maintains context and achieves complex business goals.
          </p>
        </motion.div>

        {/* Horizontal scrolling cards */}
        <div ref={containerRef} className="relative">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl min-h-[320px]"
    >
      {/* Dark Left Panel */}
      <div className="lg:col-span-3 bg-section-dark p-10 md:p-12 flex flex-col justify-center">
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
            {feature.chat.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                className={`${
                  msg.from === "patient"
                    ? "bg-primary/10 rounded-xl rounded-bl-sm"
                    : "bg-accent/10 rounded-xl rounded-br-sm ml-6"
                } p-3`}
              >
                <p className="text-xs text-foreground">{msg.text}</p>
              </motion.div>
            ))}
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
  );
};

export default WhyBreehSection;
