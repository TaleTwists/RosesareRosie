import React from "react";
import Title from "../Title";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";


const priceArray = [
  { title: "Under ₦100,000", value: "0-10,000" },
  { title: "₦10,000 - ₦30,000", value: "10,000-30,000" },
  { title: "₦200,000 - ₦300,000", value: "200,000-300,000" },
  { title: "₦300,000 - ₦500,000", value: "300,000-500,000" },
  { title: "Over ₦500,000", value: "500,000-10000" },
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
};


const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <Title className="text-base font-black">Price</Title>
      <RadioGroup className="mt-2 space-y-1" value={selectedPrice || ""}>
        {priceArray?.map((price, index) => (
          <div
            key={index}
            onClick={() => setSelectedPrice(price?.value)}
            className="flex items-center space-x-2 hover:cursor-pointer"
          >
            <RadioGroupItem
              value={price?.value}
              id={price?.value}
              className="rounded-sm"
            />
            <Label
              htmlFor={price.value}
              className={`${selectedPrice === price?.value ? "font-semibold text-shop_dark_green" : "font-normal"}`}
            >
              {price?.title}
            </Label>
          </div>
        ))}
      </RadioGroup>
      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect"
        >
          Reset selection
        </button>
      )}
    </div>
  );
};

export default PriceList;