"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
};
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
    email: "john@example.com",
  },
  {
    name: "David Lee",
    role: "Lead Engineer",
    image: "/Images/Person.jpeg",
    linkedin: "#",
    email: "john@example.com",
  },
  {
    name: "Emma Watson",
    role: "Marketing Director",
    image: "/Images/Person.jpeg",
    linkedin: "#",
    email: "john@example.com",
  },
];

const Team = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Meet Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            A passionate group of professionals driving innovation and
            excellence
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:rotate-[0.3deg]"
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
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-2"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Content */}
              <CardContent className="relative z-10 p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 transition group-hover:text-[#3d5a80]">
                  {member.name}
                </h3>

                <Badge className="mt-2 translate-y-2 opacity-80 bg-[#3d5a80]/10 text-[#3d5a80] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {member.role}
                </Badge>

                {/* Socials */}
                <div className="mt-5 flex justify-center gap-5">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300
                                 opacity-0 translate-y-4 scale-75
                                 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                                 hover:bg-[#3d5a80] hover:text-white hover:scale-110"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 delay-75
                                 opacity-0 translate-y-4 scale-75
                                 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
                                 hover:bg-[#3d5a80] hover:text-white hover:scale-110"
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
