"use client";

import Image from "next/image";
import React, { useState } from "react";
import "react-responsive-3d-carousel/dist/styles.css";
import { Carousel } from "react-responsive-3d-carousel";
import { carouselItem } from "@/app/images";
import { motion } from "framer-motion";

const itemData = carouselItem.map((item) => {
  const {key, value, altText} = item;
  return (
    <Image loading="lazy"  height={500} width={500} title={key} src={value} alt={altText} />
  )
})

const ProjectSlider = () => {
  const [visibleIndex, setVisibleIndex] = useState(2);
  const handleSlideChange = (currentIndex) => {
    // console.log(currentIndex);
    setVisibleIndex(currentIndex)
  };
  // console.log('visibleIndex', visibleIndex)
  return (
    <Carousel
      items={carouselItem.map((item, index) => (
        <motion.div
          key={index}
          initial={{ filter : "blur(0)" }}
          animate={{ filter: index === visibleIndex ? "blur(0)" : "blur(2px)" }}// Middle image full opacity
          transition={{ duration: 0.3 }}
          className="relative w-full h-80"
        >
          <Image loading="lazy" 
            src={item.value}
            alt={item.altText}
            title={item.key} 
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      ))}
      startIndex={0}
      autoPlay
      focusOnSelect
      infiniteLoop
      swipeable
      sizeDuration={1000}
      onChange={handleSlideChange}
    />
  );
};

export default ProjectSlider;
