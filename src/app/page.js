"use client";

import { useState } from "react";
import "./style.css";
import Navbar from "./Coponents/navbar/navbar";
// import useWindowInfo from "./Coponents/Hooks/useWindowInfo";
import Banner from "./Coponents/Banner/banner";
import Footer from "./Coponents/footer/footer";
// import VideoPlayer from 'react-video-js-player';
import Image from "next/image";
import Link from "next/link";
import buildingImage from "@/images/1.jpeg";
import amenitiesImage from "@/images/4.jpeg";
import amenitiesImage1 from "@/images/3.jpeg";
import gardenImage from "@/images/12.jpg";
import mainRoom from "@/images/5.jpeg";
import AquaFrontTowers from "@/images/AquaFrontTowers.png";
import UserInputModal from "./Coponents/UserInputModal/userInputModal";
import { ToastContainer } from "react-toastify";
import Slider from "./Coponents/Slider/slider";
import ProjectSlider from "./Coponents/ProjectSlider/projectSlider";

const Home = () => {
  const [isBannerOpn, setIsBannerOpn] = useState(true);
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);

  return (
    <div className="bg-[#f5f0e9]" suppressHydrationWarning={true}>
      <ToastContainer />
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      <div className=" animation mx-auto sm:px-4 flex items-center box-border sm:mt-6">
        <video
          playsInline
          muted
          loop
          autoPlay
          src="first_video.mp4"
          preload="metadata"
          className="w-full max-w-6xl max-h-2xl rounded-lg shadow-lg ml-auto mr-auto lg:h-full"
        />
      </div>

      <div className="md:py-12 py-8 pl-0 animationLeft">
        <div className="mx-auto flex flex-col md:flex-row-reverse items-center justify-between px-6">
          {/* Text Section */}
          <div className="md:w-1/2 md:px-12 text-center md:text-left mb-8 sm:mb-2">
            <h2 className="font-[Hues] text-[21px] text-[#634730] tracking-[0.11em] leading-[1.75rem] text-2xl md:text-3xl font-semibold uppercase mb-4">
              Building
            </h2>
            <p className="font-sans text-[23px] text-[#634730] tracking-[0.11em] leading-[1.75rem] text-base font-light mb-8">
              Vedam Homes crafts exceptional living spaces that embody
              sophistication, comfort, and prestige. Our meticulously designed
              residences offer an unparalleled lifestyle in prime locations,
              setting a new standard for luxury living.
            </p>
            <Link href="/Projects">
              <button className="bg-[#987218] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 mb-6 md:mb-0 md:pl-12">
            <Image
              src={buildingImage}
              alt="Image"
              width={500} // Specify width (needed for optimization)
              height={300} // Specify height (needed for optimization)
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* <div className="md:px-16 md:py-12 py-8 pl-0">
        <div className="mx-auto flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between">
          <div className="w-full h-auto md:w-1/3 mb-6 md:mb-0">
            <Image
              src={buildingImage}
              alt="Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          // {/* Text Section *
          <div className="md:w-1/2 sm:pl-12 px-4 md:px-0 py-4 text-center md:text-left animationLeft">
            <p className="text-xl font-normal text-[#7a6e66] flex justify-center uppercase tracking-wide mb-4">
              Building
            </p>
            //{/* <p className="tracking-[0.25em] text-2xl font-normal uppercase text-[#7a6e66] leading-7 mb-8"> *
              <p className="font-[Hues] uppercase text-center text-[#7a6e66] tracking-[0.2em] leading-[1.8] max-w-[1200px] font-normal text-[24px] -word-spacing-[0.15em]">Vedam Homes crafts exceptional living spaces that embody
              sophistication, comfort, and prestige. Our meticulously designed
              residences offer an unparalleled lifestyle in prime locations,
              setting a new standard for luxury living.
            </p>
            <Link href="/Projects">
              <button className="bg-[#7a6e66] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="container animationRight mx-auto md:px-8 px-4 flex items-center box-border my-6">
        <Image
          src={amenitiesImage}
          alt="Vedam homes amenities image"
          className="ml-auto mr-auto"
        />
      </div>

      <div className="md:pr-16 md:py-12 py-8 pl-0 animationLeft">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Text Section */}
          <div className="md:w-1/2 md:px-12 text-center md:text-left mb-8 sm:mb-2">
            <h2 className="font-[Hues] text-[21px] text-[#634730] tracking-[0.11em] leading-[1.75rem] text-2xl md:text-3xl font-semibold uppercase mb-4">
              Amenities
            </h2>
            <p className="font-sans text-[23px] text-[#634730] tracking-[0.11em] leading-[1.75rem] text-base font-light mb-8">
              We understand that the location of your home is just as important
              as its design. That's why we carefully choose prime locations for
              our projects, offering residents convenient access to essential
              amenities, vibrant communities, and a thriving urban landscape.
            </p>
            <Link href="/Amenities">
              <button className="bg-[#987218] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src={amenitiesImage1}
              alt="Image"
              width={500} // Specify width (needed for optimization)
              height={300} // Specify height (needed for optimization)
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container animationRight mx-auto md:px-8 px-4 flex items-center box-border my-6">
        <Image
          src={AquaFrontTowers}
          alt="Vedam homes amenities image"
          className="ml-auto mr-auto"
        />
      </div>

      <div className="py-16 buildingAnimationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-col items-center justify-center">
          <h2 className="font-[Hues] text-[28px] md:text-3xl tracking-[0.11em] leading-[1.75rem] font-semibold text-[#634730] uppercase mb-4">
            The Choice of the Discerning
          </h2>
          <div className="flex items-center flex-col px-4 text-center">
            <p
              className="font-[Hues] uppercase text-center text-[#634730] tracking-[0.2em] 
            leading-[1.8] max-w-[1100px] font-thin text-[28px]
            word-spacing-[-0.22em]"
            >
              Explore our portfolio of exceptional projects and discover the
              Vedam Homes difference. Experience the epitome of luxury living,
              where every detail is meticulously crafted and every moment is
              cherished.
            </p>
          </div>
          <Link href="/Projects">
            <button className="bg-[#987218] text-white md:mt-6 py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
              Explore
            </button>
          </Link>
        </div>
      </div>

      {/* <div className="py-12 animationLeft">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              The Choice of the Discerning
            </h2>
            <p className="tracking-[0.25em] font-normal text-base text-[#7a6e66] leading-7 mb-8">
              Explore our portfolio of exceptional projects and discover the
              Vedam Homes difference. Experience the epitome of luxury living,
              where every detail is meticulously crafted and every moment is
              cherished.
            </p>
            <Link href="/Projects">
              <button className="bg-[#7a6e66] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div> */}

      <ProjectSlider />

      {/* <Slider /> */}

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
