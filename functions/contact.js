// functions/contact.js
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
  try {
    const { name, email, company, message } = JSON.parse(event.body);

    // Send notification email to you
    await resend.emails.send({
      from: "edozie@jenmeta.cloud",     // your verified Zoho email
      to: ["edozie@jenmeta.cloud"],     // you receive submissions here
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong>${company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g,'<br>')}</p>
      `
    });

    // Send confirmation email to the client
    await resend.emails.send({
      from: "edozie@jenmeta.cloud",
      to: [email],
      subject: "Thank you for contacting us!",
      html: `
        <h1>Hi ${name},</h1>
        <p>Thank you for your consultation request. We have received your message and will get back to you shortly.</p>
        <p>Best regards,<br>James Edozie Nnadi</p>
      `
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Emails sent successfully" }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
