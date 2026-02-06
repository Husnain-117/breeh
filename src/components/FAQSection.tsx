import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What Practice Management Systems does Breeh integrate with?",
    a: "Breeh integrates with all major dental PMS platforms including Dentrix, Eaglesoft, Open Dental, Curve Dental, and 50+ more systems through our universal API connectors.",
  },
  {
    q: "What telephone providers does Breeh integrate with?",
    a: "Breeh works with any phone system. Simply forward your calls to your dedicated Breeh number — no hardware changes or complex setup required.",
  },
  {
    q: "How can Breeh help my practice?",
    a: "Breeh answers every patient call 24/7, books appointments automatically, sends follow-up reminders, and reduces no-shows — so your staff can focus on in-office patient care.",
  },
  {
    q: "Can I have Breeh answer all of my calls?",
    a: "Yes! You can configure Breeh to answer all calls, or only overflow and after-hours calls. It's fully customizable to your practice's needs.",
  },
  {
    q: "Can Breeh transfer calls to my staff?",
    a: "Absolutely. Breeh can intelligently route urgent calls to your staff while handling routine scheduling and inquiries autonomously.",
  },
  {
    q: "How does Breeh's onboarding process work?",
    a: "Our onboarding specialist sets everything up for you in about 5 days. We configure your office info, preferences, and PMS integration — you just forward your calls and go live.",
  },
  {
    q: "What security measures are in place?",
    a: "Breeh is fully HIPAA-compliant with SOC 2 Type II certification. All patient data is encrypted in transit and at rest with enterprise-grade security.",
  },
  {
    q: "Is Breeh available 24/7?",
    a: "Yes, Breeh never sleeps. It answers calls, texts, and books appointments around the clock — including weekends and holidays.",
  },
  {
    q: "How does Breeh work?",
    a: "Breeh uses advanced conversational AI to understand patient needs, answer questions, schedule appointments, and follow up — all with natural, human-like conversation.",
  },
  {
    q: "How important is a prompt response to patient calls?",
    a: "Critical. 78% of patients book with the first practice that responds. Every missed or delayed call is a potential lost patient worth thousands in lifetime value.",
  },
  {
    q: "How many calls can Breeh answer simultaneously?",
    a: "Unlimited. Unlike human staff, Breeh can handle hundreds of concurrent calls with zero wait time for patients.",
  },
  {
    q: "Can Breeh speak more than one language?",
    a: "Yes, Breeh supports multiple languages including English and Spanish, with more languages being added regularly.",
  },
  {
    q: "Will Breeh work with my current phone number?",
    a: "Yes. You keep your existing phone number. Simply set up call forwarding to your Breeh number — it's that simple.",
  },
  {
    q: "How is Breeh different from a virtual receptionist or call center?",
    a: "Breeh is instant, consistent, and available 24/7 with zero wait times. Unlike human call centers, it never puts patients on hold, never calls in sick, and costs a fraction of the price.",
  },
];

const FAQSection = () => {
  const half = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, half);
  const rightColumn = faqs.slice(half);

  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary tracking-wide mb-4 justify-center">
            <span className="w-8 h-[2px] bg-primary rounded-full" />
            FAQ
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get answers to common questions about Breeh AI
          </p>
        </motion.div>

        {/* Two-column FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-6 lg:gap-10"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {leftColumn.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`left-${i}`}
                className="border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md data-[state=open]:shadow-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground text-[15px] py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="space-y-3">
            {rightColumn.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`right-${i}`}
                className="border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md data-[state=open]:shadow-primary/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground text-[15px] py-5 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
