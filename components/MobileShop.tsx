import React from 'react';
import { Product } from "@/sanity.types";
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

interface Props {
  product: Product;
  colorClass: string;
}

const ProductCardMobile = ({ product, colorClass }: Props) => {
  const imageUrl = product?.image ? urlFor(product.image).url() : '';

  return (
    <Link href={`/product/${product?.slug?.current}`}>
      <div 
        className={`${colorClass} py-6 px-8 rounded-[20px] flex justify-center items-center flex-col relative shadow-[5px_10px_15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[5px_15px_20px_rgba(0,0,0,0.4)] hover:-translate-y-2`}
      >
        {/* Product Image - Circular */}
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-white/20">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product?.name || 'Product'}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>

        {/* Product Name */}
        <h2 className="text-white text-lg font-bold text-center mb-1 line-clamp-2">
          {product?.name}
        </h2>

        {/* Product Price/Role */}
        <div className="bg-white/90 px-4 py-1.5 rounded-full mb-4">
          <h5 className="text-sm font-semibold text-gray-800">
            ₦{product?.price?.toLocaleString()}
          </h5>
        </div>

        {/* Category Tags (like social icons) */}
        <div className="flex gap-3">
          {product?.categories?.slice(0, 4).map((category, idx) => (
            <div
              key={idx}
              className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/50 transition-all"
              title={category}
            >
              <span className="text-white text-xs font-bold">
                {category?.charAt(0).toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCardMobile;