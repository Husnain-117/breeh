import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "customer-service",
    label: "Customer Service",
    title: "Resolve 90% of queries autonomously",
    description: "Deploy AI agents that understand context, sentiment, and intent — delivering instant, accurate resolutions across voice, chat, and email 24/7.",
    points: [
      "Intelligent ticket routing & prioritization",
      "Real-time sentiment analysis & escalation",
      "Seamless live agent handoff with full context",
      "Multi-turn conversation handling",
    ],
    metric: "90%",
    metricLabel: "First Contact Resolution",
  },
  {
    id: "employee-experience",
    label: "Employee Experience",
    title: "Streamline internal operations with AI",
    description: "From IT helpdesk to HR queries, automate internal workflows and give employees instant access to the information they need.",
    points: [
      "Automated IT support & password resets",
      "HR policy Q&A and leave management",
      "Onboarding workflow automation",
      "Enterprise knowledge search",
    ],
    metric: "75%",
    metricLabel: "Faster Resolution",
  },
  {
    id: "sales",
    label: "Sales & Marketing",
    title: "Convert more leads with AI-powered engagement",
    description: "Engage prospects instantly, qualify leads intelligently, and drive conversions with personalized AI interactions across every channel.",
    points: [
      "Intelligent lead qualification & scoring",
      "Personalized product recommendations",
      "Automated follow-ups & nurture sequences",
      "Campaign performance analytics",
    ],
    metric: "3x",
    metricLabel: "Conversion Rate",
  },
];

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("customer-service");
  const active = useCases.find((u) => u.id === activeTab)!;

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase gradient-bg-primary text-primary-foreground mb-6">
            Solutions
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
            AI-powered solutions
            <br />
            <span className="gradient-text">for every team</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((uc) => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === uc.id
                  ? "gradient-bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {uc.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-5">
              {active.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {active.description}
            </p>
            <ul className="space-y-4 mb-8">
              {active.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full gradient-bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="btn-primary-gradient inline-flex items-center gap-2 text-sm">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Metric Card */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-3xl glass-card-light flex flex-col items-center justify-center p-8 animate-pulse-glow">
              <div className="font-display font-bold text-7xl gradient-text mb-3">
                {active.metric}
              </div>
              <div className="font-display font-medium text-lg text-foreground mb-2">
                {active.metricLabel}
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Average across Breeh AI enterprise deployments
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
