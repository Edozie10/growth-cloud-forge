import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Google Sheets API configuration
const GOOGLE_SHEETS_API = "https://sheets.googleapis.com/v4/spreadsheets";

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

// Helper function to create JWT for Google Sheets API
async function createJWT(serviceAccount: any): Promise<string> {
  const header = {
    alg: "RS256",
    typ: "JWT",
  };

  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: serviceAccount.client_email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const signatureInput = `${encodedHeader}.${encodedPayload}`;

  const privateKey = await crypto.subtle.importKey(
    "pkcs8",
    pemToArrayBuffer(serviceAccount.private_key),
    {
      name: "RSASSA-PKCS1-v1_5",
      hash: "SHA-256",
    },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    privateKey,
    new TextEncoder().encode(signatureInput)
  );

  const encodedSignature = base64UrlEncode(signature);
  return `${signatureInput}.${encodedSignature}`;
}

function base64UrlEncode(data: string | ArrayBuffer): string {
  const bytes = typeof data === "string" 
    ? new TextEncoder().encode(data)
    : new Uint8Array(data);
  
  let binary = "";
  bytes.forEach(byte => binary += String.fromCharCode(byte));
  
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function pemToArrayBuffer(pem: string): ArrayBuffer {
  const pemContents = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  
  const binaryString = atob(pemContents);
  const bytes = new Uint8Array(binaryString.length);
  
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  
  return bytes.buffer;
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

    // Prepare data for Google Sheets
    const sheetData = [
      new Date().toISOString(),
      applicationData.fullName,
      applicationData.email,
      applicationData.contactNumber,
      applicationData.linkedinProfile || "",
      applicationData.interestedPosition,
      applicationData.totalExperience,
      applicationData.currentRole || "",
      applicationData.currentOrganization || "",
      applicationData.certifications || "",
      applicationData.currentLocation || "",
      applicationData.locationPreference || "",
      applicationData.currentCTC || "",
      applicationData.expectedCTC || "",
      applicationData.offeredCTC || "",
      applicationData.otherOffersInHand || "",
      applicationData.immediateJoiner || "",
      applicationData.noticePeriod || "",
      applicationData.currentlyInNotice || "",
      applicationData.referredBy || "",
      applicationData.additionalInfo || "",
      resumePath || "No resume uploaded",
    ];

    // Write to Google Sheets
    const serviceAccount = JSON.parse(Deno.env.get("GOOGLE_SERVICE_ACCOUNT_JSON")!);
    const sheetId = Deno.env.get("GOOGLE_SHEET_ID");

    console.log("Getting Google Sheets access token...");
    
    const jwt = await createJWT(serviceAccount);
    const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
        assertion: jwt,
      }),
    });

    if (!tokenResponse.ok) {
      const error = await tokenResponse.text();
      console.error("Token error:", error);
      throw new Error(`Failed to get access token: ${error}`);
    }

    const { access_token } = await tokenResponse.json();
    console.log("Access token obtained successfully");

    console.log("Writing to Google Sheets...");
    const appendResponse = await fetch(
      `${GOOGLE_SHEETS_API}/${sheetId}/values/Sheet1!A:V:append?valueInputOption=RAW`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          values: [sheetData],
        }),
      }
    );

    if (!appendResponse.ok) {
      const error = await appendResponse.text();
      console.error("Google Sheets error:", error);
      throw new Error(`Failed to write to Google Sheets: ${error}`);
    }

    console.log("Data written to Google Sheets successfully");

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
      JSON.stringify({ success: true }),
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