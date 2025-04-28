"use client";

import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import { Image } from 'antd';
import { useState } from "react";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import spaciousLiving from "@/images/LuxuryandComfort.jpg";
import LuxuryandComfort from "@/images/Projects/Lobby/I 103 DINNING  VIEW 1.jpg";
import Investment from "@/images/Investment.jpg";
import location_1 from "@/images/location_1.jpg";
import security from "@/images/security.jpg";
import uncompromising_ethic from "@/images/uncompromising_ethic.jpg";
import drawing1 from "@/images/Projects/Drawing/D 175 DRAWING AND DINNING VIEW 1 OPT 1.jpg";

const WhatSetUsApart = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);
  return (
    <div className="bg-[#fff9f0]">
      <div className="relative z-20">
        <Navbar setIsOverlayOpn={setIsOverlayOpn} />
      </div>

      <div className="fixed top-0 left-0 w-full h-full">
        <Image loading="lazy" 
          src={drawing1.src}
          alt="Vedam homes amenities image"
          className="w-full h-full object-cover  "
        />

        <div className="absolute top-[30%] sm:top-[32%] md:top-[35%] left-0 sm:left-[5%] md:left-[16%] lg:left-[24%] xl:left-[28%] text_span  text-center font-sans text-[75px] text-black tracking-[0.15em] leading-[1.55rem] font-medium uppercase">
          <span>Luxury Redefined</span>
        </div>
      </div>

      <div className="bg-[#fff9f0] relative bounce_bottom top-[80dvh]">
        <div className=" py-12 buildingAnimationLeft">
          <div className=" mx-auto px-6 flex flex-col items-center justify-center">
            <div> 
              <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
              Why Vedam Homes ?
              </h2>
            </div>
            <div className="flex items-center flex-col px-4 text-center">
              <p
                className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[1.8] w-[90%] max-w-[1100px] font-extralight text-[20px] sm:text-[22px] 
            word-spacing-[-0.22em]"
              >
                Choosing Vedam Homes means investing in unparalleled luxury and
                comfort. Our homes blend exquisite aesthetics with practical
                living, ensuring every aspect caters to your needs. We
                prioritize excellence in every detail, from stunning
                architectural features to thoughtfully curated interiors. Your
                home will be a sanctuary that reflects your taste and enhances
                your life.
              </p>
            </div>
          </div>
        </div>

        <div className="text-black p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div className="rounded-2xl overflow-hidden">
              <Image loading="lazy" 
                src={LuxuryandComfort.src}
                alt="Luxury home at sunset"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Text Content Section */}
            <div className=" rounded-2xl text-center ">
              <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                Exquisite Design
              </h2>
              <p className="font-sans text-[22px] text-[#634730] tracking-[0.10em] leading-[2rem] font-light mb-8">
                Experience architectural artistry where every detail evokes
                wonder and inspiration. Our homes are masterpieces designed to
                elevate living.
              </p>
              <div>
                <h3 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                  Functional Spaces
                </h3>
                <p className="font-sans text-[22px] text-[#634730] tracking-[0.10em] leading-[2rem] font-light">
                  Experience the seamless flow and effortless functionality of
                  thoughtfully designed living spaces. Vedam Homes are both
                  beautiful and practical. Our layouts optimize space, enhance
                  natural light, and create harmony for everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-12 py-8 pl-0">
          <div className="mx-auto flex flex-col md:flex-row gap-4 items-stretch px-6">
            <div className="md:w-1/2 md:px-6 text-center md:text-left flex flex-col justify-center flex-1">
              <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                Spacious Living Areas
              </h2>
              <p className="font-sans text-[23px] text-[#634730] tracking-[0.10em] leading-[2.1rem] font-light mb-4">
                <div className="mb-8">
                  Our homes feature expansive living areas that enhance comfort
                  and style, ensuring a luxurious lifestyle. With high ceilings
                  and large windows, these spaces create an open, airy
                  atmosphere that welcomes natural light throughout the day.
                </div>
                <div>
                  The spacious design not only promotes relaxation but
                  also facilitates entertaining guests, making it 
                  perfect for both intimate gatherings and larger celebrations.
                </div>
              </p>
            </div>

            <div className="md:w-1/2 md:pl-6 flex-1 flex items-center">
              <Image loading="lazy" 
                src={spaciousLiving.src}
                alt="Building"
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg min-h-[300px] aspect-[4/3] max-h-[75vh]"
              />
            </div>
          </div>
        </div>

        <div className="md:py-12 py-8 pl-0">
          <div className="mx-auto flex flex-col md:flex-row-reverse gap-4 items-stretch px-6">
            <div className="md:w-1/2 md:px-6 text-center md:text-left flex flex-col justify-center flex-1">
              <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                Unmatched Location
              </h2>
              <p className="font-sans text-[23px] text-[#634730] tracking-[0.10em] leading-[3.2rem] font-light mb-4">
                Vedam Homes is located at Central Park Flower Valley, South of
                Gurugram, providing easy access to top educational institutions,
                shopping centers, and dining experiences, ensuring the perfect
                blend of tranquility and convenience.
              </p>
            </div>

            <div className="md:w-1/2 md:pl-6 flex-1 flex items-center">
              <Image loading="lazy" 
                src={location_1.src}
                alt="Building"
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg min-h-[300px] aspect-[4/3] max-h-[75vh]"
              />
            </div>
          </div>
        </div>

        <div className="md:py-12 py-8 pl-0">
          <div className="mx-auto flex flex-col md:flex-row gap-4 items-stretch px-6">
            <div className="md:w-1/2 md:px-6 text-center md:text-left flex flex-col justify-center flex-1">
              <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                Security and Privacy
              </h2>
              <p className="font-sans text-[23px] text-[#634730] tracking-[0.10em] leading-[2rem] font-light mb-4">
                <div className="mb-8">
                  At Vedam Homes, we prioritize your safety and peace of mind.
                  Our Ultra Luxury Homes in Central Park Flower Valley are
                  fortified with state-of-the-art security measures.
                </div>
                <div>
                  With 24/7 security personnel and advanced surveillance
                  systems, residents can enjoy a worry-free living experience.
                  Additionally, the gated community provides a serene
                  environment, ensuring that your home is not just a space but a
                  sanctuary.
                </div>
              </p>
            </div>

            <div className="md:w-1/2 md:pl-6 flex-1 flex items-center">
              <Image loading="lazy" 
                src={security.src}
                alt="Building"
                width={500}
                height={300}
                className="w-full h-full object-fill rounded-lg min-h-[300px] max-h-[75vh]"
              />
            </div>
          </div>
        </div>

        <div className="text-black p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Image Section */}
            <div className="rounded-2xl overflow-hidden">
              <Image loading="lazy" 
                src={Investment.src}
                alt="Luxury home at sunset"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Text Content Section */}
            <div className="py-6 rounded-2xl text-center ">
              <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                Investment Potential
              </h2>
              <p className="font-sans text-[22px] text-[#634730] tracking-[0.10em] leading-[2rem] font-light mb-4">
                Vedam Homes represent more than just luxurious living they are a
                strategic investment opportunity. With a proven history of
                appreciation and strong demand, these properties ensure a
                profitable future for homeowners and investors alike.
              </p>
              <div className="mt-8">
                <h3 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                  Smart Investment
                </h3>
                <p className="font-sans text-[22px] text-[#634730] tracking-[0.10em] leading-[2rem] font-light">
                  Investing in Vedam Homes not only secures a beautiful
                  residence but also positions you in a thriving market. The
                  potential for growth in property value is significant, making
                  it an ideal choice for discerning buyers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-12 py-8 pl-0">
          <div className="mx-auto flex flex-col md:flex-row gap-4 items-stretch px-6">
            <div className="md:w-1/2 md:px-6 text-center md:text-left flex flex-col justify-center flex-1">
              <h2 className="font-sans text-[24px] text-[#634730] tracking-[0.15em] leading-[1.55rem] text-2xl font-medium uppercase mb-4">
                Commitment to Excellence
              </h2>
              <p className="font-sans text-[23px] text-[#634730] tracking-[0.10em] leading-[2.1rem] font-light mb-4">
                <div className="py-4">
                  Our team of experts is dedicated to providing exceptional
                  service throughout the home buying process. We focus on
                  understanding your unique needs and preferences to guide you
                  toward the perfect luxury home.
                </div>
                <div className="pt-2">
                  From initial consultation to final handover, we ensure a
                  seamless and enjoyable experience for our clients. Our
                  commitment to excellence guarantees that every step of your
                  journey is smooth and satisfying.
                </div>
              </p>
            </div>

            <div className="md:w-1/2 md:pl-6 flex-1 flex items-center">
              <Image loading="lazy" 
                src={uncompromising_ethic.src}
                alt="Building"
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-lg min-h-[300px] aspect-[4/3] max-h-[75vh]"
              />
            </div>
          </div>
        </div>

        <div className="my-4 font-sans flex flex-row justify-center px-10">
          <button
            type="submit"
            onClick={() => setIsOverlayOpn(true)}
            className="font-sans flex justify-center gap-2 items-center uppercase tracking-[0.2em] border-[2] sm:mx-20 border-[#6a5b4d] border-solid hover:scale-105 shadow-xl text-[17px] md:text-lg bg-[#6a5b4d] hover:bg-[#fff9f0] isolation-auto before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-left-full before:hover:left-0 text-white hover:text-[#634730] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 group"
          >
            Explore Our Bespoke residences
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 bg-white group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
        </div>
        <Footer />
      </div>

      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
    </div>
  );
};

export default WhatSetUsApart;
