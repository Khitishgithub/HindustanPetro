import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  Dribbble,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { products } from "@/utils/data";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* LOGO */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/Images/Logo.png"
                alt="Company Logo"
                width={140}
                height={32}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-body max-w-xs leading-relaxed">
              Delivering trusted petrochemical products with quality,
              consistency, and commitment since 1970.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase text-heading relative inline-block group">
              Links
              <span className="absolute left-0 -bottom-1 h-[2px] w-1/2 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </h2>
            <ul className="space-y-3 text-sm text-body font-medium">
              <li>
                <Link href="/" className="hover:text-red-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-red-500 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Team" className="hover:text-red-500 transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-red-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase text-heading relative inline-block group">
              Products
              <span className="absolute left-0 -bottom-1 h-0.5 w-1/2 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </h2>

            <ul className="space-y-3 text-sm text-body font-medium">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    href={product.href}
                    className="hover:text-red-500 transition"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="mb-5 text-sm font-bold uppercase text-heading relative inline-block group">
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-1/2 bg-red-500 transition-all duration-300 group-hover:w-full" />
            </h2>
            <ul className="space-y-4 text-sm text-body">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-red-500 shrink-0" />
                <span className="leading-relaxed">
                  Heavy Industrial Area Hathkhoj, Charoda, Chhattisgarh 490024
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-500 shrink-0" />
                <span>Hindustanpetro2020@mail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-500 shrink-0" />
                <span>+91 7987584003</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-body text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="text-red-500 hover:underline">
              Hindustan Petro By Products
            </Link>
            . All Rights Reserved.
          </span>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-5 sm:justify-end">
            <Link href="mailto:Hindustanpetro2020@mail.com">
              <Mail className="h-5 w-5 cursor-pointer text-body hover:text-blue-500 transition" />
            </Link>
            <Instagram className="h-5 w-5 cursor-pointer text-body hover:text-pink-500 transition" />
            <Linkedin className="h-5 w-5 cursor-pointer text-body hover:text-blue-500 transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
