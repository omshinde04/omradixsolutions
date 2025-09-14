

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Connect DB
    await connectDB();

    // Save to MongoDB
    const newContact = await Contact.create({ name, email, message });

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Email
    await transporter.sendMail({
      from: `"Omradix Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>New Message from Omradix Website</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
        <p>📅 ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json({ success: true, data: newContact });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
