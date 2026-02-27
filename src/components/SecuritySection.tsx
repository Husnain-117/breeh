import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  FileCheck,
  CheckCircle2,
  Plug,
  ArrowRight,
  Shield,
  Users,
} from "lucide-react";

const complianceBadges = [
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: Lock, label: "ISO 27001" },
  { icon: FileCheck, label: "ISO 27701" },
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "End-to-End Encryption" },
  { icon: ShieldCheck, label: "Responsible AI" },
];

const integrations = [
  "Dentrix",
  "Eaglesoft",
  "Open Dental",
  "Curve Dental",
  "PracticeWorks",
  "Softdent",
  "Carestream",
  "MacPractice",
  "Dentimax",
  "ABELDent",
  "Dovetail",
  "Planet DDS",
];

const SecuritySection = () => {
  return (
    <section className="section-alt py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-3">
            Security & Integrations
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Deploy with <span className="gradient-text">Confidence</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Enterprise-grade security, compliance, and 50+ integrations —
            everything you need to go live with confidence.
          </p>
        </motion.div>

        {/* Main container card */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 lg:p-12 border border-border/30 shadow-xl shadow-primary/5">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* LEFT — Security & Compliance */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  Security & Compliance
                </h3>
              </div>

              {/* Compliance grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {complianceBadges.map((badge, i) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-background border border-border/50 transition-all duration-300 hover:bg-primary/5 hover:border-primary/20 cursor-default"
                  >
                    <CheckCircle2 className="w-[18px] h-[18px] text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground/80">
                      {badge.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Our robust guardrails and Responsible AI principles protect
                sensitive patient data while meeting industry compliance.
              </p>

              <a
                href="/hipaa"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link hover:gap-3 transition-all"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </motion.div>

            {/* RIGHT — Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Plug className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">
                  50+ Integrations
                </h3>
              </div>

              {/* Integration cloud */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {integrations.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                    className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground/70
                      transition-all duration-300 cursor-default
                      hover:bg-primary hover:text-white hover:scale-105 hover:shadow-md hover:shadow-primary/20 hover:border-primary"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Connect with your existing practice management system via 50+
                pre-built integrations. Go live in minutes, not months.
              </p>

              <a
                href="/integrations"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link hover:gap-3 transition-all"
              >
                View all integrations
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Bottom trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 pt-8 border-t border-border/50 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2.5">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/60">
                HIPAA-compliant security with Safe AI
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-primary/60 to-purple-500/60 flex items-center justify-center"
                  >
                    <Users className="w-3 h-3 text-white" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-foreground/50 font-medium">
                Trusted by 200+ practices
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
