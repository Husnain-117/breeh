import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterToolProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

const BeforeAfterTool = ({
    beforeImage,
    afterImage,
    beforeLabel = "Before Breeh",
    afterLabel = "With Breeh",
}: BeforeAfterToolProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderPos = useMotionValue(50); // 0 to 100
    const springPos = useSpring(sliderPos, { stiffness: 100, damping: 20 });

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        sliderPos.set(percent);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            handleMove(e.clientX);
        }
    };

    const clipPath = useTransform(springPos, (p) => `inset(0 ${100 - p}% 0 0)`);

    return (
        <section className="py-24 px-6 bg-background overflow-hidden">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-display">The Transformation</h2>
                    <p className="text-muted-foreground text-lg">Slide to see how Breeh AI changes the practice environment.</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-border group"
                    onMouseMove={handleMouseMove}
                    onMouseDown={() => setIsDragging(true)}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                    onTouchMove={handleTouchMove}
                >
                    {/* After View (Bottom Layer) */}
                    <div className="absolute inset-0">
                        <img src={afterImage} alt="After" className="w-full h-full object-cover" />
                        <div className="absolute bottom-8 right-8 px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg text-white font-bold text-sm">
                            {afterLabel}
                        </div>
                    </div>

                    {/* Before View (Top Layer with ClipPath) */}
                    <motion.div
                        style={{ clipPath }}
                        className="absolute inset-0 z-10"
                    >
                        <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute bottom-8 left-8 px-4 py-2 bg-black/50 backdrop-blur-md rounded-lg text-white font-bold text-sm">
                            {beforeLabel}
                        </div>
                    </motion.div>

                    {/* Draggable Handle */}
                    <motion.div
                        style={{ left: useTransform(springPos, (p) => `${p}%`) }}
                        className="absolute top-0 bottom-0 w-1 bg-white z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center -translate-x-1/2"
                    >
                        <div className="w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-primary">
                            <div className="flex items-center gap-0.5">
                                <ChevronLeft className="w-4 h-4 text-primary" />
                                <ChevronRight className="w-4 h-4 text-primary" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-2 mt-8 text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" /> Previous State
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" /> With Breeh AI
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfterTool;
