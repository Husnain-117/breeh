import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import PlaybookModal from "@/components/PlaybookModal";
import {
    ChevronRight, Play, MessageSquare, PhoneCall, Zap, Share2,
    MousePointer2, BarChart3, Quote, ArrowRight, ShieldCheck,
    CheckCircle2, Monitor
} from "lucide-react";


const Product = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("performance tracking");

    const openCalendly = () => {
        window.open(SITE_CONFIG.calendlyUrl, "_blank");
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* 1. Hero Section - Text Only */}
            <section className="pt-32 pb-20 px-6 lg:px-8 section-lavender">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.p
                        {...fadeInUp}
                        className="text-primary font-semibold tracking-wide mb-4 text-sm uppercase"
                    >
                        AI That Augments Your Team
                    </motion.p>
                    <motion.h1
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-5xl md:text-7xl text-foreground mb-8 leading-tight"
                    >
                        Your AI Dental Receptionist <br />
                        <span className="text-primary">Never Misses a Call</span>
                    </motion.h1>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Advanced virtual dental receptionist technology built specifically for modern practices, dental groups, and DSOs.
                    </motion.p>
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="flex items-center justify-center gap-4"
                    >
                        <button
                            onClick={openCalendly}
                            className="btn-primary flex items-center gap-2 px-8 py-4 text-lg"
                        >
                            See Product Demo <ChevronRight className="w-5 h-5" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-20 relative max-w-3xl mx-auto"
                    >
                        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-xl relative overflow-hidden">
                            {/* Decorative gradients */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-2xl flex items-center gap-4 border border-border shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">New Inquiry</p>
                                        <p className="text-base font-medium text-foreground">"Can I schedule an appointment for tomorrow?"</p>
                                    </div>
                                </div>
                                <div className="bg-primary/5 p-6 rounded-2xl flex items-center gap-4 border border-primary/10 shadow-sm">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">AI Response</p>
                                        <p className="text-base font-medium text-foreground">"I found a slot at 2 PM. Booked firmly!"</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Workforce Section - Text Only */}
            <section className="py-24 section-alt px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                            Your <span className="text-primary italic">Dedicated AI Receptionist</span> <br /> Works 24/7
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                            Built by a team with a track record in enterprise-grade AI and tested across high-volume dental group practices and DSOs. Our platform enhances your team's capabilities while ensuring no patient opportunity slips through the cracks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-4 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                <ChevronRight className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-foreground">Fills Open Slots Automatically</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Intelligently scans your practice management software to find and fill gaps in your schedule, maximizing chair utilization without manual intervention.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-card p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-4 hover:border-primary/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                                <PhoneCall className="w-6 h-6" />
                            </div>
                            <h3 className="font-display font-bold text-2xl text-foreground">Handles High Call Volumes</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Never let a busy signal turn away a patient. Our AI manages simultaneous calls with infinite patience and perfect accuracy, day or night.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Call Recovery Section - Text Only */}
            <section className="py-24 section-lavender px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        {...fadeInUp}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        AI Missed Call Recovery
                    </motion.span>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground"
                    >
                        Never Miss Another Patient Call
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
                    >
                        24/7 virtual dental receptionist response that feels completely human.
                        Capture every opportunity, even when your office is closed.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white/80 backdrop-blur-md border border-white/20 rounded-3xl p-10 md:p-14 shadow-lg mx-auto"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse-glow">
                                <PhoneCall className="w-10 h-10" />
                            </div>
                            <h3 className="font-display font-bold text-3xl text-foreground">Immediate Connection</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                                "Even when your front desk is busy with patients, Breeh AI steps in within seconds to help the caller, answering questions, booking appointments, and capturing details directly into your PMS."
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-4 btn-outline-primary flex items-center gap-2"
                            >
                                <Play className="w-4 h-4 fill-current" /> Watch Context-Aware Demo
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. Process Section - Text Only */}
            <section className="py-24 section-alt px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            The Process
                        </motion.span>
                        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6">How it Works</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                            From missed call to booked appointment, our AI handles the entire workflow seamlessly, ensuring your patient feels heard and valued.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-0"></div>

                        {[
                            { step: "01", title: "Call Detection", desc: "When a call goes to voicemail, our AI instantly detects it and initiates the recovery protocol." },
                            { step: "02", title: "AI Engagement", desc: "Your AI dental receptionist texts the patient with a warm, personal message asking how to help." },
                            { step: "03", title: "Booking & Success", desc: "The AI engages in natural conversation to schedule their visit and syncs it to your calendar." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="bg-card p-8 rounded-3xl border border-border flex flex-col items-center text-center relative z-10 shadow-sm hover:translate-y-[-5px] transition-transform"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm mb-6 shadow-lg shadow-primary/20">
                                    {item.step}
                                </div>
                                <h3 className="font-display font-bold text-xl text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Integration Section - Text Only */}
            <section className="py-24 section-lavender px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.span
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        Easy Setup for Your Practice
                    </motion.span>
                    <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-6 leading-tight">
                        Seamless Integration <br /> with Your Existing Workflow
                    </h2>
                    <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
                        No need to change your phone system. Our virtual dental receptionist integrates in just 5 minutes through simple call-forwarding and syncs directly with your practice management software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: Share2, title: "Auto-Sync", desc: "Instantly pushes appointment details and patient notes to your PMS." },
                            { icon: Zap, title: "5-Minute Setup", desc: "Get started today with simple call forwarding. No complex hardware." },
                            { icon: ShieldCheck, title: "HIPAA Compliant", desc: "Enterprise-grade security ensuring your patient data is always protected." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-6 rounded-2xl border border-border flex flex-col items-center gap-4 hover:shadow-md transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Website Chatbot Section */}
            <section className="py-24 section-alt px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            AI Website Chat
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground"
                        >
                            Capture Website Visitors with Your <br className="hidden md:block" /> AI Dental Receptionist
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-muted-foreground max-w-2xl mx-auto mb-10"
                        >
                            Virtual dental receptionist chatbot for your website and patient portal.
                        </motion.p>
                        <button
                            onClick={openCalendly}
                            className="btn-primary flex items-center gap-2 mx-auto"
                        >
                            Try Website Chat Demo
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4 space-y-6">
                            {[
                                { title: "Response rates", value: "15%", label: "Increase compared to last week" },
                                { title: "Conversion rates", value: "8.2%", label: "Increase compared to last week" },
                                { title: "Booked appointments", value: "15%", label: "You booked 16 out of 115 appointments" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="bg-card p-6 rounded-2xl border border-border text-left shadow-sm"
                                >
                                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                                        <ChevronRight className="w-4 h-4 text-primary rotate-[315deg]" />
                                    </div>
                                    <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-[hsl(var(--section-dark))] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden aspect-[16/10]"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                                <div className="w-full h-full bg-card/5 rounded-2xl border border-card/10 p-6 flex flex-col text-left">
                                    <div className="flex items-center gap-2 mb-6 border-b border-card/10 pb-4">
                                        <div className="w-3 h-3 rounded-full bg-primary/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-primary/30"></div>
                                        <div className="w-3 h-3 rounded-full bg-primary/20"></div>
                                        <div className="ml-4 h-4 w-40 bg-card/10 rounded"></div>
                                    </div>
                                    <div className="flex-1 flex gap-6">
                                        <div className="w-48 hidden md:block space-y-3">
                                            {[1, 2, 3, 4, 5].map(j => <div key={j} className="h-10 w-full bg-card/5 rounded-lg"></div>)}
                                        </div>
                                        <div className="flex-1 bg-card/5 rounded-xl p-4 space-y-4">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                                                <div className="bg-card/10 p-3 rounded-lg text-card/80 text-[10px] max-w-[70%]">
                                                    Welcome to our practice. How can I help you today?
                                                </div>
                                            </div>
                                            <div className="flex flex-row-reverse gap-3">
                                                <div className="w-8 h-8 rounded-full bg-card/10"></div>
                                                <div className="bg-primary p-3 rounded-lg text-primary-foreground text-[10px] max-w-[70%]">
                                                    I'm interested in booking a checkup soon.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-left">
                        {[
                            { icon: Monitor, title: "Always available", desc: "Embed your AI dental receptionist on any digital touchpoint to capture leads 24/7." },
                            { icon: MessageSquare, title: "Context-aware conversations", desc: "Maintains your practice's warm, professional tone while handling complex inquiries intelligently." },
                            { icon: MousePointer2, title: "Lead conversion", desc: "Busy patients get instant help online—more bookings, every chat synced to your dashboard." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Testimonials Section */}
            <section className="py-24 px-6 lg:px-8 section-lavender overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16 text-left">
                    <div className="flex-1">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            Case Studies
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground"
                        >
                            What Our Happy <br /> Customers Have to Say
                        </motion.h2>

                        <div className="mt-20 relative">
                            <Quote className="absolute -top-10 -left-6 w-16 h-16 text-primary/10 -rotate-12" />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground italic">
                                    "Monday Morning Game Changer"
                                </h3>
                                <p className="text-muted-foreground text-lg leading-relaxed italic">
                                    "It has made a huge impact on Monday morning. The email our office receives with a summary of the calls we missed over the weekend is a game changer. What used to take a few hours and sometimes missed opportunities is now an effective schedule builder allowing us to prioritize call backs."
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold cursor-pointer group">
                                    Read Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="w-full md:w-[400px] flex-shrink-0">
                        <div className="bg-card rounded-3xl p-8 border border-border shadow-sm">
                            <p className="text-sm text-muted-foreground mb-10">
                                Discover the inspiring stories from our satisfied customers who have achieved remarkable success with our AI product.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { name: "Patricia W", role: "Director of Operations, TManagement", icon: "🏢" },
                                    { name: "Pamela W", role: "Dental Office Manager, Danville Pediatric Dentistry", icon: "🦷" },
                                    { name: "Brent A", role: "Regional Operations Director, Allied OMS", icon: "🌐" },
                                    { name: "Dr. Arshjot A", role: "DDS, FCAD, Zen Dentistry", icon: "👨‍⚕️" },
                                ].map((author, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer ${i === 0 ? 'bg-primary text-primary-foreground shadow-lg' : 'hover:bg-secondary'}`}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-card/20 flex items-center justify-center text-xl">
                                            {author.icon}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs font-bold">{author.name}</p>
                                            <p className={`text-[10px] ${i === 0 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>{author.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <button className="w-full mt-8 py-3 rounded-xl bg-secondary border border-border text-xs font-bold text-foreground hover:bg-primary/10 transition-colors">
                                Read All Stories
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Analytics/Dashboard Section */}
            <section className="py-24 px-6 lg:px-8 section-alt">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span
                        {...fadeInUp}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        Analytics & Control
                    </motion.span>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground"
                    >
                        Complete Visibility Into <br /> Your AI Dental Receptionist Performance
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        Detailed dashboards showing how your virtual receptionist drives ROI.
                    </motion.p>
                    <motion.button
                        {...fadeInUp}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="btn-primary flex items-center gap-2 mx-auto mb-16"
                    >
                        Explore Dashboard
                    </motion.button>

                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-4 no-scrollbar">
                            {["Performance tracking", "ROI measurement", "Behavioral insights", "Team efficiency", "Privacy-first", "Full control"].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab.toLowerCase())}
                                    className={`px-4 py-2 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${activeTab === tab.toLowerCase() ? 'bg-card shadow-sm border border-border text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            layoutId="dashboard"
                            className="bg-[hsl(var(--section-dark))] text-white rounded-3xl p-8 md:p-12 border border-white/10 aspect-video flex flex-col md:flex-row gap-12 text-left shadow-2xl"
                        >
                            <div className="flex-1 space-y-6">
                                <h3 className="font-display font-bold text-2xl text-white">Practice Analytics</h3>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Monitor how your AI dental receptionist handles inbound calls, response rates, and revenue attribution. ROI measurement: Clear data showing how many patients your virtual dental receptionist captured.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center text-center">
                                <div className="text-5xl font-bold text-white mb-2">36%</div>
                                <p className="text-xs text-white/60 mb-8">of missed new callers don't call back again</p>
                                <div className="grid grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map(k => (
                                        <div key={k} className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs">
                                            😞
                                        </div>
                                    ))}
                                    {[1, 2, 3, 4, 5, 6].map(k => (
                                        <div key={k} className="w-10 h-10 rounded-full border-2 border-border"></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 9. Custom AI Training Section */}
            <section className="py-24 px-6 lg:px-8 section-lavender">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 order-2 md:order-1"
                    >
                        <div className="relative group">
                            <div className="w-full max-w-[400px] mx-auto bg-secondary rounded-3xl aspect-[3/4] p-10 border border-border flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 rounded-full bg-card shadow-lg flex items-center justify-center mb-8 relative border border-border">
                                    <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
                                    <Zap className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-display font-bold text-xl mb-4 text-foreground">Custom AI training</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed mb-8">
                                    We train your AI agent for your practice - including in-network insurance and FAQs about coverage and pricing.
                                </p>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map(l => (
                                        <div key={l} className={`h-1 w-8 rounded-full ${l === 1 ? 'bg-primary' : 'bg-primary/20'}`}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1 order-1 md:order-2">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            Seamless Integration
                        </motion.span>
                        <motion.h2
                            {...fadeInUp}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="font-display font-bold text-3xl md:text-5xl mb-6 text-foreground"
                        >
                            Works With Your <br /> Existing Systems
                        </motion.h2>
                        <p className="text-muted-foreground text-lg mb-10">
                            No disruption to your current workflow
                        </p>
                        <button className="btn-primary flex items-center gap-2">
                            Check Integration Compatibility
                        </button>

                        <div className="mt-12 space-y-4">
                            {[
                                { title: "Direct CRM Sync", desc: "Syncs with Open Dental, Dentrix, Eaglesoft & more" },
                                { title: "Smart Scheduling", desc: "Books directly into your existing software calendar" },
                                { title: "HIPAA Compliant", desc: "Enterprise-grade security for patient data" }
                            ].map((feat, m) => (
                                <motion.div
                                    key={m}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + m * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <CheckCircle2 className="w-3 h-3" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-foreground">{feat.title}</p>
                                        <p className="text-[10px] text-muted-foreground">{feat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. Final CTA Form Section */}
            <section className="py-24 px-6 lg:px-8 section-alt">
                <div className="max-w-7xl mx-auto bg-foreground rounded-[3rem] p-8 md:p-20 overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10 text-left">
                        <div className="flex-1">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-xs font-bold uppercase tracking-wider mb-6"
                            >
                                Ready to Get Started
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-display font-bold text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight"
                            >
                                Experience <br /> Breeh AI in <br /> Action
                            </motion.h2>
                            <p className="text-primary-foreground/60 text-lg">
                                See how our AI can work for your specific practice needs.
                            </p>
                        </div>

                        <div className="w-full lg:w-[500px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-secondary rounded-3xl p-8 md:p-12 border border-border"
                            >
                                <h3 className="font-display font-bold text-2xl text-foreground mb-2">Discover Your Missed Revenue</h3>
                                <p className="text-xs text-muted-foreground mb-8">
                                    Most practices miss 17-25% of calls. See how Breeh AI captures these lost opportunities.
                                </p>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-muted-foreground ml-2">Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-card border border-border rounded-xl p-4 text-xs focus:ring-2 focus:ring-primary/20 outline-none text-foreground" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-muted-foreground ml-2">Work Email Address</label>
                                            <input type="email" placeholder="example@practice.com" className="w-full bg-card border border-border rounded-xl p-4 text-xs focus:ring-2 focus:ring-primary/20 outline-none text-foreground" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-muted-foreground ml-2">Number of Locations</label>
                                            <select className="w-full bg-card border border-border rounded-xl p-4 text-xs focus:ring-2 focus:ring-primary/20 outline-none text-foreground">
                                                <option>1 Location</option>
                                                <option>2-5 Locations</option>
                                                <option>6-10 Locations</option>
                                                <option>10+ Locations</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all mt-4 text-xs">
                                        Schedule a Demo
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default Product;
