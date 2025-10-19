import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { StarIcon } from "@sanity/icons";
import { Flame } from "lucide-react";
import PriceView from "./PriceView";
import Title from "./Title";
import ProductSideMenu from "./ProductSideMenu";
import AddToCartButton from "./AddToCartButton";

const DemoCard = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer">
        <div className="cursor-pointer group relative bg-gray-500/10 rounded-lg w-full h-52 flex items-center justify-center">
         {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              width={500}
              height={500}
              priority
              className={`group-hover:scale-105 transition object-cover w-4/5 h-4/5 md:w-full md:h-full 
              ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>          
        )}        
        <ProductSideMenu product={product} />        
        </div>

         <Title className="md:text-base font-medium pt-2 w-full truncate">{product?.name}</Title>
      
    </div>
  )
}

export default DemoCard
