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
      <div className="py-8 mx-auto px-6 flex flex-col md:flex-col text-center md:text-left justify-center">
        <h2 className="font-sans text-[26px] tracking-[0.13em] leading-[1.55rem] font-medium text-[#634730] uppercase mb-4">
          Exquisite Architecture
        </h2>
        <div className="flex items-center flex-col px-4 text-center">
        <p
              className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.16em] 
            leading-[1.5] w-[90%] max-w-[1100px] font-extralight text-[22px] sm:text-[22px] 
            word-spacing-[-0.16em]"
            >
            Explore our portfolio of exceptional projects and discover the Vedam
            Homes difference. Experience the epitome of luxury living, where
            every detail is meticulously crafted and every moment is cherished.
            </p>
        </div>
      </div>
    ),
    []
  );
  const projectSecondText = useMemo(
    () => (
      <div className="py-4 mx-auto px-6 flex flex-col md:flex-col text-center md:text-left justify-center">
        <h2 className="font-sans text-[26px] tracking-[0.13em] leading-[1.55rem] font-medium text-[#634730] uppercase mb-4">
          Architectural Masterpiece
        </h2>
        <div className="flex items-center flex-col px-4 text-center">
        <p
              className="font-sans uppercase text-center text-[#7a6e66] tracking-[0.16em] 
            leading-[1.5] w-[90%] max-w-[1100px] font-extralight text-[22px] sm:text-[22px] 
            word-spacing-[-0.16em]"
            >
            The striking aesthetic of these homes is further enhanced enhanced
            by lush landscapes and meticulously crafted crafted interiors,
            creating an inviting atmosphere that that exudes elegance and style.
          </p>
        </div>
      </div>
    ),
    []
  );
  return (
    <div className="bg-[#fff9f0]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      {/* ✅ Optimized static content */}
      {projectText}
      {projectSecondText}

      <Projectgallery />

      <Footer />
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={handleOverlay}
      />
    </div>
  );
};

export default Projects;
