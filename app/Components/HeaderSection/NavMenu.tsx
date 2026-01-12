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

const NavMenu: React.FC = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [productsOpen, setProductsOpen] = useState(false);

  const products = [
    { name: "Product Category 1", href: "/products/1" },
    { name: "Product Category 2", href: "/products/2" },
    { name: "Product Category 3", href: "/products/3" },
    { name: "Product Category 4", href: "/products/4" },
    { name: "Product Category 5", href: "/products/5" },
    { name: "Product Category 6", href: "/products/6" },
    { name: "Product Category 7", href: "/products/7" },
    { name: "Product Category 8", href: "/products/8" },
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
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-1">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className={`px-6 py-2 text-sm font-semibold uppercase hover:bg-[#2d4a70]
                        ${isActive("/") ? "text-red-500" : "text-white"}
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
                      className={`px-6 py-2 text-sm font-semibold uppercase hover:bg-[#2d4a70]
                        ${isActive("/About") ? "text-red-500" : "text-white"}
                      `}
                    >
                      ABOUT
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`px-6 py-2 text-sm font-semibold uppercase hover:bg-[#2d4a70]
                      ${isProductsActive ? "text-red-500" : "text-white"}
                    `}
                  >
                    Products
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <div className="w-140 overflow-hidden rounded-2xl bg-white shadow-2xl">
                      {/* Header */}
                      <div className="bg-gradient-to-r from-[#3d5a80] to-[#2d4a70] p-5 text-white">
                        <h4 className="text-lg font-semibold">
                          Explore Products
                        </h4>
                        <p className="text-sm text-white/80">
                          Find the right category for your needs
                        </p>

                        {/* Search */}
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

                      {/* Product List */}
                      <ScrollArea className="h-[280px] px-5">
                        <div className="grid grid-cols-2 gap-4 pr-3">
                          {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, index) => (
                              <NavigationMenuLink key={index} asChild>
                                <Link
                                  href={product.href}
                                  className="group relative rounded-xl border border-gray-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#3d5a80] hover:shadow-lg"
                                >
                                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3d5a80]/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

                                  <p className="relative z-10 font-semibold text-gray-800 group-hover:text-[#3d5a80]">
                                    {product.name}
                                  </p>
                                  <p className="relative z-10 text-xs text-gray-500 mt-1">
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

                        <ScrollBar
                          orientation="vertical"
                          className="bg-[#3d5a80]/30 w-2 rounded-full"
                        />
                      </ScrollArea>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* TEAM */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/Team"
                      className={`px-6 py-2 text-sm font-semibold uppercase hover:bg-[#2d4a70]
                        ${isActive("/Team") ? "text-red-500" : "text-white"}
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
                      className={`px-6 py-2 text-sm font-semibold uppercase hover:bg-[#2d4a70]
                        ${isActive("/Contact") ? "text-red-500" : "text-white"}
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

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#2d4a70] px-4 py-4 space-y-4">
            {/* Static Links */}
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
                className={`block font-semibold uppercase
                  ${isActive(item.href) ? "text-red-400" : "text-white"}
                `}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Products Accordion */}
            <div>
              <button
                className="w-full text-left font-semibold uppercase text-white flex justify-between items-center"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products
                <span>{productsOpen ? "▲" : "▼"}</span>
              </button>

              {productsOpen && (
                <div className="mt-2 space-y-2 bg-[#3d5a80]/20 rounded-lg p-2">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-200" />
                    <Input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search products..."
                      className="pl-10 bg-[#ffffff]/10 text-white placeholder:text-gray-300"
                    />
                  </div>

                  {/* Product Links */}
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setIsOpen(false)}
                        className="block pl-4 py-1 text-white hover:text-red-400 rounded"
                      >
                        {p.name}
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-300 mt-2">
                      No products found 😕
                    </p>
                  )}
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
