import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FileText, CheckCircle, Mail, Download, Eye } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, SITE_CONFIG } from "@/lib/config";

interface PlaybookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PlaybookModal = ({ open, onOpenChange }: PlaybookModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.playbookTemplateId,
        {
          to_email: email,
          to_name: email,
          from_name: "Breeh AI",
          playbook_link: SITE_CONFIG.playbookUrl,
          admin_email: EMAILJS_CONFIG.playbookAdminEmail,
        },
        EMAILJS_CONFIG.publicKey
      );
      setShowSuccess(true);
      toast.success("Playbook access granted!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      // Still show the PDF even if email fails
      setShowSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setShowSuccess(false);
        setEmail("");
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[480px] p-0 overflow-hidden border-none">
        <DialogTitle className="sr-only">Download Playbook</DialogTitle>

        {showSuccess ? (
          <div className="p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">
              Your Playbook is Ready!
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              We've also sent a copy to {email}
            </p>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => window.open(SITE_CONFIG.playbookPath, "_blank")}
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 gap-2"
              >
                <Eye className="w-4 h-4" /> Preview Playbook
              </Button>
              <a
                href={SITE_CONFIG.playbookPath}
                download="Breeh-AI-Playbook.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-11 px-8 border border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>
          </div>
        ) : (
          <>
            {/* Header */}
            <div
              className="p-8 text-center"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(244 58% 55%) 100%)",
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-2xl text-primary-foreground mb-2 uppercase">
                Get the Playbook $1M/YR Dental Practices Use
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                Enter your email to access the playbook instantly.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <Label className="text-sm font-medium flex items-center gap-1.5 mb-1.5">
                  <Mail className="w-3.5 h-3.5" /> Email Address*
                </Label>
                <Input
                  type="email"
                  required
                  placeholder="you@practice.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full h-12 font-bold uppercase tracking-wider bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Access Playbook →"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PlaybookModal;
