import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  console.log('FROM_EMAIL:', process.env.FROM_EMAIL); // Log the FROM_EMAIL

  const msg = {
    to: ['warrenphillips.softdev@gmail.com'],
    from: "portfolio.warren@outlook.com",
    subject: 'New Message from my website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  };

  try {
    console.log('Attempting to send email with msg:', JSON.stringify(msg, null, 2));
    const result = await sgMail.send(msg);
    console.log('Email sent successfully. Response:', result);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    if (error instanceof Error && 'response' in error) {
      const sendGridError = error as { response: { body: unknown } };
      console.error('SendGrid error response:', JSON.stringify(sendGridError.response.body, null, 2));
    }
    return NextResponse.json({ error: 'Error sending email', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
