"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import kitchenRoomImage from "@/images/3.jpeg";
import secondRoomImage from "@/images/10.jpeg";
import flowerBookImage from "@/images/11.jpg";

import bedRoom_1_image from "@/images/Projects/Bed Rooms/FRONT_BEDROOM _VIEW_3.jpg";
import bedRoom_2_image from "@/images/Projects/Bed Rooms/I 103 REAR LEFT BEDROOM VIEW 3.jpg";
import bedRoom_3_image from "@/images/Projects/Bed Rooms/REAR_RIGHT_BEDROOM_VIEW_2.jpg";

import drawing_1_image from "@/images/Projects/Drawing/D 175 DRAWING AND DINNING VIEW 1 OPT 1.jpg";
import drawing_2_image from "@/images/Projects/Drawing/I 103 DRAWING  VIEW 1.jpg";
import drawing_3_image from "@/images/Projects/Drawing/drawing_3.jpg";

import elevation_1_image from "@/images/Projects/Elevation/3D FINAL VIEW.jpg";
import elevation_2_image from "@/images/Projects/Elevation/FINAL 3D VIEW.jpg";
import elevation_3_image from "@/images/Projects/Elevation/FINAL 3D VIEW.jpg";

import kitchen_1_image from "@/images/Projects/Kitchen/D 175 KITCHEN VIEW 1.jpg";
import kitchen_2_image from "@/images/Projects/Kitchen/D 175 KITCHEN VIEW 3.jpg";
import kitchen_3_image from "@/images/Projects/Kitchen/kitchen_3.jpg";

import lobby_1_image from "@/images/Projects/Lobby/D 175 DINNING VIEW 1 OPT 2.jpg";
import lobby_2_image from "@/images/Projects/Lobby/I 103 DINNING  VIEW 1.jpg";
import lobby_3_image from "@/images/Projects/Lobby/lobby.jpg";

import stilt_1_image from "@/images/Projects/Stilt/D 175 STILT VIEW 1.jpg";
import stilt_2_image from "@/images/Projects/Stilt/D-42 STILT VIEW 1.jpg";
import stilt_3_image from "@/images/Projects/Stilt/D-42 STILT VIEW 1222.jpg";

import washroom_1_image from "@/images/Projects/Washroom/D-175 CENTRAL PARK TOILET REAR RIGHT  VIEW 1.jpg";
import washroom_2_image from "@/images/Projects/Washroom/I-103 REAR RIGHT TOILET VIEW 1.jpg";
import washroom_3_image from "@/images/Projects/Washroom/I-103 REAR RIGHT TOILET VIEW 2.jpg";

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const FeatureList = ({ title, description, images }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.8 0"], // Tracks between 20% and 80% visibility
  });

  useEffect(() => {
    // Get the scroll percentage
    scrollYProgress.on("change", (latest) => {
      setInView(latest >= 0.25);
    });

    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress]);

  return (
    <motion.div
      ref={ref}
      whileInView="onscreen"
      initial={{ visibility: "hidden" }}
      animate={{
        opacity: isInView ? 1 : 0.5,
        y: isInView ? 20 : 100,
        scale: isInView ? 1 : 0.9,
        rotateX: isInView ? 0 : -15,
        visibility: isInView ? "visible" : "hidden",
      }}
      viewport={{ amount: 0.8 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      variants={cardVariants}
      className="relative max-w-5xl w-[100%] my-20 mx-auto bg-[#fff9f0] shadow-project-custom rounded-xl p-6 pb-12 flex flex-col md:flex-row items-start"
    >
      {/* Text Section */}
      <div className="md:w-1/3 flex flex-col justify-start">
        <h2 className="font-sans text-[21px] text-[#634730] tracking-[0.2em] leading-[1.75rem] font-bold uppercase">
          {title}
        </h2>
        <p className="font-sans text-[16px] text-[#634730] tracking-[0.2em] leading-[1.75rem] text-base font-light mb-8">
          {description}
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-4 md:mt-0 w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="h-[250px] w-full flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.5 }} // Increases size on hover
              transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
              className="rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt="Feature image"
                width={200}
                height={250}
                className="rounded-lg object-contain max-h-[250px] w-auto"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FeatureCard = () => {
  const sections = [
    {
      title: "Elevation",
      description:
        "Majestic views and architectural artistry define Del Mar Villa in Dundee, Oregon.",
      images: [elevation_1_image, elevation_2_image, elevation_3_image],
    },
    {
      title: "Stilt",
      description:
        "Featured in the 11th edition, this stilt residence showcases innovative engineering and harmonious integration with its environment.",
      images: [stilt_1_image, stilt_2_image, stilt_3_image],
    },
    {
      title: "Lobby",
      description:
        "The grand lobby welcomes residents with refined elegance. Exquisite materials and curated artwork create an atmosphere of timeless luxury.",
      images: [lobby_1_image, lobby_2_image, lobby_3_image],
    },
    {
      title: "Drawing",
      description:
        "Architectural drawings reveal the meticulous planning and artistic vision behind this exceptional residence.",
      images: [drawing_1_image, drawing_2_image, drawing_3_image],
    },
    {
      title: "Bedrooms",
      description:
        "Exquisitely bedrooms offer comfort and tranquility. Plush furnishings, and thoughtful layouts create a haven of relaxation and rejuvenation.",
      images: [bedRoom_1_image, bedRoom_2_image, bedRoom_3_image],
    },
    {
      title: "Kitchen",
      description:
        "A culinary masterpiece, this gourmet kitchen combines state-of-the-art appliances with exquisite design.",
      images: [kitchen_1_image, kitchen_2_image, kitchen_3_image],
    },
    {
      title: "Washroom",
      description:
        "Lavishly appointed washrooms atached for relaxation and rejuvenation. Premium fixtures and elegant finishes offer a luxurious escape.",
      images: [washroom_1_image, washroom_2_image, washroom_3_image],
    },
  ];

  return (
    <div className="space-y-20 my-14 py-10">
      {sections.map((section, index) => (
        <FeatureList key={index} {...section} />
      ))}
    </div>
  );
};

export default FeatureCard;
