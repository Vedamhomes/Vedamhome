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
    <div className="grid grid-cols-1 gap-4 border-2 ">
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
