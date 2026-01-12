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

/* ---------------- REQUIRED LABEL ---------------- */
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
      onChange: ({ value }) => {
        const parsed = contactSchema.safeParse(value);
        if (!parsed.success) {
          return parsed.error.flatten().fieldErrors;
        }
      },
      onBlur: ({ value }) => {
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
      {/* HERO */}
      <section className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Contact Us
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            We’d love to hear from you. Let’s start a conversation.
          </p>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: <MapPin size={24} />,
              title: "Our Address",
              value: "123 Industrial Park, New Delhi, India",
            },
            {
              icon: <Mail size={24} />,
              title: "Email Us",
              value: "info@company.com",
            },
            {
              icon: <Phone size={24} />,
              title: "Call Us",
              value: "+91 98765 43210",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-8 text-center shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Gradient Icon Background */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] text-white text-2xl transition-transform duration-500 hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 relative inline-block text-gray-800">
                {item.title}
                <span className="absolute left-1/4 -bottom-1 w-1/2 h-1 bg-red-500 rounded-full"></span>
              </h3>

              {/* Value */}
              <p className="text-gray-600 mt-2">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto max-w-4xl bg-white p-10 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01]">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-800">
            Get in Touch
            <span className="block w-20 h-1 bg-red-500 rounded-full mx-auto mt-2"></span>
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="grid gap-6 md:grid-cols-2"
          >
            {/* NAME */}
            <form.Field name="name">
              {(field) => (
                <div className="relative">
                  <RequiredLabel text="Full Name" />
                  <Input
                    className="mt-1 h-14 rounded-xl border border-gray-200 shadow-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition duration-300 px-4"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors?.length > 0 && (
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
                <div className="relative">
                  <RequiredLabel text="Email Address" />
                  <Input
                    type="email"
                    className="mt-1 h-14 rounded-xl border border-gray-200 shadow-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition duration-300 px-4"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors?.length > 0 && (
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
                <div className="relative">
                  <RequiredLabel text="Mobile Number" />
                  <Input
                    type="tel"
                    className="mt-1 h-14 rounded-xl border border-gray-200 shadow-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition duration-300 px-4"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors?.length > 0 && (
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
                <div className="relative">
                  <RequiredLabel text="Subject" />
                  <Input
                    className="mt-1 h-14 rounded-xl border border-gray-200 shadow-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition duration-300 px-4"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors?.length > 0 && (
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
                <div className="md:col-span-2 relative">
                  <RequiredLabel text="Message" />
                  <Textarea
                    className="mt-1 min-h-[150px] rounded-xl border border-gray-200 shadow-sm focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition duration-300 px-4 py-3"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors?.length > 0 && (
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
                disabled={!form.state.canSubmit || loading}
                className="px-14 py-6 rounded-full bg-[#3d5a80] hover:bg-[#2d4a70]"
              >
                {" "}
                {loading ? "Sending..." : "Send Message"}{" "}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
