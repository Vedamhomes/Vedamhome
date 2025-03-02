"use client";

import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import { useCallback, useMemo, useState } from "react";
import Projectgallery from "../Coponents/ProjectGallery/projectGallery";

const Projects = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);

  const handleOverlay = useCallback((state) => {
    setIsOverlayOpn(state);
  }, []);

  // ✅ Memoizing Static Content
  const projectText = useMemo(
    () => (
      <div className="py-8 mx-auto px-6 flex flex-col md:flex-col text-center justify-center">
        <h2 className="font-sans text-[26px] tracking-[0.13em] leading-[1.55rem] font-medium text-[#634730] uppercase mb-4">
          Exquisite Architecture
        </h2>
        <div className="flex items-center flex-col px-4 mt-3 text-center">
          <p
            className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.20em] 
            leading-[1.6] w-[90%] max-w-[1100px] font-extralight text-[21px]
            word-spacing-[-0.16em]"
          >
            Vedam Homes crafts exceptional living spaces that embodies
            sophistication, comfort, and prestige. From thoughtfully designed
            layouts to premium finishes, the striking aesthetic is further
            enhanced by lush landscapes and meticulously crafted interiors
            offers an unparalleled lifestyle creating an inviting atmosphere
            that exudes elegance and style.
          </p>
        </div>
      </div>
    ),
    []
  );

  return (
    <div className="bg-[#fff9f0]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      {projectText}

      <Projectgallery />

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
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={handleOverlay}
      />
    </div>
  );
};

export default Projects;
