'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Instagram = () => {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center bg-[#6a7282] overflow-hidden">
      <div className="w-full py-12">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="w-full"
        >
          <SwiperSlide className="bg-white bg-center bg-cover w-80">
            <div className="relative w-full p-10 pt-[90px] text-gray-500">
              <h3 className="text-xl font-semibold mb-4">Slide 1</h3>
              <p>Your content here</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="bg-white bg-center bg-cover w-80">
            <div className="relative w-full p-10 pt-[90px] text-gray-500">
              <h3 className="text-xl font-semibold mb-4">Slide 2</h3>
              <p>Your content here</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="bg-white bg-center bg-cover w-80">
            <div className="relative w-full p-10 pt-[90px] text-gray-500">
              <h3 className="text-xl font-semibold mb-4">Slide 3</h3>
              <p>Your content here</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="bg-white bg-center bg-cover w-80">
            <div className="relative w-full p-10 pt-[90px] text-gray-500">
              <h3 className="text-xl font-semibold mb-4">Slide 4</h3>
              <p>Your content here</p>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="bg-white bg-center bg-cover w-80">
            <div className="relative w-full p-10 pt-[90px] text-gray-500">
              <h3 className="text-xl font-semibold mb-4">Slide 5</h3>
              <p>Your content here</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Instagram;