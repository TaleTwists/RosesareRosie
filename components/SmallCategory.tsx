import React from 'react';
import Image from "next/image";
import skincares from '@/public/skincares.png'
import dryer from '@/public/dryer.svg'
import skincare from '@/public/skincare.svg'
import lotion from '@/public/lotion.svg'

export default function SmallCategory() {
  const categories = [
    { name: 'Wigs', image: lotion},  // Use the imported variable, not a string
    { name: 'Products',  image: skincare },
    { name: 'Tools', image: dryer },
    { name: 'Skincare',  image: skincares },
  ];

  return (
    <div className="bg-white rounded-xl p-4 max-w-md mx-auto md:hidden block mt-1.5">
      <div className="flex justify-between items-center mb-4">
        <h2 className=" text-gray-800 scroll-m-20 text-xl font-semibold tracking-tight">Category</h2>
        <a href="#" className="text-xs text-gray-400 hover:text-gray-600">
          See All
        </a>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <div key={category.name} className="flex flex-col items-center cursor-pointer">
            <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
              <Image 
                src={category.image} 
                alt={category.name}
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600 text-center">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}