"use client"

import React from "react";
import {useEffect} from "react";
import { ChatPopover } from "./ChatPopover";

const LiveChat = () => {

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
    
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
        <div>
           <ChatPopover />
        </div>
    )
};

export default LiveChat;