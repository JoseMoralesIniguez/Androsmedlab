import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Usamos el BASE_URL de Vite para asegurar que las rutas funcionen en GitHub Pages
  const baseUrl = import.meta.env.BASE_URL;
  const images = [
    `${baseUrl}slide1.jpg`,
    `${baseUrl}slide2.jpg`,
    `${baseUrl}slide3.jpg`,
    `${baseUrl}slide4.jpg`,
    `${baseUrl}slide5.jpg`,
    `${baseUrl}slide6.jpg`
  ];

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
