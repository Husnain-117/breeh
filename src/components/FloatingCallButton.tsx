import { useState, useCallback } from "react";
import { Phone, X, Mic, MicOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useConversation } from "@elevenlabs/react";
import { ELEVENLABS_CONFIG } from "@/lib/config";

const FloatingCallButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log("Connected to Breeh AI agent"),
    onDisconnect: () => {
      console.log("Disconnected from Breeh AI agent");
      setIsOpen(false);
    },
    onError: (error) => console.error("Voice error:", error),
  });

  const startConversation = useCallback(async () => {
    setIsConnecting(true);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: ELEVENLABS_CONFIG.agentId,
      } as any);
      setIsOpen(true);
    } catch (error) {
      console.error("Failed to start voice conversation:", error);
    } finally {
      setIsConnecting(false);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
    setIsOpen(false);
  }, [conversation]);

  const handleClick = () => {
    if (conversation.status === "connected") {
      stopConversation();
    } else {
      startConversation();
    }
  };

  return (
    <>
      {/* Active call panel */}
      <AnimatePresence>
        {isOpen && conversation.status === "connected" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-72 rounded-2xl shadow-2xl overflow-hidden border border-border"
            style={{
              background:
                "linear-gradient(135deg, hsl(244 58% 52%) 0%, hsl(244 58% 61%) 100%)",
            }}
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-primary-foreground text-sm font-semibold">
                    Breeh AI
                  </span>
                </div>
                <button
                  onClick={stopConversation}
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Voice visualization */}
              <div className="flex items-center justify-center h-20 mb-4">
                <div className="flex items-end gap-1">
                  {[...Array(7)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 rounded-full bg-accent"
                      animate={{
                        height: conversation.isSpeaking
                          ? [8, 24 + Math.random() * 20, 8]
                          : [4, 8, 4],
                      }}
                      transition={{
                        duration: 0.5 + Math.random() * 0.3,
                        repeat: Infinity,
                        delay: i * 0.08,
                      }}
                    />
                  ))}
                </div>
              </div>

              <p className="text-primary-foreground/60 text-xs text-center">
                {conversation.isSpeaking ? "Breeh is speaking..." : "Listening..."}
              </p>
            </div>

            {/* End call */}
            <button
              onClick={stopConversation}
              className="w-full py-3 bg-destructive/90 text-destructive-foreground text-sm font-semibold hover:bg-destructive transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 rotate-[135deg]" />
              End Call
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={handleClick}
          disabled={isConnecting}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${conversation.status === "connected"
              ? "bg-destructive shadow-destructive/30 hover:scale-105"
              : "bg-accent shadow-accent/30 hover:scale-110 animate-pulse-glow"
            }`}
          aria-label={conversation.status === "connected" ? "End call" : "Call Breeh AI"}
        >
          {isConnecting ? (
            <Mic className="w-6 h-6 text-accent-foreground animate-pulse" />
          ) : conversation.status === "connected" ? (
            <MicOff className="w-6 h-6 text-destructive-foreground" />
          ) : (
            <Phone className="w-6 h-6 text-accent-foreground" />
          )}
        </button>
      </motion.div>
    </>
  );
};

export default FloatingCallButton;
