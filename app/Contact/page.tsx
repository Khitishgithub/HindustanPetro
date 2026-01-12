"use client";

import React, { useState } from "react";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

/* ---------------- ZOD SCHEMA ---------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  mobile: z.string().regex(/^[0-9]{10}$/, "10 digit mobile number required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

const RequiredLabel = ({ text }: { text: string }) => (
  <label className="text-sm font-medium">
    {text} <span className="text-red-500">*</span>
  </label>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      subject: "",
      message: "",
    },

    validators: {
      onSubmit: ({ value }) => {
        const parsed = contactSchema.safeParse(value);
        if (!parsed.success) {
          return parsed.error.flatten().fieldErrors;
        }
      },
    },

    onSubmit: async ({ value }) => {
      setLoading(true);

      try {
        const res = await fetch("/api/sending-mail", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(value),
        });

        if (!res.ok) throw new Error();

        toast.success("Message sent successfully!");
        toast.message("Confirmation email sent 📩");
        form.reset();
      } catch {
        toast.error("Failed to send message");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <>
      <section className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            We’d love to hear from you. Let’s start a conversation.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              icon: <MapPin />,
              title: "Our Address",
              value: "123 Industrial Park, New Delhi, India",
            },
            {
              icon: <Mail />,
              title: "Email Us",
              value: "info@company.com",
            },
            {
              icon: <Phone />,
              title: "Call Us",
              value: "+91 98765 43210",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group text-center transition-all duration-500 hover:-translate-y-2"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3d5a80]/10 text-[#3d5a80] transition group-hover:bg-[#3d5a80] group-hover:text-white">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-10">
        <div className="container mx-auto  max-w-4xl bg-white p-6 rounded-xl shadow-xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="grid gap-6 md:grid-cols-2"
          >
            <form.Field name="name">
              {(field) => (
                <div>
                  <RequiredLabel text="Full Name" />
                  <Input
                    className="mt-1 h-12 focus:ring-2 focus:ring-[#3d5a80]/30"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* EMAIL */}
            <form.Field name="email">
              {(field) => (
                <div>
                  <RequiredLabel text="Email Address" />
                  <Input
                    type="email"
                    className="mt-1 h-12 focus:ring-2 focus:ring-[#3d5a80]/30"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* MOBILE */}
            <form.Field name="mobile">
              {(field) => (
                <div>
                  <RequiredLabel text="Mobile Number" />
                  <Input
                    type="tel"
                    className="mt-1 h-12 focus:ring-2 focus:ring-[#3d5a80]/30"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* SUBJECT */}
            <form.Field name="subject">
              {(field) => (
                <div>
                  <RequiredLabel text="Subject" />
                  <Input
                    className="mt-1 h-12 focus:ring-2 focus:ring-[#3d5a80]/30"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* MESSAGE */}
            <form.Field name="message">
              {(field) => (
                <div className="md:col-span-2">
                  <RequiredLabel text="Message" />
                  <Textarea
                    className="mt-1 min-h-[150px] focus:ring-2 focus:ring-[#3d5a80]/30"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.errors && (
                    <p className="text-red-500 text-sm mt-1">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
                </div>
              )}
            </form.Field>

            {/* BUTTON */}
            <div className="md:col-span-2 text-center mt-6">
              <Button
                type="submit"
                disabled={loading}
                className="px-14 py-6 rounded-full text-white  bg-[#3d5a80] hover:bg-[#2d4a70]"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
