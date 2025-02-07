"use client"

import { useState } from "react";
import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
// import useWindowInfo from "../Coponents/Hooks/useWindowInfo";
import Banner from "../Coponents/Banner/banner";
import Footer from "../Coponents/footer/footer";
// import VideoPlayer from 'react-video-js-player';
import Link from "next/link";

const Home = () => {
  const [isBannerOpn, setIsBannerOpn] = useState(true);
  // const { width, height, orientation } = useWindowInfo();
  // console.log(width, height, orientation);
  return (
    <div className="bg-[#f5f0e9]">
      <Navbar />
      <div className=" animation mx-auto sm:px-4 flex items-center box-border sm:mt-6">
        <video
          // height={height}
          // width={width}
          playsInline
          muted
          loop
          autoPlay
          src="first_video.mp4"
          preload="metadata"
          className="w-full max-w-6xl max-h-2xl rounded-lg shadow-lg ml-auto mr-auto lg:h-full"
        />
      </div>
      {/* <div className=" animation mx-auto sm:px-4 flex items-center box-border sm:mt-6">
        <video
          height={height}
          width={width}
          playsInline
          muted
          loop
          autoPlay
          src="first_video.mp4"
          preload="metadata"
          className="ml-auto mr-auto"
        />
      </div> */}
      {/* <div className=" animation mx-auto sm:px-4 flex items-center box-border sm:mt-6">
        <video
          height={height}
          width={width}
          playsInline
          muted
          loop
          autoPlay
          src="first_video.mp4"
          preload="metadata"
          className="ml-auto mr-auto"
        />
      </div> */}
      <div className="md:px-16 md:py-12 py-8 pl-0">
        <div className="mx-auto flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between px-4">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="1.jpeg"
              alt="img"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Text Section */}
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
            <Link href="/Building" >
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
          {/* Text Section */}
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
            <Link href="/Amenities" >
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
          {/* Text Section */}
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
            <Link href="/Gallery" >
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

      {/* <div className="md:px-16 md:py-12 sm:py-4 pl-0 sm:px-4 lg:px-8 xl:px-16  mx-auto container flex justify-center items-center py-2 animation">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div className="w-[80%] sm:w-auto flex flex-col justify-start items-start">
            <div>
              <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                Renovate your home
              </p>
            </div>
            <div className="mt-4 lg:w-4/5 xl:w-4/5">
              <p className="text-base leading-6 text-gray-600">
                Our exquisite sports amenities offer luxury and functionality,
                with state-of-the-art facilities for fitness, swimming, tennis,
                golf, and more, providing a refined sporting experience.
              </p>
            </div>
            <div className="mt-8 mb-8 md:mt-16 w-full">
              <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                <Link
                  href="/Gallery"
                  className="text-xl font-medium leading-5"
                  
                >
                  See More
                </Link>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66663 16H25.3333"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6667L25.3333 16"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
            <div>
              <img
                className="hidden lg:block"
                src="https://i.ibb.co/61TfVVW/olena-sergienko-gx-KL334b-UK4-unsplash-1.png"
                alt="sofa"
              />
              <img
                className="w-80 sm:w-auto lg:hidden"
                src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png"
                alt="sofa"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
              <div>
                <img
                  className="hidden lg:block"
                  src="https://i.ibb.co/1MY5P3y/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-1.png"
                  alt="chairs"
                />
                <img
                  className="w-80 sm:w-auto lg:hidden"
                  src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png"
                  alt="chairs"
                />
              </div>
              <div>
                <img
                  className="hidden lg:block"
                  src="https://i.ibb.co/9N7ZX2C/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png"
                  alt="chairs"
                />
                <img
                  className="w-80 sm:w-auto lg:hidden"
                  src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png"
                  alt="chairs"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
      {/* <Overlay isBannerOpn={isBannerOpn} setIsBannerOpn={setIsBannerOpn} /> */}
      <Banner isBannerOpn={isBannerOpn} setIsBannerOpn={setIsBannerOpn} />
    </div>
  );
};

export default Home;
