"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Package, Truck, Shield } from "lucide-react";

type ProductDetail = {
  id: number;
  name: string;
  description: string;
  image: string;
  fullDescription: string;
  specifications: string[];
  applications: string[];
  features: string[];
};

const productData: Record<number, ProductDetail> = {
  1: {
    id: 1,
    name: "Light Diesel Oil",
    description:
      "High-quality fuel suitable for industrial and commercial applications.",
    image: "/Images/LightDieselOil.jpg",
    fullDescription:
      "Our Light Diesel Oil (LDO) is a premium petroleum product refined to meet the highest industry standards. It offers excellent combustion characteristics and is ideal for various industrial applications including furnaces, boilers, and diesel engines. With low sulfur content and optimal viscosity, our LDO ensures efficient performance and reduced emissions.",
    specifications: [
      "Flash Point: 66°C minimum",
      "Kinematic Viscosity: 2-5 cSt at 40°C",
      "Sulfur Content: < 0.25%",
      "Density: 0.820-0.860 g/cm³",
      "Calorific Value: 10,200 kcal/kg minimum",
    ],
    applications: [
      "Industrial furnaces and boilers",
      "Diesel engines and generators",
      "Heat treatment facilities",
      "Manufacturing plants",
      "Agricultural machinery",
    ],
    features: [
      "High thermal efficiency",
      "Low maintenance requirements",
      "Consistent quality",
      "Cost-effective solution",
      "Environmentally compliant",
    ],
  },
  2: {
    id: 2,
    name: "Fuel Oil",
    description:
      "Reliable fuel oil widely used in boilers, furnaces, and power plants.",
    image: "/Images/FuelOil.jpg",
    fullDescription:
      "Our Fuel Oil is a heavy petroleum distillate that provides exceptional heating value for industrial operations. Formulated for optimal performance in large-scale heating systems, it delivers consistent energy output with excellent efficiency. Suitable for continuous operation in demanding industrial environments.",
    specifications: [
      "Flash Point: 66°C minimum",
      "Kinematic Viscosity: 180 cSt max at 50°C",
      "Sulfur Content: < 2.5%",
      "Water Content: 1% maximum",
      "Ash Content: 0.1% maximum",
    ],
    applications: [
      "Power generation plants",
      "Large industrial boilers",
      "Marine engines",
      "Steam generation systems",
      "Heavy industrial furnaces",
    ],
    features: [
      "High energy density",
      "Stable combustion properties",
      "Long storage life",
      "Bulk supply available",
      "Competitive pricing",
    ],
  },
  3: {
    id: 3,
    name: "Mixed Hydrocarbon Oil",
    description:
      "A cost-effective hydrocarbon blend for diverse industrial uses.",
    image: "/Images/HydroCarbonOil.png",
    fullDescription:
      "Mixed Hydrocarbon Oil is a versatile blend of petroleum fractions designed to provide a cost-effective energy solution for various industrial processes. This product combines the benefits of different hydrocarbon components to deliver reliable performance across multiple applications while maintaining competitive pricing.",
    specifications: [
      "Flash Point: 60°C minimum",
      "Kinematic Viscosity: Variable based on blend",
      "Calorific Value: 9,800 kcal/kg minimum",
      "Specific Gravity: 0.85-0.92",
      "Pour Point: -6°C maximum",
    ],
    applications: [
      "Industrial heating systems",
      "Process industries",
      "Manufacturing operations",
      "Thermal fluid systems",
      "Cleaning and degreasing",
    ],
    features: [
      "Cost-effective solution",
      "Versatile applications",
      "Consistent supply",
      "Custom blending available",
      "Quality assured",
    ],
  },
  4: {
    id: 4,
    name: "Tyre Oil",
    description:
      "Recovered oil from waste tyres, ideal for industrial fuel purposes.",
    image: "/Images/TyreOil.jpg",
    fullDescription:
      "Tyre Oil is an environmentally conscious fuel alternative derived from waste tyre pyrolysis. This sustainable product offers excellent heating value and is increasingly popular as a replacement for traditional fossil fuels in industrial applications. By utilizing waste materials, it contributes to circular economy principles while providing cost-effective energy.",
    specifications: [
      "Flash Point: 55°C minimum",
      "Calorific Value: 10,000 kcal/kg",
      "Density: 0.92-0.95 g/cm³",
      "Sulfur Content: Variable",
      "Carbon Content: 85-88%",
    ],
    applications: [
      "Cement kilns",
      "Industrial boilers",
      "Steel manufacturing",
      "Chemical processing",
      "Waste-to-energy facilities",
    ],
    features: [
      "Eco-friendly alternative",
      "High calorific value",
      "Cost-effective",
      "Waste reduction solution",
      "Industrial grade quality",
    ],
  },
  5: {
    id: 5,
    name: "GI Wire",
    description:
      "Durable galvanized iron wire used in construction and manufacturing.",
    image: "/Images/GIWire.jpg",
    fullDescription:
      "Our Galvanized Iron (GI) Wire is manufactured to the highest quality standards, providing superior corrosion resistance and durability. The hot-dip galvanization process ensures a uniform zinc coating that protects the wire from rust and environmental damage, making it ideal for long-term outdoor and industrial applications.",
    specifications: [
      "Wire Gauge: 6-22 BWG",
      "Tensile Strength: 350-550 N/mm²",
      "Zinc Coating: 40-260 g/m²",
      "Elongation: 10% minimum",
      "Standards: IS 280, BS 443",
    ],
    applications: [
      "Construction binding and tying",
      "Fencing and mesh fabrication",
      "Agricultural applications",
      "Gabion boxes and cages",
      "Wire rope manufacturing",
    ],
    features: [
      "Superior corrosion resistance",
      "High tensile strength",
      "Uniform zinc coating",
      "Multiple gauge options",
      "Long service life",
    ],
  },
};

const ProductDetailPage = () => {
  const params = useParams();
  const productId = Number(params.id);
  const product = productData[productId];

  if (!product) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Product Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The product you&apos;re looking for doesn&apos;t exist.
        </p>

        <Link href="/">
          <Button className="bg-[#3d5a80] hover:bg-[#2d4a70] cursor-pointer">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-20 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">{product.name}</h1>
          <p className="text-white/80 text-lg mt-2 text-center">{product.description}</p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Product Overview
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {product.fullDescription}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Package className="h-8 w-8 text-[#3d5a80] mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Quality Product
                </p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Truck className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">
                  Fast Delivery
                </p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-gray-700">Certified</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                Specifications
              </h3>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <span className="text-[#3d5a80] mr-2">•</span>
                    {spec}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                Applications
              </h3>
              <ul className="space-y-2">
                {product.applications.map((app, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <span className="text-[#3d5a80] mr-2">•</span>
                    {app}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <span className="text-[#3d5a80] mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get in touch with our sales team for pricing, bulk orders, and
            delivery information.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/Contact">
              <Button className="bg-white text-[#3d5a80] hover:bg-gray-100 font-semibold cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
