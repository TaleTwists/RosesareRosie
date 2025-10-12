"use client";
import React, { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRightIcon } from "lucide-react";
import afr from "@/public/afr.png";
import prod from "@/public/prod.png";
import africana from "@/public/africana.png";
import Link from "next/link";

interface Card {
  title: string;
  gradient: string;
  bgColor: string;
  image: StaticImageData;
}

const HeroPage: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Best products",
      gradient: "from-slate-800 to-[#FFAD51]",
      bgColor: "bg-orange-200",
      image: africana,
    },
    {
      title: "20% discounts",
      gradient: "from-slate-800 to-[#78B2FF]",
      bgColor: "bg-blue-200",
      image: afr,
    },
    {
      title: "20% discounts",
      gradient: "from-slate-800 to-[#78B2FF]",
      bgColor: "bg-blue-200",
      image: prod,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Duplicate cards for infinite loop effect
  const extendedCards = [...cards, ...cards];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === cards.length) {
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
  }, [currentSlide, cards.length]);

  const handleSlideChange = (index: number): void => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  return (
    <>
      <div className="xl:hidden w-full text-sm text-slate-600">
        <div className="overflow-hidden relative w-full px-1">
          <div
            className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {extendedCards.map((card: Card, index: number) => (
              <div key={index} className="w-full flex-shrink-0 px-1">
                <div
                  className={`flex items-center justify-between w-full ${card.bgColor} rounded-3xl p-6 px-8 group`}
                >
                  <div>
                    <p
                      className={`text-3xl font-medium bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent max-w-40`}
                    >
                      {card.title}
                    </p>
                    <Link
                      href="/shop"
                      className="inline-block bg-slate-800 text-white p-1.5 rounded-md font-semibold tracking-wide mt-3 text-xs"
                    >
                      <p className="flex items-center gap-1">
                        Buy Now{" "}
                        <ArrowRightIcon
                          className="group-hover:ml-2 transition-all"
                          size={18}
                        />
                      </p>
                    </Link>
                  </div>
                  <Image className="w-32" src={card.image} alt={card.title} />
                </div>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
            {cards.map((card: Card, index: number) => (
              <div
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                  currentSlide % cards.length === index
                    ? "bg-slate-700 w-6"
                    : "bg-slate-400/60"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
