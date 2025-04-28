"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFlip, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DRAWING_DINNING_1 from '@/images/DRAWING_DINNING_1.jpg';
import DRAWING_DINNING_2 from '@/images/DRAWING_DINNING_2.jpg';
import FRONT_BEDROOM_3 from '@/images/FRONT_BEDROOM_3.jpg';
import FRONT_BEDROOM_4 from '@/images/FRONT_BEDROOM_4.jpg';
import FRONT_BEDROOM_5 from '@/images/FRONT_BEDROOM_5.jpg';
import KITCHEN_6 from '@/images/KITCHEN_6.jpg';
import KITCHEN_7 from '@/images/KITCHEN_7.jpg';
import KITCHEN_8 from '@/images/KITCHEN_8.jpg';

const Slider = () => {
  return (
    <div className="px-6 flex justify-center animationRight">
      {/* <div className="2xl:px-20 px-6 py-12 w-full lg:w-9/10"> */}
        <Swiper
          slidesPerView={'auto'}
          navigation
          pagination={{
            clickable: true,
          }}
          rewind={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          grabCursor={true}
          modules={[Autoplay, Navigation, Pagination]}
        //   className="h-96 w-full rounded-lg"
        className="relative h-[26vh] sm:h-[68vh] md:h-[77vh] lg:h[85vh]"
        >
          <SwiperSlide key={0}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={DRAWING_DINNING_1}
                alt='Building 1'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={1}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={DRAWING_DINNING_2}
                alt='Building 2'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={2}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={FRONT_BEDROOM_3}
                alt='Building 2'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={3}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={FRONT_BEDROOM_4}
                alt='Building 2'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={4}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={FRONT_BEDROOM_5}
                alt='Building 2'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={5}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={KITCHEN_6}
                alt='Building 2'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={6}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={KITCHEN_7}
                alt='Building 2'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={7}>
            <div className="flex h-full w-full items-center justify-center">
              <Image loading="lazy" 
                src={KITCHEN_8}
                alt='Building 2'
                // height={1000}
                // width={500}
                className="block h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    // </div>
    // </div>
  );
}

export default Slider;