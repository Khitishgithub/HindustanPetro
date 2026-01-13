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

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          {/* LOGO */}
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/Logo.png"
                alt="Company Logo"
                width={120}
                height={28}
                className="me-3 object-contain"
              />
            </Link>
           
          </div>

          {/* LINKS / PRODUCTS / CONTACT */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* LINKS */}
            <div>
              <h2 className="mb-6 text-sm font-bold text-heading uppercase relative inline-block group">
                Links
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </h2>

              <ul className="text-body font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/About" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/Team" className="hover:underline">
                    Team
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/Contact" className="hover:underline">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* PRODUCTS */}
            <div>
              <h2 className="mb-6 text-sm font-bold text-heading uppercase relative inline-block group">
                Products
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </h2>

              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Product 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Product 2
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="mb-6 text-sm font-bold text-heading uppercase relative inline-block group">
                Contact
                <span className="absolute left-0 bottom-0 w-1/2 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
              </h2>

              <ul className="space-y-4 text-body font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-500 mt-0.5" />
                  <span>New Delhi, India</span>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-500 mt-0.5" />
                  <span>info@company.com</span>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-500 mt-0.5" />
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-default sm:mx-auto lg:my-8" />

        {/* BOTTOM */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline text-red-500">
              Hindustan Petro By Products
            </Link>
            . All Rights Reserved.
          </span>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5">
            <Facebook className="w-5 h-5 text-body hover:text-heading cursor-pointer" />
            <Twitter className="w-5 h-5 text-body hover:text-heading cursor-pointer" />
            <Instagram className="w-5 h-5 text-body hover:text-heading cursor-pointer" />
            <Github className="w-5 h-5 text-body hover:text-heading cursor-pointer" />
            <Dribbble className="w-5 h-5 text-body hover:text-heading cursor-pointer" />
            <Linkedin className="w-5 h-5 text-body hover:text-heading cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
