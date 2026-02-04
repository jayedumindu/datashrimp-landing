import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Check both potential variable names due to potential typo in .env.local
    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.CONTACT_EMAIL_FROM;
    const toEmail = process.env.CONTACT_EMAIL_TO;
    
    if (!resendApiKey) {
      console.error("Resend API Key is missing");
      return NextResponse.json({ error: "Configuration error: Missing API Key" }, { status: 500 });
    }

    if (!fromEmail || !toEmail) {
      console.error("Contact email configuration missing");
      return NextResponse.json({ error: "Configuration error: Missing email addresses" }, { status: 500 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: `Datashrimp <${fromEmail}>`,
        to: toEmail,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #015fe8; margin-top: 0;">New Inquiry from ${name}</h2>
            <p style="color: #4b5563; line-height: 1.5; margin-bottom: 20px;">
              You have received a new message through the Datashrimp website contact form.
            </p>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; margin-bottom: 20px;">
              <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0 0 0; white-space: pre-wrap; color: #111827;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #9ca3af; text-align: center; margin-top: 30px;">
              This email was sent from the Datashrimp Contact Form.
            </p>
          </div>
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      console.error("Resend API error:", errorData);
      return NextResponse.json({ error: errorData.message || "Failed to send email" }, { status: response.status });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
