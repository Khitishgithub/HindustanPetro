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
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel
        setApi={setApi}
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[75vh] md:h-[85vh]">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative h-full">
             
              <div className="absolute inset-0 overflow-hidden ">
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{
                    duration: 10,
                    ease: "linear",
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </motion.div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

              {/* Text with staggered animations */}
              <div className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <AnimatePresence mode="wait">
                  {current === index && (
                    <motion.div
                      key={`content-${index}`}
                      className="max-w-2xl space-y-6"
                    >
                      <motion.h1
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        className="text-lg sm:text-xl text-gray-200 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <Link href="/Contact">
                          <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                          >
                            Contact Us
                          </Button>
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Bottom Center Indicators with animation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
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
    </div>
  );
};

export default MainLandingPage;