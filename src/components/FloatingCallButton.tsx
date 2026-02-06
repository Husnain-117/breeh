import { useState } from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import VoiceCallDialog from "./VoiceCallDialog";

const FloatingCallButton = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setDialogOpen(true)}
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300 animate-pulse-glow"
          aria-label="Call Breeh AI"
        >
          <Phone className="w-6 h-6 text-primary-foreground" />
        </button>
      </motion.div>

      <VoiceCallDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
};

export default FloatingCallButton;
