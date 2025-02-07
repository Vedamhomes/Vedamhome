"use client"

import { useState } from "react";
import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";

const WhatSetUsApart = () => {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  return (
    <div className="bg-[#F5F0E9]">
      <Navbar />

      <div className="py-8 setUsApartAnimationLeft">
        <div className=" mx-auto px-2 flex flex-col md:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="flex items-center flex-col px-4 text-center">
            {/* <h1 className="focus:outline-none font-bold md:text-5xl text-3xl leading-tight text-gray-800 mb-4">
              Experience the
              <span className="font-normal"> Vedam difference </span>
            </h1> */}
            <p
              className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.2em] 
            leading-[1.8] w-[90%] max-w-[1100px] font-light text-[28px] 
            word-spacing-[-0.20em]"
            >
              {/* Vedam Homes isn't just building homes; we're building trust,
              fostering communities, and creating legacies. We invite you to
              experience the Vedam difference. */}
              <span className="font-normal">In</span> the competitive real estate landscape, Vedam Homes
              distinguishes itself not just by the structures we build, but by
              the enduring relationships we cultivate. Our foundation is built
              upon five core pillars:
            </p>
          </div>
        </div>
      </div>

      <div className=" lg:container lg:mx-auto lg:py-8 md:py-6 md:px-6 py-4 px-4">
        {/* <div className=" lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
          <div className=" flex justify-between md:flex-row flex-col ">
            <div className=" md:mb-0 mb-8 md:text-left text-center">
              <p className=" font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
                Vedam Homes isn't just building homes; we're building trust,
                fostering communities, and creating legacies. We invite you to
                experience the Vedam difference.
              </p>
            </div>
          </div>
        </div> */}
        <div className="lg:w-9/12 w-full mx-auto">
          {/* <!-- Question 1 --> */}
          <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

          <div className="w-full md:px-6  ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className=" ">
                <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-bold text-gray-800">
                    1.
                  </span>{" "}
                  {/* Unwavering Credibility: */}
                  <h3 className="focus:outline-none font-normal md:text-3xl text-2xl leading-tight text-gray-800">
                    Unwavering Credibility:
                </h3>
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen(!open)}
              >
                <svg
                  className={"transform " + (open ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Credibility isn't built overnight; it's earned through
                consistent dedication to transparency, integrity, and delivering
                on our promises. At Vedam Homes , we understand that a home is a
                significant investment, both financially and emotionally. We
                earn our clients' trust by maintaining open communication,
                adhering to agreed-upon timelines, and upholding the highest
                standards of professionalism in all our dealings. Our track
                record speaks for itself, demonstrating our commitment to
                excellence and client satisfaction.
              </p>
            </div>
          </div>

          {/* <!-- Question 2 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6 ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-bold text-gray-800">
                    2.
                  </span>{" "}
                  {/* Synergistic Teamwork: */}
                  <h3 className="focus:outline-none font-normal md:text-3xl text-2xl leading-tight text-gray-800">
                  Synergistic Teamwork:
                </h3>
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen2(!open2)}
              >
                <svg
                  className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Behind every exceptional Vedam home is a team of dedicated
                experts working in perfect harmony. We believe in the power of
                collaboration, bringing together the finest contractors,
                interior designers, architects, and civil engineers. This
                multidisciplinary approach ensures that every aspect of your
                home, from the structural integrity to the aesthetic appeal, is
                meticulously planned and flawlessly executed. We foster a
                culture of mutual respect and open communication, ensuring that
                every member of the team is aligned with our vision of creating
                exceptional living spaces.
              </p>
            </div>
          </div>

          {/* <!-- Question 3 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6 ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-bold text-gray-800">
                    3.
                  </span>
                  {/* A Sense of Ownership: */}
                  <h3 className="focus:outline-none font-normal md:text-3xl text-2xl leading-tight text-gray-800">
                  A Sense of Ownership:
                </h3>
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen3(!open3)}
              >
                <svg
                  className={"transform " + (open ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open3 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                At Vedam Homes , we don't just build houses; we craft homes. We
                instill a sense of ownership in every member of our team, from
                the ground level to the management, so that each project is
                treated with the utmost care and attention to detail. This sense
                of ownership translates into superior quality construction,
                meticulous craftsmanship, and a relentless pursuit of
                perfection. We take pride in every home we build, as if it were
                our own.
              </p>
            </div>
          </div>

          {/* <!-- Question 4 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6  ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-bold text-gray-800">
                    4.
                  </span>
                  {/* Deep-Rooted Belief: */}
                  <h3 className="focus:outline-none font-normal md:text-3xl text-2xl leading-tight text-gray-800">
                  Deep-Rooted Belief:
                </h3>
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen4(!open4)}
              >
                <svg
                  className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open4 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Our belief in the potential of every project fuels our passion
                and drives us to exceed expectations. We believe in the power of
                innovative design, sustainable practices, and creating
                communities that thrive. This belief is the driving force behind
                our commitment to continuous improvement, pushing the boundaries
                of what's possible in real estate development. We don't just
                build homes; we build legacies.
              </p>
            </div>
          </div>

          {/* <!-- Question 5 --> */}

          <hr className=" w-full lg:mt-10 my-8" />

          <div className="w-full md:px-6 ">
            <div
              id="mainHeading"
              className="flex justify-between items-center w-full"
            >
              <div className="">
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                  {" "}
                  <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-bold text-gray-800">
                    5.
                  </span>
                  {/* Uncompromising Ethics: */}
                  <h3 className="focus:outline-none font-normal md:text-3xl text-2xl leading-tight text-gray-800">
                  Uncompromising Ethics:
                </h3>
                </p>
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setOpen5(!open5)}
              >
                <svg
                  className={"transform " + (open5 ? "rotate-180" : "rotate-0")}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="black"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              id="menu"
              className={"mt-6 w-full " + (open5 ? "block" : "hidden")}
            >
              <p className="text-base leading-6 text-gray-600 font-normal">
                Ethical conduct is the cornerstone of our business. We adhere to
                the highest ethical standards in all our operations, ensuring
                fairness, transparency, and integrity in every interaction. We
                believe in building long-term relationships based on trust and
                mutual respect. Our commitment to ethics extends to our dealings
                with clients, partners, and the communities we serve.
              </p>
            </div>
          </div>

          <hr className=" w-full lg:mt-10 my-8" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhatSetUsApart;
