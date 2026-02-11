import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import PlaybookModal from "@/components/PlaybookModal";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/lib/config";
import {
    CheckCircle2, ArrowRight, Quote, ShieldCheck,
    Users, Building2, Stethoscope, Headset, Server
} from "lucide-react";

// Placeholder images - using available assets
import ctaPerson from "@/assets/cta-person.jpg";
import heroDental from "@/assets/hero-dental.jpg";
import heroDental1 from "@/assets/hero-dental-1.jpg";
import heroDental2 from "@/assets/hero-dental-2.jpg";

const Solutions = () => {
    const [playbookOpen, setPlaybookOpen] = useState(false);
    const [activeRole, setActiveRole] = useState("dso");

    const openCalendly = () => {
        window.open(SITE_CONFIG.calendlyUrl, "_blank");
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const roles = [
        {
            id: "dso",
            label: "DSO Executive",
            title: "DSO Executives", // Consistent with image
            icon: Building2,
            image: heroDental,
            description: "Scale operations efficiently across all locations with centralized AI management.",
            features: [
                "Centralized dashboard for all locations",
                "Standardized patient experience",
                "Enterprise-grade security & compliance",
                "Revenue cycle optimization"
            ]
        },
        {
            id: "practice",
            label: "Practice Manager",
            title: "Practice Manager & Operations",
            icon: Users,
            image: ctaPerson,
            description: "Automate routine tasks and free up your staff to focus on in-office patient care.",
            features: [
                "Automated appointment scheduling",
                "Reduced front-desk workload",
                "Seamless PMS integration",
                "24/7 patient support"
            ]
        },
        {
            id: "marketing",
            label: "Marketing Lead",
            title: "Marketing Leads",
            icon: ArrowRight, // Placeholder
            image: heroDental1,
            description: "Maximize ROI on ad spend by ensuring every lead gets a response instantly.",
            features: [
                "Instant lead response (speed to lead)",
                "Conversion tracking & analytics",
                "Campaign performance insights",
                "Increased new patient capture"
            ]
        },
        {
            id: "frontdesk",
            label: "Front-Desk Staff",
            title: "Front-Desk & Reception Staff",
            icon: Headset,
            image: heroDental2,
            description: "Stop answering repetitive questions and focus on the patients in front of you.",
            features: [
                "Filter out spam and robocalls",
                "Handle routine FAQs automatically",
                "Live call transfer for urgent needs",
                "Stress-free peak hours"
            ]
        },
        {
            id: "it",
            label: "IT Support",
            title: "IT & Security Teams",
            icon: Server,
            image: heroDental,
            description: "Deploy a secure, compliant AI solution without complex infrastructure changes.",
            features: [
                "HIPAA Compliance & SOC 2 Type II",
                "Simple API & webhooks integration",
                "Reliable cloud infrastructure",
                "North American data residency"
            ]
        }
    ];

    const activeRoleData = roles.find(r => r.id === activeRole) || roles[0];

    return (
        <div className="min-h-screen bg-background overflow-x-hidden font-body">
            <Navbar onBookDemo={openCalendly} onOpenPlaybook={() => setPlaybookOpen(true)} />

            {/* 1. Hero Section */}
            <section className="pt-32 pb-20 px-6 lg:px-8 bg-surface">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        {...fadeInUp}
                        className="font-display font-bold text-4xl md:text-6xl text-foreground mb-6 leading-tight"
                    >
                        AI Dental Receptionist <br />
                        Solutions Tailored for <br />
                        <span className="text-primary italic">Every Role</span>
                    </motion.h1>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        See how our virtual dental receptionist solves specific challenges for each member of your team.
                    </motion.p>
                    <motion.button
                        {...fadeInUp}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        onClick={openCalendly}
                        className="btn-primary mb-20"
                    >
                        Find Your Solution
                    </motion.button>

                    {/* Role Cards - Navigation */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {roles.map((role, i) => (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                onClick={() => setActiveRole(role.id)}
                                className={`cursor-pointer rounded-2xl overflow-hidden relative group aspect-[3/4] transition-all duration-300 ${activeRole === role.id ? 'ring-4 ring-primary ring-offset-2' : 'hover:scale-105'}`}
                            >
                                <img src={role.image} alt={role.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-left">
                                    <p className="text-white font-bold text-sm md:text-base leading-tight">{role.title}</p>
                                    <p className="text-white/60 text-[10px] mt-1">{role.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Role Details Section */}
            <section className="py-24 px-6 lg:px-8 bg-background">
                <div className="max-w-7xl mx-auto">
                    {/* Tabs (Mobile/Desktop) */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 bg-surface p-2 rounded-full max-w-4xl mx-auto">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveRole(role.id)}
                                className={`px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${activeRole === role.id ? 'bg-[#D9E2DC] text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}
                            >
                                {role.label}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeRole}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-2 gap-12 items-center bg-[hsl(244_50%_22%)] rounded-3xl p-8 md:p-16 text-white overflow-hidden shadow-2xl relative"
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>

                            <div className="relative z-10 order-2 md:order-1">
                                <div className="aspect-[4/5] bg-white/10 rounded-2xl overflow-hidden border border-white/10 relative">
                                    <img src={activeRoleData.image} alt={activeRoleData.title} className="w-full h-full object-cover opacity-90" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(244_50%_22%)] via-transparent to-transparent"></div>
                                </div>
                            </div>

                            <div className="relative z-10 order-1 md:order-2">
                                <h2 className="font-display font-bold text-3xl md:text-4xl mb-2">{activeRoleData.title}</h2>
                                <p className="text-white/60 text-lg mb-8">{activeRoleData.description}</p>

                                <button className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg text-sm font-bold mb-8 hover:bg-white/20 transition-colors">
                                    Review Our {activeRoleData.label} Standards
                                </button>

                                <div className="space-y-0"> {/* Accordion-style layout */}
                                    {activeRoleData.features.map((feature, idx) => (
                                        <div key={idx} className="border-b border-white/10 py-4 flex items-center justify-between group cursor-pointer hover:bg-white/5 px-2 rounded-lg transition-colors">
                                            <div className="flex items-center gap-3">
                                                <ShieldCheck className="w-5 h-5 text-green-400" />
                                                <span className="font-medium">{feature}</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 3. Pricing Packages */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 text-foreground">
                            Choose the Right Package <br /> for Your Practice
                        </h2>
                        <p className="text-muted-foreground">Flexible solutions that scale with your needs.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Package 1 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-surface rounded-3xl p-8 border border-border flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-6">
                                <Users className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl mb-4">Small Practice</h3>
                            <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
                                Essential missed call recovery and basic automation. Perfect for <span className="font-bold text-foreground">1-2 location practices</span> focused on capturing opportunities.
                            </p>
                            <div className="mt-auto">
                                <button onClick={openCalendly} className="text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Get Pricing <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Package 2 - Highlighted */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[hsl(244_50%_22%)] text-white rounded-3xl p-8 border border-border flex flex-col relative overflow-hidden shadow-xl"
                        >
                            <div className="absolute top-4 right-4 bg-white/20 px-2 py-1 rounded text-[10px] font-bold">
                                Most Popular
                            </div>
                            <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-green-300 mb-6">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl mb-4">Growing Practice</h3>
                            <p className="text-xs text-white/60 mb-8 leading-relaxed">
                                <span className="font-bold text-white">Full feature set</span> including website chat, advanced analytics, and multi-location support.
                            </p>
                            <div className="mt-auto">
                                <button onClick={openCalendly} className="text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all text-green-300">
                                    Get Pricing <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </motion.div>

                        {/* Package 3 */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-surface rounded-3xl p-8 border border-border flex flex-col"
                        >
                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                                <Server className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl mb-4">Enterprise DSO</h3>
                            <p className="text-xs text-muted-foreground mb-8 leading-relaxed">
                                Custom integration, dedicated support, and advanced reporting across unlimited locations with white-label options.
                            </p>
                            <div className="mt-auto">
                                <button onClick={openCalendly} className="text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Get Pricing <ArrowRight className="w-3 h-3" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. Testimonials (Reused visual style) */}
            <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16 text-left">
                    <div className="flex-1">
                        <motion.span
                            {...fadeInUp}
                            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6"
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
                            <div className="space-y-6">
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
                                        className={`p-4 rounded-xl flex items-center gap-4 transition-all cursor-pointer ${i === 0 ? 'bg-[hsl(244_50%_22%)] text-white shadow-lg' : 'hover:bg-primary/5'}`}
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

            {/* 5. Final CTA Form Section - Dark Green */}
            <section className="py-24 px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto bg-[hsl(244_50%_22%)] rounded-[3rem] p-8 md:p-20 overflow-hidden relative shadow-2xl">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
                    <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10 text-left">
                        <div className="flex-1">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-wider mb-6"
                            >
                                AI Ready to See Your Solution
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="font-display font-bold text-4xl md:text-6xl text-white mb-6 leading-tight"
                            >
                                Experience How <br /> Breeh AI Works <br /> for You
                            </motion.h2>
                            <p className="text-white/60 text-lg">
                                Book a personalized demo focused on your specific needs.
                            </p>
                        </div>

                        <div className="w-full lg:w-[500px]">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-secondary rounded-3xl p-8 md:p-12 shadow-inner border border-border"
                            >
                                <h3 className="font-display font-bold text-2xl text-foreground/80 mb-2">Stop Missing Patient Opportunities</h3>
                                <p className="text-xs text-foreground/60 mb-8">
                                    Whether it's after-hours calls, busy periods, or overwhelmed staff - Breeh AI ensures every patient gets a response.
                                </p>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold text-foreground/60 ml-2">Name</label>
                                        <input type="text" placeholder="John Doe" className="w-full bg-white border-none rounded-xl p-4 text-xs shadow-sm focus:ring-2 focus:ring-primary/20 outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-foreground/60 ml-2">Work Email Address</label>
                                            <input type="email" placeholder="example@breeh.com" className="w-full bg-white border-none rounded-xl p-4 text-xs shadow-sm focus:ring-2 focus:ring-primary/20 outline-none" />
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
                                    <button className="w-fit bg-[#a5b4fc] text-[#1e1b4b] font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-[#a5b4fc]/90 transition-all mt-4 text-xs">
                                        See the Solution
                                    </button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <FAQSection />
            <Footer onOpenPlaybook={() => setPlaybookOpen(true)} onBookDemo={openCalendly} />
            <PlaybookModal open={playbookOpen} onOpenChange={setPlaybookOpen} />
        </div>
    );
};

export default Solutions;
