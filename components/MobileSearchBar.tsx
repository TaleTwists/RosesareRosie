import React from "react";
import { Search } from "lucide-react";
import Container from "./Container";

interface MobileSearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const MobileSearchBar = ({
  searchQuery,
  setSearchQuery,
}: MobileSearchBarProps) => {
  return (
    <Container className="pb-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-shop_dark_green/50" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-shop_dark_green/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-shop_dark_green/30 focus:border-shop_dark_green transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-shop_dark_green/50 hover:text-shop_dark_green"
          >
            ✕
          </button>
        )}
      </div>
    </Container>
  );
};

export default MobileSearchBar;