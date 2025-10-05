import type { Metadata } from "next";
import "../globals.css";
import Header from '@/components/Header'
import Footer from "@/components/Footer";
import {
  ClerkProvider,
} from '@clerk/nextjs';
import { SanityLive } from "@/sanity/lib/live";
import BottomNavigation from "@/components/BottomNavigation";
import LiveChat from "@/components/LiveChat";

export const metadata: Metadata = {
  title: "Rosie Beauty",
  description: "Get all your wig needs and accessories ",
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
    <SanityLive />
        <div className="flex flex-col min-h-screen">
          <Header />
        <main className="flex-1">          
          {children}
         
        </main>
        <Footer />
         <LiveChat />
        </div>
        <BottomNavigation className="block lg:hidden" />
   </ClerkProvider>
  );
}
