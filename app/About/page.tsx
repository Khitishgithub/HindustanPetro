"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Package, Users } from "lucide-react";
import Image from "next/image";

const products = [
  "Light Diesel Oil",
  "Fuel Oil",
  "Mixed Hydrocarbon Oil",
  "Tyre Oil",
  "GI Wire",
  "Other Petroleum Products",
];

const About: React.FC = () => {
  return (
    <>
      {/* HERO SECTION (MATCHES TEAM GRADIENT) */}
      <section className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Powering industries with trusted petroleum solutions for over five
            decades
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] bg-gradient-to-br from-[#3d5a80] to-[#2d4a70]">
                <Image
                  src="/Images/About.jpg"
                  alt="Hindustan Petro By Products Facility"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-[#3d5a80]/10 rounded-full mb-4">
                <span className="text-[#3d5a80] font-semibold text-sm">
                  Since 1970
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A Legacy of Excellence in Petrochemicals
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Hindustan Petro By Products has been actively serving the
                petrochemical industry since 1970. Over the decades, our
                consistent efforts and commitment to quality have enabled us to
                build a strong and satisfied client base.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                We operate as an Individual Proprietor–based venture and
                continue to adapt to the ever-evolving requirements of our
                customers. Our firm is a leading supplier of premium petroleum
                products that comply with industry standards.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                All products are manufactured and supplied under the keen
                supervision of experienced professionals, ensuring reliability,
                safety, and consistency at every stage.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-[#3d5a80]">
                  <div className="w-2 h-2 bg-[#3d5a80] rounded-full"></div>
                  <span className="font-medium">Quality Assured</span>
                </div>
                <div className="flex items-center gap-2 text-[#3d5a80]">
                  <div className="w-2 h-2 bg-[#3d5a80] rounded-full"></div>
                  <span className="font-medium">Industry Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-[#3d5a80]">
                  <div className="w-2 h-2 bg-[#3d5a80] rounded-full"></div>
                  <span className="font-medium">Expert Supervision</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM HIGHLIGHTS */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3d5a80] to-[#2d4a70] rounded-xl flex items-center justify-center mb-4">
                  <Factory className="text-white w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">
                  Established in 1970
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Over five decades of excellence and innovation in the
                  petrochemical industry, building trust and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3d5a80] to-[#2d4a70] rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-white w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">
                  Trusted Client Base
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Serving a wide and loyal customer base across diverse
                  industries with unwavering commitment to excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-[#3d5a80] to-[#2d4a70] rounded-xl flex items-center justify-center mb-4">
                  <Package className="text-white w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-3">
                  Wide Product Range
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive portfolio of petroleum and allied products
                  meeting the highest industry standards and specifications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
