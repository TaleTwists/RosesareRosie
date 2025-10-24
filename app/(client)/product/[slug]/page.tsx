import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import FavoriteButton from "@/components/FavoriteButton";
import ImageView from "@/components/ImageView";
import PriceView from "@/components/PriceView";
import ProductCharacteristics from "@/components/ProductCharacteristics";
import { getProductBySlug } from "@/sanity/queries";
import { CornerDownLeft, StarIcon, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { RxBorderSplit } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import ProductCard from "@/components/ProductCard";
import { getDealProducts } from "@/sanity/queries";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Title from "@/components/Title";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  const products = await getDealProducts();

  if (!product) {
    return notFound();
  }
  return (
    <>
      <Container className="flex flex-col md:flex-row gap-10 py-10">
        {product?.images && (
          <ImageView images={product?.images} isStock={product?.stock} />
        )}
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">{product?.name}</h2>
            <p className="text-sm text-gray-600 tracking-wide">
              {product?.description}
            </p>
            <div className="flex items-center gap-0.5 text-xs">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  size={12}
                  className="text-shop_light_green"
                  fill={"#3b9c3c"}
                />
              ))}
              <p className="font-semibold">{`(120)`}</p>
            </div>
          </div>
          <div className="space-y-2 border-t border-b border-gray-200 py-5">
            <PriceView
              price={product?.price}
              discount={product?.discount}
              className="text-lg font-bold"
            />
            {/* <p
            className={`px-4 py-1.5 text-sm text-center inline-block font-semibold rounded-lg ${product?.stock === 0 ? "bg-red-100 text-red-600" : "text-green-600 bg-green-100"}`}
          >
            {(product?.stock as number) > 0 ? "In Stock" : "Out of Stock"}
          </p> */}
          </div>
          <div className="flex items-center gap-2.5 lg:gap-3">
            <AddToCartButton product={product} />
            <FavoriteButton showProduct={true} product={product} />
          </div>
          <ProductCharacteristics product={product} />
          <div className="flex flex-wrap items-center justify-between gap-2.5 border-b border-b-gray-200 py-5 -mt-2">
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <RxBorderSplit className="text-lg" />
              <p>Compare color</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <FaRegQuestionCircle className="text-lg" />
              <p>Ask a question</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <TbTruckDelivery className="text-lg" />
              <p>Delivery & Return</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-black hover:text-red-600 hoverEffect">
              <FiShare2 className="text-lg" />
              <p>Share</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border border-lightColor/25 border-b-0 p-3 flex items-center gap-2.5">
              <Truck size={30} className="text-shop_orange" />
              <div>
                <p className="text-base font-semibold text-black">
                  Free Delivery
                </p>
                <p className="text-sm text-gray-500 underline underline-offset-2">
                  Free Delivery for individuals in Uyo.
                </p>
              </div>
            </div>
            <div className="border border-lightColor/25 p-3 flex items-center gap-2.5">
              <CornerDownLeft size={30} className="text-shop_orange" />
              <div>
                <p className="text-base font-semibold text-black">
                  Return Delivery
                </p>
                <p className="text-sm text-gray-500 ">
                  Returns only when suppliers are at fault.{" "}
                  <span className="underline underline-offset-2">Details</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

     <Container>
  <Title className="text-center text-3xl mb-2.5">
   Recommended
    <span className="text-shop_light_green pl-2">Products</span>
  </Title>
  
  <Carousel
  opts={{
    align: "start",
  }}
  className="w-full"
>
  <CarouselContent>
    {products?.map((product) => (
      <CarouselItem key={product?._id} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
        <div className="p-1">
          <ProductCard product={product} />
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious className="h-8 w-8 md:h-10 md:w-10" />
  <CarouselNext className="h-8 w-8 md:h-10 md:w-10" />
</Carousel>
</Container>
    </>
  );
};

export default SingleProductPage;
