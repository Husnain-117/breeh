import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calculator, TrendingUp, DollarSign, Save, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { SITE_CONFIG } from "@/lib/config";

interface LeadData {
  id?: string;
  name: string;
  email: string;
}

interface CalcInputs {
  monthlyCalls: number;
  missedCallPercent: number;
  unreturnedPercent: number;
  conversionRate: number;
  patientValue: number;
}

const defaults: CalcInputs = {
  monthlyCalls: 75,
  missedCallPercent: 35,
  unreturnedPercent: 75,
  conversionRate: 50,
  patientValue: 850,
};

const BREEH_RECOVERY_RATE = 80;
const ANNUAL_COST = 9600;

const ROICalculator = () => {
  const navigate = useNavigate();
  const [lead, setLead] = useState<LeadData | null>(null);
  const [signInForm, setSignInForm] = useState({ name: "", email: "" });
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [inputs, setInputs] = useState<CalcInputs>(defaults);
  const [showResults, setShowResults] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const results = useMemo(() => {
    const missedCalls = inputs.monthlyCalls * (inputs.missedCallPercent / 100);
    const lostCalls = missedCalls * (inputs.unreturnedPercent / 100);
    const lostPatients = lostCalls * (inputs.conversionRate / 100);
    const monthlyRevenueLost = lostPatients * inputs.patientValue;
    const annualRevenueLost = monthlyRevenueLost * 12;
    const recoveredRevenue = annualRevenueLost * (BREEH_RECOVERY_RATE / 100);
    const roiMultiple = recoveredRevenue / ANNUAL_COST;
    return { missedCalls, lostCalls, lostPatients, monthlyRevenueLost, annualRevenueLost, recoveredRevenue, roiMultiple };
  }, [inputs]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);
    try {
      const { data, error } = await supabase
        .from("calculator_leads")
        .insert({ name: signInForm.name, email: signInForm.email })
        .select("id")
        .single();

      if (error) throw error;

      setLead({ id: data.id, ...signInForm });

      // Send sign_in notification
      try {
        await supabase.functions.invoke("send-lead-notification", {
          body: { type: "sign_in", name: signInForm.name, email: signInForm.email },
        });
      } catch (err) {
        console.error("Notification error:", err);
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleViewROI = async () => {
    setShowResults(true);
    // Send results notification
    try {
      await supabase.functions.invoke("send-lead-notification", {
        body: {
          type: "results",
          name: lead?.name,
          email: lead?.email,
          inputs,
          results: {
            annualRevenueLost: results.annualRevenueLost,
            recoveredRevenue: results.recoveredRevenue,
            roiMultiple: results.roiMultiple,
          },
        },
      });
    } catch (err) {
      console.error("Results notification error:", err);
    }
  };

  const handleSaveResults = async () => {
    if (!lead?.id) return;
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("calculator_leads")
        .update({
          monthly_calls: inputs.monthlyCalls,
          missed_call_percent: inputs.missedCallPercent,
          unreturned_percent: inputs.unreturnedPercent,
          conversion_rate: inputs.conversionRate,
          patient_value: inputs.patientValue,
          recovery_rate: BREEH_RECOVERY_RATE,
          annual_revenue_lost: results.annualRevenueLost,
          recovered_revenue: results.recoveredRevenue,
          roi_multiple: results.roiMultiple,
        })
        .eq("id", lead.id);

      if (error) throw error;
      toast.success("Results saved!");
    } catch (error) {
      console.error("Save error:", error);
      toast.error("Couldn't save results.");
    } finally {
      setIsSaving(false);
    }
  };

  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  // Sign-in gate
  if (!lead) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
            <div
              className="p-8 text-center"
              style={{
                background: "linear-gradient(135deg, hsl(243 90% 64%) 0%, hsl(243 70% 52%) 50%, hsl(252 70% 65%) 100%)",
              }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-7 h-7 text-primary-foreground" />
              </div>
              <h1 className="font-display font-bold text-2xl text-primary-foreground mb-2">
                ROI Calculator
              </h1>
              <p className="text-primary-foreground/70 text-sm">
                See how much revenue Breeh AI can recover for your practice.
              </p>
            </div>
            <form onSubmit={handleSignIn} className="p-6 space-y-4">
              <div>
                <Label className="text-sm font-medium mb-1.5 block">Your Name*</Label>
                <Input required placeholder="Dr. John Smith" value={signInForm.name} onChange={(e) => setSignInForm({ ...signInForm, name: e.target.value })} />
              </div>
              <div>
                <Label className="text-sm font-medium mb-1.5 block">Email Address*</Label>
                <Input type="email" required placeholder="you@practice.com" value={signInForm.email} onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })} />
              </div>
              <Button type="submit" size="lg" className="w-full h-12 font-bold uppercase tracking-wider bg-primary hover:bg-primary/90" disabled={isSigningIn}>
                {isSigningIn ? "Loading..." : "Calculate My ROI →"}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  // Calculator
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-2">
            ROI Calculator
          </h1>
          <p className="text-muted-foreground">
            Hi {lead.name}! Adjust the sliders to match your practice.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Sliders */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="lg:col-span-3 space-y-6">
            <div className="bg-muted/30 rounded-2xl border border-border/60 p-6 md:p-8 space-y-8">
              <SliderInput label="Monthly New Patient Calls" value={inputs.monthlyCalls} min={20} max={200} step={5} onChange={(v) => setInputs({ ...inputs, monthlyCalls: v })} />
              <SliderInput label="Missed Call Rate" value={inputs.missedCallPercent} min={10} max={60} step={5} suffix="%" onChange={(v) => setInputs({ ...inputs, missedCallPercent: v })} />
              <SliderInput label="Unreturned Call Rate" value={inputs.unreturnedPercent} min={40} max={90} step={5} suffix="%" onChange={(v) => setInputs({ ...inputs, unreturnedPercent: v })} />
              <SliderInput label="Conversion Rate" value={inputs.conversionRate} min={20} max={70} step={5} suffix="%" onChange={(v) => setInputs({ ...inputs, conversionRate: v })} />
              <SliderInput label="Patient Lifetime Value (1st Year)" value={inputs.patientValue} min={500} max={1500} step={50} prefix="$" onChange={(v) => setInputs({ ...inputs, patientValue: v })} />
            </div>

            {!showResults && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <Button onClick={handleViewROI} size="lg" className="w-full h-14 font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-lg gap-2">
                  <TrendingUp className="w-5 h-5" /> View My ROI
                </Button>
              </motion.div>
            )}
          </motion.div>

          {/* Results Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {showResults ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl overflow-hidden shadow-xl sticky top-24"
                  style={{
                    background: "linear-gradient(135deg, hsl(240 50% 14%) 0%, hsl(243 60% 26%) 50%, hsl(243 90% 58%) 100%)",
                  }}
                >
                  <div className="p-6 md:p-8 space-y-6">
                    <h3 className="font-display font-bold text-xl text-primary-foreground">Your Results</h3>

                    <div className="space-y-4">
                      <ResultRow label="Missed Calls/mo" value={Math.round(results.missedCalls).toString()} />
                      <ResultRow label="Lost Calls/mo" value={Math.round(results.lostCalls).toString()} />
                      <ResultRow label="Lost Patients/mo" value={Math.round(results.lostPatients).toString()} />
                      <ResultRow label="Monthly Revenue Lost" value={fmt(results.monthlyRevenueLost)} />
                      <div className="h-px bg-primary-foreground/20" />
                      <ResultRow label="Annual Revenue Lost" value={fmt(results.annualRevenueLost)} highlight />
                      <ResultRow label="Recovered by Breeh AI" value={fmt(results.recoveredRevenue)} highlight />
                      <div className="bg-primary-foreground/10 rounded-xl p-4 text-center">
                        <p className="text-primary-foreground/60 text-xs uppercase tracking-wider mb-1">ROI Multiple</p>
                        <p className="font-display font-bold text-4xl text-primary-foreground">{results.roiMultiple.toFixed(1)}×</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button onClick={handleSaveResults} variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2" disabled={isSaving}>
                        <Save className="w-4 h-4" /> {isSaving ? "Saving..." : "Save My Results"}
                      </Button>
                      <Button
                        onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                        className="w-full bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold gap-2"
                      >
                        <Calendar className="w-4 h-4" /> Schedule a Demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl border border-border/60 bg-muted/30 p-8 text-center sticky top-24"
                >
                  <Calculator className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">
                    Adjust the sliders and click <strong>"View My ROI"</strong> to see your personalized results.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

// Slider component
const SliderInput = ({ label, value, min, max, step, prefix, suffix, onChange }: {
  label: string; value: number; min: number; max: number; step: number;
  prefix?: string; suffix?: string; onChange: (v: number) => void;
}) => (
  <div>
    <div className="flex justify-between items-center mb-3">
      <label className="text-sm font-medium text-foreground">{label}</label>
      <span className="text-sm font-bold text-primary">
        {prefix}{value.toLocaleString()}{suffix}
      </span>
    </div>
    <Slider
      value={[value]}
      min={min}
      max={max}
      step={step}
      onValueChange={([v]) => onChange(v)}
    />
  </div>
);

// Result row
const ResultRow = ({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) => (
  <div className="flex justify-between items-center">
    <span className="text-primary-foreground/60 text-sm">{label}</span>
    <span className={`font-display font-bold ${highlight ? "text-lg text-primary-foreground" : "text-sm text-primary-foreground/80"}`}>
      {value}
    </span>
  </div>
);

export default ROICalculator;
