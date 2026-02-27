import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Clock, TrendingUp, ArrowRight } from "lucide-react";

export interface IntegrationItem {
    name: string;
    category: string;
    description: string;
    features: string[];
    setupTime: string;
    rating: number;
    reviews: number;
    badge?: "popular" | "trending" | "new";
    emoji: string;
    featured?: boolean;
}

export const allIntegrations: IntegrationItem[] = [
    { name: "Dentrix", category: "Practice Management", description: "Enterprise-grade two-way sync with appointment reconciliation, patient records, and insurance verification.", features: ["Two-way sync", "Real-time updates", "Custom field mapping", "Insurance verification"], setupTime: "5 min", rating: 4.9, reviews: 127, badge: "popular", emoji: "🦷", featured: true },
    { name: "Open Dental", category: "Practice Management", description: "Deep integration with Open Dental's open architecture for scheduling, charting, and billing.", features: ["API integration", "Multi-provider scheduling", "Patient portal sync", "Custom mapping"], setupTime: "5 min", rating: 4.8, reviews: 94, emoji: "🔗", featured: true },
    { name: "Eaglesoft", category: "Practice Management", description: "Seamless Patterson Eaglesoft connectivity for practice management and imaging workflows.", features: ["Schedule sync", "Patient lookup", "Treatment plans", "Imaging bridge"], setupTime: "10 min", rating: 4.7, reviews: 68, emoji: "🦅" },
    { name: "Curve Dental", category: "Practice Management", description: "Cloud-native integration with zero-latency scheduling and patient data access.", features: ["Cloud-native", "Zero-latency", "Auto-updates", "HIPAA sync"], setupTime: "3 min", rating: 4.8, reviews: 52, badge: "trending", emoji: "☁️" },
    { name: "RevenueWell", category: "Communication", description: "Patient communication platform integration for automated reminders, recalls, and marketing.", features: ["Auto reminders", "Recall campaigns", "Review requests", "Email marketing"], setupTime: "5 min", rating: 4.6, reviews: 43, emoji: "📧" },
    { name: "Weave", category: "Communication", description: "Unified communications integration connecting calls, texts, and patient engagement.", features: ["VoIP integration", "SMS sync", "Review management", "Call analytics"], setupTime: "5 min", rating: 4.5, reviews: 38, badge: "new", emoji: "📞" },
    { name: "Google Calendar", category: "Analytics", description: "Sync provider availability from Google Calendar for real-time openings verification.", features: ["Real-time sync", "Multi-calendar", "Availability check", "Conflict detection"], setupTime: "1 min", rating: 4.9, reviews: 156, emoji: "📅" },
    { name: "Stripe", category: "Payment", description: "Process payments and manage billing directly through your dental practice workflow.", features: ["Payment processing", "Invoice generation", "Subscription billing", "Refunds"], setupTime: "5 min", rating: 4.8, reviews: 89, emoji: "💳" },
    { name: "Dexis", category: "Imaging", description: "Dental imaging integration for X-ray viewing and digital radiography workflows.", features: ["Image viewing", "Digital capture", "DICOM support", "Cloud storage"], setupTime: "10 min", rating: 4.6, reviews: 31, emoji: "📷" },
    { name: "Mailchimp", category: "Marketing", description: "Email marketing automation for patient newsletters, promotions, and reactivation campaigns.", features: ["List sync", "Campaign triggers", "Template library", "Analytics"], setupTime: "3 min", rating: 4.5, reviews: 47, emoji: "✉️" },
    { name: "Salesforce", category: "Communication", description: "Enterprise CRM integration for large practices and DSOs managing patient relationships.", features: ["Contact sync", "Call logging", "Pipeline management", "Workflow triggers"], setupTime: "15 min", rating: 4.7, reviews: 34, emoji: "☁️" },
    { name: "RingCentral", category: "Communication", description: "Cloud phone system integration for call routing, overflow handling, and voicemail.", features: ["Call routing", "Overflow handling", "Voicemail transcription", "Call transfer"], setupTime: "5 min", rating: 4.6, reviews: 29, emoji: "📱" },
];

const IntegrationDirectory = ({ category, searchQuery }: { category: string; searchQuery: string }) => {
    const filtered = allIntegrations.filter((i) => {
        const matchCat = category === "All" || i.category === category;
        const matchSearch = !searchQuery || i.name.toLowerCase().includes(searchQuery.toLowerCase()) || i.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    return (
        <section id="directory" className="py-24 px-6 lg:px-8 bg-background">
            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div key={category + searchQuery} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filtered.map((int, i) => (
                            <motion.div key={int.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className={`relative bg-card rounded-2xl p-6 border transition-all group ${int.featured ? "sm:col-span-2 lg:col-span-1 border-primary/20 shadow-md" : "border-border hover:border-primary/30 hover:shadow-lg"
                                    }`}
                            >
                                {int.badge && (
                                    <span className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${int.badge === "popular" ? "bg-primary/10 text-primary" :
                                            int.badge === "trending" ? "bg-orange-100 text-orange-600" :
                                                "bg-green-100 text-green-600"
                                        }`}>{int.badge}</span>
                                )}

                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-3xl">{int.emoji}</span>
                                    <div>
                                        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition">{int.name}</h3>
                                        <span className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground">{int.category}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{int.description}</p>

                                <div className="space-y-1.5 mb-4">
                                    {int.features.slice(0, 3).map((f) => (
                                        <p key={f} className="text-xs text-foreground flex items-center gap-1.5"><Check className="w-3 h-3 text-primary shrink-0" /> {f}</p>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {int.setupTime} setup</span>
                                    <span className="flex items-center gap-1"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {int.rating} ({int.reviews})</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {filtered.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-lg text-muted-foreground mb-3">No integrations found</p>
                        <p className="text-sm text-muted-foreground">Try a different search or category.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default IntegrationDirectory;
