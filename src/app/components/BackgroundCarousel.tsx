import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BackgroundCarouselProps {
  children: React.ReactNode;
}

export default function BackgroundCarousel({ children }: BackgroundCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/background1.jpg",
    "/background2.jpg",
    "/background3.jpg",
    "/background4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center z-10">
          {children}
        </div>
      </div>
    </div>
  );
}
