import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactTo = process.env.CONTACT_EMAIL_TO ?? "sandusaranisenadeera@gmail.com";

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please set GMAIL_USER and GMAIL_APP_PASSWORD.",
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: contactTo,
      replyTo: `"${name}" <${email}>`,
      subject: `Portfolio message from ${name}`,
      text: [
        `You received a new message from your portfolio contact form.`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
