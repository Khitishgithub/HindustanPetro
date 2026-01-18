"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Package, Truck, Shield } from "lucide-react";
import { productData } from "@/utils/data";

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
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {product.name}
          </h1>
          <p className="text-white/80 text-lg mt-2 text-center">
            {product.description}
          </p>
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
