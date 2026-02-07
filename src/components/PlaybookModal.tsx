import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { FileText, CheckCircle, ChevronRight, User, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, SITE_CONFIG } from "@/lib/config";

interface PlaybookModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PlaybookModal = ({ open, onOpenChange }: PlaybookModalProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    about: "",
  });
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
          to_email: formData.email,
          to_name: `${formData.firstName} ${formData.lastName}`,
          from_name: "Breeh AI",
          user_role: formData.about,
          playbook_link: SITE_CONFIG.playbookUrl,
          admin_email: EMAILJS_CONFIG.playbookAdminEmail,
        },
        EMAILJS_CONFIG.publicKey
      );
      setShowSuccess(true);
      toast.success("Playbook sent!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setShowSuccess(true);
      window.open(SITE_CONFIG.playbookPath, "_blank");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({ firstName: "", lastName: "", email: "", about: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[720px] p-0 overflow-hidden border-none">
        <DialogTitle className="sr-only">Download Playbook</DialogTitle>
        <div className="grid md:grid-cols-2 min-h-[480px]">
          {/* Left - Value prop */}
          <div
            className="p-8 md:p-10 flex flex-col justify-center"
            style={{
              background:
                "linear-gradient(135deg, hsl(243 90% 64%) 0%, hsl(243 70% 48%) 50%, hsl(252 65% 55%) 100%)",
            }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-2xl text-primary-foreground mb-4 leading-tight uppercase">
              Get the Playbook $1M/YR Dental Practices Use
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Strategies to get more patients without ad spend.
            </p>
            <div className="mt-6 space-y-3">
              {["AI-Powered Patient Acquisition", "Automated Follow-Up Scripts", "Revenue Growth Playbook"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary-foreground/60" />
                    <span className="text-primary-foreground/80 text-sm">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right - Form */}
          <div className="p-8 md:p-10 flex items-center">
            {showSuccess ? (
              <div className="text-center w-full">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Check Your Inbox!
                </h3>
                <Button
                  onClick={() => window.open(SITE_CONFIG.playbookPath, "_blank")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  Download Now
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-1.5 mb-1.5">
                      <User className="w-3.5 h-3.5" /> First Name*
                    </Label>
                    <Input
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label className="text-sm font-medium flex items-center gap-1.5 mb-1.5">
                      <User className="w-3.5 h-3.5" /> Last Name*
                    </Label>
                    <Input
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium flex items-center gap-1.5 mb-1.5">
                    <Mail className="w-3.5 h-3.5" /> Email*
                  </Label>
                  <Input
                    type="email"
                    required
                    placeholder="you@practice.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium flex items-center gap-1.5 mb-1.5">
                    Role*
                  </Label>
                  <Input
                    required
                    placeholder="Practice Owner, Office Manager..."
                    value={formData.about}
                    onChange={(e) => setFormData({ ...formData, about: e.target.value })}
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
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlaybookModal;
