"use client";

import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import "./style.css";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import { useState } from "react";
import ProgressiveScroll from "../Coponents/ProgressiveScroll";
import Amenityslider from "../Coponents/amenitySlider/amenitySlider";

const Amenities = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);
  return (
    <div className="bg-[#fff9f0]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      <div className="my-4 mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
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

      {/* <ProgressiveScroll /> */}

      <Amenityslider />

      <Footer />
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
    </div>
  );
};

export default Amenities;
