"use client";

import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import "./style.css";
import Image from "next/image";
import topView from "@/images/amenities-1.jpg";
import builingImage from "@/images/7.jpeg";
import builing2Image from "@/images/1.jpeg";
import Slider from "../Coponents/Slider/slider";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import { useState } from "react";
import ProgressiveScroll from "../Coponents/ProgressiveScroll";

const Amenities = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);
  return (
    <div className="bg-[#fff9f0]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />
      {/* <div className="sm:h-[calc(100vh-80px)] h-[50vh] w-auto relative mx-auto sm:px-4 flex items-center box-border mt-6 buildingAnimation">
        <Image
          src="https://maribellevue.wpengine.com/wp-content/uploads/Dreamlife_Mira2_Cam3_Exterior_CityView_Final-1__1.jpg"
          alt="img"
          fill
          className="ml-auto mr-auto object-cover"
        />
      </div> */}

      <div className="my-4 mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="flex mt-4 items-center flex-col px-4 text-center">
          <p
            className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[1.8] w-[90%] max-w-[1100px] font-extralight text-[28px] 
            word-spacing-[-0.22em]"
          >
            Vedam Homes is proud to be part of the vibrant Central Park Flower
            Valley community. Our residents benefit from a thoughtfully curated
            selection of world-class amenities, enhancing their lifestyle with
            unparalleled comfort and convenience.
          </p>
        </div>
      </div>

      <ProgressiveScroll />

      {/* 
      <Content9
        id="Content9_0"
        key="Content9_0"
        dataSource={Content90DataSource}
        isMobile={false}
      /> */}

      {/* <Slider /> */}

      <Footer />
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
    </div>
  );
};

export default Amenities;
