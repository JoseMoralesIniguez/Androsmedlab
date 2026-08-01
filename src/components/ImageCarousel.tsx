import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  "https://storage.googleapis.com/aistudio-build-user-assets/f6df0b27-b6df-4bd7-965c-9959b5203522/3vrc389u6c.jpeg",
  "https://storage.googleapis.com/aistudio-build-user-assets/f6df0b27-b6df-4bd7-965c-9959b5203522/2m4c781q98n.jpeg",
  "https://storage.googleapis.com/aistudio-build-user-assets/f6df0b27-b6df-4bd7-965c-9959b5203522/aigumz64q9g.jpeg",
  "https://storage.googleapis.com/aistudio-build-user-assets/f6df0b27-b6df-4bd7-965c-9959b5203522/oif7tnh4f2.jpeg",
  "https://storage.googleapis.com/aistudio-build-user-assets/f6df0b27-b6df-4bd7-965c-9959b5203522/58p7z40x48r.jpeg",
  "https://storage.googleapis.com/aistudio-build-user-assets/f6df0b27-b6df-4bd7-965c-9959b5203522/68v4h168g0g.jpeg"
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] bg-surface-gray overflow-hidden mt-20">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Carousel slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-contain p-4"
        />
      </AnimatePresence>
    </div>
  );
}
