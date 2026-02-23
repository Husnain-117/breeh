import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What PMS platforms does Breeh integrate with?",
    answer: "Dentrix, Eaglesoft, Open Dental, Curve Dental, and many more. Our team handles the full integration.",
  },
  {
    question: "Is Breeh available 24/7?",
    answer: "Yes — around the clock, 365 days a year, including after hours and holidays.",
  },
  {
    question: "What phone providers are supported?",
    answer: "All major providers. Forward your calls to your Breeh number — we handle the rest.",
  },
  {
    question: "How does Breeh work?",
    answer: "Advanced conversational AI answers calls, schedules appointments, handles inquiries, and follows up — all in a natural, human-like voice.",
  },
  {
    question: "How can Breeh help my practice?",
    answer: "Eliminates missed calls, fills your schedule, reduces staff workload, and improves patient satisfaction — leading to more revenue.",
  },
  {
    question: "How important is a fast response to patient calls?",
    answer: "Critical. 78% of patients book with the first practice that responds. Every missed call is lost revenue.",
  },
  {
    question: "Can Breeh answer all my calls?",
    answer: "Yes. Configure it for all calls, overflow only, or after-hours only — whatever fits your workflow.",
  },
  {
    question: "How many simultaneous calls can Breeh handle?",
    answer: "Unlimited. No busy signals, no hold times — ever.",
  },
  {
    question: "Can Breeh transfer calls to staff?",
    answer: "Yes. Intelligent routing sends calls to the right team member based on the inquiry type.",
  },
  {
    question: "Does Breeh support multiple languages?",
    answer: "Yes — English and Spanish currently, with more languages being added regularly.",
  },
  {
    question: "How long is onboarding?",
    answer: "Most practices are fully live within 5 business days. Our team handles everything.",
  },
  {
    question: "Will it work with my current phone number?",
    answer: "Yes. Keep your existing number — just set up call forwarding to your Breeh number.",
  },
  {
    question: "What security measures are in place?",
    answer: "Fully HIPAA-compliant, SOC 2 Type II certified, end-to-end encryption, with strict data handling protocols.",
  },
  {
    question: "How is Breeh different from a virtual receptionist?",
    answer: "No hold times, unlimited simultaneous calls, 24/7 availability, and a fraction of the cost.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: i * 0.04,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const FAQItem = ({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => (
  <motion.button
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={itemVariants}
    onClick={onToggle}
    className={`w-full text-left rounded-xl px-6 py-5 transition-all duration-300 ${isOpen
      ? "bg-secondary border border-primary/20 shadow-sm"
      : "bg-card border border-border hover:border-primary/15"
      }`}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-foreground pr-4">
        {item.question}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-shrink-0"
      >
        <ChevronDown
          className={`w-4 h-4 transition-colors duration-300 ${isOpen ? "text-primary" : "text-muted-foreground"
            }`}
        />
      </motion.div>
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="overflow-hidden"
        >
          <motion.p
            initial={{ y: -8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.25, delay: 0.1 }}
            className="text-sm text-muted-foreground mt-3 leading-relaxed"
          >
            {item.answer}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = faqItems.filter((_, i) => i % 2 === 0);
  const rightColumn = faqItems.filter((_, i) => i % 2 !== 0);

  return (
    <section id="faq" className="py-24 lg:py-32 section-lavender relative overflow-hidden">
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
            FAQ
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-3">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-sm">
            Everything you need to know about Breeh AI.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            {leftColumn.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i * 2}
                isOpen={openIndex === i * 2}
                onToggle={() =>
                  setOpenIndex(openIndex === i * 2 ? null : i * 2)
                }
              />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            {rightColumn.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                index={i * 2 + 1}
                isOpen={openIndex === i * 2 + 1}
                onToggle={() =>
                  setOpenIndex(openIndex === i * 2 + 1 ? null : i * 2 + 1)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
