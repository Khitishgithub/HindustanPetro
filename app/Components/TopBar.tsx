"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

const TopBar: React.FC = () => {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,hi,mr,gu,ta,te,bn,pa,kn,ml,ur,or,as,sa,ne,sd,fr,de,es,ar,zh-CN,ja,ru",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white border-b border-gray-200 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center gap-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/Images/Logo.png"
                alt="Hindustan Petro By Products"
                width={190}
                height={60}
                priority
                className="h-auto w-23 md:w-30 object-contain"
              />
            </Link>

            {/* Info Section */}
            <div className="hidden md:flex items-center gap-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border rounded flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs xl:text-base font-semibold">
                    Mon - Sat : 9.00 AM - 7.30 PM
                  </div>
                  <div className="text-xs text-gray-500">Sunday : Closed</div>
                </div>
              </div>

              <div className="flex items-center gap-3 hover:text-blue-600 transition">
                <div className="w-10 h-10 border rounded flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">+91 7987584003</div>
                  <div className="text-xs text-gray-500">
                    <a
                      href="mailto:Hindustanpetro2020@gmail.com"
                      className="hover:underline"
                    >
                      Hindustanpetro2020@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className="relative">
              <div
                id="google_translate_element"
                className="flex items-center gap-2 border rounded px-3 py-1"
              >
                <span className="text-xs text-gray-600 whitespace-nowrap">
                  Select Language
                </span>
                <div />
              </div>
            </div>

            <span className="text-[11px] text-gray-500 mt-1">
              Powered by Google Translate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
