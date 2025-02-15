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
import UserInputModal from "./Coponents/UserInputModal/userInputModal";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [isBannerOpn, setIsBannerOpn] = useState(false);
  const [isOverlayOpn, setIsOverlayOpn] = useState(true);

  return (
    <div className="bg-[#f5f0e9]" suppressHydrationWarning={true}>
      <ToastContainer />
      <Navbar />
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
      <div className="md:px-16 md:py-12 py-8 pl-0">
        <div className="mx-auto flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between px-4">
          <div className="w-full h-auto md:w-1/2 mb-6 md:mb-0">
            <Image
              src={buildingImage}
              alt="Image"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:px-14 sm:px-12 px-4 py-4 text-center md:text-left animationLeft">
            <p className="text-2xl md:text-3xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              Welcome to Vedam Homes
            </p>
            <p className="tracking-[0.25em] font-normal uppercase text-[#7a6e66] md:text-lg leading-7 mb-8">
              Vedam Homes crafts exceptional living spaces that embody
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
      </div>

      <div className="container animationRight mx-auto md:px-8 px-4 flex items-center box-border mt-6">
        <Image
          src={amenitiesImage}
          alt="Vedam homes amenities image"
          className="ml-auto mr-auto"
        />
      </div>

      <div className="md:px-16 md:py-12 py-8 pl-0 animationLeft">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          {/* Text Section */}
          <div className="md:w-1/2 md:px-12 text-center md:text-left mb-8 sm:mb-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              Amenities
            </h2>
            <p className="text-base md:text-xl leading-7 text-gray-600 mb-8">
              We understand that the location of your home is just as important
              as its design. That's why we carefully choose prime locations for
              our projects, offering residents convenient access to essential
              amenities, vibrant communities, and a thriving urban landscape.
            </p>
            <Link href="/Amenities">
              <button className="bg-[#7a6e66] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
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

      <div className="container mx-auto px-4 flex items-center box-border mt-6 animationRight">
        <Image
          src={gardenImage}
          alt="Image"
          width={500} // Specify width (needed for optimization)
          height={300} // Specify height (needed for optimization)
          className="ml-auto mr-auto"
        />
      </div>

      <div className="py-12 animationLeft">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              The Choice of the Discerning
            </h2>
            <p className="text-base md:text-xl leading-7 text-gray-600 mb-8">
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
      </div>

      <div className="container mx-auto py-4 mb-4 flex box-border mt-6 animationRight">
        <Image src={mainRoom} alt="Image" className="ml-auto mr-auto" />
      </div>

      <Footer />
      <Banner isBannerOpn={isBannerOpn} setIsBannerOpn={setIsBannerOpn} setIsOverlayOpn={setIsOverlayOpn} />
      <UserInputModal isOverlayOpn={isOverlayOpn} setIsOverlayOpn={setIsOverlayOpn} />
    </div>
  );
};

export default Home;
