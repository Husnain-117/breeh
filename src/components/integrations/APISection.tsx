import { useState } from "react";
import { motion } from "framer-motion";
import { Book, Webhook, Download, Copy, Check, Circle } from "lucide-react";

const languages = ["cURL", "Python", "Node.js", "PHP"];

const codeSnippets: Record<string, string> = {
    "cURL": `curl -X POST https://api.breeh.ai/v1/appointments \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "patient_id": "pt_123",
    "provider_id": "dr_456",
    "datetime": "2026-03-15T10:00:00Z",
    "type": "new_patient",
    "duration": 60
  }'`,
    "Python": `import breeh

client = breeh.Client(api_key="YOUR_API_KEY")

appointment = client.appointments.create(
    patient_id="pt_123",
    provider_id="dr_456",
    datetime="2026-03-15T10:00:00Z",
    type="new_patient",
    duration=60,
)

print(appointment.id)`,
    "Node.js": `import Breeh from '@breeh/node';

const client = new Breeh({ apiKey: 'YOUR_API_KEY' });

const appointment = await client.appointments.create({
  patientId: 'pt_123',
  providerId: 'dr_456',
  datetime: '2026-03-15T10:00:00Z',
  type: 'new_patient',
  duration: 60,
});

console.log(appointment.id);`,
    "PHP": `<?php
$breeh = new \\Breeh\\Client('YOUR_API_KEY');

$appointment = $breeh->appointments->create([
  'patient_id' => 'pt_123',
  'provider_id' => 'dr_456',
  'datetime' => '2026-03-15T10:00:00Z',
  'type' => 'new_patient',
  'duration' => 60,
]);

echo $appointment->id;`,
};

const statuses = [
    { name: "API", status: "Operational", uptime: "99.99%" },
    { name: "Webhooks", status: "Operational", uptime: "99.98%" },
    { name: "SDK", status: "v2.1.0", uptime: "Latest" },
    { name: "Docs", status: "Operational", uptime: "Current" },
];

const quickStart = [
    { icon: Book, title: "API Reference", desc: "Complete endpoint documentation", cta: "Explore docs →" },
    { icon: Webhook, title: "Webhooks Guide", desc: "Real-time event notifications", cta: "Set up webhooks →" },
    { icon: Download, title: "SDKs", desc: "Official libraries for popular languages", cta: "Download SDK →" },
];

const APISection = () => {
    const [lang, setLang] = useState("cURL");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippets[lang]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-28 px-6 lg:px-8 bg-gray-950 text-gray-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-5">
                        For Developers
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="font-display font-bold text-3xl md:text-5xl text-white mb-4">
                        Build custom integrations
                    </motion.h2>
                    <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        className="text-lg text-gray-400 max-w-xl mx-auto">
                        Robust API, webhooks, and SDKs for custom connections.
                    </motion.p>
                </div>

                {/* Status dashboard */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {statuses.map((s) => (
                        <div key={s.name} className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-2 mb-1">
                                <Circle className="w-2 h-2 fill-green-400 text-green-400" />
                                <span className="text-xs font-bold text-white">{s.name}</span>
                            </div>
                            <span className="text-xs text-green-400">{s.status}</span>
                            <span className="text-[10px] text-gray-500">{s.uptime}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Code playground */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl mb-12">
                    {/* Tabs */}
                    <div className="flex items-center gap-0 border-b border-white/10 px-4">
                        <div className="flex gap-1.5 py-3 mr-6">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                        </div>
                        {languages.map((l) => (
                            <button key={l} onClick={() => setLang(l)}
                                className={`px-4 py-3 text-xs font-medium transition-colors border-b-2 ${lang === l ? "text-white border-primary" : "text-gray-500 border-transparent hover:text-gray-300"
                                    }`}>{l}</button>
                        ))}
                        <button onClick={handleCopy} className="ml-auto flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors py-3">
                            {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="text-sm text-gray-300 font-mono leading-relaxed whitespace-pre">{codeSnippets[lang]}</pre>
                    </div>
                </motion.div>

                {/* Quick-start cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
                    {quickStart.map((card, i) => (
                        <motion.div key={card.title}
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary/40 transition-all">
                            <card.icon className="w-8 h-8 text-primary mb-4" />
                            <h4 className="font-bold text-white mb-1">{card.title}</h4>
                            <p className="text-sm text-gray-400 mb-4">{card.desc}</p>
                            <a href="#" className="text-sm text-primary font-semibold hover:underline">{card.cta}</a>
                        </motion.div>
                    ))}
                </div>

                {/* Community */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Join our developer community</p>
                    <p className="text-white font-bold text-lg mb-4">200+ developers building on Breeh</p>
                    <div className="flex justify-center gap-3">
                        <a href="#" className="px-5 py-2.5 bg-[#5865F2] text-white rounded-lg text-sm font-semibold hover:opacity-90 transition">Join Discord</a>
                        <a href="#" className="px-5 py-2.5 bg-white/10 text-white rounded-lg text-sm font-semibold hover:bg-white/15 transition">View GitHub</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default APISection;
