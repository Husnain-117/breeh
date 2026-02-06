import { useState, useCallback } from "react";
import { useConversation } from "@elevenlabs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOff, X, Mic, MicOff } from "lucide-react";
import breehLogo from "@/assets/breeh-logo.png";

const AGENT_ID = "agent_8201keky3nz1e3atqe5yxpbtax92";

interface VoiceCallDialogProps {
  open: boolean;
  onClose: () => void;
}

const VoiceCallDialog = ({ open, onClose }: VoiceCallDialogProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      setIsConnecting(false);
      setError(null);
    },
    onDisconnect: () => {
      setIsConnecting(false);
    },
    onError: (err) => {
      console.error("Conversation error:", err);
      setError("Connection failed. Please try again.");
      setIsConnecting(false);
    },
  });

  const startCall = useCallback(async () => {
    setIsConnecting(true);
    setError(null);
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: AGENT_ID,
        connectionType: "webrtc",
      });
    } catch (err) {
      console.error("Failed to start:", err);
      setError("Please allow microphone access to start the call.");
      setIsConnecting(false);
    }
  }, [conversation]);

  const endCall = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  const handleClose = useCallback(async () => {
    if (conversation.status === "connected") {
      await conversation.endSession();
    }
    onClose();
  }, [conversation, onClose]);

  const isConnected = conversation.status === "connected";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-[60]"
            onClick={handleClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-[70] w-[340px]"
          >
            <div className="bg-background rounded-3xl shadow-2xl border border-border/50 overflow-hidden">
              {/* Header */}
              <div
                className="px-6 py-5 flex items-center justify-between"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(244 50% 30%) 0%, hsl(244 63% 55%) 100%)",
                }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={breehLogo}
                    alt="Breeh AI"
                    className="w-9 h-9 rounded-xl object-contain bg-primary-foreground/10 p-1"
                  />
                  <div>
                    <h3 className="font-display font-bold text-primary-foreground text-sm">
                      Breeh AI Assistant
                    </h3>
                    <p className="text-primary-foreground/60 text-xs">
                      {isConnected
                        ? conversation.isSpeaking
                          ? "Speaking..."
                          : "Listening..."
                        : isConnecting
                        ? "Connecting..."
                        : "Ready to help"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <X className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-8 flex flex-col items-center">
                {error && (
                  <p className="text-destructive text-xs text-center mb-4 bg-destructive/10 rounded-lg px-4 py-2">
                    {error}
                  </p>
                )}

                {/* Visual indicator */}
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isConnected
                        ? "bg-primary/15"
                        : "bg-muted"
                    }`}
                  >
                    {isConnected && conversation.isSpeaking && (
                      <>
                        <motion.div
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-primary/10"
                        />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          className="absolute inset-2 rounded-full bg-primary/10"
                        />
                      </>
                    )}
                    {isConnected ? (
                      <Mic className="w-8 h-8 text-primary relative z-10" />
                    ) : (
                      <MicOff className="w-8 h-8 text-muted-foreground relative z-10" />
                    )}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
                  {isConnected
                    ? "You're speaking with Breeh AI. Ask about appointments, services, or anything else!"
                    : "Start a voice call with our AI dental assistant. Available 24/7."}
                </p>

                {/* Call button */}
                {!isConnected ? (
                  <button
                    onClick={startCall}
                    disabled={isConnecting}
                    className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold rounded-2xl px-6 py-4 text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <Phone className="w-5 h-5" />
                    {isConnecting ? "Connecting..." : "Start Call"}
                  </button>
                ) : (
                  <button
                    onClick={endCall}
                    className="w-full flex items-center justify-center gap-3 bg-destructive text-destructive-foreground font-semibold rounded-2xl px-6 py-4 text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <PhoneOff className="w-5 h-5" />
                    End Call
                  </button>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-3 border-t border-border/50 text-center">
                <p className="text-[11px] text-muted-foreground">
                  Powered by Breeh AI • HIPAA Compliant
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VoiceCallDialog;
