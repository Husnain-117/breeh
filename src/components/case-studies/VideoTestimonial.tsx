import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Maximize, Volume2, Search, Copy, Check, Clock } from "lucide-react";

interface TranscriptLine {
    time: number;
    text: string;
}

const transcript: TranscriptLine[] = [
    { time: 0, text: "We were at a point where the phone just wouldn't stop ringing." },
    { time: 5, text: "Our staff was stressed, and we knew we were missing opportunities." },
    { time: 10, text: "Then we implemented Breeh AI, and honestly, the shift was immediate." },
    { time: 15, text: "The conversion rate improvement was the most significant finding." },
    { time: 20, text: "The ROI was visible within the first two weeks." },
];

const VideoTestimonial = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [showTranscript, setShowTranscript] = useState(false);
    const [copied, setCopied] = useState<number | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const skipTo = (time: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleCopy = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopied(index);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section className="py-24 px-6 bg-background">
            <div className="container max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch h-full lg:h-[600px]">
                    {/* Custom Video Player */}
                    <div className="flex-1 relative aspect-video lg:aspect-auto bg-black rounded-3xl overflow-hidden group">
                        {/* Fake video tag placeholder */}
                        <video
                            ref={videoRef}
                            onTimeUpdate={handleTimeUpdate}
                            poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80"
                            className="w-full h-full object-cover opacity-80"
                        >
                            <source src="https://path-to-sample-video.mp4" type="video/mp4" />
                        </video>

                        {/* UI Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="flex justify-end">
                                <button onClick={() => setShowTranscript(!showTranscript)} className="px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                                    {showTranscript ? "Hide Transcript" : "Show Transcript"}
                                </button>
                            </div>

                            <div className="flex flex-col gap-4">
                                {/* Progress Bar */}
                                <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden cursor-pointer relative">
                                    <div className="h-full bg-primary" style={{ width: `${(currentTime / 60) * 100}%` }} />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6 text-white">
                                        <button onClick={togglePlay}>
                                            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                                        </button>
                                        <Volume2 className="w-6 h-6" />
                                        <span className="text-sm font-medium">0:{(currentTime % 60).toFixed(0).padStart(2, '0')} / 0:60</span>
                                    </div>
                                    <Maximize className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>

                        {!isPlaying && (
                            <button onClick={togglePlay} className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40 hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 fill-current ml-1" />
                            </button>
                        )}
                    </div>

                    {/* Transcript Panel */}
                    <AnimatePresence>
                        {(showTranscript || window.innerWidth >= 1024) && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="w-full lg:w-96 bg-card rounded-3xl border border-border flex flex-col overflow-hidden"
                            >
                                <div className="p-6 border-b border-border flex items-center justify-between">
                                    <h3 className="font-bold text-lg">Transcript</h3>
                                    <Search className="w-4 h-4 text-muted-foreground" />
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
                                    {transcript.map((line, i) => (
                                        <div
                                            key={i}
                                            className={`group border-l-2 pl-4 py-1 transition-all cursor-pointer ${currentTime >= line.time && (i === transcript.length - 1 || currentTime < transcript[i + 1].time)
                                                    ? "border-primary bg-primary/5"
                                                    : "border-transparent text-muted-foreground"
                                                }`}
                                            onClick={() => skipTo(line.time)}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">0:0{line.time}</span>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); handleCopy(line.text, i); }}
                                                    className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:text-primary"
                                                >
                                                    {copied === i ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                                </button>
                                            </div>
                                            <p className="text-sm leading-relaxed">{line.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="p-6 bg-muted/30 border-t border-border">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase mb-2">Key Quote</p>
                                    <p className="text-sm font-serif italic text-foreground leading-relaxed">
                                        "The setup was unbelievably fast. We were live in 48 hours and seeing results by the end of the first week."
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default VideoTestimonial;
