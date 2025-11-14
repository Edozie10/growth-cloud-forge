-- Create applications table
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  linkedin_profile TEXT,
  resume_path TEXT,
  interested_position TEXT NOT NULL,
  applicant_current_role TEXT,
  applicant_current_organization TEXT,
  total_experience TEXT NOT NULL,
  applicant_current_location TEXT,
  location_preference TEXT,
  current_ctc TEXT,
  expected_ctc TEXT,
  notice_period TEXT,
  currently_in_notice TEXT,
  immediate_joiner TEXT,
  other_offers_in_hand TEXT,
  offered_ctc TEXT,
  certifications TEXT,
  referred_by TEXT,
  additional_info TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert applications (public form)
CREATE POLICY "Anyone can submit applications"
ON public.applications
FOR INSERT
WITH CHECK (true);

-- Create storage bucket for resumes
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'resumes',
  'resumes',
  false,
  5242880,
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain', 'application/rtf']
);

-- Allow anyone to upload resumes
CREATE POLICY "Anyone can upload resumes"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'resumes');