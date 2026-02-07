import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href="#"
        className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30 hover:scale-110 transition-transform duration-300 animate-pulse-glow"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-accent-foreground" />
      </a>
    </motion.div>
  );
};

export default FloatingCallButton;
