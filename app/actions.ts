"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

const transporter = nodemailer.createTransport({
  host: "smtp.eu.mailgun.org",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

type FormData = z.infer<typeof formSchema>;

export async function sendEmail(data: FormData) {
  const validatedFields = formSchema.safeParse(data);
  if (!validatedFields.success) {
    throw new Error("Invalid form data");
  }
  await transporter.sendMail({
    from: `${data.name} <${data.email}>`,
    to: "raisinghani.armaan1@gmail.com",
    subject: `${data.subject}`,
    text: data.message,
  });
}
