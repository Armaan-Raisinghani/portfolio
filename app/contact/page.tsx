"use client";
import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Get in Touch</h1>
          <p className="text-muted-foreground">
            Want to talk to me voluntarily for some fucking reason? Go on I
            guess.
          </p>
        </div>
        <div className="rounded-lg border bg-card p-8 shadow-sm">
          <ContactForm />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Email</h3>
            <p className="text-muted-foreground">me@armaanr.xyz</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Location</h3>
            <p className="text-muted-foreground">Mohali, Punjab</p>
          </div>
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Github</h3>
            <p className="text-muted-foreground">@Armaan-Raisinghani</p>
          </div>
        </div>
      </div>
    </div>
  );
}
