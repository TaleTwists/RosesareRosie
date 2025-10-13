import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import Title from "@/components/Title";
import { getDealProducts } from "@/sanity/queries";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import fires from "@/public/fires.svg";
import DealCarousel from "./DealCaousel";

const DealMobile = async () => {
  const products = await getDealProducts();
  
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
        
        <DealCarousel products={products} />
      </Container>
    </div>
  );
};

export default DealMobile;