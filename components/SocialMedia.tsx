import { Facebook, Mail, Instagram, MessageCircle, Phone } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
     {
        title: "Instagram",
        href: "https://www.instagram.com/rosie_wig?igsh=MXE0c3dncjZpejFhbw%3D%3D&utm_source=qr",
        icon: <Instagram className='w-5 h-5' />
    }, 
    {
        title: "Facebook",
        href: "https://www.facebook.com/rosie.wig.9",
        icon: <Facebook className='w-5 h-5' />
    },            
     {
        title: "0708 283 1875, 0806 689 0131",
        href: "/",
        icon: <Phone className='w-5 h-5' />
    }, 
     {
        title: "info.rosiewig@gmail.com",
        href: "mailto:info.rosiewig@gmail.com",
        icon: <Mail className='w-5 h-5' />
    },
    {
        title: "RosieWig What'sApp",
        href: "https://wa.link/mo1b1i",
        icon: <MessageCircle className='w-5 h-5' />
    },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <a
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2  rounded-full text-white bg-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;