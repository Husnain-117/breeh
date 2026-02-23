import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { SITE_CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const sections = [
    {
        title: "Information We Collect",
        content:
            "We collect account information (name, email, phone, practice name, billing details), patient data processed during calls (names, contact details, appointment preferences), usage analytics, and standard device/browser information collected automatically.",
    },
    {
        title: "How We Use Your Information",
        content:
            "We use collected data to provide, operate, and improve the Service; process appointments and handle patient calls; communicate about your account and support; comply with HIPAA and other legal obligations; and detect and prevent fraud or abuse.",
    },
    {
        title: "Protected Health Information (PHI)",
        content:
            "Breeh AI processes PHI on behalf of dental practices in accordance with HIPAA regulations. PHI is handled pursuant to our Business Associate Agreement (BAA) with each covered entity. We implement administrative, physical, and technical safeguards to protect PHI from unauthorized access, use, or disclosure.",
    },
    {
        title: "Data Sharing",
        content:
            "We do not sell your personal information. We may share data with trusted service providers bound by confidentiality obligations (hosting, analytics, payment processing), when required by law or governmental request, or in connection with business transfers such as mergers or acquisitions.",
    },
    {
        title: "Data Security",
        content:
            "We employ industry-standard security measures including end-to-end encryption, access controls, regular security audits, and SOC 2 Type II compliance. We continuously monitor and improve our security practices to protect your information.",
    },
    {
        title: "Data Retention",
        content:
            "We retain your information for as long as your account is active or as needed to provide the Service. Upon account termination, we will delete or anonymize your data within 90 days, unless retention is required by law for compliance, disputes, or enforcement purposes.",
    },
    {
        title: "Your Rights",
        content:
            "Depending on your location, you may have the right to access, correct, delete, or port your personal data, as well as object to or restrict certain processing activities. Contact us to exercise any of these rights.",
    },
    {
        title: "Cookies & Tracking",
        content:
            "We use cookies and similar technologies to improve your experience, analyze usage patterns, and deliver relevant content. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features.",
    },
    {
        title: "Children's Privacy",
        content:
            "The Service is not directed to individuals under 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.",
    },
];

const PrivacyPolicy = () => {
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
                            <ShieldCheck className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider">Legal</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
                    >
                        Privacy Policy
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-foreground/50 text-sm"
                    >
                        Last updated: February 21, 2026
                    </motion.p>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
            </section>

            {/* Content */}
            <section className="py-16 lg:py-24">
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="grid gap-5">
                        {sections.map((section, i) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.03 }}
                                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/20 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-5">
                                    <span className="text-sm font-bold text-primary/30 font-display mt-0.5 flex-shrink-0 w-8">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                        <h2 className="font-display font-bold text-lg text-foreground mb-3">{section.title}</h2>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
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
                            Questions about our privacy practices? Contact us at{" "}
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

export default PrivacyPolicy;
