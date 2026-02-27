import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Play, Users, LifeBuoy, Check, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const tabs = ["Setup Guides", "Video Tutorials", "Live Help", "Troubleshooting"];

const guides = [
    { logo: "🦷", title: "Connect Dentrix to Breeh", diff: "Easy", time: "5 min read", progress: 0 },
    { logo: "🔗", title: "Connect Open Dental to Breeh", diff: "Easy", time: "5 min read", progress: 100 },
    { logo: "📧", title: "RevenueWell Two-Way Sync", diff: "Medium", time: "8 min read", progress: 45 },
];

const videos = [
    { title: "Setting up two-way sync with Dentrix", dur: "4:20", views: "1.2k" },
    { title: "Mapping custom fields in Salesforce", dur: "6:45", views: "850" },
];

const SetupResources = () => {
    const [activeTab, setActiveTab] = useState("Setup Guides");

    return (
        <section className="py-28 px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Resources
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Everything you need to connect
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground">Step-by-step guides, videos, and live support.</motion.p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {tabs.map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === tab ? "bg-primary text-white shadow-lg shadow-primary/25" : "bg-muted text-muted-foreground hover:text-foreground"
                                }`}>{tab}</button>
                    ))}
                </div>

                {/* Content */}
                <div className="min-h-[400px]">
                    {activeTab === "Setup Guides" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {guides.map((g, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all group">
                                    <span className="text-2xl mb-4 block">{g.logo}</span>
                                    <h4 className="font-bold text-foreground mb-2">{g.title}</h4>
                                    <div className="flex items-center gap-3 text-xs mb-4">
                                        <span className={`px-2 py-0.5 rounded ${g.diff === "Easy" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>{g.diff}</span>
                                        <span className="text-muted-foreground">{g.time}</span>
                                    </div>
                                    {g.progress > 0 && (
                                        <div className="mb-4">
                                            <div className="flex justify-between text-[10px] mb-1">
                                                <span className="text-muted-foreground">Progress</span>
                                                <span className="text-primary font-bold">{g.progress}%</span>
                                            </div>
                                            <div className="h-1 bg-muted rounded-full overflow-hidden">
                                                <div className="h-full bg-primary" style={{ width: `${g.progress}%` }} />
                                            </div>
                                        </div>
                                    )}
                                    <button className="w-full py-2 bg-muted text-foreground rounded-lg text-xs font-bold group-hover:bg-primary group-hover:text-white transition-all">
                                        {g.progress === 100 ? "Review guide" : g.progress > 0 ? "Continue setup" : "Start setup"}
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {activeTab === "Video Tutorials" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {videos.map((v, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    className="bg-card rounded-2xl overflow-hidden border border-border group">
                                    <div className="aspect-video bg-muted relative flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/90 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                                            <Play className="w-5 h-5 fill-current ml-1" />
                                        </div>
                                        <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{v.dur}</span>
                                    </div>
                                    <div className="p-4 flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-sm text-foreground">{v.title}</h4>
                                            <p className="text-xs text-muted-foreground">{v.views} views</p>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {activeTab === "Live Help" && (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-primary/20 flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h3 className="font-display font-bold text-2xl text-foreground mb-4">Need hands-on help?</h3>
                                <p className="text-muted-foreground mb-6">Book a free 30-minute setup session with our integration specialists. We'll walk you through the entire process.</p>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-muted" />
                                        ))}
                                    </div>
                                    <div className="text-xs">
                                        <p className="font-bold text-foreground">Available today</p>
                                        <p className="text-muted-foreground">Average rating: 4.9/5</p>
                                    </div>
                                </div>
                                <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all">Book setup session</button>
                            </div>
                            <div className="w-full md:w-[360px] aspect-square bg-card rounded-2xl border border-border shadow-2xl flex items-center justify-center">
                                <Users className="w-16 h-16 text-primary/20" />
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "Troubleshooting" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                            className="max-w-2xl mx-auto bg-card rounded-2xl p-8 border border-border">
                            <h3 className="font-bold text-lg text-foreground mb-6 text-center">What issue are you experiencing?</h3>
                            <div className="space-y-3">
                                {["Sync not working", "Data not appearing", "Authentication error", "Other"].map((issue) => (
                                    <button key={issue} className="w-full p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 text-left text-sm font-medium transition-all flex justify-between items-center group">
                                        {issue}
                                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                    </button>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-border text-center">
                                <p className="text-xs text-muted-foreground mb-4">Still need help?</p>
                                <button className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                    <LifeBuoy className="w-4 h-4" /> Chat with support
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SetupResources;
