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

const FAQItem = ({
  item,
  isOpen,
  onToggle,
}: {
  item: (typeof faqItems)[0];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className="w-full text-left bg-muted/30 border border-border/50 rounded-xl px-6 py-5 transition-all duration-300 hover:border-primary/30 group"
  >
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm font-medium text-foreground pr-4">
        {item.question}
      </span>
      <ChevronDown
        className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            {item.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </button>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftColumn = faqItems.filter((_, i) => i % 2 === 0);
  const rightColumn = faqItems.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide">
              FAQ
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base">
            Get answers to common questions about Breeh AI
          </p>
        </motion.div>

        {/* Two-column FAQ grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {/* Left column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
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
                isOpen={openIndex === i * 2 + 1}
                onToggle={() =>
                  setOpenIndex(openIndex === i * 2 + 1 ? null : i * 2 + 1)
                }
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
