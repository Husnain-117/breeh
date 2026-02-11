import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What Practice Management Systems does Breeh integrate with?",
    answer:
      "Breeh integrates with all major dental PMS platforms including Dentrix, Eaglesoft, Open Dental, Curve Dental, and many more. Our team handles the full integration process for you.",
  },
  {
    question: "Is Breeh available 24/7?",
    answer:
      "Yes! Breeh AI operates around the clock, 365 days a year. Your patients can book appointments, get answers, and receive care information at any time — even after hours and on holidays.",
  },
  {
    question: "What telephone providers does Breeh integrate with?",
    answer:
      "Breeh works with all major telephone providers. Simply forward your calls to your dedicated Breeh number, and our AI handles the rest.",
  },
  {
    question: "How does Breeh work?",
    answer:
      "Breeh uses advanced conversational AI to answer patient calls, schedule appointments, handle inquiries, and follow up — all in a natural, human-like voice that patients love.",
  },
  {
    question: "How can Breeh help my practice?",
    answer:
      "Breeh eliminates missed calls, fills your schedule automatically, reduces staff workload, and improves patient satisfaction — leading to more revenue and happier patients.",
  },
  {
    question: "How important is a prompt response to patient calls?",
    answer:
      "Extremely. 78% of patients book with the first practice that responds. Every missed or delayed call is potential revenue walking out the door.",
  },
  {
    question: "Can I have Breeh answer all of my calls?",
    answer:
      "Absolutely. You can configure Breeh to answer all calls, only overflow calls, or after-hours calls — whatever works best for your practice workflow.",
  },
  {
    question: "How many calls can Breeh answer simultaneously?",
    answer:
      "Breeh can handle unlimited simultaneous calls. Unlike human receptionists, there's never a busy signal or hold time for your patients.",
  },
  {
    question: "Can Breeh transfer calls to my staff?",
    answer:
      "Yes. Breeh can intelligently route and transfer calls to specific team members based on the nature of the inquiry, ensuring the right person handles each situation.",
  },
  {
    question: "Can Breeh speak more than one language?",
    answer:
      "Yes! Breeh supports multiple languages including English and Spanish, with more languages being added regularly to serve diverse patient populations.",
  },
  {
    question: "How does Breeh's onboarding process work?",
    answer:
      "Our team handles everything: PMS integration, call flow configuration, and voice customization. Most practices are fully live within 5 business days.",
  },
  {
    question: "Will Breeh work with my current phone number?",
    answer:
      "Yes. You keep your existing phone number. Simply set up call forwarding to your Breeh number, and you're ready to go — no number changes needed.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "Breeh is fully HIPAA-compliant with SOC 2 Type II certification, end-to-end encryption, and strict data handling protocols to protect patient information.",
  },
  {
    question: "How is Breeh different from a virtual receptionist or call center?",
    answer:
      "Unlike human-based services, Breeh never puts patients on hold, handles unlimited calls simultaneously, works 24/7 without breaks, and costs a fraction of traditional services.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.06,
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
    className={`w-full text-left rounded-xl px-6 py-5 transition-all duration-300 group ${isOpen
        ? "bg-secondary border border-primary/20 shadow-md"
        : "bg-card border border-border hover:border-primary/30 hover:bg-secondary"
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
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="overflow-hidden"
        >
          <motion.p
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-sm text-muted-foreground mt-4 leading-relaxed"
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              FAQ
            </span>
          </motion.div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base">
            Get answers to common questions about Breeh AI
          </p>
        </motion.div>

        {/* Two-column FAQ grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Left column */}
          <div className="flex flex-col gap-4">
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

          {/* Right column */}
          <div className="flex flex-col gap-4">
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
