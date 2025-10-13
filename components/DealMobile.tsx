"use client";

import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import fires from "@/public/fires.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface DealMobileProps {
  products: any[];
}

const DealMobile = ({ products }: DealMobileProps) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="py-5 bg-deal-bg md:hidden block">
      <Container>
        <div className="flex justify-between items-center mb-4">
          <Title className="scroll-m-20 text-xl font-semibold tracking-tight text-shop_dark_green flex items-center gap-1">
            Hot
            <span className="text-shop_light_green">Deals</span>
            <Image src={fires} alt="fire icon" width={23} height={23} />
          </Title>
          <Link
            href="/deal"
            className="text-sm text-gray-400 hover:text-gray-600"
          >
            See all
          </Link>
        </div>
        
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-2">
            {products?.map((product) => (
              <CarouselItem key={product?._id} className="pl-2 basis-1/2 sm:basis-1/3">
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </div>
  );
};

export default DealMobile;