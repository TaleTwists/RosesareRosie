'use client'
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  link?: string; // Optional link property
  isExternal?: boolean; // Flag to identify external links
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "110 Nkemba St, off Abak Road, Uyo",
    icon: (
      <MapPin className="h-6 w-6 text-shop_light_green group-hover:text-primary transition-colors" />
    ),
    link: "https://maps.google.com/?q=110+Nkemba+St,+off+Abak+Road,+Uyo",
    isExternal: true,
  },
  {
    title: "Call Us",
    subtitle: "0708 283 1875, 0806 689 0131",
    icon: (
      <Phone className="h-6 w-6 text-shop_light_green group-hover:text-primary transition-colors" />
    ),
    link: "tel:+2347082831875",
    isExternal: true,
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-shop_light_green group-hover:text-primary transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "info.rosiewig@gmail.com",
    icon: (
      <Mail className="h-6 w-6 text-shop_light_green group-hover:text-primary transition-colors" />
    ),
    link: "mailto:info.rosiewig@gmail.com",
    isExternal: true,
  },
];

const FooterTop = () => {
  const pathname = usePathname();
  
  // Don't render on homepage and contact page
 if (pathname === '/' || pathname === '/contact') {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 p-2 shadow-sm hover:shadow-shop_light_green/20 py-5">
      {data?.map((item, index) => {
        const content = (
          <div className="flex items-center gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect">
            {item?.icon}
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-black hoverEffect">
                {item?.title}
              </h3>
              <p className="text-gray-900 text-sm mt-1 group-hover:text-gray-900 hoverEffect">
                {item?.subtitle}
              </p>
            </div>
          </div>
        );

        // If item has a link, wrap in anchor tag
        if (item.link) {
          return (
            <a
              key={index}
              href={item.link}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="block hover:no-underline"
            >
              {content}
            </a>
          );
        }

        // If no link, return as div
        return (
          <div key={index}>
            {content}
          </div>
        );
      })}
    </div>
  );
};

export default FooterTop;