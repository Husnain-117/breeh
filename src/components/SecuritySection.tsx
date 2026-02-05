import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Plug } from "lucide-react";

const certifications = [
  { icon: Shield, label: "HIPAA" },
  { icon: Lock, label: "SOC 2 Type II" },
  { icon: FileCheck, label: "ISO 27001" },
];

const integrations = [
  "Dentrix", "Eaglesoft", "Open Dental", "Curve Dental",
];

const SecuritySection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Top - gradient banner */}
      <div className="gradient-bg-primary py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-bold text-3xl md:text-5xl text-accent-foreground text-center italic"
          >
            Deploy with confidence, deliver value faster
          </motion.h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="section-lavender py-0 px-6 lg:px-8 -mt-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Security Card */}
            <div className="bg-background rounded-3xl p-8 md:p-10 shadow-sm border border-border/50">
              <div className="flex gap-6 mb-6">
                {certifications.map((cert) => (
                  <div key={cert.label} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <cert.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-foreground">{cert.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our robust guardrails and HIPAA-compliant AI principles protect 
                sensitive patient data while ensuring industry-leading compliance standards.
              </p>
              <a href="#" className="inline-block bg-foreground text-background rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors">
                Learn more
              </a>
            </div>

            {/* Integrations Card */}
            <div>
              <div className="gradient-bg-primary rounded-full px-6 py-3 inline-block mb-4">
                <span className="text-accent-foreground font-semibold text-sm">
                  Go to market faster with 50+ integrations
                </span>
              </div>
              <div className="bg-background rounded-3xl p-8 md:p-10 shadow-sm border border-border/50">
                <div className="flex gap-6 mb-6">
                  {integrations.map((name) => (
                    <span key={name} className="text-sm font-display font-bold text-foreground/70">
                      {name}
                    </span>
                  ))}
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  Connect with your existing practice management system via 
                  50+ pre-built integrations, including Dentrix, Eaglesoft, 
                  Open Dental, and Curve.
                </p>
                <a href="#" className="inline-block bg-foreground text-background rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors">
                  Learn more
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mb-16"
          >
            <div className="bg-muted rounded-full px-8 py-4 inline-flex items-center gap-3 shadow-sm border border-border/50">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">
                HIPAA-compliant security with Safe AI
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
