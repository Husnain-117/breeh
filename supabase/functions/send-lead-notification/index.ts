import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ADMIN_EMAIL = "husnainakram336@gmail.com";

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { type, name, email, inputs, results } = await req.json();

    let subject: string;
    let html: string;

    if (type === "sign_in") {
      subject = `New ROI Calculator Lead: ${name}`;
      html = `
        <h2>New ROI Calculator Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Time:</strong> ${new Date().toISOString()}</p>
      `;
    } else if (type === "results") {
      subject = `ROI Results Viewed: ${name}`;
      html = `
        <h2>ROI Calculator Results Viewed</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Inputs</h3>
        <ul>
          <li>Monthly Calls: ${inputs?.monthlyCalls}</li>
          <li>Missed Call Rate: ${inputs?.missedCallPercent}%</li>
          <li>Unreturned Rate: ${inputs?.unreturnedPercent}%</li>
          <li>Conversion Rate: ${inputs?.conversionRate}%</li>
          <li>Patient Value: $${inputs?.patientValue}</li>
        </ul>
        <h3>Results</h3>
        <ul>
          <li>Annual Revenue Lost: $${Math.round(results?.annualRevenueLost || 0).toLocaleString()}</li>
          <li>Recovered Revenue: $${Math.round(results?.recoveredRevenue || 0).toLocaleString()}</li>
          <li>ROI Multiple: ${(results?.roiMultiple || 0).toFixed(1)}×</li>
        </ul>
      `;
    } else {
      throw new Error("Invalid notification type");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Breeh AI <onboarding@resend.dev>",
        to: [ADMIN_EMAIL],
        subject,
        html,
      }),
    });

    const data = await res.json();
    console.log("Email sent:", data);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
};

serve(handler);
