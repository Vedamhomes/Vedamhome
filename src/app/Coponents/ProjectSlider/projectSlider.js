"use client";

import Image from "next/image";
import React from "react";
import "react-responsive-3d-carousel/dist/styles.css";
import { Carousel } from "react-responsive-3d-carousel";
import firstRoomImage from "@/images/5.jpeg";
import kitchenRoomImage from "@/images/3.jpeg";
import image_1 from "@/images/FRONT_BEDROOM_5.jpg";
import image_2 from "@/images/SITTING_LOUNGE_VIEW.jpg";
import image_3 from "@/images/therooomnewbnne.jpeg";
import image_4 from "@/images/IMG-20250116-WA0005.jpg";
import image_5 from "@/images/FRONT_BEDROOM_3.jpg";
import image_6 from "@/images/IMG-20250116-WA0005.jpg";



const items = [
  <Image height={400} width={400} src={firstRoomImage} alt="Image 1" />,
  <Image height={400} width={400} src={kitchenRoomImage} alt="Image 1" />,
  <Image height={400} width={400} src={image_1} alt="Image 1" />,
  <Image height={400} width={400} src={image_3} alt="Image 1" />,
  <Image height={400} width={400} src={image_4} alt="Image 1" />,
  <Image height={400} width={400} src={image_5} alt="Image 1" />,
  <Image height={400} width={400} src={image_2} alt="Image 1" />,
  <Image height={400} width={400} src={image_6} alt="Image 1" />,
];

const ProjectSlider = () => {
  return (
    <div className="grid grid-cols-1 gap-4 ">
      {/* <div className="text-color pt-9 lg:pt-12 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
        <h1 className="focus:outline-none md:w-120 font-normal md:text-4xl text-3xl leading-tight text-[#7a6e66]">
            Building
        </h1>
        <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
          <h2 className="text-[#7a6e66] text-sm text-justify">
            Our reputation is our most valuable asset. We've earned the trust of
            our clients through years of transparent dealings, consistent
            delivery of exceptional quality, and an unwavering commitment to
            fulfilling our promises. We believe in open communication, honest
            practices, and building relationships based on mutual respect and
            integrity. This steadfast dedication to credibility permeates every
            aspect of our business, from the initial consultation to the final
            handover and beyond. With Vedam Homes, you can be confident that you
            are partnering with a company that values integrity above all else.
          </h2>
        </div>
      </div> */}
      <Carousel
        items={items}
        startIndex={0}
        autoPlay
        focusOnSelect
        infiniteLoop
        swipeable
        sizeDuration={1000}
        onChange={(currentIndex) => console.log(currentIndex)}
      />
    </div>
  );
};

export default ProjectSlider;
