"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "motion/react";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductAvailable";
import { Loader2 } from "lucide-react";
import Container from "./Container";
import HomeTabbar from "./HomeTabBar";
import { productType } from "@/constants/data";
import { Product } from "@/sanity.types";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;
  const params = { variant: selectedTab.toLowerCase() };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <Container className="flex flex-col lg:px-0 my-0 md:my-10">
      <div className="md:hidden">
        <h2 className=" text-gray-800 scroll-m-20 text-xl font-semibold tracking-tight ">
          Recommended for you
        </h2>
        <div className="flex items-center justify-between bg-gradient-to-r from-green-200 to-blue-300 rounded-lg p-1 shadow-md my-3.5">
          <div className="text-left pl-2">
            <h5 className="text-[10px] font-semibold text-gray-600 mb-0.5">
              FREE DELIVERY
            </h5>
            <p className="text-xs font-bold text-gray-900">
              Free delivery within Uyo
            </p>
          </div>
          <Image
            src="/delivery.gif"
            alt="Delivery animation"
            width={60}
            height={50}
            unoptimized
            className="flex-shrink-0"
          />
        </div>
      </div>

      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-shop_light_green">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </motion.div>      
        </div>
      ) : products?.length ? (
        <>
          {/* Mobile: ScrollArea showing ~4 cards (2 rows) */}
          <ScrollArea className="h-[600px] md:hidden mt-4">
            <div className="grid grid-cols-2 gap-2.5 pr-4">             
              {products?.map((product) => (
                <AnimatePresence key={product?._id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ProductCard key={product?._id} product={product} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          </ScrollArea>

          {/* Desktop: Regular grid without ScrollArea */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">             
            {products?.map((product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard key={product?._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductGrid;