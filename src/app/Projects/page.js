"use client";

import "./style.css";
import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import UserInputModal from "../Coponents/UserInputModal/userInputModal";
import { useState } from "react";
import ProjectSlider from "../Coponents/ProjectSlider/projectSlider";
import FeatureCard from "../Coponents/featureCard/featureCard";
import Projectgallery from "../Coponents/ProjectGallery/projectGallery";

const Projects = () => {
  const [isOverlayOpn, setIsOverlayOpn] = useState(false);

  const categories = [
    {
      name: "Recent",
      posts: [
        {
          id: 1,
          title: "Does drinking coffee make you smarter?",
          date: "5h ago",
          commentCount: 5,
          shareCount: 2,
        },
        {
          id: 2,
          title: "So you've bought coffee... now what?",
          date: "2h ago",
          commentCount: 3,
          shareCount: 2,
        },
      ],
    },
    {
      name: "Popular",
      posts: [
        {
          id: 1,
          title: "Is tech making coffee better or worse?",
          date: "Jan 7",
          commentCount: 29,
          shareCount: 16,
        },
        {
          id: 2,
          title: "The most innovative things happening in coffee",
          date: "Mar 19",
          commentCount: 24,
          shareCount: 12,
        },
      ],
    },
    {
      name: "Trending",
      posts: [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    },
    {
      name: "Trending 2",
      posts: [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    },
    {
      name: "Trending 3",
      posts: [
        {
          id: 1,
          title: "Ask Me Anything: 10 answers to your questions about coffee",
          date: "2d ago",
          commentCount: 9,
          shareCount: 5,
        },
        {
          id: 2,
          title: "The worst advice we've ever heard about coffee",
          date: "4d ago",
          commentCount: 1,
          shareCount: 2,
        },
      ],
    },
  ];
  return (
    <div className="bg-[#fff9f0]">
      <Navbar setIsOverlayOpn={setIsOverlayOpn} />

      <div className="py-12 buildingAnimationLeft">
        <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-center"> 
          <div className="flex items-center flex-col px-4 text-center">
            <p
              className="font-sans uppercase text-center text-[#634730] tracking-[0.2em] 
            leading-[1.8] max-w-[1100px] font-thin text-[28px]
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

      <Projectgallery />

      {/* <FeatureCard /> */}
      
      <Footer />
      <UserInputModal
        isOverlayOpn={isOverlayOpn}
        setIsOverlayOpn={setIsOverlayOpn}
      />
    </div>
  );
};

export default Projects;
