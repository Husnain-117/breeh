// ─── Case Study Data Layer ───────────────────────────────────────────────────

export interface HeroStat {
    label: string;
    value: string;
}

export interface MetricCard {
    value: string;
    label: string;
}

export interface Section {
    id: string;
    title: string;
    content: string;
    bullets?: string[];
}

export interface Testimonial {
    quote: string;
    name: string;
    role: string;
    company: string;
}

export interface CaseStudySEO {
    title: string;
    description: string;
    ogImage?: string;
}

export interface CaseStudy {
    slug: string;
    title: string;
    category: string;
    date: string;
    readTime: string;
    heroStats: HeroStat[];
    heroImage: string;
    sections: Section[];
    metricsCards: MetricCard[];
    quote: {
        text: string;
        author: string;
        role: string;
    };
    testimonials: Testimonial[];
    seo: CaseStudySEO;
}

// ─── Full Case Studies ───────────────────────────────────────────────────────

export const caseStudies: CaseStudy[] = [
    {
        slug: "breeh-ai-dental-receptionist-roi",
        title:
            "How Breeh AI Increased Appointment Conversion by 3.4x Using AI Voice Receptionists",
        category: "Case Study",
        date: "Jan 10, 2026",
        readTime: "11 min read",
        heroStats: [
            { label: "ROI", value: "3.4x" },
            { label: "Calls Handled by AI", value: "68%" },
        ],
        heroImage: "/images/case-study-breeh-placeholder.jpg",
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                content:
                    "When businesses start trusting an AI voice receptionist to handle real customer conversations, something is working. Breeh AI helps companies automate inbound calls, appointment bookings, and customer interactions using real-time conversational AI voice agents. This case study examines how a multi-location dental service organization transformed its patient acquisition pipeline by deploying Breeh AI across its busiest locations.",
            },
            {
                id: "the-organization",
                title: "The Organization",
                content:
                    "A multi-location dental service organization operating 24 clinics across the mid-Atlantic region. With hundreds of inbound calls daily, the organization relied heavily on front-desk staff to answer phones, qualify patients, and manually create bookings in their practice management system. During peak hours and after business hours, a significant portion of calls went unanswered — resulting in lost revenue and poor patient experience.",
            },
            {
                id: "the-problem",
                title: "The Problem",
                content:
                    "Before deploying Breeh AI, the organization faced several critical challenges that were directly impacting revenue and patient satisfaction:",
                bullets: [
                    "Over 35% of inbound calls went unanswered during peak hours and after business hours",
                    "Manual booking workflows created a 4-7 minute average handling time per call",
                    "No centralized visibility into call volume, conversion rates, or missed opportunities",
                    "Front desk staff were overloaded, splitting time between in-office patients and phone calls",
                    "Weekend and holiday calls were entirely missed with no coverage solution",
                ],
            },
            {
                id: "the-solution",
                title: "The Solution",
                content:
                    "Breeh AI deployed a fully customized AI voice receptionist tailored to the organization's scheduling protocols, insurance verification requirements, and patient communication standards:",
                bullets: [
                    "Real-time AI voice agents capable of natural, empathetic patient conversations",
                    "Automatic appointment booking integrated directly with the practice management system",
                    "Seamless CRM and EHR integrations for instant patient record lookup",
                    "24/7 call automation covering after-hours, weekends, and holidays",
                    "Multi-language support for diverse patient populations",
                    "Intelligent call routing for complex cases requiring human intervention",
                ],
            },
            {
                id: "30-day-results",
                title: "30-Day Results",
                content:
                    "Within the first 30 days of deployment, the results exceeded expectations across every key performance indicator. The AI voice receptionist handled the majority of routine calls while seamlessly escalating complex situations to staff, creating a hybrid workflow that maximized both efficiency and patient satisfaction.",
            },
            {
                id: "what-leadership-says",
                title: "What Leadership Says",
                content:
                    "The executive team was initially skeptical about AI handling patient-facing conversations. After seeing the 30-day results, the sentiment shifted dramatically. The AI didn't just match human performance on routine calls — it exceeded it in consistency, availability, and conversion rate.",
            },
            {
                id: "automation-impact",
                title: "Automation Impact",
                content:
                    "The key to Breeh AI's success is its hybrid approach. The AI handles routine scheduling, insurance verification, and information requests autonomously, while intelligently routing complex situations to human staff. This means patients always get the right level of attention — simple requests are handled instantly by AI, while sensitive or complex cases receive personal human care. The result is a system where AI and staff complement each other, creating a better experience than either could deliver alone.",
            },
            {
                id: "why-ai-doesnt-replace-staff",
                title: "Why AI Doesn't Replace Staff",
                content:
                    "A common concern with AI deployment is staff displacement. In practice, the opposite occurred. By removing the burden of repetitive phone calls, front desk staff were able to focus on higher-value activities: in-office patient experience, complex case coordination, and relationship building. Staff satisfaction scores actually increased by 22% after deployment, as team members felt less overwhelmed and more empowered to do meaningful work. The AI became a tool that amplified human capability rather than replacing it.",
            },
            {
                id: "deployment-process",
                title: "Deployment Process",
                content:
                    "One of the most compelling aspects of the Breeh AI deployment was the speed and simplicity of the implementation process:",
                bullets: [
                    "Full setup completed in under 72 hours from contract signing to live deployment",
                    "Zero infrastructure changes required — Breeh AI plugs into the existing phone stack via simple call forwarding",
                    "No hardware purchases, no software installations on local machines",
                    "Custom voice persona and conversation flows configured in a collaborative workshop with clinic managers",
                    "Staff training completed in a single 30-minute session per location",
                ],
            },
            {
                id: "key-metrics",
                title: "Key Metrics",
                content:
                    "The conversion rate improvement was the most significant finding. Before Breeh AI, the organization converted approximately 18% of inbound calls into booked appointments. After deployment, the conversion rate jumped to 61% — a 3.4x improvement. This was driven by two factors: the AI's ability to respond instantly without hold times, and its 24/7 availability capturing patients who previously called after hours and never called back.",
            },
            {
                id: "business-impact",
                title: "Business Impact",
                content:
                    "The business impact extended far beyond call handling metrics. Staff efficiency improved dramatically as team members were freed from phone duty to focus on in-office patient care. Revenue grew measurably as previously missed calls were captured and converted. Patient satisfaction scores increased due to zero hold times and consistent, professional interactions. The organization estimates that Breeh AI will generate over $2.1M in additional revenue in the first year based on the improved conversion rates across all 24 locations.",
            },
            {
                id: "conclusion",
                title: "Conclusion",
                content:
                    "The results speak clearly: AI voice automation is not a future technology — it's a present-day competitive advantage. For this dental service organization, Breeh AI transformed a broken call-handling process into a high-converting, always-available patient acquisition channel. The 3.4x ROI was achieved in just 30 days, with compounding returns expected as the system learns and improves over time. For any multi-location practice struggling with missed calls, booking delays, or staff overload, the data makes the case conclusively: AI voice receptionists deliver measurable, immediate results.",
            },
        ],
        metricsCards: [
            { value: "718", label: "Calls Automated" },
            { value: "301", label: "Bookings Made" },
            { value: "4,663", label: "Conversations" },
            { value: "64%", label: "Fully Automated" },
            { value: "3.4x", label: "ROI" },
        ],
        quote: {
            text: "Breeh AI helped us capture patients we were previously losing after business hours. The ROI was visible within the first two weeks.",
            author: "Dr. Sarah Mitchell",
            role: "Chief Operating Officer",
        },
        testimonials: [
            {
                quote:
                    "We went from missing 35% of our calls to capturing virtually every single one. The impact on our bottom line has been extraordinary.",
                name: "Dr. James Carter",
                role: "Managing Partner",
                company: "Atlantic Dental Group",
            },
            {
                quote:
                    "Our front desk staff actually love it. They can focus on patients in the office while Breeh handles the phones. Everyone wins.",
                name: "Maria Gonzalez",
                role: "Practice Manager",
                company: "Sunrise Family Dentistry",
            },
            {
                quote:
                    "The setup was unbelievably fast. We were live in 48 hours and seeing results by the end of the first week.",
                name: "Dr. Kevin Park",
                role: "Clinic Director",
                company: "Parkside Dental Care",
            },
        ],
        seo: {
            title:
                "How Breeh AI Increased Appointment Conversion by 3.4x | Case Study",
            description:
                "Discover how a multi-location dental organization achieved 3.4x ROI using Breeh AI voice receptionists. 718 calls automated, 301 bookings, 64% full automation in 30 days.",
            ogImage: "/images/case-study-breeh-placeholder.jpg",
        },
    },
    {
        slug: "allied-oms-multi-location-ai",
        title: "Allied OMS: How a Multi-Location Practice Scaled With AI",
        category: "Case Study",
        date: "Jan 22, 2026",
        readTime: "8 min read",
        heroStats: [
            { label: "Booking Increase", value: "40%" },
            { label: "Locations", value: "8" },
        ],
        heroImage: "/images/case-study-breeh-placeholder.jpg",
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                content:
                    "Allied OMS deployed Breeh AI across 8 locations and saw a 40% increase in new patient bookings within the first quarter. This case study explores how a specialized oral and maxillofacial surgery practice leveraged AI voice automation to scale efficiently.",
            },
            {
                id: "the-organization",
                title: "The Organization",
                content:
                    "Allied OMS operates 8 oral surgery clinics across the southeastern United States, handling complex referral-based patient scheduling with strict insurance and authorization requirements.",
            },
            {
                id: "the-problem",
                title: "The Problem",
                content:
                    "Managing scheduling across 8 locations with complex referral workflows created significant operational challenges:",
                bullets: [
                    "Referral calls frequently went unanswered during high-volume periods",
                    "Complex insurance verification delayed booking by 24-48 hours",
                    "No after-hours coverage for urgent referral calls",
                    "Inconsistent patient communication across locations",
                ],
            },
            {
                id: "the-solution",
                title: "The Solution",
                content:
                    "Breeh AI was configured to handle the unique requirements of oral surgery referral scheduling:",
                bullets: [
                    "Custom referral intake workflows matching each location's protocols",
                    "Automated insurance pre-verification during the initial call",
                    "24/7 coverage for urgent referral calls with intelligent triage",
                    "Standardized patient communication across all 8 locations",
                ],
            },
            {
                id: "30-day-results",
                title: "30-Day Results",
                content:
                    "Within the first quarter, Allied OMS experienced a 40% increase in new patient bookings, with referral capture rates improving from 62% to 91%.",
            },
            {
                id: "what-leadership-says",
                title: "What Leadership Says",
                content:
                    "The leadership team credited Breeh AI with enabling growth without proportional staff increases, calling it a pivotal operational decision.",
            },
            {
                id: "automation-impact",
                title: "Automation Impact",
                content:
                    "The hybrid AI-human model proved especially effective for complex surgical scheduling where patient sensitivity is paramount.",
            },
            {
                id: "why-ai-doesnt-replace-staff",
                title: "Why AI Doesn't Replace Staff",
                content:
                    "Staff were freed to focus on surgical coordination and patient preparation, functions that require specialized human expertise.",
            },
            {
                id: "deployment-process",
                title: "Deployment Process",
                content:
                    "Deployment was completed across all 8 locations in 5 business days:",
                bullets: [
                    "Phased rollout starting with the highest-volume location",
                    "Custom conversation flows for each specialty area",
                    "Integration with the existing referral management system",
                ],
            },
            {
                id: "key-metrics",
                title: "Key Metrics",
                content:
                    "Referral capture rate improved from 62% to 91%. Average time-to-booking decreased from 48 hours to under 4 hours.",
            },
            {
                id: "business-impact",
                title: "Business Impact",
                content:
                    "Revenue from new patient consultations increased by $840K annualized across all locations, driven primarily by improved referral capture.",
            },
            {
                id: "conclusion",
                title: "Conclusion",
                content:
                    "Allied OMS demonstrated that AI voice automation is particularly powerful for multi-location specialty practices with complex scheduling requirements.",
            },
        ],
        metricsCards: [
            { value: "40%", label: "More Bookings" },
            { value: "91%", label: "Referral Capture" },
            { value: "8", label: "Locations Live" },
            { value: "<4hrs", label: "Time to Book" },
            { value: "$840K", label: "Revenue Impact" },
        ],
        quote: {
            text: "Breeh AI allowed us to scale without adding headcount. Our referral capture rate nearly doubled.",
            author: "Dr. Robert Chen",
            role: "Practice Director",
        },
        testimonials: [
            {
                quote:
                    "The referral capture improvement alone justified the investment within the first month.",
                name: "Dr. Robert Chen",
                role: "Practice Director",
                company: "Allied OMS",
            },
        ],
        seo: {
            title: "Allied OMS: Multi-Location AI Scaling | Case Study",
            description:
                "See how Allied OMS scaled across 8 locations with Breeh AI, achieving 40% more bookings and 91% referral capture rate.",
        },
    },
    {
        slug: "danville-pediatric-weekend-recovery",
        title: "Danville Pediatric Dentistry: Weekend Call Recovery Success",
        category: "Case Study",
        date: "Jan 15, 2026",
        readTime: "7 min read",
        heroStats: [
            { label: "New Patients (Mo. 1)", value: "23" },
            { label: "Weekend Coverage", value: "100%" },
        ],
        heroImage: "/images/case-study-breeh-placeholder.jpg",
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                content:
                    "With Breeh AI handling weekend and after-hours calls, Danville Pediatric Dentistry recovered 23 new patients in the first month alone — patients that would have otherwise been lost.",
            },
            {
                id: "the-organization",
                title: "The Organization",
                content:
                    "Danville Pediatric Dentistry is a single-location pediatric dental practice serving families in central Virginia with a focus on creating comfortable, child-friendly experiences.",
            },
            {
                id: "the-problem",
                title: "The Problem",
                content:
                    "As a pediatric practice, parent calls often happen outside business hours when they notice dental issues:",
                bullets: [
                    "75% of parent inquiry calls came during evenings and weekends",
                    "No after-hours coverage resulted in parents booking with competitors",
                    "Voicemail callback rates were below 30%",
                    "Single receptionist couldn't handle in-office plus phone duties simultaneously",
                ],
            },
            {
                id: "the-solution",
                title: "The Solution",
                content:
                    "Breeh AI was deployed with a warm, parent-friendly voice persona designed for pediatric practice communication:",
                bullets: [
                    "Custom child-friendly scheduling workflows with parent verification",
                    "After-hours and weekend coverage handling routine scheduling and triage",
                    "Integration with the practice management system for real-time availability",
                    "Automatic follow-up for missed appointments and recall scheduling",
                ],
            },
            {
                id: "30-day-results",
                title: "30-Day Results",
                content:
                    "23 new patient families were captured in the first month, directly attributable to after-hours AI call handling.",
            },
            {
                id: "what-leadership-says",
                title: "What Leadership Says",
                content:
                    "The practice owner was amazed at how many families were calling on weekends and previously getting no response.",
            },
            {
                id: "automation-impact",
                title: "Automation Impact",
                content:
                    "The AI handled 100% of weekend calls and 85% of after-hours weekday calls without human intervention.",
            },
            {
                id: "why-ai-doesnt-replace-staff",
                title: "Why AI Doesn't Replace Staff",
                content:
                    "The single receptionist reported feeling significantly less stressed, and patient in-office experience scores improved as a result.",
            },
            {
                id: "deployment-process",
                title: "Deployment Process",
                content:
                    "Setup for a single location was completed in under 24 hours:",
                bullets: [
                    "Simple call forwarding configured on the existing phone system",
                    "Parent-friendly voice persona selected and customized",
                    "Scheduling rules and availability synced with the practice calendar",
                ],
            },
            {
                id: "key-metrics",
                title: "Key Metrics",
                content:
                    "New patient acquisition increased by 38% month-over-month. Weekend call capture went from 0% to 100%.",
            },
            {
                id: "business-impact",
                title: "Business Impact",
                content:
                    "Monthly revenue increased by approximately $18,400 from the additional new patient appointments, with a projected annual impact of over $220K.",
            },
            {
                id: "conclusion",
                title: "Conclusion",
                content:
                    "Even for single-location practices, AI voice automation delivers meaningful results by capturing the calls that previously went unanswered.",
            },
        ],
        metricsCards: [
            { value: "23", label: "New Patients" },
            { value: "100%", label: "Weekend Coverage" },
            { value: "38%", label: "Growth Rate" },
            { value: "85%", label: "Calls Automated" },
            { value: "$220K", label: "Annual Impact" },
        ],
        quote: {
            text: "We had no idea how many families were trying to reach us on weekends. Breeh AI changed everything.",
            author: "Dr. Lisa Yamamoto",
            role: "Practice Owner",
        },
        testimonials: [
            {
                quote:
                    "Parents love that they can schedule appointments any time. It's been a game-changer for our practice.",
                name: "Dr. Lisa Yamamoto",
                role: "Practice Owner",
                company: "Danville Pediatric Dentistry",
            },
        ],
        seo: {
            title:
                "Danville Pediatric Dentistry: Weekend Call Recovery | Case Study",
            description:
                "How Danville Pediatric Dentistry captured 23 new patients in month one with Breeh AI weekend call coverage.",
        },
    },
    {
        slug: "tmanagement-centralized-ai",
        title: "TManagement Group: Centralized AI for 12 Locations",
        category: "Case Study",
        date: "Dec 18, 2025",
        readTime: "10 min read",
        heroStats: [
            { label: "Missed Calls Reduced", value: "78%" },
            { label: "Staff Hours Saved", value: "120+/mo" },
        ],
        heroImage: "/images/case-study-breeh-placeholder.jpg",
        sections: [
            {
                id: "introduction",
                title: "Introduction",
                content:
                    "TManagement Group standardized patient communication across 12 locations, reducing missed calls by 78% and saving 120+ staff hours per month with Breeh AI.",
            },
            {
                id: "the-organization",
                title: "The Organization",
                content:
                    "TManagement Group is a dental service organization managing 12 general dentistry locations across three states, with centralized operations and standardized patient protocols.",
            },
            {
                id: "the-problem",
                title: "The Problem",
                content:
                    "Consistency and efficiency were major challenges across the 12-location network:",
                bullets: [
                    "Inconsistent patient communication quality across locations",
                    "High staff turnover at front desks creating training burden",
                    "No standardized call handling or booking protocols",
                    "Missed calls averaged 28% across the network",
                ],
            },
            {
                id: "the-solution",
                title: "The Solution",
                content:
                    "Breeh AI was deployed as a centralized communication layer across all locations:",
                bullets: [
                    "Unified AI voice receptionist with location-aware routing",
                    "Standardized booking protocols ensuring consistent patient experience",
                    "Centralized analytics dashboard for cross-location performance visibility",
                    "Automatic staff escalation for complex or sensitive situations",
                ],
            },
            {
                id: "30-day-results",
                title: "30-Day Results",
                content:
                    "Missed calls dropped from 28% to 6% across all locations. Staff reported 120+ hours per month freed from phone duties.",
            },
            {
                id: "what-leadership-says",
                title: "What Leadership Says",
                content:
                    "The COO described Breeh AI as the single most impactful operational improvement in the organization's history.",
            },
            {
                id: "automation-impact",
                title: "Automation Impact",
                content:
                    "The centralized AI model provided unprecedented visibility into call patterns across all locations, enabling data-driven staffing decisions.",
            },
            {
                id: "why-ai-doesnt-replace-staff",
                title: "Why AI Doesn't Replace Staff",
                content:
                    "Staff turnover at front desks actually decreased by 15% as team members felt less burned out and more valued in their roles.",
            },
            {
                id: "deployment-process",
                title: "Deployment Process",
                content:
                    "The 12-location rollout was completed in 10 business days:",
                bullets: [
                    "Centralized configuration with per-location customization",
                    "Phased deployment — 4 locations per wave over 3 waves",
                    "Dedicated support during each wave's first 48 hours",
                ],
            },
            {
                id: "key-metrics",
                title: "Key Metrics",
                content:
                    "Network-wide missed call rate dropped from 28% to 6%. Patient satisfaction scores improved by 19% on average.",
            },
            {
                id: "business-impact",
                title: "Business Impact",
                content:
                    "Combined revenue impact across 12 locations exceeded $1.4M annualized, with staff efficiency gains valued at an additional $280K per year.",
            },
            {
                id: "conclusion",
                title: "Conclusion",
                content:
                    "For DSOs managing multiple locations, Breeh AI provides both operational efficiency and the cross-location consistency that drives scalable growth.",
            },
        ],
        metricsCards: [
            { value: "78%", label: "Fewer Missed Calls" },
            { value: "120+", label: "Hours Saved/Mo" },
            { value: "12", label: "Locations" },
            { value: "19%", label: "CSAT Improvement" },
            { value: "$1.4M", label: "Revenue Impact" },
        ],
        quote: {
            text: "Breeh AI gave us something we never had before — consistency. Every patient gets the same excellent experience, every time.",
            author: "Michael Torres",
            role: "Chief Operating Officer",
        },
        testimonials: [
            {
                quote:
                    "The centralized dashboard alone was worth it. We finally have visibility into what's happening across all our locations.",
                name: "Michael Torres",
                role: "COO",
                company: "TManagement Group",
            },
        ],
        seo: {
            title: "TManagement Group: Centralized AI for 12 Locations | Case Study",
            description:
                "How TManagement Group reduced missed calls by 78% and saved 120+ staff hours monthly across 12 locations with Breeh AI.",
        },
    },
];

// ─── Utility Functions ───────────────────────────────────────────────────────

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(
    currentSlug: string,
    limit = 3
): CaseStudy[] {
    return caseStudies.filter((cs) => cs.slug !== currentSlug).slice(0, limit);
}
