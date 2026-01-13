"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Package, Users } from "lucide-react";

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
            About Hindustan Petro By Products
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] bg-clip-text text-transparent mb-4">
                A Legacy of Excellence Since 1970
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4">
                Hindustan Petro By Products has been actively serving the
                petrochemical industry since 1970. Over the decades, our
                consistent efforts and commitment to quality have enabled us to
                build a strong and satisfied client base.
              </p>

              <p className="text-gray-600 leading-relaxed mb-4">
                We operate as an Individual Proprietor–based venture and
                continue to adapt to the ever-evolving requirements of our
                customers. Our firm is a leading supplier of premium petroleum
                products that comply with industry standards.
              </p>

              <p className="text-gray-600 leading-relaxed">
                All products are manufactured and supplied under the keen
                supervision of experienced professionals, ensuring reliability,
                safety, and consistency at every stage.
              </p>
            </div>

            {/* RIGHT HIGHLIGHTS */}
            <div className="grid gap-6">
              <Card className="hover:shadow-lg transition">
                <CardContent className="p-6 flex gap-4 items-start">
                  <Factory className="text-[#3d5a80] w-8 h-8" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Established in 1970
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Over five decades of excellence in the petrochemical
                      industry.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardContent className="p-6 flex gap-4 items-start">
                  <Users className="text-[#3d5a80] w-8 h-8" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Trusted Client Base
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Serving a wide and loyal customer base across industries.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition">
                <CardContent className="p-6 flex gap-4 items-start">
                  <Package className="text-[#3d5a80] w-8 h-8" />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      Wide Product Range
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Supplying diverse petroleum and allied products.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
