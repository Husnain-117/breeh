import { motion } from "framer-motion";
import { Bot, Brain, Headphones, BarChart3, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Agent Builder",
    description: "Build, train, and deploy intelligent AI agents with no code. Create conversational workflows that handle complex customer queries autonomously.",
    tag: "No-Code",
  },
  {
    icon: Brain,
    title: "Knowledge AI",
    description: "Connect your enterprise data sources — docs, CRMs, APIs — and let AI agents deliver accurate, contextual answers in real time.",
    tag: "RAG-Powered",
  },
  {
    icon: Headphones,
    title: "VoiceX Engine",
    description: "Deploy human-like voice AI with sub-second latency. Natural turn-taking, emotion detection, and seamless live agent handoff.",
    tag: "Voice AI",
  },
  {
    icon: BarChart3,
    title: "Insights & Analytics",
    description: "Real-time dashboards with conversation analytics, sentiment trends, CSAT predictions, and agent performance metrics.",
    tag: "Analytics",
  },
  {
    icon: Zap,
    title: "Omnichannel Orchestration",
    description: "Deploy across 35+ channels — WhatsApp, Instagram, web, email, voice — with unified context and seamless handoffs.",
    tag: "35+ Channels",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 Type II, ISO 27001 certified. Data encryption at rest and in transit. Role-based access and audit logging.",
    tag: "SOC 2",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const FeaturesSection = () => {
  return (
    <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase gradient-bg-primary text-primary-foreground mb-6">
            Platform
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-section-dark-foreground mb-6">
            The Agentic AI Platform
            <br />
            <span className="gradient-text">built for enterprise</span>
          </h2>
          <p className="text-lg text-section-dark-foreground/50 max-w-2xl mx-auto">
            Everything you need to automate customer and employee experiences
            with AI that actually understands, reasons, and acts.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="feature-card group cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-bg-primary flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold tracking-wider uppercase text-primary/80">
                  {feature.tag}
                </span>
              </div>
              <h3 className="font-display font-semibold text-xl text-section-dark-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-section-dark-foreground/50">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
