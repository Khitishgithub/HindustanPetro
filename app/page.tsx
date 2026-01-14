"use client";

import { motion, Variants } from "framer-motion";
import About from "./About/page";
import Products from "./Components/HeroSection/Products";
import QualityPolicy from "./Components/HeroSection/QualtyPolicy";
import WhyUs from "./Components/HeroSection/WhyUs";
import Team from "./Team/page";
import MainLandingPage from "./Components/HeroSection/MainLandingPage";
import LocationMap from "./Components/HeroSection/LocationMap";
import ScrollToTop from "./Components/ScrollToTop";

export default function Home() {
  // Simple fade-in animation (no slide, no scale)
  const fadeIn: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <MainLandingPage />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Products />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <Team />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <QualityPolicy />
      </motion.div>

      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <WhyUs />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <LocationMap />
      </motion.div>

      <ScrollToTop />
    </div>
  );
}
