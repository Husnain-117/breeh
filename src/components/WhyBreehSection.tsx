import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, Phone, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % features.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section className="section-lavender py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
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
            owners with our powerful agentic AI platform.
          </p>
        </motion.div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-10 bg-accent"
                  : "w-4 bg-border hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Card Container */}
        <div className="relative min-h-[340px] md:min-h-[300px]">
          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors bg-background shadow-sm z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors bg-background shadow-sm z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 80, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Dark Left Panel */}
              <div
                className="lg:col-span-3 p-10 md:p-12 flex flex-col justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(244 50% 20%) 0%, hsl(244 50% 28%) 50%, hsl(244 55% 35%) 100%)",
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  {(() => {
                    const Icon = features[activeIndex].icon;
                    return <Icon className="w-6 h-6 text-accent-foreground" />;
                  })()}
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
                  {features[activeIndex].title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed text-base">
                  {features[activeIndex].description}
                </p>
              </div>

              {/* Light Right Panel - Chat mockup */}
              <div className="lg:col-span-2 bg-background p-8 flex items-center justify-center">
                <div className="bg-muted rounded-2xl p-6 w-full max-w-xs">
                  <div className="space-y-3">
                    {features[activeIndex].chat.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
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
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-[10px] font-bold text-accent-foreground">B</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">Breeh AI Assistant</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhyBreehSection;
