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
  const projectText = useMemo(() => (
    <div className="py-12 buildingAnimationLeft">
      <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
        <div className="flex items-center flex-col px-4 text-center">
          <p
            className="font-sans uppercase text-center text-[#634730] tracking-[0.2em] 
            leading-[1.8] max-w-[1100px] font-thin text-[28px]
            word-spacing-[-0.22em]"
          >
            In the competitive real estate landscape, Vedam Homes distinguishes
            itself not just by the structures we build, but by the enduring
            relationships we cultivate. Our foundation is built upon five core
            pillars:
          </p>
        </div>
      </div>
    </div>
  ), []);
  return (
    <div className="bg-[#fff9f0]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      {/* ✅ Optimized static content */}
      {projectText}

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
