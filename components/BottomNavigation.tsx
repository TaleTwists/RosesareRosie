"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FC } from "react";
import { User, House, ShoppingCart } from "lucide-react";
import { ClerkLoaded, SignedIn, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";

interface NavItem {
  name: string;
  href: string;
  image?: string;
  activeImage?: string;
  useCartIcon?: boolean;
  useFavoriteButton?: boolean;
  useAccountHandler?: boolean;
  useLucideIcon?: "house" | "shopping-cart" | "user";
}

interface BottomNavigationProps {
  customNavItems?: NavItem[];
  className?: string;
}

const BottomNavigation: FC<BottomNavigationProps> = ({
  customNavItems,
  className,
}) => {
  const pathname = usePathname();
  const { user } = useUser();

  const defaultNavItems: NavItem[] = [
    {
      name: "Home",
      href: "/",
      useLucideIcon: "house",
    },
    {
      name: "Shop",
      href: "/shop",
      useLucideIcon: "shopping-cart",
    },
    {
      name: "Cart",
      href: "/cart",
      useCartIcon: true,
    },
    {
      name: "Favorite",
      href: "/wishlist",
      useFavoriteButton: true,
    },
    {
      name: "Account",
      href: "/account",
      useAccountHandler: true,
    },
  ];

  const navItems = customNavItems || defaultNavItems;

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const renderLucideIcon = (
    iconType: "house" | "shopping-cart" | "user",
    active: boolean
  ) => {
    const iconClassName = `w-6 h-6 transition-opacity duration-200 ${
      active ? "text-shop_dark_green" : "text-gray-500"
    }`;

    switch (iconType) {
      case "house":
        return <House className={iconClassName} />;
      case "shopping-cart":
        return <ShoppingCart className={iconClassName} />;
      case "user":
        return <User className={iconClassName} />;
      default:
        return null;
    }
  };

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-pb z-50 ${className || ""}`}
    >
      <div className="flex justify-around items-center h-16 px-4">
        {navItems.map((item: NavItem) => {
          const active: boolean = isActive(item.href);

          // Special handling for account item when user is logged in
          if (item.useAccountHandler && user) {
            return (
              <div
                key={item.name}
                className={`flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-2 rounded-lg transition-all duration-200 transform ${
                  active
                    ? "text-shop_light_green bg-blue-50 shadow-inner scale-95 border border-blue-100"
                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95 font-bold"
                }`}
              >
                <div
                  className={`relative w-6 h-6 mb-1 transition-transform duration-200 flex items-center justify-center ${
                    active ? "transform scale-110" : ""
                  }`}
                >
                  <ClerkLoaded>
                    <SignedIn>
                      <UserButton
                        appearance={{
                          elements: {
                            avatarBox: "w-6 h-6",
                          },
                        }}
                      />
                    </SignedIn>
                  </ClerkLoaded>
                </div>
                <span
                  className={`text-xs font-medium truncate ${
                    active ? "text-shop_dark_green" : "text-gray-500"
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-2 rounded-lg transition-all duration-200 transform ${
                active
                  ? "text-shop_light_green bg-blue-50 shadow-inner scale-95 border border-blue-100"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:scale-95 font-bold"
              }`}
            >
              <div
                className={`relative w-6 h-6 mb-1 transition-transform duration-200 flex items-center justify-center ${
                  active ? "transform scale-110" : ""
                }`}
              >
                {item.useCartIcon ? (
                  <CartIcon />
                ) : item.useFavoriteButton ? (
                  <FavoriteButton />
                ) : item.useAccountHandler ? (
                  <User
                    className={`w-6 h-6 transition-opacity duration-200 ${
                      active ? "text-shop_dark_green" : "text-gray-500"
                    }`}
                  />
                ) : item.useLucideIcon ? (
                  renderLucideIcon(item.useLucideIcon, active)
                ) : (
                  <Image
                    src={active ? item.activeImage! : item.image!}
                    alt={item.name}
                    fill
                    className="object-contain transition-opacity duration-200"
                    sizes="30px"
                  />
                )}
              </div>
              <span
                className={`text-xs font-medium truncate ${
                  active ? "text-shop_dark_green" : "text-gray-500"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
