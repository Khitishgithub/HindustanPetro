"use client";

/* ------------------ Types ------------------ */
type TeamMember = {
  name: string;
  role: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Naresh Mathur",
    role: "Managing Director",
  },
  {
    name: "Sejal Mathur",
    role: "Chief Executive Officer",
  },
];

const Team = () => {
  return (
    <>
      <section className="relative bg-linear-to-r from-[#3d5a80] to-[#2d4a70] py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
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
          We are supported by a team of well-qualified and dedicated
          professionals who possess extensive expertise in this domain. Our team
          includes skilled researchers, quality controllers, and experienced
          marketing professionals who work collaboratively to deliver
          excellence.
        </p>

        <p className="mt-4 text-gray-600 text-lg leading-relaxed text-center">
          Regular training programs are conducted to keep our team updated with
          the latest advancements in technology, quality standards, and market
          trends. This continuous learning approach enables us to consistently
          meet customer expectations with efficiency and precision.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-8 sm:grid-cols-2  max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 text-center border border-gray-100"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-r from-[#3d5a80] to-[#2d4a70] flex items-center justify-center text-3xl font-semibold text-white">
                {member.name.charAt(0)}
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#3d5a80] transition">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-2 text-gray-600 text-sm uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
