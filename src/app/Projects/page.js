"use client";

import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import Link from "next/link";
import Image from "next/image";
import firstImage from "@/images/1.jpeg";
import bannerImage from "@/images/banner-2.jpeg";
import firstRoomImage from "@/images/5.jpeg";
import kitchenRoomImage from "@/images/3.jpeg";
import secondRoomImage from "@/images/10.jpeg";
import flowerBookImage from "@/images/11.jpg";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import { useState } from "react";

const Projects = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);
  return (
    <div className="bg-[#F5F0E9]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />
      <div className="relative flex flex-col justify-center h-calc(100vh - 1.2*30vh) sm:h-[calc(100vh-20vh)] md:h-[calc(100vh-10vh)] ">
        <Image
          // className="h-calc(100vh - 1.2*30vh) sm:h-[calc(100vh-20vh)] md:h-[calc(100vh-10vh)] "
          src="https://maribellevue.wpengine.com/wp-content/uploads/Dreamlife_Mira2_Cam2_Exterior_Lake_Final-1.jpg"
          alt="building Projects"
          fill
        />
      </div>

      <div className="py-12 buildingAnimationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="flex items-center flex-col px-4 text-center">
            <p className=" font-sans text-2xl md:text-3xl font-semibold text-[#7a6e66] uppercase tracking-wide mb-4">
              Floor Plans
            </p>
            <p
              className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[1.8] w-[90%] max-w-[1100px] font-extralight text-[28px] 
            word-spacing-[-0.22em]"
            >
              Central Park Flower Valley offers a limited collection of luxury
              floors and penthouses in the heart of Gurgaon. Experience
              unparalleled luxury and convenience in this prestigious address.
            </p>
            <button className="bg-[#7a6e66] text-white py-3 px-6 rounded-lg hover:bg-[#6a5b4d] transition duration-300 mt-4">
              {/* Explore Vedam Homes luxury */}
              <Link href="/Enquire">Explore</Link>
            </button>
          </div>
          {/* <div className="px-4 lg:px-0">
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <p tabIndex={0} className="focus:outline-none uppercase text-sm text-center text-gray-500 leading-none">in few easy steps</p>
              <h1 tabIndex={0} className="focus:outline-none text-4xl lg:text-4xl pt-4 font-extrabold text-center leading-tight text-gray-800 lg:w-7/12 md:w-9/12 xl:w-5/12">Create Beautiful Landing Pages &amp; Web Apps in a Jiffy</h1>
            </div>
          </div> */}
        </div>
      </div>

      <div className="sm:h-[calc(100vh-80px)] h-[50vh] w-auto relative mx-auto sm:px-4 flex items-center box-border mt-6 buildingAnimation">
        <Image
          src="https://maribellevue.wpengine.com/wp-content/uploads/Dreamlife_Mira2_Cam3_Exterior_CityView_Final-1__1.jpg"
          alt="img"
          fill
          className="ml-auto mr-auto object-cover"
        />
      </div>

      <div className="mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 buildingAnimationRight">
        <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
          <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Central Park Flower Valley
            {/* : Vedam Remarkable Growth */}
          </h1>
          <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
            <h2 className="text-gray-600">
              These meticulously designed residences feature spacious layouts,
              premium finishes, and breathtaking views, creating an oasis of
              tranquility amidst the bustling city. As we continue to expand our
              brand equity, the future looks exceptionally bright.
            </h2>
          </div>
        </div>
        <div className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 buildingAnimationRight md:h-[85vh]">
          <Image src={bannerImage} alt="Vedam homes Banner Image" fill />
        </div>
      </div>

      <div className="lg:px-20 md:px-6 px-4 md:py-12 sm:py-8 py-4 buildingAnimationLeft">
        <div className="lg:flex items-center justify-between">
          <div className="lg:w-7/12 lg:mt-0 mt-8">
            <div className="w-full h-full bg-red-200">
              <Image
                src={firstRoomImage}
                alt="apartment design"
                className="w-full object-cover aspect-[3.2] sm:block hidden"
              />
              {/* <Image src="https://i.ibb.co/ZVPGjGJ/pexels-max-vakhtbovych-6782351-1.png" alt="apartment design" className="sm:hidden block w-full" /> */}
            </div>
            <div className="w-full relative grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
              <Image
                src={kitchenRoomImage}
                height={100}
                // fill
                className="w-full object-cover"
                alt="kitchen"
              />
              <Image
                src={secondRoomImage}
                alt="sitting room"
                height={100}
                // fill
                className="w-full mt-2 mb:4 sm:mb-0 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:w-1/3 mt-4">
            <h1 className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800">
              Indoor<span className="font-normal italic"> Interiors</span>
            </h1>
            <p className="text-base leading-6 mt-4 text-center text-gray-600">
              Get inspired by our curated selection of luxiwood interiors. We
              hope get inspired to have luxiwood interior yourself.We can
              provide you with detailed information about pricing, availability,
              and floor plans.
            </p>
            <button
              aria-label="view catalogue"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline"
            >
              <Link href="/Projects">View Catalogue</Link>
              <svg
                className="ml-2 mt-1"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.33325 4H10.6666"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 6.66667L10.6667 4"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 1.33398L10.6667 4.00065"
                  stroke="#1F2937"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="py-4 sm:py:14 md:py:20 2xl:px-0 lg:px-12 sm:px-4 2xl:mx-auto buildingAnimationRight"
        // style={{ height: 1000 }}
      >
        <div className="md:flex items-center justify-between w-full sm:px-8 px-4">
          <div className="flex flex-col items-center xl:w-1/3 md:w-1/2 w-full">
            <h1 className="focus:outline-none md:w-60 font-bold md:text-6xl text-4xl leading-tight text-gray-800">
              Think<span className="font-normal italic"> out loud </span>
            </h1>
            <p
              role="contentinfo"
              className="focus:outline-none leading-6 mt-4 sm:mt-8 text-gray-600 2xl:pr-24 xl:pr-0 sm:pr-12 text-center"
            >
              Trusted by discerning high-net-worth individuals, Navraj has
              earned a reputation for excellence. Our client testimonials are a
              reflection of the trust and confidence placed in us to create
              exceptional living spaces.
            </p>
            <div className="mt-10">
              <Link href="/Amenities">
                <button className="flex items-center md:p-3 p-1 focus:outline-none text-xl font-medium leading-5 text-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                  Discover more
                  <svg
                    className="ml-8"
                    width={45}
                    height={40}
                    viewBox="0 0 45 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.2113 33.7887C11.0161 33.9839 11.0157 34.3009 11.2157 34.4911C13.956 37.0978 17.3821 38.8765 21.0982 39.6157C24.9778 40.3874 28.9991 39.9913 32.6537 38.4776C36.3082 36.9638 39.4318 34.4004 41.6294 31.1114C43.827 27.8224 45 23.9556 45 20C45 16.0444 43.827 12.1776 41.6294 8.8886C39.4318 5.59961 36.3082 3.03616 32.6537 1.52241C28.9991 0.00865715 24.9778 -0.38741 21.0982 0.384294C17.3821 1.12346 13.956 2.90221 11.2157 5.50886C11.0157 5.69911 11.0161 6.01609 11.2113 6.21127C11.4065 6.40645 11.7225 6.4059 11.9227 6.21592C14.523 3.74892 17.7711 2.06527 21.2932 1.36468C24.9789 0.631541 28.7993 1.00781 32.2711 2.44591C35.743 3.88401 38.7105 6.31934 40.7983 9.44394C42.8861 12.5685 44.0004 16.2421 44.0004 20C44.0004 23.7579 42.8861 27.4315 40.7983 30.5561C38.7105 33.6807 35.743 36.116 32.2711 37.5541C28.7993 38.9922 24.9789 39.3685 21.2932 38.6353C17.7711 37.9347 14.523 36.2511 11.9227 33.7841C11.7225 33.5941 11.4065 33.5935 11.2113 33.7887Z"
                      fill="#1F2937"
                    />
                    <path
                      d="M1 20H29"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 28L29 20"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12L29 20"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
          <div className="xl:w-4/6 md:w-1/2 w-full h-[450px] relative xl:pl-48">
            {/* <div className="w-full h-full relative"> */}
            <Image
              src={flowerBookImage}
              alt="Purple flowers on a book"
              fill
              className="mt-8 sm:mt-0 object-contain"
            />
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="dark:bg-gray-900 buildingAnimation">
        <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-20 py-8 2xl:mx-auto 2xl:">
          <div className="relative lg:w-1/2">
            <div className="hidden dark:bg-gray-800 bg-gray-100 w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
              <div className="w-full lg:w-auto lg:-mr-32 relative">
                <Image
                  src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png"
                  alt="unsplash with decent chairs"
                  height={600}
                  width={600}
                  className="relative z-1 lg:pl-20 px-6 py-14"
                />
              </div>
            </div>
            <div className="absolute top-0 dark:bg-gray-800 bg-gray-100 md:h-96 w-full hidden md:block lg:hidden"></div>
            <div className="w-full h-full lg:hidden">
              <Image
                src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png"
                alt="unsplash"
                width={600}
                height={600}
                className="relative lg:pl-20 md:px-6 py-5 md:py-14"
              />
            </div>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
            <div>
              <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">
                Modern Interior Decor
              </h1>
              <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">
                Get inspired by our curated selection of luxiwood interiors. We
                hope get inspired to have luxiwood interior yourself. You’ll
                find tips here where you can buy a lot of cool
                furniture,decorations, plants, etc.
              </p>
              <Link href="/Enquire">
                <button className="dark:bg-white dark:hover:bg-gray-400 dark:hover:text-gray-100 dark:text-gray-800 sm:w-auto w-full mt-8 text-base justify-between focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none hover:bg-gray-700 font-medium leading-none text-white py-4 px-8 bg-gray-800 flex items-center">
                  Explore
                  <div className="ml-2 mt-0.5">
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33325 8H12.6666"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10.6667L12.6667 8"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 5.33301L12.6667 7.99967"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <UserInputModal isOverlayOpn={isOverlayOpn} setIsOverlayOpn={setIsOverlayOpn} />
    </div>
  );
};

export default Projects;
