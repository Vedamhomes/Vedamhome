"use client";

import { useState } from "react";
import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Banner from "../Coponents/Banner/banner";
import Footer from "../Coponents/footer/footer";
import Link from "next/link";

const Home = () => {
  const [isBannerOpn, setIsBannerOpn] = useState(true);
  return (
    <div className="bg-[#fff9f0]">
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
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="1.jpeg"
              alt="img"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          <div className="md:w-1/2 md:px-14 sm:px-12 px-4 py-4 text-center md:text-left animationLeft">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              Building
            </h2>
            <p className="tracking-[0.25em] font-normal uppercase text-[#7a6e66] md:text-xl leading-7 mb-8">
              Each property in our portfolio is a testament to luxury and
              sophistication. Our exclusive properties offer unparalleled
              elegance and the finest amenities. The views from inside each
              residence make a spectacular focal point and backdrop—day or
              night, sun, clouds, or stars.
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
        <img src="4.jpeg" alt="img" className="ml-auto mr-auto" />
      </div>

      <div className="md:px-16 md:py-12 py-8 pl-0 animationLeft">
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          <div className="md:w-1/2 md:px-12 text-center md:text-left mb-8 sm:mb-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              Amenities
            </h2>
            <p className="text-base md:text-xl leading-7 text-gray-600 mb-8">
              Our plans include creating luxurious residential communities on
              approximately 4 million square feet of the land. The remaining
              area will be transformed into a dynamic commercial and retail hub,
              strategically situated in the most desirable locations within
              Haryana and Delhi NCR.
            </p>
            <Link href="/Amenities">
              <button className="bg-[#7a6e66] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300">
                Explore
              </button>
            </Link>
          </div>

          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="3.jpeg"
              alt="img"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex items-center box-border mt-6 animationRight">
        <img src="12.jpg" alt="img" className="ml-auto mr-auto" />
      </div>

      <div className="py-12 animationLeft">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              The Choice of the Discerning
            </h2>
            <p className="text-base md:text-xl leading-7 text-gray-600 mb-8">
              Trusted by discerning high-net-worth individuals, Veadm homes has
              earned a reputation for excellence. Our client testimonials are a
              reflection of the trust and confidence placed in us to create
              exceptional living spaces.
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
        <img src="5.jpeg" alt="img" className="ml-auto mr-auto" />
      </div>

      <Footer />
      <Banner isBannerOpn={isBannerOpn} setIsBannerOpn={setIsBannerOpn} />
    </div>
  );
};

export default Home;
