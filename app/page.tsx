"use client";
import { motion, Variants } from "framer-motion";
import About from "./About/page";
import Products from "./Components/HeroSection/Products";
import QualityPolicy from "./Components/HeroSection/QualtyPolicy";
import WhyUs from "./Components/HeroSection/WhyUs";
import Team from "./Team/page";
import MainLandingPage from "./Components/HeroSection/MainLandingPage";

export default function Home() {
  // Animation variants for sliding in from left
  const slideFromLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.4 },
      },
    },
  };

  // Animation variants for sliding in from right
  const slideFromRight: Variants = {
    hidden: {
      opacity: 0,
      x: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        opacity: { duration: 0.4 },
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <div>
        <MainLandingPage />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideFromLeft}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideFromRight}
      >
        <Products />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideFromLeft}
      >
        <Team />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideFromRight}
      >
        <QualityPolicy />
      </motion.div>

      <motion.div
        className="mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideFromLeft}
      >
        <WhyUs />
      </motion.div>
    </div>
  );
}
