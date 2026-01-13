import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Truck,
  Layers,
  Settings,
} from "lucide-react";

const reasons = [
  {
    title: "High Quality Products",
    description:
      "We ensure strict quality control at every stage to deliver petrochemical products that meet industry standards.",
    icon: CheckCircle,
  },
  {
    title: "Smooth Operations",
    description:
      "Our streamlined processes and experienced team guarantee efficient and hassle-free operations.",
    icon: Settings,
  },
  {
    title: "Timely Delivery",
    description:
      "With a strong logistics network, we ensure prompt and reliable delivery of products.",
    icon: Truck,
  },
  {
    title: "Wide Range of Products",
    description:
      "We offer an extensive portfolio of petrochemical products to meet diverse industrial needs.",
    icon: Layers,
  },
];

const WhyUs: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Why Choose Us
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-body text-lg">
            We have gained a remarkable position by offering standard quality
            products in the petrochemical industry. Below are the key reasons
            that make us stand out in comparison to others in the same domain.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card
                key={index}
                className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3d5a80]/10 text-[#3d5a80] group-hover:bg-[#3d5a80] group-hover:text-white transition">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-heading">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm text-body">
                    {reason.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
