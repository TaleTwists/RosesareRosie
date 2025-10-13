"use client";

import React, { useState, useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";

interface DealCarouselProps {
  products: any[];
}

const DealCarousel = ({ products }: DealCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate how many slides we need (showing 2 products per slide on mobile)
  const productsPerSlide = 2;
  const totalSlides = Math.ceil(products.length / productsPerSlide);

  // Create slides by grouping products
  const slides = Array.from({ length: totalSlides }, (_, i) =>
    products.slice(i * productsPerSlide, (i + 1) * productsPerSlide)
  );

  // Duplicate slides for infinite loop effect
  const extendedSlides = [...slides, ...slides];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === slides.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700);
    } else {
      setIsTransitioning(true);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, slides.length]);

  const handleSlideChange = (index: number): void => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {extendedSlides.map((slideProducts, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0">
            <div className="grid grid-cols-2 gap-2">
              {slideProducts.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              currentSlide % slides.length === index
                ? "bg-slate-700 w-6"
                : "bg-slate-400/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default DealCarousel;