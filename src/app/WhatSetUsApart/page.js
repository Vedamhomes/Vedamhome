"use client";

import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import Image from "next/image";
import syneregtic_team_image from "@/images/syneregtic_team.jpg";
import unwavering_cred_image from "@/images/unwavering_cred.jpg";
import deep_belief_image from "@/images/deep_belief.jpg";
import uncompromising_ethic_image from "@/images/uncompromising_ethic.jpg";
import ELEVEN_IMAGE from "@/images/11.jpg";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import { useState } from "react";

const WhatSetUsApart = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);
  return (
    <div className="bg-[#F5F0E9]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn}/>

      
      <div className="py-12 buildingAnimationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-center"> 
          <div className="flex items-center flex-col px-4 text-center">
           
            <p
              className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[1.8] w-[90%] max-w-[1100px] font-extralight text-[28px] 
            word-spacing-[-0.22em]"
            >
              In the competitive real
              estate landscape, Vedam Homes distinguishes itself not just by the
              structures we build, but by the enduring relationships we
              cultivate. Our foundation is built upon five core pillars:
            </p>
          </div>
        </div>
      </div>



      <div className="mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 setUsApartAnimationRight">
        <Image
          src={unwavering_cred_image}
          alt="Sample"
          height={300}
          width={300}
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
        />
        <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
          {/* <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Unwavering Credibility
          </h1> */}
          <h1 className="focus:outline-none md:w-120 font-normal md:text-4xl text-3xl leading-tight text-[#7a6e66]">
            Unwavering Credibility
          </h1>
          <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
            <h2 className="text-[#7a6e66] text-sm text-justify">
              Our reputation is our most valuable asset. We've earned the trust
              of our clients through years of transparent dealings, consistent
              delivery of exceptional quality, and an unwavering commitment to
              fulfilling our promises. We believe in open communication, honest
              practices, and building relationships based on mutual respect and
              integrity. This steadfast dedication to credibility permeates
              every aspect of our business, from the initial consultation to the
              final handover and beyond. With Vedam Homes, you can be confident
              that you are partnering with a company that values integrity above
              all else.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:px-16 md:px-6 px-6 md:py-12 sm:py-8 py-4 setUsApartAnimationLeft">
          <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pr-12 pl-0 pr-0 text-end md:text-left">
            <h1 className="focus:outline-none md:w-120 font-bold md:text-4xl text-3xl leading-tight text-[#7a6e66]">
              Synergistic Teamwork
            </h1>
            <p className="f-f-r text-sm pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6 leading-6 mt-4 text-justify text-[#7a6e66]">
              The creation of a truly exceptional home requires a symphony of
              talents working in perfect harmony. At Vedam Homes, we foster a
              culture of synergistic teamwork, where architects, designers,
              engineers, and craftsmen collaborate seamlessly to bring our
              vision to life. This collaborative approach ensures that every
              detail is meticulously considered, every challenge is expertly
              addressed, and the final result is a masterpiece of design and
              craftsmanship. Our team's collective expertise and shared passion
              for excellence are the driving forces behind our success.
            </p>
          </div>
          <Image
            src={syneregtic_team_image}
            height={300}
            width={300}
            alt="Sample"
            className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
          />
        </div>

      <div
        className="py-4  px-4 sm:py:14 md:py:20 2xl:px-0 lg:px-12 sm:px-4 2xl:mx-auto setUsApartAnimationRight"
        // style={{ height: 1000 }}
      >
        <div className="md:flex gap-8 items-center justify-between w-full ">
        <div className="xl:w-4/6 md:w-1/2 w-full xl:pl-48">
              <Image
                src={ELEVEN_IMAGE}
                height={300}
                width={300}
                alt="Purple flowers on a book"
                className="w-full mt-8 sm:mt-0 "
              />
          </div>
          <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 pl-0 pr-0 text-end md:text-left">
            <h1 className="focus:outline-none md:w-120 font-bold md:text-4xl text-3xl leading-tight text-[#7a6e66]">
              Sense of Ownership
            </h1>
            <p
              role="contentinfo"
              className="focus:outline-none text-sm  leading-6 mt-4 sm:mt-8 text-[#7a6e66] 2xl:pr-24 xl:pr-0 sm:pr-12 text-justify"
            >
              At Vedam Homes, we don't just build houses; we create homes. And
              that sense of ownership extends to every member of our team. From
              the initial design concepts to the final finishing touches, each
              individual takes pride in their contribution, treating every
              project as if it were their own. This sense of ownership
              translates into an unparalleled level of care and attention to
              detail, ensuring that every Vedam home is crafted with the utmost
              precision and passion. It's this dedication to excellence that
              truly distinguishes a Vedam home.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 setUsApartAnimationRight">
        <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
          {/* <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Deep-Rooted Belief
          </h1> */}
          <h1 className="focus:outline-none md:w-120 font-bold md:text-4xl text-3xl leading-tight text-[#7a6e66]">
            Deep-Rooted Belief
          </h1>
          <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
            <h2 className="text-[#7a6e66] text-sm text-justify">
              Our belief in the power of thoughtful design and exceptional
              craftsmanship is at the heart of everything we do. We believe that
              a home should be more than just a place to live; it should be an
              expression of your unique style, a sanctuary where you can truly
              be yourself, and a legacy for generations to come. This
              deep-rooted belief drives us to push the boundaries of innovation,
              to seek out the finest materials, and to employ the most skilled
              craftsmen. It's this unwavering belief that allows us to create
              homes that are not only beautiful but also truly exceptional.
            </h2>
          </div>
        </div>
        <Image
          src={deep_belief_image}
          alt="Sample"
          height={300}
          width={300}
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
        />
      </div>

      <div className="mx-auto px-6 lg:mx-auto relative mt-4 xl:px-20 lg:px-16 md:px-12 md:flex items-center gap-8 setUsApartAnimationRight">
      <Image
          src={uncompromising_ethic_image}
          alt="Sample"
          height={300}
          width={300}
          className="w-full mt-4 sm:mt-6 md:mt-0 object-fill md:w-2/4 md:-ml-4 lg:-ml-4 xl:ml-0 setUsApartAnimationRight md:h-[85vh]"
        />
        <div className="text-color flex justify-center flex-col w-4/4 md:w-1/2  pt-4 lg:pt-2 xl:pt-10 md:pl-8 md:pr-12 pl-0 pr-0 text-end md:text-left">
          {/* <h1 className="text-4xl md:text-4xl lg:text-4xl w-11/12 lg:w-11/12 xl:w-full xl:text-4xl text-gray-900 font-extrabold f-f-l">
            Uncompromising Ethics
          </h1> */}
          <h1 className="focus:outline-none font-bold md:text-4xl text-3xl leading-tight text-[#7a6e66]">
            Uncompromising Ethics
          </h1>
          <div className="f-f-r text-base lg:text-base pb-10 sm:pb-0 pt-6 sm:pt-10 xl:pt-6">
            <h2 className="text-[#7a6e66] text-sm text-justify">
              Our commitment to ethical practices is non-negotiable. We adhere
              to the highest standards of professionalism, integrity, and
              transparency in all our dealings. We believe in building long-term
              relationships with our clients, partners, and communities based on
              trust and mutual respect. Our unwavering commitment to ethical
              conduct is the cornerstone of our reputation and a fundamental
              principle that guides every decision we make. With Vedam Homes,
              you can be assured that you are partnering with a company that
              operates with the utmost integrity and adheres to the highest
              ethical standards.
            </h2>
          </div>
        </div>
      </div>

      <Footer />
      <UserInputModal isOverlayOpn={isOverlayOpn} setIsOverlayOpn={setIsOverlayOpn} />
    </div>
  );
};

export default WhatSetUsApart;
