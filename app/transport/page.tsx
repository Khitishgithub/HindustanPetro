import Image from "next/image";
import { Truck, MapPin, ShieldCheck, Clock } from "lucide-react";

const Transport = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f8fafc] to-[#eef2f7] py-20 overflow-hidden">
      
      {/* Decorative Accent */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#3d5a80]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* TEXT CONTENT */}
          <div>
            

            <h2 className="text-4xl md:text-5xl font-bold text-[#3d5a80] leading-tight">
              Nationwide Transportation <br />
              You Can <span className="text-red-600">Trust</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Unique Transport delivers seamless and dependable transportation
              solutions across India. With real-time GPS live tracking, our
              clients gain complete visibility and control over every shipment.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our modern fleet, safety-first approach, and experienced logistics
              professionals ensure your goods reach their destination securely,
              transparently, and on time—every time.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Feature icon={<Truck />} text="Pan-India Network" />
              <Feature icon={<MapPin />} text="Live GPS Tracking" />
              <Feature icon={<ShieldCheck />} text="Safe Handling" />
              <Feature icon={<Clock />} text="On-Time Delivery" />
            </div>

          
          </div>

          {/* IMAGE */}
          <div className="relative group">
            {/* <div className="absolute inset-0 bg-[#3d5a80]/20 rounded-2xl transform rotate-3 group-hover:rotate-2 transition" /> */}
            <Image
              src="/Images/Tanker.jpg"
              alt="Tanker Transportation Service"
              width={650}
              height={450}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const Feature = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
    <div className="text-red-600">{icon}</div>
    <span className="font-semibold text-gray-700">{text}</span>
  </div>
);

export default Transport;
