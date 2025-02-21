"use client";

import { useState } from "react";
import "./style.css";
import Navbar from "./Coponents/navbar/navbar";
import Banner from "./Coponents/Banner/banner";
import Footer from "./Coponents/footer/footer";
import Image from "next/image";
import Link from "next/link";
import buildingImage from "@/images/1.jpeg";
import amenitiesImage from "@/images/4.jpeg";
import amenitiesImage1 from "@/images/3.jpeg";
import AquaFrontTowers from "@/images/AquaFrontTowers.png";
import UserInputModal from "./Coponents/UserInputModal/userInputModal";
import { ToastContainer } from "react-toastify";
import ProjectSlider from "./Coponents/ProjectSlider/projectSlider";

const Home = () => {
  const [isBannerOpn, setIsBannerOpn] = useState(true);
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);

  return (
    <div className="bg-[#fff9f0]" suppressHydrationWarning={true}>
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

      <div className="md:py-12 py-8 pl-0">
        <div className="mx-auto flex flex-col md:flex-row-reverse gap-4 items-start justify-between px-6">
          {/* Text Section */}
          <div className="md:w-1/2 md:px-6 text-center md:text-left self-start">
            <h2 className="font-sans text-[21px] text-[#634730] tracking-[0.2em] leading-[1.75rem] text-2xl md:text-3xl font-medium uppercase mb-4">
              Building
            </h2>
            <p className="font-sans text-[23px] text-[#634730] uppercase tracking-[0.12em] leading-[1.75rem] font-light mb-4">
              Vedam Homes crafts exceptional living spaces that embody
              sophistication, comfort, and prestige. From thoughtfully designed
              layouts to premium finishes, our meticulously crafted residences
              offer an unparalleled lifestyle in prime locations, setting a new
              standard for refined luxury living.{" "}
            </p>
            <Link href="/Projects">
              <button className="bg-[#987218] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-6 self-start">
            <Image
              src={buildingImage}
              alt="Image"
              width={500} // Needed for optimization
              height={300} // Needed for optimization
              className="w-full max-w-full h-auto object-cover rounded-lg aspect-[5/4]"
            />
          </div>
        </div>
      </div>

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
            <h2 className="font-sans text-[21px] text-[#634730] tracking-[0.2em] leading-[1.75rem] text-2xl md:text-3xl font-medium uppercase mb-4">
              Amenities
            </h2>
            <p className="font-sans text-[23px] text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase font-light mb-8">
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
              className="w-full h-auto object-cover rounded-lg aspect-[5/4]"
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
          <h2 className="font-sans text-[28px] md:text-3xl tracking-[0.2em] leading-[1.75rem] font-medium text-[#634730] uppercase mb-4">
            The Choice of the Discerning
          </h2>
          <div className="flex items-center flex-col px-4 text-center">
            <p
              className="font-sans uppercase text-center text-[#634730] tracking-[0.2em] 
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

      <ProjectSlider />

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
