export const products = [
  { name: "Light Diesel Oil", href: "/Products/1" },
  { name: "Fuel Oil", href: "/Products/2" },
  { name: "Mixed Hydrocarbon Oil", href: "/Products/3" },
  { name: "Tyre Oil", href: "/Products/4" },
  { name: "GI Wire", href: "/Products/5" },
];


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


export const productData: Record<number, ProductDetail> = {
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