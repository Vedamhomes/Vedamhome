"use client";

import Image from "next/image";
import React from "react";
import "react-responsive-3d-carousel/dist/styles.css";
import { Carousel } from "react-responsive-3d-carousel";
import { carouselItem } from "@/app/images";

const itemData = carouselItem.map((item) => {
  const {key, value, altText} = item;
  return (
    <Image height={400} width={400} title={key} src={value} alt={altText} />
  )
})

const ProjectSlider = () => {
  return (
    <div className="grid grid-cols-1 gap-4 border-2 ">
      <Carousel
        items={itemData}
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
