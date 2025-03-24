import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IMAGE_DATA from "@/app/images";

const Projectgallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("ELEVATION");
  const filteredImages = useMemo(
    () => IMAGE_DATA[selectedCategory]?.value || [],
    [selectedCategory]
  );

  const handleCategoryChange = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  return (
    <div className="w-full px-4 md:px-12 py-12">
      <div className="flex justify-center flex-wrap space-x-6 border-b pb-4">
        {Object.entries(IMAGE_DATA).map(([key, { name }]) => (
          <button
            key={key}
            className={`font-sans text-[18px] mb-8 text-[#634730] uppercase tracking-[0.12em] leading-[1.55rem] font-light transition-all duration-300 ${
              selectedCategory === key
                ? "text-black font-bold underline"
                : "text-gray-500"
            }`}
            onClick={() => handleCategoryChange(key)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {filteredImages.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg h-[400px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0, y: 50 }} // Initially hidden
            whileInView={{ opacity: 1, y: 0 }} // Animate when in view
            viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of element is visible
          >
            <motion.div
              className={`relative h-full w-full ${
                index % 2 ? "tilt-in-fwd-br" : "tilt-in-fwd-bl"
              }`}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Image
                loading="lazy"
                unoptimized={false}
                src={item}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="shadow-project-image"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projectgallery;
