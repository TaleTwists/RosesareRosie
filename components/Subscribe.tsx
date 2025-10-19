import React from "react";
import { Mail } from "lucide-react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14 bg-gray-100">
      <p className="text-center text-xs">Our Newsletter</p>
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe to our Newsletter to Get
        <br />
        <span className="text-emerald-900 pl-1">
          Updates on Our Latest Collection
        </span>
      </h1>
      <p className="md:text-base text-gray-500/80 pt-3 pb-4.5 text-sm">
        Get upto 20% off on your first order and free delivery if you're within
        Uyo.
      </p>
     <div className="flex items-center max-w-lg w-full md:h-14 h-12 mx-auto">
  <div className="relative w-full h-full subscribe">
    <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-emerald-900 rounded-full p-2">
      <Mail className="text-white w-4 h-4" />
    </div>
    <input
      className="border border-gray-500/30 rounded-md h-full border-r-0 outline-none w-full rounded-r-none pl-14 pr-3 text-gray-500"
      type="text"
      placeholder="Enter email address"
    />
  </div>
  <button className="md:px-12 px-5 h-full text-white bg-orange-600 rounded-md rounded-l-none whitespace-nowrap">
    Subscribe
  </button>
</div>
    </div>
  );
};

export default Subscribe;
