"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import type { CarouselApi } from "@/components/ui/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/Images/Image2.jpg",
    title: "Trusted Petrochemical Solutions",
    description:
      "Delivering high-quality petroleum products backed by decades of expertise and industry trust.",
  },
  {
    image: "/Images/Image1.jpg",
    title: "Powering Industries Since 1970",
    description:
      "A legacy of excellence, reliability, and innovation in the petrochemical sector.",
  },
  {
    image: "/Images/Image3.jpg",
    title: "Quality. Consistency. Commitment.",
    description:
      "Meeting evolving industrial needs with premium products and expert supervision.",
  },
];

const MainLandingPage: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full overflow-x-hidden mt-5 mb-5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[75svh] overflow-hidden">

                  {/* Image with zoom animation */}
                  <motion.div
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 overflow-y-hidden"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      priority={index === 0}
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3d5a80]/60 to-[#2d4a70]/70" />

                  {/* Text with staggered animations */}
                  <div className="relative z-10 flex h-full items-center">
                    <div className="container mx-auto px-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={current}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 30 }}
                          transition={{ duration: 0.5 }}
                          className="max-w-3xl text-white"
                        >
                          <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                          >
                            {slide.title}
                          </motion.h1>
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/90"
                          >
                            {slide.description}
                          </motion.p>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                          >
                            <Link href="/Contact">
                              <Button className="bg-white text-[#3d5a80] hover:bg-gray-100 font-semibold cursor-pointer mt-4 transition-transform hover:scale-105">
                                Contact Us
                              </Button>
                            </Link>
                          </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Bottom Center Indicators with animation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-0.75 w-10 transition-all duration-300 ${
                  current === index ? "bg-red-600" : "bg-red-600/40"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              />
            ))}
          </div>
        </Carousel>
      </motion.div>
    </section>
  );
};

export default MainLandingPage;
