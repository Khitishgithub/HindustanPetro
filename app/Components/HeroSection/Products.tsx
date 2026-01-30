"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Light Diesel Oil",
    description:
      "High-quality fuel suitable for industrial and commercial applications.",
    image: "/Images/LDO.jpg",
  },
  {
    id: 2,
    name: "Fuel Oil",
    description:
      "Reliable fuel oil widely used in boilers, furnaces, and power plants.",
    image: "/Images/FuelOil.jpg",
  },
  {
    id: 3,
    name: "Mixed Hydrocarbon Oil",
    description:
      "A cost-effective hydrocarbon blend for diverse industrial uses.",
    image: "/Images/HydroCarbonOil.png",
  },
  {
    id: 4,
    name: "Tyre Oil",
    description:
      "Recovered oil from waste tyres, ideal for industrial fuel purposes.",
    image: "/Images/TyreOil.jpg",
  },
  {
    id: 5,
    name: "GI Wire",
    description:
      "Durable galvanized iron wire used in construction and manufacturing.",
    image: "/Images/GIWire.jpg",
  },
];

const Products = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Supplying premium petroleum and industrial products since 1970
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-600 mb-5">
                  {product.description}
                </p>

                <Link href={`/Products/${product.id}`}>
                  <Button
                    variant="outline"
                    className="border-[#3d5a80] cursor-pointer text-[#3d5a80] hover:bg-[#3d5a80] hover:text-white transition group/btn"
                  >
                    View More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;