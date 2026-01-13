"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Tag, Menu, X, Search } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const navItemBase =
  "px-6 py-2 text-sm font-semibold uppercase transition-colors";
const navHover =
  "hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10";
const navActive = "text-red-500";

const NavMenu: React.FC = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const products = [
    { name: "Light Diesel Oil", href: "/Products/1" },
    { name: "Fuel Oil", href: "/Products/2" },
    { name: "Mixed Hydrocarbon Oil", href: "/Products/3" },
    { name: "Tyre Oil", href: "/Products/4" },
    { name: "GI Wire", href: "/Products/5" },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const isActive = (href: string) => pathname === href;
  const isProductsActive = pathname.startsWith("/products");

  return (
    <nav className="bg-[#3d5a80] text-white mt-5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                {/* HOME */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={`
                        ${navItemBase}
                        ${navHover}
                        ${isActive("/") ? navActive : "text-white"}
                      `}
                    >
                      HOME
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* ABOUT */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/About"
                      className={`
                        ${navItemBase}
                        ${navHover}
                        ${isActive("/About") ? navActive : "text-white"}
                      `}
                    >
                      ABOUT
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* PRODUCTS */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`
                      ${navItemBase}
                      ${navHover}
                      ${isProductsActive ? navActive : "text-black"}
                    `}
                  >
                    PRODUCTS
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="bg-transparent shadow-none border-none">
                    <div className="w-[560px] rounded-2xl bg-white shadow-2xl overflow-hidden">
                      {/* HEADER */}
                      <div className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] p-5 text-white">
                        <h4 className="text-lg font-semibold">
                          Explore Products
                        </h4>
                        <p className="text-sm text-white/80">
                          Find the right category
                        </p>

                        <div className="relative mt-4">
                          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products..."
                            className="pl-10 bg-white text-gray-800"
                          />
                        </div>
                      </div>

                      {/* PRODUCT LIST */}
                      <ScrollArea className="h-[280px] px-5">
                        <div className="grid grid-cols-2 gap-4 pr-3">
                          {filteredProducts.length ? (
                            filteredProducts.map((product) => (
                              <NavigationMenuLink key={product.href} asChild>
                                <Link
                                  href={product.href}
                                  className={`
                                    rounded-xl border p-4 transition
                                    hover:-translate-y-1 hover:shadow-lg
                                    ${
                                      pathname === product.href
                                        ? "border-red-500 bg-red-50/60"
                                        : "border-gray-100 hover:border-[#3d5a80]"
                                    }
                                  `}
                                >
                                  <p className="font-semibold text-gray-800">
                                    {product.name}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    Browse category →
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))
                          ) : (
                            <p className="col-span-2 text-center text-sm text-gray-500 mt-10">
                              No products found 😕
                            </p>
                          )}
                        </div>

                        <ScrollBar orientation="vertical" />
                      </ScrollArea>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* TEAM */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/Team"
                      className={`
                        ${navItemBase}
                        ${navHover}
                        ${isActive("/Team") ? navActive : "text-white"}
                      `}
                    >
                      TEAM
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* CONTACT */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/Contact"
                      className={`
                        ${navItemBase}
                        ${navHover}
                        ${isActive("/Contact") ? navActive : "text-white"}
                      `}
                    >
                      CONTACT
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA */}
          <button className="hidden md:flex bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold uppercase items-center gap-2">
            <Tag className="w-4 h-4" />
            GET A QUOTE
          </button>

          {/* MOBILE TOGGLE */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isOpen && (
          <div className="md:hidden bg-[#2d4a70] px-4 py-4 space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/About" },
              { name: "Team", href: "/Team" },
              { name: "Contact", href: "/Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block font-semibold uppercase ${
                  isActive(item.href) ? "text-red-400" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* MOBILE PRODUCTS */}
            <div>
              <button
                className="w-full flex justify-between font-semibold uppercase"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products <span>{productsOpen ? "▲" : "▼"}</span>
              </button>

              {productsOpen && (
                <div className="mt-2 space-y-2 bg-white/10 p-3 rounded-lg">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-300" />
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search products..."
                      className="pl-10 bg-white/10 text-white"
                    />
                  </div>

                  {filteredProducts.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setIsOpen(false)}
                      className={`block pl-4 ${
                        pathname === p.href
                          ? "text-red-400"
                          : "text-white hover:text-red-300"
                      }`}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavMenu;
