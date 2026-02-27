import { motion } from "framer-motion";
import { Database, MessageSquare, BarChart3, Megaphone, CreditCard, Camera, ArrowRight } from "lucide-react";

const categories = [
    { name: "Practice Management", icon: Database, count: 4, desc: "Core systems that run your practice", logos: ["🦷", "🔗", "🦅", "☁️"], trending: "Curve Dental" },
    { name: "Communication", icon: MessageSquare, count: 4, desc: "Email, SMS, and phone systems", logos: ["📧", "📞", "☁️", "📱"], trending: "Weave" },
    { name: "Analytics", icon: BarChart3, count: 2, desc: "Reporting and business intelligence", logos: ["📅", "📊"], trending: null },
    { name: "Marketing", icon: Megaphone, count: 1, desc: "Patient acquisition and engagement tools", logos: ["✉️"], trending: null },
    { name: "Payment", icon: CreditCard, count: 1, desc: "Billing and payment processing", logos: ["💳"], trending: null },
    { name: "Imaging", icon: Camera, count: 1, desc: "Digital radiography and imaging systems", logos: ["📷"], trending: null },
];

const IntegrationCategories = ({ onCategoryChange }: { onCategoryChange: (cat: string) => void }) => {
    return (
        <section className="py-24 px-6 lg:px-8 section-alt">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        Browse by Category
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Find integrations for every need
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {categories.map((cat, i) => (
                        <motion.div key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.2 } }}
                            onClick={() => onCategoryChange(cat.name)}
                            className="bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer group relative overflow-hidden"
                        >
                            {cat.trending && (
                                <span className="absolute top-4 right-4 bg-muted rounded-lg px-2 py-1 text-[10px] text-muted-foreground">
                                    Trending: <span className="font-bold text-foreground">{cat.trending}</span>
                                </span>
                            )}

                            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                                <cat.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                            </div>

                            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition">{cat.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1 mb-5">{cat.desc}</p>

                            <div className="flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    {cat.logos.slice(0, 4).map((l, j) => (
                                        <span key={j} className="w-8 h-8 rounded-full bg-muted border-2 border-card flex items-center justify-center text-sm">{l}</span>
                                    ))}
                                </div>
                                <span className="text-sm text-muted-foreground flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {cat.count} integrations <ArrowRight className="w-3 h-3" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IntegrationCategories;
