import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, Quote, TrendingUp } from "lucide-react";

export interface StoryCardProps {
    slug: string;
    title: string;
    category: string;
    excerpt: string;
    image: string;
    date: string;
    readTime: string;
    stats?: string[];
    author?: {
        name: string;
        role: string;
        avatar: string;
    };
    featured?: boolean;
    size?: "large" | "medium" | "standard";
}

const StoryCard = ({
    slug,
    title,
    category,
    excerpt,
    image,
    date,
    readTime,
    stats,
    author,
    size = "standard",
}: StoryCardProps) => {
    const isLarge = size === "large";
    const isMedium = size === "medium";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className={`group relative bg-card rounded-3xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 ${isLarge ? "md:col-span-2 md:row-span-2" : isMedium ? "md:row-span-2" : ""
                }`}
        >
            <Link to={`/case-studies/${slug}`} className="block h-full">
                {/* Image & Overlay */}
                <div className={`relative overflow-hidden ${isLarge ? "aspect-[16/9]" : isMedium ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                            {category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <h3 className={`${isLarge ? "text-3xl" : "text-xl"} font-bold mb-3 group-hover:underline decoration-2 underline-offset-4 leading-tight`}>
                        {title}
                    </h3>

                    {(isLarge || isMedium) && (
                        <p className="text-white/70 text-sm line-clamp-2 mb-4 leading-relaxed">
                            {excerpt}
                        </p>
                    )}

                    {author && (isLarge || isMedium) && (
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden bg-muted">
                                <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <p className="font-bold text-sm leading-none mb-1">{author.name}</p>
                                <p className="text-white/60 text-[10px] font-medium uppercase tracking-wider">{author.role}</p>
                            </div>
                        </div>
                    )}

                    {stats && (
                        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
                            {stats.map((stat, i) => (
                                <span key={i} className="flex items-center gap-1.5 text-xs font-bold text-green-400">
                                    <TrendingUp className="w-3.5 h-3.5" />
                                    {stat}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className={`flex items-center justify-between mt-6 ${!isLarge && !isMedium ? "pt-4 border-t border-white/10" : ""}`}>
                        <div className="flex items-center gap-4 text-[10px] text-white/50 font-bold uppercase tracking-wider">
                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {date}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {readTime}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

const StoryGrid = ({ stories }: { stories: StoryCardProps[] }) => {
    return (
        <section className="py-24 px-6">
            <div className="container max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <StoryCard key={story.slug} {...story} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoryGrid;
