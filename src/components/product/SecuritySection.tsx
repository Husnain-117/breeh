import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileCheck, Server, ArrowRight, Check } from "lucide-react";

const badges = [
    { icon: ShieldCheck, title: "HIPAA Compliant", desc: "Full compliance with healthcare data protection regulations" },
    { icon: Lock, title: "SOC 2 Type II", desc: "Independently audited security controls and processes" },
    { icon: FileCheck, title: "End-to-End Encryption", desc: "AES-256 encryption for all data at rest and in transit" },
    { icon: Server, title: "99.99% Uptime", desc: "Enterprise-grade infrastructure with redundant failovers" },
];

const features = [
    { title: "Data Encryption", desc: "AES-256 encryption at rest and in transit. All PHI is encrypted before storage." },
    { title: "Access Controls", desc: "Role-based permissions, MFA enforcement, and comprehensive audit logs." },
    { title: "Network Security", desc: "VPC isolation, DDoS protection, and continuous vulnerability scanning." },
    { title: "Backup & Recovery", desc: "Automated backups with 30-day retention and disaster recovery protocols." },
];

const SecuritySection = () => {
    return (
        <section className="py-20 px-6 lg:px-8 section-alt relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Security &amp; Compliance
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Enterprise-grade protection
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your patient data is protected by industry-leading security measures.
                    </motion.p>
                </div>

                {/* Compliance badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                    {badges.map((badge, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                            className="bg-card backdrop-blur rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center group cursor-default">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4 group-hover:shadow-lg group-hover:shadow-primary/20 transition-shadow">
                                <badge.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-sm text-foreground mb-2">{badge.title}</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">{badge.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Security features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {features.map((feat, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                                <Check className="w-5 h-5" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm text-foreground mb-1">{feat.title}</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Enterprise CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary/5 to-purple-500/5 rounded-2xl p-8 border border-primary/20 text-center">
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">Need a security audit?</h3>
                    <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto">
                        Our team will provide a comprehensive security assessment tailored to your organization's requirements.
                    </p>
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors">
                        Request Audit <ArrowRight className="w-4 h-4" />
                    </button>
                </motion.div>

                {/* Certifications bar */}
                <div className="mt-12 pt-8 border-t border-border flex justify-center items-center gap-8 flex-wrap opacity-40 text-xs uppercase tracking-wider text-muted-foreground">
                    {["HIPAA", "SOC 2", "GDPR", "CCPA", "HITRUST"].map((cert) => (
                        <span key={cert} className="font-bold">{cert}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
