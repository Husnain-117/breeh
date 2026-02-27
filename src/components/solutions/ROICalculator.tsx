import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight, DollarSign, Phone, Building2, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

const ROICalculator = () => {
    const [callsPerDay, setCallsPerDay] = useState(45);
    const [missedRate, setMissedRate] = useState(25);
    const [patientValue, setPatientValue] = useState(800);
    const [locations, setLocations] = useState(1);

    const missedCallsPerYear = Math.round(callsPerDay * (missedRate / 100) * 260);
    const recoveredPatients = Math.round(missedCallsPerYear * 0.4);
    const recoveredRevenue = recoveredPatients * patientValue;
    const breehCost = locations <= 2 ? 299 * 12 * locations : locations <= 10 ? 599 * 12 : 599 * 12 * locations;
    const netBenefit = recoveredRevenue - breehCost;
    const roiPct = breehCost > 0 ? Math.round((netBenefit / breehCost) * 100) : 0;
    const paybackWeeks = breehCost > 0 ? Math.max(1, Math.round((breehCost / recoveredRevenue) * 52)) : 0;

    return (
        <section id="roi" className="py-28 px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-background">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        ROI Calculator
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
                        Calculate your return
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-muted-foreground">See how much Breeh could save your practice in 60 seconds.</motion.p>
                </div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-card rounded-3xl shadow-2xl border border-border p-8 md:p-12">
                    <div className="grid lg:grid-cols-[1fr_340px] gap-10">
                        {/* Sliders */}
                        <div className="space-y-8">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-medium text-foreground flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Average calls per day</label>
                                    <span className="text-sm font-bold text-primary">{callsPerDay}</span>
                                </div>
                                <input type="range" min={10} max={200} value={callsPerDay} onChange={(e) => setCallsPerDay(Number(e.target.value))} className="w-full accent-primary" />
                                <p className="text-[10px] text-muted-foreground mt-1">National average: 45 calls/day</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-medium text-foreground flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary" /> Current missed call rate</label>
                                    <span className="text-sm font-bold text-primary">{missedRate}%</span>
                                </div>
                                <input type="range" min={5} max={50} value={missedRate} onChange={(e) => setMissedRate(Number(e.target.value))} className="w-full accent-primary" />
                                <p className="text-[10px] text-muted-foreground mt-1">Industry average: 25%</p>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-medium text-foreground flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> Average patient value</label>
                                    <span className="text-sm font-bold text-primary">${patientValue}</span>
                                </div>
                                <input type="range" min={200} max={2000} step={50} value={patientValue} onChange={(e) => setPatientValue(Number(e.target.value))} className="w-full accent-primary" />
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="text-sm font-medium text-foreground flex items-center gap-2"><Building2 className="w-4 h-4 text-primary" /> Number of locations</label>
                                    <span className="text-sm font-bold text-primary">{locations}</span>
                                </div>
                                <input type="range" min={1} max={50} value={locations} onChange={(e) => setLocations(Number(e.target.value))} className="w-full accent-primary" />
                            </div>
                        </div>

                        {/* Results */}
                        <div className="bg-muted rounded-2xl p-6 border border-border sticky top-32">
                            <p className="text-xs text-muted-foreground mb-1">Your potential annual savings</p>
                            <p className="font-display font-bold text-4xl text-primary mb-4">${netBenefit.toLocaleString()}</p>
                            <div className="space-y-3 text-sm border-t border-border pt-4">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Recovered patients</span>
                                    <span className="font-semibold text-foreground">{recoveredPatients}/year</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Recovered revenue</span>
                                    <span className="font-semibold text-foreground">${recoveredRevenue.toLocaleString()}/yr</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Cost of Breeh</span>
                                    <span className="font-semibold text-foreground">${breehCost.toLocaleString()}/yr</span>
                                </div>
                                <div className="flex justify-between border-t border-border pt-3 mt-3">
                                    <span className="text-muted-foreground">ROI</span>
                                    <span className="font-bold text-green-600 text-lg">{roiPct}%</span>
                                </div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1">
                                <Clock className="w-3 h-3" /> Payback period: {paybackWeeks} week{paybackWeeks !== 1 ? "s" : ""}
                            </p>

                            <button onClick={() => window.open(SITE_CONFIG.calendlyUrl, "_blank")}
                                className="w-full mt-5 bg-primary text-white py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all">
                                Schedule ROI review <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Trust */}
                <p className="text-center text-xs text-muted-foreground mt-8">
                    Calculations based on 200+ practice data points · Verified by independent dental consultants
                </p>
            </div>
        </section>
    );
};

export default ROICalculator;
