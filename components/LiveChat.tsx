"use client"

import React from "react";
import {useEffect} from "react";
import Image from "next/image";

const LiveChat = () =>{

  useEffect(() => {
    const handleScroll = () => {
        const whatsappLinkElement = document.querySelector(".whatsapp-link");
        whatsappLinkElement?.classList.toggle("visible", window.scrollY > 40);
    };

    const checkScrollVisibility = () => {
        const whatsappLinkElement = document.querySelector(".whatsapp-link");
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if(scrollHeight > clientHeight) {
            handleScroll();
            window.addEventListener("scroll", handleScroll);
        } else {
            whatsappLinkElement?.classList.add("visible");
        };
    };

    checkScrollVisibility();

    window.addEventListener("scroll", handleScroll);
    
    // Optional: Call once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
}, []);
    return(
        <div>
           <a href="" className="whatsapp-link relative" target="_blank" rel="noopener noreferrer">
            <span className="absolute left-[7px] top-[7px] z-50 size-10">
                <span className="flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75">

                </span>
            </span>
            <Image 
               src="/ios-message.svg"
               alt="Chat"
               width={40}
               height={40}
               className="whatsapp-icon z-50"
            />
           </a>
        </div>
    )
};

export default LiveChat;