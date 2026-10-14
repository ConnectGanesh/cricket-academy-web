import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const { name, email, phone, subject, message } = data;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the contact message (in production, send email here)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email using a service like Resend or SendGrid
    // const response = await resend.emails.send({
    //   from: 'contact@cricketacademy.com',
    //   to: 'admin@cricketacademy.com',
    //   subject: `New Contact Form: ${subject}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
    // });

    return NextResponse.json(
      { success: true, message: 'Message received successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
