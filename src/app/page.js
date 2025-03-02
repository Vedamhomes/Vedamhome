"use client";

import { useMemo, useState } from "react";
import "./style.css";
import Navbar from "./Coponents/navbar/navbar";
import Banner from "./Coponents/Banner/banner";
import Footer from "./Coponents/footer/footer";
import Image from "next/image";
import Link from "next/link";
import buildingImage1 from "@/images/Image.jpg";
import home_page_4 from "@/images/home_page_4.jpeg";
import UserInputModal from "./Coponents/UserInputModal/userInputModal";
import { ToastContainer } from "react-toastify";
import ProjectSlider from "./Coponents/ProjectSlider/projectSlider";

const Home = () => {
  const [isBannerOpn, setIsBannerOpn] = useState(true);
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);

  const mainFirstText = useMemo(
    () => (
      <div className="py-14 mx-auto px-6 flex flex-col md:flex-col text-center justify-center">
        <h2 className="font-sans text-[26px] tracking-[0.13em] leading-[1.55rem] font-medium text-[#634730] uppercase mb-6">
          Introduction to Ultra Luxury Homes
        </h2>
        <div className="flex items-center flex-col px-4 text-center">
          <p
            className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.18em] 
            leading-[1.75] w-[90%] max-w-[1100px] font-extralight text-[21px] sm:text-[22px] 
            word-spacing-[-0.18em]"
          >
            Experience the epitome of luxury living with Vedam Homes in Central
            Park Flower Valley, Gurugram. Our homes are designed to offer
            unmatched comfort and elegance, setting a new standard in luxury
            real estate.
          </p>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="bg-[#fff9f0]" suppressHydrationWarning={true}>
      <ToastContainer />
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      <div className="animation px-3 py-4 sm:px-6  sm:py-5 flex items-center justify-center box-border mt-1 w-full h-[65vh] sm:h-[88vh]">
        <video
          playsInline
          muted
          loop
          autoPlay
          src="first_video.mp4"
          preload="metadata"
          className="w-full h-full object-cover shadow-lg border-solid border-[1px] border-[#634730]"
        />
      </div>

      {mainFirstText}

      <ProjectSlider />

      <div className="md:pr-16 md:py-12 py-8 pl-0 animationLeft">
        <div className="mx-auto flex flex-col md:flex-row items-stretch justify-between px-6 gap-8">
          {/* Text Section */}
          <div className="md:w-1/2 md:px-12 text-center md:text-left flex flex-col justify-center flex-1">
            <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] font-medium uppercase mb-4">
              What set Us apart
            </h2>
            <p className="font-sans text-[23px] text-[#634730] tracking-[0.10em] leading-[3.1rem] font-light mb-8">
              Choosing Vedam Homes means investing in unparalleled luxury and
              comfort. Our homes blend exquisite aesthetics with practical
              living, ensuring every aspect caters to your needs. We prioritize
              excellence in every detail, from stunning architectural features
              to thoughtfully curated interiors. Your home will be a sanctuary
              that reflects your taste and enhances your life.
            </p>
            <Link href="/WhatSetUsApart">
              <button className="bg-[#987218] text-white py-3 uppercase px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 flex-1 flex items-center">
            <Image
              src={home_page_4}
              alt="Amenities"
              width={500}
              height={300}
              className="w-full h-full object-inherit rounded-lg min-h-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="md:py-12 py-8 pl-0">
        <div className="mx-auto flex flex-col md:flex-row-reverse gap-4 items-stretch px-6">
          {/* Text Section */}
          <div className="md:w-1/2 md:px-6 text-center md:text-left flex flex-col justify-center flex-1">
            <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
              Projects
            </h2>
            <p className="font-sans text-[23px] text-[#634730] tracking-[0.10em] lg:leading-[2.8rem] xl:leading-[3.2rem] font-light mb-4">
              Vedam Homes crafts exceptional living spaces that embodies
              sophistication, comfort, and prestige. From thoughtfully designed
              layouts to premium finishes, the striking aesthetic is further
              enhanced by lush landscapes and meticulously crafted interiors
              offers an unparalleled lifestyle creating an inviting atmosphere
              that exudes elegance and style.
            </p>
            <Link href="/Projects">
              <button className="bg-[#987218] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition uppercase duration-300">
                Explore
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 md:pl-6 flex-1 flex items-center">
            <Image
              src={buildingImage1}
              alt="Building"
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-lg min-h-[300px] max-h-[75vh]"
            />
          </div>
        </div>
      </div>

      <div className="md:pr-16 md:py-12 py-8 pl-0 animationLeft">
        <div className="mx-auto flex flex-col md:flex-row items-stretch justify-between px-6 gap-8">
          {/* Text Section */}
          <div className="md:w-1/2 md:px-12 text-center md:text-left flex flex-col justify-center flex-1">
            <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] font-medium uppercase mb-4">
              Amenities
            </h2>
            <p className="font-sans text-[23px] text-[#634730] tracking-[0.10em] leading-[3.1rem] font-light mb-8">
              We understand that the location of your home is just as important
              as its design. That's why we carefully choose prime locations for
              our projects, offering residents convenient access to essential
              amenities, vibrant communities, and a thriving urban landscape.
            </p>
            <Link href="/Amenities">
              <button className="bg-[#987218] text-white py-3 uppercase px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 flex-1 flex items-center">
            <Image
              src={home_page_4}
              alt="Amenities"
              width={500}
              height={300}
              className="w-full h-full object-inherit rounded-lg min-h-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="py-16 buildingAnimationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-col items-center justify-center">
          <h2 className="font-sans text-[28px] md:text-3xl tracking-[0.15em] leading-[1.55rem] font-medium text-[#634730] uppercase mb-4">
            The Choice of the Discerning
          </h2>
          <div className="flex items-center flex-col px-4 text-center">
            <p
              className="font-sans text-center text-[#634730] tracking-[0.13em] 
            leading-[3rem] max-w-[1100px] font-thin text-[28px]
            word-spacing-[-0.22em]"
            >
              Explore our portfolio of exceptional projects and discover the
              Vedam Homes difference. Experience the epitome of luxury living,
              where every detail is meticulously crafted and every moment is
              cherished.
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <Banner
        isBannerOpn={isBannerOpn}
        setIsBannerOpn={setIsBannerOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
    </div>
  );
};

export default Home;
