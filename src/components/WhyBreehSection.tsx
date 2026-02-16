import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Calendar, Phone, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Always-On Front Desk",
    description:
      "Breeh AI answers every patient call instantly, 24/7. It handles complex scheduling, questions, and triage just like a human receptionist, but without hold times.",
    chat: [
      { from: "patient", text: "Hi! I'd like to schedule a cleaning appointment for next week." },
      { from: "ai", text: "Of course! I have openings on Tuesday at 2pm and Thursday at 10am. Which works best for you?" },
      { from: "patient", text: "Tuesday at 2pm works perfectly!" },
    ],
  },
  {
    icon: Calendar,
    title: "Intelligent Scheduling",
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
    title: "Patient Follow-Up & Recall",
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
    title: "Practice Analytics",
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
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % features.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  }, []);

  const goTo = useCallback((i: number) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
  }, [activeIndex]);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.97 }),
  };

  return (
    <section className="section-lavender py-20 lg:py-28 relative overflow-hidden" id="why-breeh">
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
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            The AI Receptionist That
            <br />
            Integrates Seamlessly
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Delight patients, empower staff, and provide useful insights to practice
            owners with an always-on digital front desk.
          </p>
        </motion.div>

        {/* Card Container */}
        <div className="relative min-h-[380px] md:min-h-[340px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid lg:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Dark Left Panel */}
              <div
                className="lg:col-span-3 p-10 md:p-12 flex flex-col justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(244 58% 50%) 0%, hsl(244 55% 40%) 50%, hsl(244 50% 30%) 100%)",
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
              <div className="lg:col-span-2 bg-secondary p-8 flex items-center justify-center">
                <div className="bg-card rounded-2xl p-6 w-full max-w-xs shadow-sm border border-border">
                  <div className="space-y-3">
                    {features[activeIndex].chat.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.15 }}
                        className={`${msg.from === "patient"
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

        {/* Bottom Controls — progress dots + arrows centered */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors bg-background shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === activeIndex
                  ? "w-10 bg-accent"
                  : "w-4 bg-border hover:bg-muted-foreground/30"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors bg-background shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBreehSection;
