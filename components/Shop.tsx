"use client";
import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import React, { useEffect, useState, useRef } from "react";
import Container from "./Container";
import Title from "./Title";
import CategoryList from "./shop/CategoryList";
import { useSearchParams } from "next/navigation";
import PriceList from "./shop/PriceList";
import { client } from "@/sanity/lib/client";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}

const MobileCategoryCarousel = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: Category[];
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-white border-b border-shop_dark_green/20 py-3">
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
            selectedCategory === null
              ? "bg-shop_dark_green text-white"
              : "bg-gray-100 text-shop_dark_green hover:bg-gray-200"
          }`}
        >
          All Products
        </button>
        {[...categories]
          .sort((a, b) => {
            const aTitle = a.title || "";
            const bTitle = b.title || "";
            
            // "Hairs" always comes first
            if (aTitle.toLowerCase() === "hairs") return -1;
            if (bTitle.toLowerCase() === "hairs") return 1;
            
            // Then other H categories
            const aStartsWithH = aTitle.toLowerCase().startsWith("h");
            const bStartsWithH = bTitle.toLowerCase().startsWith("h");
            
            if (aStartsWithH && !bStartsWithH) return -1;
            if (!aStartsWithH && bStartsWithH) return 1;
            
            // Then alphabetical for the rest
            return aTitle.localeCompare(bTitle);
          })
          .map((category) => (
            <button
              key={category._id}
              onClick={() => setSelectedCategory(category?.slug?.current || null)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${
                selectedCategory === category?.slug?.current
                  ? "bg-shop_dark_green text-white"
                  : "bg-gray-100 text-shop_dark_green hover:bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
      </div>
    </div>
  );
};

const Shop = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    categoryParams || null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    brandParams || null
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  
  const fetchProducts = async () => {
    setLoading(true);
    try {
      let minPrice = 1000;
      let maxPrice = 1000000;
      if (selectedPrice) {
        const [min, max] = selectedPrice.split("-").map(Number);
        minPrice = min;
        maxPrice = max;
      }
      const query = `
      *[_type == 'product' 
        && (!defined($selectedCategory) || references(*[_type == "category" && slug.current == $selectedCategory]._id))
        && (!defined($selectedBrand) || references(*[_type == "brand" && slug.current == $selectedBrand]._id))
        && price >= $minPrice && price <= $maxPrice
      ] 
      | order(name asc) {
        ...,"categories": categories[]->title
      }
    `;
      const data = await client.fetch(
        query,
        { selectedCategory, selectedBrand, minPrice, maxPrice },
        { next: { revalidate: 0 } }
      );
      setProducts(data);
    } catch (error) {
      console.log("Shop product fetching Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedBrand, selectedPrice]);

  return (
    <div className="border-t">
      {/* Mobile Header and Category Carousel - Only visible on mobile */}
      <div className="md:hidden">
        {/* Mobile Header with Reset Button */}
        <Container className="pt-4 pb-2">
          <div className="flex items-center justify-between">
            <Title className="text-base uppercase tracking-wide text-shop_dark_green">
              Our Products
            </Title>
            {(selectedCategory !== null ||
              selectedBrand !== null ||
              selectedPrice !== null) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedBrand(null);
                  setSelectedPrice(null);
                }}
                className="text-shop_dark_green underline text-sm font-medium hover:text-darkRed hoverEffect"
              >
                Reset
              </button>
            )}
          </div>
        </Container>

        {/* Mobile Category Carousel */}
        <div className="sticky top-0 z-20">
          <MobileCategoryCarousel
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>

      <Container className="mt-5">
        {/* Desktop Header */}
        <div className="hidden md:block sticky top-0 z-10 mb-5">
          <div className="flex items-center justify-between">
            <Title className="text-lg uppercase tracking-wide text-shop_dark_green">
              Match Products to your needs
            </Title>
            {(selectedCategory !== null ||
              selectedBrand !== null ||
              selectedPrice !== null) && (
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedBrand(null);
                  setSelectedPrice(null);
                }}
                className="text-shop_dark_green underline text-sm mt-2 font-medium hover:text-darkRed hoverEffect"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Mobile Header with Reset Button */}
        <div className="md:hidden mb-4">
          </div>

        <div className="flex flex-col md:flex-row gap-5 border-t border-t-shop_dark_green/50">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="hidden md:block md:sticky md:top-20 md:self-start md:h-[calc(100vh-160px)] md:overflow-y-auto md:min-w-64 pb-5 md:border-r border-r-shop_btn_dark_green/50 scrollbar-hide">
            <CategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>

          {/* Products Grid */}
          <div className="flex-1 pt-5">
            <div className="h-auto md:h-[calc(100vh-160px)] md:overflow-y-auto md:pr-2 scrollbar-hide">
              {loading ? (
                <div className="p-20 flex flex-col gap-2 items-center justify-center bg-white">
                  <Loader2 className="w-10 h-10 text-shop_dark_green animate-spin" />
                  <p className="font-semibold tracking-wide text-base text-shop_dark_green">
                    Product is loading . . .
                  </p>
                </div>
              ) : products?.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                  {products?.map((product) => (
                    <ProductCard key={product?._id} product={product} />
                  ))}
                </div>
              ) : (
                <NoProductAvailable className="bg-white mt-0" />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;