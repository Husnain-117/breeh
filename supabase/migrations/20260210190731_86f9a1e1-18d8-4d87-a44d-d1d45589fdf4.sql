
CREATE TABLE public.calculator_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  monthly_calls INTEGER,
  missed_call_percent NUMERIC,
  unreturned_percent NUMERIC,
  conversion_rate NUMERIC,
  patient_value NUMERIC,
  recovery_rate NUMERIC,
  annual_revenue_lost NUMERIC,
  recovered_revenue NUMERIC,
  roi_multiple NUMERIC
);

ALTER TABLE public.calculator_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON public.calculator_leads
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can read leads"
  ON public.calculator_leads
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can update leads"
  ON public.calculator_leads
  FOR UPDATE
  USING (true);
