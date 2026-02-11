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
    const [activeTab, setActiveTab] = useState("roi");

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

            {/* 1. Hero Section - Image 1 */}
            <section className="pt-32 pb-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.p
                        {...fadeInUp}
                        className="text-primary font-semibold tracking-wide mb-4"
                    >
                        AI That Augments Your Team
                    </motion.p>
                    <motion.h1
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight"
                    >
                        Your AI Dental Receptionist <br className="hidden md:block" />
                        Never Misses a Patient Call
                    </motion.h1>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        Advanced virtual dental receptionist technology built specifically for modern practices, dental groups, and DSOs.
                    </motion.p>
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <button
                            onClick={openCalendly}
                            className="btn-primary flex items-center gap-2 mx-auto"
                        >
                            See Product Demo <ChevronRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-16 relative max-w-4xl mx-auto"
                    >
                        <div className="bg-lavender rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
                            <div className="flex flex-col md:flex-row items-center gap-12 text-left">
                                <div className="flex-1 space-y-4">
                                    <div className="glass-card-light p-4 rounded-xl flex items-center gap-4 animate-float">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <MessageSquare className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs text-muted-foreground">New Inquiry</p>
                                            <p className="text-sm font-medium">Schedule appointment for tomorrow?</p>
                                        </div>
                                    </div>
                                    <div className="glass-card-light p-4 rounded-xl flex items-center gap-4 animate-float" style={{ animationDelay: "1s" }}>
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                            <Zap className="w-5 h-5" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs text-muted-foreground">AI Response</p>
                                            <p className="text-sm font-medium">Slot confirmed! Patient added to CRM.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="w-64 h-[450px] bg-slate-800 rounded-[3rem] border-8 border-slate-900 shadow-2xl relative overflow-hidden text-left">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                                        <div className="p-6 pt-10 text-white space-y-4 text-xs">
                                            <div className="bg-slate-700/50 p-3 rounded-lg">So sorry we missed your call. This is Katie from Dental Practice SF. Are you a new patient or an existing patient?</div>
                                            <div className="bg-primary p-3 rounded-lg ml-8">I'm a new patient and looking for a deep clean.</div>
                                            <div className="bg-slate-700/50 p-3 rounded-lg">Absolutely! Welcome to our practice. What is your name?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Workforce Section - Image 2 */}
            <section className="py-24 bg-surface px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                            Your <span className="text-primary italic">dedicated AI dental receptionist</span> works alongside your team 24/7.
                        </h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Built by a team with a track record in enterprise-grade AI and tested across high-volume dental group practices and DSOs, our virtual dental receptionist platform enhances your team's capabilities while ensuring no patient opportunity slips through the cracks.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                                <p className="text-sm font-medium">Fills open slots automatically</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <ChevronRight className="w-4 h-4" />
                                </div>
                                <p className="text-sm font-medium">Handles high call volumes without breaks</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-square bg-lavender rounded-3xl overflow-hidden relative shadow-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 glass-card-light p-4 rounded-xl flex items-center gap-3 animate-fade-up">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold">Good News!</p>
                                    <p className="text-[10px] text-muted-foreground">All missed calls are answered.</p>
                                </div>
                                <span className="text-[10px] ml-auto text-muted-foreground">34m ago</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. Call Recovery Section - Image 3 */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <motion.span
                        {...fadeInUp}
                        className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        AI Missed Call Recovery
                    </motion.span>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="font-display font-bold text-3xl md:text-5xl mb-6"
                    >
                        Never Miss Another Patient Call
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-muted-foreground max-w-xl mx-auto mb-10"
                    >
                        24/7 virtual dental receptionist response that feels completely human.
                    </motion.p>
                    <motion.button
                        {...fadeInUp}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="btn-outline-primary flex items-center gap-2 mx-auto"
                    >
                        <Play className="w-4 h-4 fill-current" /> Watch Missed Call Demo
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <div className="feature-card !bg-surface border-none p-10 flex flex-col justify-center text-left">
                        <PhoneCall className="w-12 h-12 text-primary mb-6" />
                        <h3 className="font-display font-bold text-2xl mb-4 text-foreground">Immediate Connection</h3>
                        <p className="text-muted-foreground">Even when your front desk is busy with patients, Breeh AI steps in within seconds to help the caller.</p>
                    </div>
                    <div className="relative group">
                        <div className="w-full h-full bg-lavender rounded-3xl p-8 flex items-center justify-center overflow-hidden">
                            <div className="w-48 h-80 bg-slate-800 rounded-[2rem] border-4 border-slate-900 shadow-xl overflow-hidden relative">
                                <div className="p-4 space-y-3">
                                    <div className="h-6 w-3/4 bg-slate-700/50 rounded-full"></div>
                                    <div className="h-20 w-full bg-slate-700/20 rounded-xl flex items-center justify-center">
                                        <Play className="w-8 h-8 text-primary/50" />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 animate-pulse">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* 4. Process Section - Image 4 */}
            <section className="py-24 bg-white px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <motion.span
                            className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            AI The Process
                        </motion.span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">How it works</h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            When calls go to voicemail, your AI dental receptionist immediately texts the patient with a caring message. Our dental virtual assistant conducts natural conversations, asking about their visit reason, preferred appointment times, and books them directly. Patients often think they're chatting with your human staff because our AI receptionist responds with such genuine care and understanding.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-square bg-surface rounded-3xl flex items-center justify-center overflow-hidden border border-border shadow-sm">
                            <div className="w-64 h-96 bg-white rounded-[2rem] border-8 border-slate-100 shadow-2xl overflow-hidden relative text-left">
                                <div className="p-4 space-y-4">
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary/10"></div>
                                        <div className="flex-1 bg-muted p-2 rounded-lg text-[10px]">How can I help you today?</div>
                                    </div>
                                    <div className="flex flex-row-reverse gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                        <div className="flex-1 bg-primary text-white p-2 rounded-lg text-[10px]">I need a checkup.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. Integration Section - Image 5 */}
            <section className="py-24 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <motion.span
                            className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            AI Easy Setup for Your Practice
                        </motion.span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                            Seamless integration
                        </h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            No need to change your phone system - our virtual dental receptionist integrates in just 5 minutes through simple call-forwarding. Syncs all conversations and appointments directly to your practice management software.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                                <Share2 className="w-5 h-5 text-primary" />
                                <span className="text-xs font-medium">Auto-Sync</span>
                            </div>
                            <div className="p-4 bg-muted rounded-xl flex items-center gap-3">
                                <Zap className="w-5 h-5 text-primary" />
                                <span className="text-xs font-medium">5-Min Setup</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <div className="aspect-video bg-lavender rounded-3xl flex items-center justify-center overflow-hidden shadow-inner border border-primary/10">
                            <div className="relative">
                                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center animate-pulse-glow">
                                    <span className="font-display font-bold text-primary">Breeh</span>
                                </div>
                                <div className="absolute -top-10 -right-10 w-12 h-12 bg-white rounded-lg shadow-md animate-float flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                </div>
                                <div className="absolute -bottom-10 -left-10 w-12 h-12 bg-white rounded-lg shadow-md animate-float flex items-center justify-center" style={{ animationDelay: "1.5s" }}>
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 6. Website Chatbot Section - New Image 1 */}
            <section className="py-24 bg-surface px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6"
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
                                    className="glass-card-light p-6 rounded-2xl border border-primary/5 text-left"
                                >
                                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                                        <ChevronRight className="w-4 h-4 text-green-500 rotate-[315deg]" />
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
                                className="bg-[#0A2A1E] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden aspect-[16/10]"
                            >
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                                <div className="w-full h-full bg-white/5 rounded-2xl border border-white/10 p-6 flex flex-col text-left">
                                    <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                        <div className="ml-4 h-4 w-40 bg-white/10 rounded"></div>
                                    </div>
                                    <div className="flex-1 flex gap-6">
                                        <div className="w-48 hidden md:block space-y-3">
                                            {[1, 2, 3, 4, 5].map(j => <div key={j} className="h-10 w-full bg-white/5 rounded-lg"></div>)}
                                        </div>
                                        <div className="flex-1 bg-white/5 rounded-xl p-4 space-y-4">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/20"></div>
                                                <div className="bg-white/10 p-3 rounded-lg text-white/80 text-[10px] max-w-[70%]">
                                                    Welcome to our practice. How can I help you today?
                                                </div>
                                            </div>
                                            <div className="flex flex-row-reverse gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                                <div className="bg-primary p-3 rounded-lg text-white text-[10px] max-w-[70%]">
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
                                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-foreground">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Testimonials Section - New Image 3 */}
            <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16 text-left">
                    <div className="flex-1">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            AI Case Studies
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
                        <div className="bg-surface rounded-3xl p-8 border border-border shadow-sm">
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
                                        className={`p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer ${i === 0 ? 'bg-primary text-white shadow-lg' : 'hover:bg-primary/5'}`}
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-xl">
                                            {author.icon}
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs font-bold">{author.name}</p>
                                            <p className={`text-[10px] ${i === 0 ? 'text-white/80' : 'text-muted-foreground'}`}>{author.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                            <button className="w-full mt-8 py-3 rounded-xl bg-white border border-border text-xs font-bold text-foreground hover:bg-surface transition-colors">
                                Read All Stories
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Analytics/Dashboard Section - New Image 2/4 */}
            <section className="py-24 px-6 lg:px-8 bg-surface">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span
                        {...fadeInUp}
                        className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                    >
                        AI Analytics & Control
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
                                    className={`px-4 py-2 rounded-full text-[10px] font-bold whitespace-nowrap transition-all ${activeTab === tab.toLowerCase() ? 'bg-white shadow-sm border border-border' : 'text-muted-foreground hover:text-foreground'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            layoutId="dashboard"
                            className="bg-[#D9E2DC] rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 aspect-video flex flex-col md:flex-row gap-12 text-left"
                        >
                            <div className="flex-1 space-y-6">
                                <h3 className="font-display font-bold text-2xl text-foreground/80">Performance tracking</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    Monitor how your AI dental receptionist handles inbound calls, response rates, and revenue attribution. ROI measurement: Clear data showing how many patients your virtual dental receptionist captured.
                                </p>
                            </div>
                            <div className="flex-1 flex flex-col justify-center items-center text-center">
                                <div className="text-5xl font-bold text-foreground/80 mb-2">36%</div>
                                <p className="text-xs text-foreground/60 mb-8">of missed new callers don't call back again</p>
                                <div className="grid grid-cols-4 gap-4">
                                    {[1, 2, 3, 4].map(k => (
                                        <div key={k} className="w-10 h-10 rounded-full bg-red-400/20 flex items-center justify-center text-red-500 text-xs">
                                            😞
                                        </div>
                                    ))}
                                    {[1, 2, 3, 4, 5, 6].map(k => (
                                        <div key={k} className="w-10 h-10 rounded-full border-2 border-white/40"></div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 9. Custom AI Training Section - Image 5 Top */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20 text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 order-2 md:order-1"
                    >
                        <div className="relative group perspective-1000">
                            <div className="w-full max-w-[400px] mx-auto bg-[#F2F1ED] rounded-3xl aspect-[3/4] p-10 shadow-2xl transition-transform duration-500 group-hover:rotate-y-12 flex flex-col items-center justify-center text-center">
                                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-8 relative">
                                    <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
                                    <Zap className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-display font-bold text-xl mb-4">Custom AI training</h4>
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
                            className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            AI Seamless Integration
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
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
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

            {/* 10. Final CTA Form Section - Image 5 Bottom */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto bg-[#0A2A1E] rounded-[3rem] p-8 md:p-20 overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10 text-left">
                        <div className="flex-1">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-wider mb-6"
                            >
                                AI Ready to Get Started
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight"
                            >
                                Experience <br /> Breeh AI in <br /> Action
                            </motion.h2>
                            <p className="text-white/60 text-lg">
                                See how our AI can work for your specific practice needs.
                            </p>
                        </div>

                        <div className="w-full lg:w-[500px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-[#BCE3C1] rounded-3xl p-8 md:p-12 shadow-inner"
                            >
                                <h3 className="font-display font-bold text-2xl text-foreground/80 mb-2">Discover Your Missed Revenue</h3>
                                <p className="text-xs text-foreground/60 mb-8">
                                    Most practices miss 17-25% of calls. See how Breeh AI captures these lost opportunities.
                                </p>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-foreground/60 ml-2">Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-white border-none rounded-xl p-4 text-xs shadow-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-foreground/60 ml-2">Work Email Address</label>
                                            <input type="email" placeholder="example@practice.com" className="w-full bg-white border-none rounded-xl p-4 text-xs shadow-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-foreground/60 ml-2">Number of Locations</label>
                                            <select className="w-full bg-white border-none rounded-xl p-4 text-xs shadow-sm focus:ring-2 focus:ring-primary/20 outline-none">
                                                <option>1 Location</option>
                                                <option>2-5 Locations</option>
                                                <option>6-10 Locations</option>
                                                <option>10+ Locations</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all mt-4 text-xs">
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
