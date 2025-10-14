"use client";

import Container from "@/components/Container";
import NoAccess from "@/components/NoAccess";
import PriceFormatter from "@/components/PriceFormatter";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { urlFor } from "@/sanity/lib/image";
import useStore from "@/store";
import { useAuth } from "@clerk/nextjs";
import { Heart, ShoppingBag, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Define Product interface with proper types
interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  images: SanityImageSource[];
  variant: string;
  status: string;
  price: number;
}

// Define the store hook return type
interface StoreState {
  favoriteProduct: Product[];
  removeFromFavorite: (id: string) => void;
  resetFavorite: () => void;
  addItem: (product: Product) => void;
}

const Wishlist = () => {
  const { favoriteProduct, removeFromFavorite, resetFavorite, addItem } =
    useStore() as StoreState;
  const { isSignedIn } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  const handleResetFavorites = (): void => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all favorites?"
    );
    if (confirmed) {
      resetFavorite();
      toast.success("Favorites cleared successfully!");
    }
  };

  const handleAddToCart = (product: Product): void => {
    addItem(product);
    toast.success("Product added to cart!");
  };

  const handleAddAllToCart = (): void => {
    setLoading(true);
    try {
      favoriteProduct.forEach((product: Product) => {
        addItem(product);
      });
      toast.success("All favorites added to cart!");
    } catch (error) {
      console.error("Failed to add items to cart:", error);
      toast.error("Failed to add items to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {isSignedIn ? (
        <Container className="mb-4 px-4 sm:px-6 lg:px-8">
          {favoriteProduct?.length > 0 ? (
            <div className="py-6 sm:py-8">
              {/* Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-shop_dark_green rounded flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white" />
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold text-shop_light_green">
                  My Favor
                  <span className="text-shop_dark_green">ites</span>
                </h1>
              </div>

              {/* Products List */}
              <div className="space-y-3 sm:space-y-4">
                {favoriteProduct.map((product: Product) => (
                  <div
                    key={product._id}
                    className="bg-white border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      {/* Product Image */}
                      {product.images && product.images.length > 0 && (
                        <Link
                          href={`/product/${product.slug.current}`}
                          className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden bg-gray-50 group w-full sm:w-auto"
                        >
                          <Image
                            src={urlFor(product.images[0]).url()}
                            alt={product.name}
                            width={160}
                            height={160}
                            loading="lazy"
                            className="w-full sm:w-32 md:w-40 h-48 sm:h-32 md:h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                      )}

                      {/* Product Details & Actions Container */}
                      <div className="flex-1 w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
                        {/* Product Details */}
                        <div className="flex-1">
                          <Link
                            href={`/product/${product.slug.current}`}
                            className="hover:text-shop_dark_green transition-colors"
                          >
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h2>
                          </Link>
                          <div className="space-y-1 mb-3 sm:mb-0">
                            <p className="text-xs sm:text-sm text-gray-600">
                              Variant:{" "}
                              <span className="font-semibold text-gray-900">
                                {product.variant}
                              </span>
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600">
                              Status:{" "}
                              <span className="font-semibold text-gray-900">
                                {product.status}
                              </span>
                            </p>
                          </div>

                          {/* Price - Mobile */}
                          <div className="block sm:hidden mt-2">
                            <PriceFormatter
                              amount={product.price}
                              className="text-lg font-bold text-gray-900"
                            />
                          </div>

                          {/* Action Buttons - Mobile */}
                          <div className="flex sm:hidden items-center gap-2 mt-3">
                            <button
                              onClick={() => {
                                removeFromFavorite(product._id);
                                toast.success("Removed from favorites!");
                              }}
                              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-white border border-gray-300 hover:bg-red-50 hover:border-red-300 transition-colors text-sm"
                              aria-label="Remove from favorites"
                            >
                              <Trash className="w-4 h-4 text-gray-600" />
                              <span className="text-gray-700">Remove</span>
                            </button>

                            <button
                              onClick={() => handleAddToCart(product)}
                              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-shop_dark_green hover:bg-shop_dark_green/90 transition-colors text-sm"
                              aria-label="Add to cart"
                            >
                              <ShoppingBag className="w-4 h-4 text-white" />
                              <span className="text-white">Add to Cart</span>
                            </button>
                          </div>
                        </div>

                        {/* Desktop Price & Actions */}
                        <div className="hidden sm:flex flex-col items-end justify-between gap-3">
                          {/* Price */}
                          <div className="flex-shrink-0 text-right">
                            <PriceFormatter
                              amount={product.price}
                              className="text-xl font-bold text-gray-900"
                            />
                          </div>

                          {/* Action Buttons - Desktop */}
                          <div className="flex items-center gap-2">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button
                                    onClick={() => {
                                      removeFromFavorite(product._id);
                                      toast.success("Removed from favorites!");
                                    }}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-red-50 hover:border-red-300 transition-colors"
                                    aria-label="Remove from favorites"
                                  >
                                    <Trash className="w-4 h-4 text-gray-600 hover:text-red-600" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900">
                                  Remove from favorites
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <button
                                    onClick={() => handleAddToCart(product)}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-shop_dark_green hover:bg-shop_dark_green/90 transition-colors"
                                    aria-label="Add to cart"
                                  >
                                    <ShoppingBag className="w-4 h-4 text-white" />
                                  </button>
                                </TooltipTrigger>
                                <TooltipContent className="bg-gray-900">
                                  Add to cart
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <Button
                  onClick={handleAddAllToCart}
                  disabled={loading}
                  className="w-full sm:w-auto font-semibold bg-shop_dark_green hover:bg-shop_dark_green/90 text-white px-6"
                  size="lg"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  {loading ? "Adding..." : "Add All to Cart"}
                </Button>
                <Button
                  onClick={handleResetFavorites}
                  className="w-full sm:w-auto font-semibold px-6"
                  variant="destructive"
                  size="lg"
                >
                  <Trash className="w-4 h-4 mr-2" />
                  Clear Favorites
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 sm:py-20 px-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4 sm:mb-6">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gray-300" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 text-center">
                No Favorites Yet
              </h2>
              <p className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6 text-center max-w-md px-4">
                Start adding products you love to your favorites!
              </p>
              <Link href="/shop">
                <Button
                  className="bg-shop_dark_green hover:bg-shop_dark_green/90 text-white px-6 sm:px-8"
                  size="lg"
                >
                  Browse Products
                </Button>
              </Link>
            </div>
          )}
        </Container>
      ) : (
        <NoAccess />
      )}
    </div>
  );
};

export default Wishlist;