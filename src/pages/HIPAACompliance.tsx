import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { SITE_CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import { Shield, Lock, FileCheck, Server } from "lucide-react";

const safeguards = [
    {
        icon: Shield,
        title: "Administrative Safeguards",
        items: [
            "Designated Privacy & Security Officers",
            "Comprehensive workforce HIPAA training",
            "Regular risk assessments & policy reviews",
            "Documented incident response procedures",
            "BAAs with all subcontractors",
        ],
    },
    {
        icon: Lock,
        title: "Technical Safeguards",
        items: [
            "End-to-end encryption (TLS 1.3) in transit",
            "AES-256 encryption for data at rest",
            "Multi-factor authentication for all access",
            "Automated audit logging for PHI access",
            "Role-based access controls (RBAC)",
        ],
    },
    {
        icon: Server,
        title: "Physical Safeguards",
        items: [
            "SOC 2 Type II certified data centers",
            "Biometric multi-layered facility access",
            "24/7 monitoring & surveillance",
            "Redundant power & disaster recovery",
            "Secure media disposal protocols",
        ],
    },
    {
        icon: FileCheck,
        title: "Certifications",
        items: [
            "HIPAA Privacy & Security Rule compliance",
            "SOC 2 Type II certification",
            "Regular third-party security audits",
            "Annual penetration testing",
            "Continuous compliance monitoring",
        ],
    },
];

const policies = [
    {
        title: "Business Associate Agreement",
        content:
            "Breeh AI enters into a BAA with every dental practice we serve, covering permitted uses and disclosures of PHI, safeguards against unauthorized use, breach notification procedures and timelines, subcontractor compliance requirements, and data return and destruction obligations upon termination.",
    },
    {
        title: "Breach Notification",
        content:
            "In the event of a data breach involving PHI, Breeh AI will notify affected covered entities without unreasonable delay and no later than 60 days after discovery, in compliance with the HIPAA Breach Notification Rule. Our incident response team follows documented procedures to contain, investigate, and remediate any security incidents.",
    },
    {
        title: "Patient Data Handling",
        content:
            "All patient data processed through Breeh AI — including call recordings, appointment details, and personal health information — is encrypted, access-controlled, and retained only as long as necessary. We never sell, share, or use PHI for marketing purposes.",
    },
];

const HIPAACompliance = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const openCalendly = () => window.open(SITE_CONFIG.calendlyUrl, "_blank");

    return (
        <div className="min-h-screen bg-background overflow-x-hidden">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* Hero */}
            <section
                className="pt-36 pb-20 relative overflow-hidden"
                style={{
                    background: "linear-gradient(135deg, hsl(244 58% 50%) 0%, hsl(244 55% 40%) 50%, hsl(244 50% 28%) 100%)",
                }}
            >
                <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                            <Shield className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider">
                            Security & Compliance
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
                    >
                        HIPAA Compliance
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-foreground/60 text-base max-w-2xl"
                    >
                        Built from the ground up to protect patient data and meet the highest standards of healthcare privacy.
                    </motion.p>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
            </section>

            {/* Safeguards Grid */}
            <section className="py-16 lg:py-24 section-lavender">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="text-sm font-semibold text-accent tracking-wide mb-3">Our Safeguards</p>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground">
                            Multi-Layered Protection
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-5">
                        {safeguards.map((group, i) => (
                            <motion.div
                                key={group.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                                    <group.icon className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="font-display font-bold text-lg text-foreground mb-4">{group.title}</h3>
                                <ul className="space-y-2.5">
                                    {group.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Policies */}
            <section className="py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="grid gap-5">
                        {policies.map((policy, i) => (
                            <motion.div
                                key={policy.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="text-sm font-bold text-primary/30 font-display mt-0.5 flex-shrink-0 w-8">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h2 className="font-display font-bold text-lg text-foreground mb-3">{policy.title}</h2>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{policy.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-12 bg-secondary rounded-2xl p-8 text-center"
                    >
                        <p className="text-sm text-muted-foreground">
                            Need our BAA or have compliance questions? Contact our Privacy Officer at{" "}
                            <a href="mailto:husnain.akram@gmail.com" className="text-accent font-semibold hover:underline">
                                husnain.akram@gmail.com
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default HIPAACompliance;
