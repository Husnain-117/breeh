import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlaybookModal from "@/components/PlaybookModal";
import { SITE_CONFIG } from "@/lib/config";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const sections = [
    {
        title: "Acceptance of Terms",
        content:
            "By accessing or using Breeh AI services, website, or any related applications (collectively, the Service), you agree to be bound by these Terms of Service. If you do not agree, you may not access or use the Service. These Terms apply to all visitors, users, and others who access or use the Service.",
    },
    {
        title: "Description of Service",
        content:
            "Breeh AI provides an AI-powered dental receptionist service that answers patient calls, schedules appointments, sends reminders, and integrates with dental practice management systems. The Service is designed for dental practices and healthcare providers and is provided on a subscription basis.",
    },
    {
        title: "Eligibility",
        content:
            "You must be at least 18 years of age and have the authority to enter into these Terms on behalf of your dental practice or organization. By using the Service, you represent and warrant that you meet these requirements.",
    },
    {
        title: "Account & Security",
        content:
            "You must register for an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. Notify Breeh AI immediately of any unauthorized access.",
    },
    {
        title: "Acceptable Use",
        content:
            "You agree to use the Service only for lawful purposes. You may not violate any applicable laws, transmit objectionable material, interfere with the Service, reverse engineer any aspect of it, or collect personally identifiable information without proper consent.",
    },
    {
        title: "HIPAA Compliance",
        content:
            "Breeh AI processes protected health information (PHI) on behalf of dental practices. We enter into a Business Associate Agreement (BAA) with each covered entity as required by HIPAA. Our handling of PHI is governed by our BAA and our HIPAA Compliance policies.",
    },
    {
        title: "Payment & Billing",
        content:
            "Subscription fees are billed in advance on a monthly or annual basis. All fees are non-refundable unless otherwise stated. Breeh AI reserves the right to modify pricing with 30 days' written notice. Failure to pay may result in suspension or termination of your account.",
    },
    {
        title: "Intellectual Property",
        content:
            "The Service, including its original content, features, and functionality, is owned by Breeh AI and protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of the Service without prior written consent.",
    },
    {
        title: "Limitation of Liability",
        content:
            "To the fullest extent permitted by law, Breeh AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenues, data, use, goodwill, or other intangible losses resulting from your use of the Service.",
    },
    {
        title: "Termination",
        content:
            "We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including breach of these Terms. Upon termination, your right to use the Service will cease. Provisions that should survive termination shall survive.",
    },
];

const TermsOfService = () => {
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
                            <FileText className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-semibold text-primary-foreground/60 uppercase tracking-wider">Legal</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4"
                    >
                        Terms of Service
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
                {/* Decorative gradient orb */}
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
                            Questions about these terms? Contact us at{" "}
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

export default TermsOfService;
