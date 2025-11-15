import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApplicationData {
  fullName: string;
  email: string;
  contactNumber: string;
  linkedinProfile: string;
  interestedPosition: string;
  currentRole: string;
  currentOrganization: string;
  totalExperience: string;
  currentLocation: string;
  locationPreference: string;
  currentCTC: string;
  expectedCTC: string;
  noticePeriod: string;
  currentlyInNotice: string;
  immediateJoiner: string;
  otherOffersInHand: string;
  offeredCTC: string;
  certifications: string;
  referredBy: string;
  additionalInfo: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const formData = await req.formData();
    const dataBlob = formData.get("data") as Blob;
    const resumeFile = formData.get("resume") as File;
    const applicationData: ApplicationData = JSON.parse(await dataBlob.text());

    let resumePath = null;

    // Upload resume if provided
    if (resumeFile) {
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${crypto.randomUUID()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(filePath, resumeFile, {
          contentType: resumeFile.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Resume upload error:", uploadError);
        throw new Error("Failed to upload resume");
      }

      resumePath = filePath;
    }

    // Insert application into database
    const { data: insertedApp, error: insertError } = await supabase
      .from("applications")
      .insert({
        full_name: applicationData.fullName,
        email: applicationData.email,
        contact_number: applicationData.contactNumber,
        linkedin_profile: applicationData.linkedinProfile,
        resume_path: resumePath,
        interested_position: applicationData.interestedPosition,
        applicant_current_role: applicationData.currentRole,
        applicant_current_organization: applicationData.currentOrganization,
        total_experience: applicationData.totalExperience,
        applicant_current_location: applicationData.currentLocation,
        location_preference: applicationData.locationPreference,
        current_ctc: applicationData.currentCTC,
        expected_ctc: applicationData.expectedCTC,
        notice_period: applicationData.noticePeriod,
        currently_in_notice: applicationData.currentlyInNotice,
        immediate_joiner: applicationData.immediateJoiner,
        other_offers_in_hand: applicationData.otherOffersInHand,
        offered_ctc: applicationData.offeredCTC,
        certifications: applicationData.certifications,
        referred_by: applicationData.referredBy,
        additional_info: applicationData.additionalInfo,
      })
      .select()
      .single();

    if (insertError) {
      console.error("Database insert error:", insertError);
      throw new Error("Failed to save application");
    }

    // Send notification email to admin
    await resend.emails.send({
      from: "edozie@jenmeta.cloud",
      to: ["edozie@jenmeta.cloud"],
      subject: `New Job Application: ${applicationData.interestedPosition} - ${applicationData.fullName}`,
      html: `
        <h2>New Job Application Received</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${applicationData.fullName}</p>
        <p><strong>Email:</strong> ${applicationData.email}</p>
        <p><strong>Contact:</strong> ${applicationData.contactNumber}</p>
        <p><strong>LinkedIn:</strong> ${applicationData.linkedinProfile}</p>
        
        <h3>Position Details</h3>
        <p><strong>Interested Position:</strong> ${applicationData.interestedPosition}</p>
        <p><strong>Current Role:</strong> ${applicationData.currentRole}</p>
        <p><strong>Current Organization:</strong> ${applicationData.currentOrganization}</p>
        <p><strong>Total Experience:</strong> ${applicationData.totalExperience} years</p>
        
        <h3>Location & Compensation</h3>
        <p><strong>Current Location:</strong> ${applicationData.currentLocation}</p>
        <p><strong>Location Preference:</strong> ${applicationData.locationPreference}</p>
        <p><strong>Current CTC:</strong> ₹${applicationData.currentCTC}</p>
        <p><strong>Expected CTC:</strong> ₹${applicationData.expectedCTC}</p>
        
        <h3>Availability</h3>
        <p><strong>Notice Period:</strong> ${applicationData.noticePeriod} days</p>
        <p><strong>Currently in Notice:</strong> ${applicationData.currentlyInNotice}</p>
        <p><strong>Immediate Joiner:</strong> ${applicationData.immediateJoiner}</p>
        
        <h3>Additional Information</h3>
        <p><strong>Other Offers:</strong> ${applicationData.otherOffersInHand}</p>
        <p><strong>Offered CTC:</strong> ${applicationData.offeredCTC}</p>
        <p><strong>Certifications:</strong> ${applicationData.certifications}</p>
        <p><strong>Referred By:</strong> ${applicationData.referredBy}</p>
        <p><strong>Additional Comments:</strong> ${applicationData.additionalInfo}</p>
        
        ${resumePath ? `<p><strong>Resume:</strong> Uploaded to storage at ${resumePath}</p>` : ''}
      `,
    });

    // Send confirmation email to applicant
    await resend.emails.send({
      from: "edozie@jenmeta.cloud",
      to: [applicationData.email],
      subject: "Application Received - Thank You!",
      html: `
        <h1>Hi ${applicationData.fullName},</h1>
        <p>Thank you for applying for the <strong>${applicationData.interestedPosition}</strong> position at our company.</p>
        <p>We have received your application and our team will review it shortly. If your profile matches our requirements, we will get in touch with you within the next few days.</p>
        <p>In the meantime, feel free to connect with us on LinkedIn or reach out if you have any questions.</p>
        <p>Best regards,<br>James Edozie Nnadi<br>Hiring Team</p>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, applicationId: insertedApp.id }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-application:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
