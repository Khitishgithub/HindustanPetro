"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { toast } from "sonner";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import LocationMap from "../Components/HeroSection/LocationMap";

const patterns = {
  name: /^[A-Za-z\s]{2,}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  mobile: /^[0-9]{10}$/,
  subject: /^.{3,}$/,
  message: /^.{5,}$/,
};

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!values.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (!patterns.name.test(values.name)) {
      newErrors.name = "Enter a valid full name";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!patterns.email.test(values.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!values.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!patterns.mobile.test(values.mobile)) {
      newErrors.mobile = "Enter 10 digit mobile number";
    }

    if (!values.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (!patterns.subject.test(values.subject)) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (!patterns.message.test(values.message)) {
      newErrors.message = "Message must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sending-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully!");

      setValues({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            We’d love to hear from you. Let’s start a conversation.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              icon: <MapPin size={24} />,
              title: "Our Address",
              value: "Heavy Industrial Area Hathkhoj, Chhattisgarh 490024",
            },
            {
              icon: <Mail size={24} />,
              title: "Email Us",
              value: "Hindustanpetro2020@gmail.com",
            },
            {
              icon: <Phone size={24} />,
              title: "Call Us",
              value: "+91 7987584003",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 text-center shadow-md hover:-translate-y-2 transition-all"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] text-white">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <LocationMap />
      </section>

      <section className="bg-gray-100 py-20">
        <div className="container mx-auto max-w-4xl bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-3xl font-bold text-center mb-10">Get in Touch</h2>

          <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
            {/* NAME */}
            <div>
              <Input
                name="name"
                placeholder="Full Name *"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Input
                name="mobile"
                type="tel"
                placeholder="Mobile Number *"
                value={values.mobile}
                onChange={handleChange}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
            </div>

            {/* SUBJECT */}
            <div>
              <Input
                name="subject"
                placeholder="Subject *"
                value={values.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Textarea
                name="message"
                placeholder="Your Message *"
                className="min-h-[150px]"
                value={values.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="md:col-span-2 text-center mt-6">
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#3d5a80] hover:bg-[#2d4a70] flex items-center gap-2 mx-auto cursor-pointer text-white"
              >
                {loading ? "Sending..." : "Send Message"}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
