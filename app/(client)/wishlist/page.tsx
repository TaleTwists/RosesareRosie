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

// Define Product interface
interface Product {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  images: unknown[]; // Replace with proper Sanity image type if available
  variant: string;
  status: string;
  price: number;
}

const FavoritesPage = () => {
  const { favoriteProduct, removeFromFavorite, resetFavorite, addItem } =
    useStore();
  const { isSignedIn } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleResetFavorites = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all favorites?"
    );
    if (confirmed) {
      resetFavorite();
      toast.success("Favorites cleared successfully!");
    }
  };

  const handleAddToCart = (product: Product) => {
    addItem(product);
    toast.success("Product added to cart!");
  };

  const handleAddAllToCart = () => {
    setLoading(true);
    try {
      favoriteProduct.forEach((product: Product) => {
        addItem(product);
      });
      toast.success("All favorites added to cart!");
    } catch (error) {
      toast.error("Failed to add items to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {isSignedIn ? (
        <Container className="mb-4">
          {favoriteProduct?.length ? (
            <div className="py-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-shop_dark_green rounded flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <h1 className="text-3xl font-bold text-shop_light_green">My Favor
                    <span className="text-shop_dark_green">
                        ites
                    </span>
                </h1>
              </div>

              <div className="space-y-4">
                {favoriteProduct.map((product: Product) => (
                  <div
                    key={product?._id}
                    className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      {/* Product Image */}
                      {product?.images && (
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          className="flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden bg-gray-50 group"
                        >
                          <Image
                            src={urlFor(product?.images[0]).url()}
                            alt="productImage"
                            width={160}
                            height={160}
                            loading="lazy"
                            className="w-40 h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                      )}

                      {/* Product Details */}
                      <div className="flex-1 flex flex-col justify-between min-h-[160px]">
                        <div>
                          <Link
                            href={`/product/${product?.slug?.current}`}
                            className="hover:text-shop_dark_green transition-colors"
                          >
                            <h2 className="text-lg font-semibold text-gray-900 mb-2">
                              {product?.name}
                            </h2>
                          </Link>
                          <div className="space-y-1">
                            <p className="text-sm text-gray-600">
                              Variant:{" "}
                              <span className="font-semibold text-gray-900">
                                {product?.variant}
                              </span>
                            </p>
                            <p className="text-sm text-gray-600">
                              Status:{" "}
                              <span className="font-semibold text-gray-900">
                                {product?.status}
                              </span>
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 mt-4">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => {
                                    removeFromFavorite(product?._id);
                                    toast.success("Removed from favorites!");
                                  }}
                                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 hover:bg-red-50 hover:border-red-300 transition-colors"
                                >
                                  <Trash className="w-5 h-5 text-gray-600 hover:text-red-600" />
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
                                  className="w-10 h-10 flex items-center justify-center rounded-full bg-shop_dark_green hover:bg-shop_dark_green/90 transition-colors"
                                >
                                  <ShoppingBag className="w-5 h-5 text-white" />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-900">
                                Add to cart
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex-shrink-0 text-right">
                        <PriceFormatter
                          amount={product?.price as number}
                          className="text-xl font-bold text-gray-900"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200">
                <Button
                  onClick={handleAddAllToCart}
                  disabled={loading}
                  className="font-semibold bg-shop_dark_green hover:bg-shop_dark_green/90 text-white px-6"
                  size="lg"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  {loading ? "Adding..." : "Add All to Cart"}
                </Button>
                <Button
                  onClick={handleResetFavorites}
                  className="font-semibold px-6"
                  variant="destructive"
                  size="lg"
                >
                  <Trash className="w-4 h-4 mr-2" />
                  Clear Favorites
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <Heart className="w-12 h-12 text-gray-300" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                No Favorites Yet
              </h2>
              <p className="text-gray-500 mb-6 text-center max-w-md">
                Start adding products you love to your favorites!
              </p>
              <Link href="/shop">
                <Button className="bg-shop_dark_green hover:bg-shop_dark_green/90 text-white px-8" size="lg">
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

export default FavoritesPage;