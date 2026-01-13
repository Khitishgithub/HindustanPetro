"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

/* ------------------ Types ------------------ */
type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
};

/* ------------------ Data ------------------ */
const teamMembers: TeamMember[] = [
  {
    name: "John Anderson",
    role: "Chief Executive Officer",
    image: "/Images/Person.jpeg",
    linkedin: "#",
    email: "john@example.com",
  },
  {
    name: "Sarah Mitchell",
    role: "Head of Operations",
    image: "/Images/Person.jpeg",
    linkedin: "#",
    email: "sarah@example.com",
  },
  {
    name: "David Lee",
    role: "Lead Engineer",
    image: "/Images/Person.jpeg",
    linkedin: "#",
    email: "david@example.com",
  },
  {
    name: "Emma Watson",
    role: "Marketing Director",
    image: "/Images/Person.jpeg",
    linkedin: "#",
    email: "emma@example.com",
  },
];

/* ------------------ Component ------------------ */
const Team = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Dedicated professionals powering excellence and innovation
          </p>
        </div>
      </section>

      {/* ================= TEAM INTRO CONTENT ================= */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Meet the People Behind Our Success
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed text-center">
          We are supported by a team of well-qualified and dedicated professionals
          who possess extensive expertise in this domain. Our team includes
          skilled researchers, quality controllers, and experienced marketing
          professionals who work collaboratively to deliver excellence.
        </p>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed text-center">
          Regular training programs are conducted to keep our team updated with
          the latest advancements in technology, quality standards, and market
          trends. This continuous learning approach enables us to consistently
          meet customer expectations with efficiency and precision.
        </p>
      </section>

      {/* ================= TEAM GRID ================= */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 ring-2 ring-[#3d5a80]/30" />

              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Content */}
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#3d5a80]">
                  {member.name}
                </h3>

                <Badge className="mt-2 bg-[#3d5a80]/10 text-[#3d5a80]">
                  {member.role}
                </Badge>

                {/* Social Icons */}
                <div className="mt-5 flex justify-center gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#3d5a80] hover:text-white transition"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-[#3d5a80] hover:text-white transition"
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
