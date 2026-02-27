import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import type { Article } from "@/lib/articles";

interface BlogCardProps {
    article: Article;
    featured?: boolean;
    index?: number;
}

const BlogCard = ({ article, featured = false, index = 0 }: BlogCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative bg-card rounded-xl overflow-hidden border border-border/50
        hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5
        hover:-translate-y-1 transition-all duration-500"
        >
            <Link to={`/resources/${article.slug}`} className="absolute inset-0 z-10">
                <span className="sr-only">Read {article.title}</span>
            </Link>

            {/* Image */}
            <div
                className={`relative overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[16/10]"
                    }`}
            >
                <img
                    src={article.coverImage}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <span
                    className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-foreground
          group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                    {article.category}
                </span>
            </div>

            {/* Content */}
            <div className={`${featured ? "p-8" : "p-6"}`}>
                {featured ? (
                    <h2 className="font-display font-bold text-2xl mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                    </h2>
                ) : (
                    <h3 className="font-display font-semibold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                    </h3>
                )}

                <p className="text-muted-foreground text-sm line-clamp-2 mb-4 leading-relaxed">
                    {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[10px] font-bold">
                            {article.author.name.charAt(0)}
                        </div>
                        <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {article.author.name}
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                        </span>
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default BlogCard;
