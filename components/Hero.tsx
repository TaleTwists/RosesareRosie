"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRightIcon } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import afr from "@/public/afr.png";
import prod from "@/public/prod.png";
import africana from "@/public/africana.png";
import Link from "next/link";

interface Card {
  title: string;
  gradient: string;
  bgColor: string;
  image: StaticImageData;
  buttonText: string;
  link: string;
}

const HeroPage: React.FC = () => {
  const cards: Card[] = [
    {
      title: "RosieWig Presents:",
      gradient: "from-slate-800 to-[#FFAD51]",
      bgColor: "bg-orange-200",
      image: africana,
      buttonText: "Learn More",
      link: "/about",
    },
    {
      title: "Premium Wigs",
      gradient: "from-slate-600 to-[#A0FF74]",
      bgColor: "bg-green-200",
      image: afr,
      buttonText: "Buy Now",
      link: "/shop",
    },
    {
      title: "Luxury Hair Care",
      gradient: "from-slate-800 to-[#78B2FF]",
      bgColor: "bg-blue-200",
      image: prod,
      buttonText: "Buy Now",
      link: "/shop",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = (index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };

  return (
    <>
      <div className="xl:hidden w-full text-sm text-slate-600">
        <div className="relative w-full px-1">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cards.map((card: Card, index: number) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-1">
                  <div
                    className={`flex items-center justify-between w-full ${card.bgColor} rounded-3xl p-6 px-8 group`}
                  >
                    <div>
                      <p
                        className={`text-xl font-medium bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent max-w-40`}
                      >
                        {card.title}
                      </p>
                      <Link
                        href={card.link}
                        className="mt-2 font-semibold"
                      >
                        <p className="flex items-center gap-1">
                          {card.buttonText}{" "}
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
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2">
            {cards.map((card: Card, index: number) => (
              <div
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                  selectedIndex === index
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