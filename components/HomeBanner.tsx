import React from "react";
import { Title } from "./ui/text";
import Link from "next/link";
import Image from "next/image";
import { banner_1 } from "@/public";
import HeroPage from "./Hero";

const HomeBanner = () => {
  return (
    <>
      {/* Show only on small screens */}
      <div className="block md:hidden">
        <HeroPage />
      </div>

      {/* Show only on medium and large screens */}
      <div className="hidden md:flex py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 items-center justify-between">
        <div className="space-y-5">
          <Title>
            Grab Upto 20% off on <br />
            First Order
          </Title>
          <Link
            href={"/shop"}
            className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green hoverEffect"
          >
            Buy Now
          </Link>
        </div>

        <div>
          <Image src={banner_1} alt="banner_1" className="w-96" />
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
