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

const Amenities = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);
  return (
    <div className="bg-[#f5f0e9]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn}/>

      <div className="mx-auto pb -4 sm:py-8 sm:px-6 md:px-16 amenityAnimation">
        <div className="flex flex-col lg:flex-row justify-center items-center 2xl:space-x-40 xl:space-x-34 lg:space-x-12 space-y-8 lg:space-y-0">
          <div className="aspect-[1.4/1] relative">
            <Image
              src={topView}
              alt="Vedam homes top view"
              height={800}
              width={1000}
              className="aspect-[1.4/1]"
            />
          </div>
          <div className="md:px-4 lg:px-0 flex flex-col justify-start items-start lg:w-2/3 xl:w-3/3 2xl:w-3/3 px-8 sm:px-0">
            <div className="xl:mt-4 mt-2">
              <p className="text-4xl font-semibold leading-9 text-[#7a6e66]">
                SKYCLUB AND SKYDECK
              </p>
            </div>
            <div className="xl:mt-6 mt-4">
              <p className="tracking-wide text-justify font-normal leading-6 text-[#7a6e66]">
                At Vedam Homes, we believe that luxury living extends beyond the
                walls of your home. That's why we offer a curated selection of
                world-class amenities designed to enhance your lifestyle and
                provide unparalleled comfort and convenience. Our amenities are
                designed to cater to every aspect of your life, from wellness
                and recreation to community and entertainment.We look forward to
                welcoming you to Central Park Flower Valley.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto py-2 sm:py-6 px-8 sm:px-8 md:px-16 amenityAnimationLeft">
        <div className="flex flex-col-reverse sm:flex-col lg:flex-row justify-center items-center 2xl:space-x-40 xl:space-x-34 lg:space-x-24 space-y-8 lg:space-y-0">
          <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/3 xl:w-3/3 2xl:w-3/3">
            <div className="xl:mt-4 mt-2">
              <p className="text-4xl font-semibold leading-9 text-[#7a6e66]">
                12 PEAK Fitness Center
              </p>
            </div>
            <div className="xl:mt-6 mt-4">
              <p className="tracking-wide text-justify font-normal leading-6 text-[#7a6e66]">
                Build up to balanced wellness in the fully equipped Peak Fitness
                Center and Harmony Yoga Studio. Here, workouts overlook a
                symphony of nature: wide open sky meeting mist-veiled mountains,
                dotted and surrounded by a diversity of spruce and maple trees.
              </p>
            </div>
          </div>
          <div>
            <Image
              src={builingImage}
              height={800}
              width={1000}
              className="aspect-[1.2/1] mb-4"
              alt="girl"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto container py-16 px-6 md:px-16 animationRight">
        <div className="flex flex-col lg:flex-row justify-center items-center 2xl:space-x-40 xl:space-x-34 lg:space-x-24 space-y-8 lg:space-y-0">
          <div>
            <Image
              src={builing2Image}
              height={800}
              width={1000}
              alt="girl"
              className="aspect-[1.2/1]"
            />
          </div>
          <div className="md:px-12 lg:px-0 flex flex-col justify-start items-start lg:w-2/3 xl:w-3/3 2xl:w-3/3">
            <div className="xl:mt-4 mt-2">
              <p className="text-4xl font-semibold leading-9 text-[#7a6e66]">
                SKYCLUB AND SKYDECK
              </p>
            </div>
            <div className="xl:mt-6 mt-4">
              <p className="tracking-wide text-justify font-normal leading-6 text-[#7a6e66]">
                You don’t have to live in a VEDAM Penthouse to enjoy the
                limitless view from the top. All residents have open-air and
                indoor access to the stunning panorama of Bellevue and beyond
                from the 20th floor rooftop. The SkyClub at VEDAM, a private
                parlor with full kitchen, fireplace and double-height ceilings
                opens out onto the landscaped SkyDeck at VEDAM with Flame Grill
                Stations—the first of its kind in downtown Bellevue. Also
                available to residents are the reservable Altitude Dining Room
                and Summit Room.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Slider />

      <Footer />
      <UserInputModal isOverlayOpn={isOverlayOpn} setIsOverlayOpn={setIsOverlayOpn} />
    </div>
  );
};

export default Amenities;
