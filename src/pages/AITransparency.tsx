import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Shield, Eye, Heart, Brain, Users, Lock, Mic,
  UserCheck, Building, ArrowRight, ChevronRight,
  Target, Scale, AlertTriangle
} from "lucide-react";

const AITransparency = () => {
  const [playbookOpen, setPlaybookOpen] = useState(false);

  const openCalendly = () => {
    window.open(SITE_CONFIG.calendlyUrl, "_blank");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const principles = [
    {
      icon: Target,
      title: "Purpose-Built, Not General-Purpose",
      desc: "Our AI is designed specifically for dental support — not adapted from generic chatbots.",
    },
    {
      icon: Users,
      title: "Human-Led Decision-Making",
      desc: "AI supports — never replaces — your staff. Clinical decisions always stay with your team.",
    },
    {
      icon: Eye,
      title: "Transparent Interactions",
      desc: "Patients are always informed when speaking with AI. No deception, ever.",
    },
    {
      icon: Lock,
      title: "Privacy by Design",
      desc: "HIPAA-aligned from day one. Patient data is encrypted, isolated, and never sold.",
    },
    {
      icon: Scale,
      title: "Bias-Aware Systems",
      desc: "Continuously reviewed and improved to ensure fair treatment across all demographics.",
    },
  ];

  const dataPrinciples = [
    {
      icon: Mic,
      title: "Minimal Voice Data Use",
      desc: "No voice recording beyond necessary processing. Conversations are not stored as audio.",
    },
    {
      icon: Shield,
      title: "Patient Privacy Respected",
      desc: "No scraping of external patient data. We only use information provided by your practice.",
    },
    {
      icon: Building,
      title: "Clinicians Decide, Not AI",
      desc: "No clinical or diagnostic decisions made by AI. Treatment recommendations are always human.",
    },
  ];

  const faqs = [
    {
      q: "Is patient data secure and HIPAA compliant?",
      a: "Yes. Breeh AI is fully HIPAA compliant with end-to-end encryption, SOC 2 Type II certification, and North American data residency. We sign BAAs with every practice.",
    },
    {
      q: "Can staff and doctors tell the difference between Breeh AI and human interaction?",
      a: "Breeh AI is designed to be natural and conversational, but we always clearly identify AI interactions. Staff have full visibility into AI-handled conversations through the dashboard.",
    },
    {
      q: "What if a patient wants to speak to a human?",
      a: "Our AI instantly recognizes this request and performs a live transfer to your front desk during business hours, or takes a detailed message for callback during off-hours.",
    },
    {
      q: "How does your AI actually work? (Non-technical explanation)",
      a: "Think of Breeh AI as a highly trained virtual receptionist. It listens to patient calls, understands what they need (appointments, insurance questions, directions), and responds naturally — all while syncing information directly to your practice management software.",
    },
    {
      q: "What data do you collect and how is it used?",
      a: "We collect only the information needed to handle patient inquiries: name, contact details, appointment preferences, and conversation summaries. This data is used solely to serve your patients and is never shared or sold.",
    },
    {
      q: "Can patients opt out of AI interactions?",
      a: "Absolutely. Patients can request to speak with a human at any point. You can also configure which call types are handled by AI versus routed directly to staff.",
    },
    {
      q: "What are the limitations of your AI?",
      a: "Breeh AI does not provide medical advice, make clinical decisions, or handle emergency situations. It's focused on administrative tasks: scheduling, insurance inquiries, general practice questions, and follow-ups.",
    },
    {
      q: "How do you prevent AI bias in patient interactions?",
      a: "We conduct regular bias audits, use diverse training datasets, and continuously monitor interaction quality across demographic groups. Our team reviews edge cases and updates models quarterly.",
    },
    {
      q: "Do you use patient conversations to train your AI?",
      a: "No. Patient conversations are not used to train general AI models. Practice-specific customizations are done with explicit consent and only use anonymized data when needed.",
    },
    {
      q: "What happens if the AI makes a mistake?",
      a: "All AI interactions are logged and reviewable. Mistakes trigger automatic alerts to your team. Our support team works with you to address issues and continuously improve accuracy.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden font-body">
      <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6 lg:px-8 section-lavender">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            {...fadeInUp}
            className="font-display font-bold text-5xl md:text-7xl text-foreground mb-6 leading-tight"
          >
            Responsible AI, <br /> Built with Care
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Technology should be transparent, accountable, and always designed with human care at its core.
          </motion.p>
          <motion.button
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            onClick={() => (window.location.href = "mailto:hello@breehai.com")}
            className="btn-primary"
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* ── Belief Statement ── */}
      <section className="py-24 px-6 lg:px-8 section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp} className="relative">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground leading-snug mb-6">
              At Breeh AI, we believe{" "}
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-lg inline-block">
                technology should serve people
              </span>{" "}
              — not the other way around.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              That's why we design AI systems that support dental teams with empathy, clarity, and full transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── AI Principles — Two Column ── */}
      <section className="py-24 px-6 lg:px-8 section-lavender">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Light Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-10 border border-border"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-8">Our AI Principles</h3>
            <div className="space-y-0">
              {principles.map((p, i) => (
                <div key={i} className="border-t border-border py-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dark Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground rounded-3xl p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-2xl text-primary-foreground mb-8">Data & Privacy Principles</h3>
            <div className="space-y-0">
              {dataPrinciples.map((p, i) => (
                <div key={i} className="border-t border-primary-foreground/10 py-5 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground shrink-0 mt-0.5">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary-foreground text-sm mb-1">{p.title}</h4>
                    <p className="text-xs text-primary-foreground/60 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Human in the Loop ── */}
      <section className="py-24 px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-card rounded-3xl p-10 md:p-16 border border-border shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <Heart className="w-3 h-3" /> Human in the Loop
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-snug">
                  Smart AI still needs smart humans. We ensure sensitive cases are reviewed, not automated.
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain human oversight through Human in the Loop (HITL) processes, especially in edge cases or escalations, ensuring care decisions remain thoughtful and trustworthy.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-secondary rounded-2xl p-8 text-center w-full max-w-[300px]">
                  <UserCheck className="w-16 h-16 text-primary mx-auto mb-4" />
                  <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
                    <p className="text-sm text-foreground font-medium">
                      "We might need your help with a sensitive patient case!"
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">34m ago</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 px-6 lg:px-8 section-lavender">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-12">
              Get answers to common questions about Breeh AI's transparency and safety practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl border border-border p-6 md:p-10"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary text-sm md:text-base py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-8 section-alt">
        <div className="max-w-5xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-foreground rounded-3xl p-10 md:p-16 overflow-hidden relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Ready to Get Started
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-primary-foreground mb-4 leading-tight">
                  Have Questions? <br /> We're Here to Help
                </h2>
                <p className="text-primary-foreground/60 mb-8">
                  Connect with our team for personalized guidance
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => (window.location.href = "mailto:hello@breehai.com")}
                    className="bg-primary text-primary-foreground font-semibold rounded-full px-8 py-3 text-sm hover:bg-primary/90 transition-colors"
                  >
                    Contact Our Experts
                  </button>
                  <button
                    onClick={openCalendly}
                    className="border border-primary-foreground/30 text-primary-foreground font-semibold rounded-full px-8 py-3 text-sm hover:bg-primary-foreground/10 transition-colors"
                  >
                    Schedule Demo
                  </button>
                </div>
                <p className="text-primary-foreground/40 text-xs mt-4">
                  No setup fees, cancel anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
      <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
    </div>
  );
};

export default AITransparency;
