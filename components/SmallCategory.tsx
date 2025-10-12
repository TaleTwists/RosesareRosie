import React from 'react';
import Image from "next/image";
import Link from "next/link";
import skincares from '@/public/skincares.png'
import dryer from '@/public/dryer.svg'
import wigs from '@/public/wigs.png'
import lotion from '@/public/lotion.svg'

export default function SmallCategory() {
  const categories = [
    { name: 'Hairs', image: wigs, slug: 'hairs' },  
    { name: 'Appliances', image: dryer, slug: 'appliances' },
    { name: 'Products', image: lotion, slug: 'products' },    
    { name: 'Skincare', image: skincares, slug: 'skincare' },
  ];

  return (
    <div className="bg-white rounded-xl p-4 max-w-md mx-auto md:hidden block mt-1.5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-800 scroll-m-20 text-xl font-semibold tracking-tight">Category</h2>
        <Link href="/shop" className="text-sm text-gray-400 hover:text-gray-600">
          See all
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            href={`/category/${category.slug}`}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
              <Image 
                src={category.image} 
                alt={category.name}
                width={50}
                height={50}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-600 text-center">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}