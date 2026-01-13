"use client";

import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; 

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

 const scrollToTop = () => {
  animate(window.scrollY, 0, {
    duration: 0.8,
    ease: [0.25, 0.46, 0.45, 0.94],
    onUpdate: (value) => window.scrollTo(0, value),
  });
};

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-800 cursor-pointer"
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </motion.button>
    )
  );
}
