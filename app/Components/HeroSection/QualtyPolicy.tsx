import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Settings, CheckCircle } from "lucide-react";

const QualityPolicy: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Quality Policy
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-body text-lg">
            We never compromise on the quality we offer. Our commitment to
            excellence ensures that every product meets the highest industry
            standards while fulfilling client expectations.
          </p>
        </div>

        {/* Policy Points */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Point 1 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3d5a80]/10 text-[#3d5a80]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-heading">
                Uncompromised Quality
              </h3>
              <p className="mt-3 text-sm text-body">
                We strictly adhere to quality benchmarks and never compromise on
                the standards of our petrochemical products.
              </p>
            </CardContent>
          </Card>

          {/* Point 2 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3d5a80]/10 text-[#3d5a80]">
                <Settings className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-heading">
                Customized Solutions
              </h3>
              <p className="mt-3 text-sm text-body">
                We believe in providing highly customized products to meet
                specific client requirements in the best possible manner.
              </p>
            </CardContent>
          </Card>

          {/* Point 3 */}
          <Card className="transition-all duration-300 hover:shadow-xl">
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3d5a80]/10 text-[#3d5a80]">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-heading">
                Strict Quality Checks
              </h3>
              <p className="mt-3 text-sm text-body">
                Our entire product range is thoroughly inspected and tested to
                ensure compliance with defined quality standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
