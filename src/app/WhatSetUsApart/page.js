"use client";

import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import Image from "next/image";
import syneregtic_team_image from "@/images/syneregtic_team.jpg";
import unwavering_cred_image from "@/images/unwavering_cred.jpg";
import deep_belief_image from "@/images/deep_belief.jpg";
import uncompromising_ethic_image from "@/images/uncompromising_ethic.jpg";
import neflovaimga from "@/images/neflovaimga.jpg";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import { useState } from "react";

const WhatSetUsApart = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);
  return (
    <div className="bg-[#fff9f0]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      <div className="py-12 buildingAnimationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          <div className="flex items-center flex-col px-4 text-center">
            <p
              className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[1.8] w-[90%] max-w-[1100px] font-extralight text-[20px] sm:text-[28px] 
            word-spacing-[-0.22em]"
            >
              Vedam Homes distinguishes itself not just by the structures we
              build, but by the enduring relationships we cultivate. Our
              foundation is built upon five core pillars:
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto px-6 lg:mx-auto relative mt-4 md:px-12 md:flex items-start gap-4 setUsApartAnimationRight">
        {/* Image Section */}
        <Image
          src={unwavering_cred_image}
          alt="Sample"
          height={300}
          width={300}
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
        />

        {/* Text Section */}
        <div className="text-color flex justify-center flex-col w-full md:w-1/2 pt-0 lg:pt-0 xl:pt-0 md:pl-8 md:pr-12 pl-0 pr-0 md:text-left">
          <h2 className="font-sans mt-4 sm:mt-0 text-[20px] font-light text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase">
            Unwavering Credibility
          </h2>
          <p className="font-sans mt-4 sm:mt-6 text-[17px] md:text-[19px] text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase font-light">
            TRUST IS THE CORNERSTONE OF OUR BUSINESS. WE EARN IT THROUGH
            TRANSPARENT COMMUNICATION, CONSISTENTLY DELIVERING EXCEPTIONAL
            QUALITY, AND ALWAYS HONORING OUR COMMITMENTS. FROM THE INITIAL
            CONSULTATION TO THE FINAL HANDOVER AND BEYOND, WE PRIORITIZE HONESTY
            AND MUTUAL RESPECT IN EVERY INTERACTION. AT VEDAM HOMES, YOU PARTNER
            WITH A COMPANY WHERE INTEGRITY ISN'T JUST A WORD, IT'S OUR GUIDING
            PRINCIPLE.
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 lg:px-16 md:px-6 px-6 md:py-12 sm:py-8 py-4 setUsApartAnimationLeft">
        {/* Text Section */}
        <div className="text-color flex justify-center flex-col w-full md:w-1/2 self-start md:pr-12 pl-0 pr-0 md:text-left">
          <h2 className="font-sans mt-4 sm:mt-0 text-[20px] font-light text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase">
            COLLABORATIVE EXPERTISE
          </h2>
          <p className="mt-4 sm:mt-6 font-sans text-[17px] md:text-[19px] text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase font-light">
            CREATING AN EXCEPTIONAL HOME REQUIRES A TEAM OF EXPERTS WORKING IN
            PERFECT SYNERGY. OUR ARCHITECTS, DESIGNERS, ENGINEERS, AND
            CRAFTSPEOPLE COLLABORATE SEAMLESSLY, ENSURING EVERY DETAIL IS
            METICULOUSLY CONSIDERED AND EVERY CHALLENGE EXPERTLY ADDRESSED. THIS
            COLLABORATIVE APPROACH RESULTS IN HOMES THAT ARE MASTERPIECES OF
            DESIGN AND CRAFTSMANSHIP, DRIVEN BY OUR TEAM'S SHARED PASSION FOR
            EXCELLENCE. FOR EXAMPLE, OUR ARCHITECTS WORK CLOSELY WITH CLIENTS TO
            UNDERSTAND THEIR VISION, WHILE OUR ENGINEERS ENSURE STRUCTURAL
            SOUNDNESS AND SUSTAINABILITY.
          </p>
        </div>

        {/* Image Section */}
        <Image
          src={syneregtic_team_image}
          height={300}
          width={300}
          alt="Sample"
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
        />
      </div>

      <div className="py-4 px-4 sm:py-14 md:py-20 2xl:px-0 lg:px-12 sm:px-4 2xl:mx-auto setUsApartAnimationRight">
        <div className="md:flex gap-8 items-start justify-between w-full">
          {/* Image Section */}
          <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48 self-start">
            <Image
              src={neflovaimga}
              height={300}
              width={300}
              alt="Purple flowers on a book"
              className="w-full"
            />
          </div>

          {/* Text Section */}
          <div className="text-color flex justify-center flex-col w-full md:w-1/2 md:pl-8 pl-0 pr-0 md:text-left self-start">
            <h2 className="font-sans mt-4 sm:mt-0 text-[20px] font-light text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase">
              PERSONALIZED OWNERSHIP
            </h2>
            <p
              role="contentinfo"
              className="font-sans text-[17px] md:text-[19px] text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase font-light mt-4 sm:mt-6 2xl:pr-24 xl:pr-0 sm:pr-12"
            >
              WE DON'T JUST BUILD HOUSES; WE CRAFT HOMES. THIS SENSE OF
              OWNERSHIP PERMEATES OUR ENTIRE TEAM. EACH MEMBER, FROM CONCEPT TO
              FINISHING TOUCH, TAKES PRIDE IN THEIR CONTRIBUTION, TREATING EVERY
              PROJECT AS THEIR OWN. THIS DEDICATION TRANSLATES INTO UNPARALLELED
              CARE AND ATTENTION TO DETAIL, ENSURING EVERY VEDAM HOME IS CRAFTED
              WITH PRECISION AND PASSION. IMAGINE THE METICULOUS HAND-FINISHING
              OF CUSTOM CABINETRY OR THE CAREFUL SELECTION OF NATURAL STONE FOR
              YOUR COUNTERTOPS – THIS IS THE LEVEL OF OWNERSHIP WE BRING TO
              EVERY DETAIL.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-start gap-8 setUsApartAnimationRight">
        {/* Text Section */}
        <div className="text-color flex justify-center flex-col w-full md:w-1/2 pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 md:text-left self-start">
          <h2 className="font-sans mt-4 sm:mt-0 text-[20px] font-light text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase">
            PASSIONATE VISION
          </h2>
          <p className="font-sans mt-4 sm:mt-6 text-[17px] md:text-[19px] text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase font-light">
            WE BELIEVE A HOME SHOULD BE MORE THAN JUST A PLACE TO LIVE; IT
            SHOULD BE AN EXPRESSION OF YOUR UNIQUE STYLE, A PERSONAL SANCTUARY,
            AND A LEGACY FOR GENERATIONS. THIS BELIEF FUELS OUR PURSUIT OF
            INNOVATION, OUR SELECTION OF THE FINEST MATERIALS, AND OUR
            ENGAGEMENT OF THE MOST SKILLED CRAFTSPEOPLE. IT'S THIS PASSION THAT
            ALLOWS US TO CREATE TRULY EXCEPTIONAL HOMES. WHETHER IT'S
            INCORPORATING THE LATEST SMART HOME TECHNOLOGY OR SOURCING RARE AND
            BEAUTIFUL HARDWOODS, OUR PASSION DRIVES US TO EXCEED EXPECTATIONS.
          </p>
        </div>

        {/* Image Section */}
        <Image
          src={deep_belief_image}
          alt="Sample"
          height={300}
          width={300}
          className="w-full md:w-2/4 object-fill setUsApartAnimationRight md:h-[85vh] self-start"
        />
      </div>

      <div className="mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-start gap-8 setUsApartAnimationRight">
        {/* Image Section */}
        <Image
          src={uncompromising_ethic_image}
          alt="Sample"
          height={300}
          width={300}
          className="w-full md:w-2/4 object-fill setUsApartAnimationRight md:h-[85vh] self-start"
        />

        {/* Text Section */}
        <div className="text-color flex justify-center flex-col w-full md:w-1/2 pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 md:text-left self-start">
          <h2 className="font-sans mt-4 sm:mt-0 text-[20px] font-light text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase">
            ETHICAL FOUNDATION
          </h2>
          <p className="font-sans mt-4 sm:mt-6 text-[17px] md:text-[19px] text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase font-light">
            ETHICAL PRACTICES ARE NON-NEGOTIABLE AT VEDAM HOMES. WE UPHOLD THE
            HIGHEST STANDARDS OF PROFESSIONALISM, INTEGRITY, AND TRANSPARENCY IN
            ALL OUR DEALINGS. WE BUILD LONG-TERM RELATIONSHIPS WITH CLIENTS,
            PARTNERS, AND COMMUNITIES BASED ON TRUST AND MUTUAL RESPECT. THIS
            COMMITMENT TO ETHICAL CONDUCT IS FUNDAMENTAL TO OUR REPUTATION AND
            GUIDES EVERY DECISION WE MAKE. WITH VEDAM HOMES, YOU CAN BE
            CONFIDENT YOU'RE PARTNERING WITH A COMPANY THAT VALUES HONESTY AND
            FAIRNESS ABOVE ALL ELSE. WE BELIEVE IN OPEN COMMUNICATION EVERY STEP
            OF THE WAY, ENSURING YOU'RE FULLY INFORMED AND CONFIDENT IN THE
            PROCESS.
          </p>
        </div>
      </div>

      <div className="mt-10 font-sans flex flex-row justify-center px-10">
        {/* <button onClick={() => setIsOverlayOpn(true)} className="button-57 mx-4 md:msx-0 text-[16px] p-2 md:p-4 md:text-[20px] font-light bg-[#6a5b4d] hover:bg-[#fff9f0] text-[#ffff] hover:text-[#634730] tracking-[0.2em] leading-[1.75rem] uppercase transform transition-transform duration-300 hover:scale-105" role="button">
          <span className="text">Explore Our Bespoke residences</span>
        </button> */}
        <button
          type="submit"
          onClick={() => setIsOverlayOpn(true)}
          className="font-sans flex justify-center gap-2 items-center uppercase tracking-[0.2em] border-[2] mx-20 border-[#6a5b4d] border-solid hover:scale-105 shadow-xl text-[17px] md:text-lg bg-[#6a5b4d] hover:bg-[#fff9f0] isolation-auto before:absolute before:w-full before:transition-all before:duration-500 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full text-white hover:text-[#634730] before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
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
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
    </div>
  );
};

export default WhatSetUsApart;
