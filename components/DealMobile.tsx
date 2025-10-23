import Container from "@/components/Container";
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
        <div className="flex justify-between items-center m-4">
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

        <div className="flex items-center justify-between bg-gradient-to-r from-green-200 to-blue-300 rounded-lg p-1 shadow-md my-3.5">
          <div className="text-left">
            <h5 className="text-[10px] font-semibold text-gray-600 mb-0.5">
              CUSTOMER CARE
            </h5>
            <p className="text-xs font-bold text-gray-900">
              24/7 Customer Care Available
            </p>
          </div>
          <Image
            src="/call.gif"
            alt="Delivery animation"
            width={60}
            height={50}
            unoptimized
            className="flex-shrink-0"
          />
        </div>

        <DealCarousel products={products} />
      </Container>
    </div>
  );
};

export default DealMobile;
