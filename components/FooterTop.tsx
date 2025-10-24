import React from "react";
interface ContactItemData {
  title: string;
  subtitle: string;
  image: string; // Path to image/GIF
}
const data: ContactItemData[] = [
  {
    title: "BRAND AUTHENTICITY",
    subtitle: "A brand you can trust",
    image: "/favicon.ico",
  },
  {
    title: "FREE DELVERY",
    subtitle: "Free Delivery Within Uyo",
    image: "/cash.gif",
  },
  {
    title: "CUSTOMER CARE",
    subtitle: "24/7 Available Customer Care",
    image: "/call.gif",
  },
  {
    title: "QUALITY PRODUCTS",
    subtitle: "High Quality Products",
    image: "/Hairdrayer.gif",
  },  
];
const FooterTop = () => {
  
  return (
    <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm hover:shadow-shop_light_green/20 py-5 ">
      {data?.map((item, index) => (
        <div key={index} className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect">
          <div className="flex-shrink-0 w-18 h-20">
            <img 
              src={item.image} 
              alt=""
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect">
              {item.title}
            </h3>
            <p className="text-gray-900 text-sm mt-1 group-hover:text-gray-900 hoverEffect">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FooterTop;