"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Title from "./Title";

export default function Instagram() {
  const [currentIndex, setCurrentIndex] = useState<number>(2);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [dragOffset, setDragOffset] = useState<number>(0);

  const images: string[] = [
    "/imageOne.jpg",
    "/imageTwo.jpg",
    "/imageThree.jpg",
    "/imageFour.jpeg",
    "/imageFive.jpeg",
    "/imageSix.jpeg",
    "/imageSvn.jpeg"
  ];

  const nextSlide = (): void => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getSlidePosition = (index: number): number => {
    const diff = index - currentIndex;
    return diff;
  };

  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ): void => {
    setIsDragging(true);
    setStartX(
      e.type === "mousedown"
        ? (e as React.MouseEvent).clientX
        : (e as React.TouchEvent).touches[0].clientX
    );
  };

  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ): void => {
    if (!isDragging) return;

    const currentX =
      e.type === "mousemove"
        ? (e as React.MouseEvent).clientX
        : (e as React.TouchEvent).touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleDragEnd = (): void => {
    if (!isDragging) return;

    setIsDragging(false);

    // If dragged more than 50px, change slide
    if (dragOffset > 50) {
      prevSlide();
    } else if (dragOffset < -50) {
      nextSlide();
    }

    setDragOffset(0);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs py-1">Follow Us</p>
        <Title className="md:text-4xl text-2xl font-medium text-center py-4">
          Follow Us On
          <span className="text-emerald-700 pl-1.5">Instagram </span>
        </Title>

        <div
          className="relative h-80 overflow-hidden cursor-grab active:cursor-grabbing mt-2"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {images.map((img, index) => {
              const position = getSlidePosition(index);
              const isActive = index === currentIndex;

              return (
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    width: "16rem",
                    height: "20rem",
                    transition: isDragging
                      ? "none"
                      : "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: `translateX(calc(${position * 18}rem + ${dragOffset}px)) scale(${isActive ? 1.1 : 0.9})`,
                    opacity: Math.abs(position) > 2 ? 0 : isActive ? 1 : 0.4,
                    zIndex: isActive
                      ? 10
                      : Math.abs(position) > 2
                        ? 0
                        : 5 - Math.abs(position),
                    borderRadius: isActive ? "0.75rem" : "0.5rem",
                    pointerEvents: "none",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "0.75rem",
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow: isActive
                        ? "0 10px 30px rgba(0, 0, 0, 0.3)"
                        : "0 5px 15px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prevSlide}
            className="bg-white hover:bg-gray-50 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shadow-md transition-all hover:scale-110"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>

          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-shop_dark_green w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="bg-white hover:bg-gray-50 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shadow-md transition-all hover:scale-110"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
