import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Calendar, CheckCircle, Mail, Building, Phone, MessageSquare } from "lucide-react";
import { EMAILJS_CONFIG } from "@/lib/config";


interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookDemoModal = ({ open, onOpenChange }: BookDemoModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.demoTemplateId,
        {
          to_email: formData.email,
          to_name: formData.companyName,
          company_name: formData.companyName,
          phone: formData.phone || "Not provided",
          message: formData.message || "No additional information",
          admin_email: EMAILJS_CONFIG.adminEmail,
          from_name: "Breeh AI",
        },
        EMAILJS_CONFIG.publicKey
      );
      setShowSuccess(true);
      toast.success("Demo booked! Check your email.");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ email: "", companyName: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none">
        <DialogTitle className="sr-only">Book a Demo</DialogTitle>
        {showSuccess ? (
          <div className="p-10 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-display font-bold text-2xl text-foreground mb-3">
              Demo Booked!
            </h3>
            <p className="text-muted-foreground mb-6">
              Confirmation sent to {formData.email}.
            </p>
            <Button onClick={handleClose} className="bg-primary hover:bg-primary/90">
              Close
            </Button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div
              className="p-8 text-center"
            style={{
              background:
                "linear-gradient(135deg, hsl(243 90% 64%) 0%, hsl(243 70% 52%) 50%, hsl(252 70% 65%) 100%)",
            }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="font-display font-bold text-lg text-primary-foreground tracking-tight">Breeh AI</span>
                <Calendar className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground/80 text-sm font-semibold">
                  Free Demo
                </span>
              </div>
              <h3 className="font-display font-bold text-2xl text-primary-foreground mb-2">
                Book Your Demo
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                See how Breeh AI can transform your dental practice.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                  <Mail className="w-3.5 h-3.5" /> Email Address*
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
                <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                  <Building className="w-3.5 h-3.5" /> Practice Name*
                </Label>
                <Input
                  required
                  placeholder="Smile Dental Clinic"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
              <div>
                <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                  <Phone className="w-3.5 h-3.5" /> Phone Number
                </Label>
                <Input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <Label className="text-sm font-medium flex items-center gap-2 mb-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> Additional Info
                </Label>
                <Textarea
                  placeholder="Tell us about your practice..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full h-14 font-bold uppercase tracking-wider bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Booking..." : "Book My Demo →"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BookDemoModal;
