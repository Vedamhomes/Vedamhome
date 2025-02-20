import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IMAGE_DATA from "@/app/images";

const Projectgallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    if (selectedCategory === "ALL") {
      setFilteredImages(Object.values(IMAGE_DATA).flat());
    } else {
      setFilteredImages(IMAGE_DATA[selectedCategory] || []);
    }
  }, [selectedCategory]);

  return (
    <div className="w-full px-4 md:px-12 py-16 mt-10">
      <div className="flex justify-center flex-wrap space-x-6 border-b pb-4">
        {Object.keys(IMAGE_DATA).map((category, index) => (
          <button
            key={category}
            className={`font-sans text-[16px] mb-8 text-[#634730] uppercase tracking-[0.12em] leading-[1.75rem] font-light transition-all duration-300 ${
              selectedCategory === category
                ? "text-black font-bold underline"
                : "text-gray-500"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {filteredImages.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg h-[300px]"
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
                src={item}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projectgallery;
