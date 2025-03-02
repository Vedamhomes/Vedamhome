"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useWindowScroll } from "react-use";

// Timeline Data
import data from "./Content9";

const ProgressiveScroll = () => {
  const { y } = useWindowScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
      if(y < 300){
        setProgress(2)
      }else if(y > 300 && y < 1000){
        setProgress(Math.pow(y*1.1 / totalHeight, 1.5) * 100);
      }else{
          setProgress((y / totalHeight) * 100);
      }
  }, [y]);

  return (
    <div className="relative flex flex-col items-center px-6 py-16">
      {/* Center Progress Bar */}
      <div className="absolute right-2 md:left-1/2 transform -translate-x-1/2 h-[95%] w-1 bg-gray-300">
        <motion.div
          className="absolute w-1 bg-blue-500"
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {data.map((section, index) => (
        <motion.div
          key={index}
          className={`relative flex flex-col md:flex-row items-center mb-20 max-w-5xl w-full ${
            index % 2 === 0 ? "" : "flex-row-reverse md:flex-row-reverse"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div
            className={`p-6 scroll_deatil_container text-[#634730] rounded-2xl shadow-lg w-full md:w-1/2 ${
              index % 2 === 0
                ? "bg-[#eaeaea] md:mr-16"
                : "bg-[#eaeaea] md:ml-16"
            }`}
          >
            <h2 className="text-2xl font-sans uppercase font-bold">{section.title}</h2>
            <p className="text-sm font-sans mt-2">{section.description}</p>
          </div>
          <div className="absolute right-[-25px] md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black text-white flex items-center justify-center rounded-full text-lg font-bold border-4 border-yellow-400">
            {index + 1}
          </div>
          <div className="mt-6 md:mt-0 w-full md:w-1/2 flex justify-center">
            <Image
              src={section.image}
              alt={section.title}
              title={section.imageTitle}
              width={400}
              height={400}
              className="rounded-xl shadow-lg aspect-[3/2]"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProgressiveScroll;
