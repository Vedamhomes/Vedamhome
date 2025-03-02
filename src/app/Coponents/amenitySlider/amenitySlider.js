"use client";
import Image from "next/image";
import { amenitySwiperData } from "../Content9";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "./amenitySlider.css";
import { useRef } from "react";

const Amenityslider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="slider-container my-8 pt-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full my-6">
        <h2 className="font-sans text-[26px] md:text-[32px] tracking-[0.1em] md:tracking-[0.15em] leading-[1.75rem] font-medium text-[#634730] uppercase mb-8">
          Experience the global lifestyle
        </h2>

        <div className="flex items-center space-x-6">
          {/* Left Arrow */}
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            className="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-110"
          >
            <span className="w-6 h-6 mr-[-24px] border-l border-b border-[#634730] rotate-45 transition-all duration-300 ease-in-out"></span>
            <span className="relative w-12 h-[1px] bg-[#634730] transition-all duration-300 ease-in-out"></span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            className="flex items-center space-x-2 transition-all duration-300 ease-in-out hover:scale-110"
          >
            <span className="w-12 h-[1px] mr-[-24px] bg-[#634730] transition-all duration-300 ease-in-out"></span>
            <span className="w-6 h-6 border-r border-b border-[#634730] rotate-[-45deg] transition-all duration-300 ease-in-out"></span>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        navigation={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={false}
        breakpoints={{
          340: { slidesPerView: 1, slidesPerGroup: 1 },
          640: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
      >
        {amenitySwiperData.map((img, index) => {
          return (
          <SwiperSlide key={index+1} className="slide flex flex-col items-center">
            <Image
              height={240}
              width={400}
              src={img.image}
              alt={img.altText}
              className="w-full max-w-[500px] h-[240px] object-cover brightness-115 saturate-100  rounded-lg"
            />
            <div className="font-sans text-left tracking-[0.10em] leading-[3.1rem] uppercase font-thin slide-text text-[#7a6e66] text-[14px] mt-2">
              {img.title}
            </div>
          </SwiperSlide>
        )})}
      </Swiper>
    </div>
  );
};

export default Amenityslider;
