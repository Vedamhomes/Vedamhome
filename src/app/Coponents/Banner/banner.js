import "./style.css";
import { Modal } from "antd";
import Image from "next/image";
import bannerImage1 from "../../../../public/main_page_1.jpg";
import { motion } from "framer-motion";
import { useCallback } from "react";

const Banner = (props) => {
  const { isBannerOpn, setIsBannerOpn, setIsOverlayOpn } = props;

  const handleCancel = useCallback(() =>{
    setIsBannerOpn(false)
  },[]);

  return (
    <Modal
      open={isBannerOpn}
      onCancel={handleCancel}
      footer={null}
      width={1000}
      // style={{ width: '90vw', maxWidth: '1000px' }}
      closable={false}
      className="banner_modal"
    >
      <div className="xl:mx-auto xl:container">
        <div className="bg-[#fff9f0] flex flex-col-reverse md:flex-row items-center lg:space-x-6">
          {/* Left Section */}
          <div className="w-full flex lg:w-1/2 lg:pl-12 h-[40vh] sm:h-[50vh] md:h-auto">
            <div className="absolute top-2 right-2 lg:top-0 lg:left-0">
              <button
                onClick={handleCancel}
                className="w-10 h-10 flex items-center justify-center text-white md:text-black text-xl focus:outline-none"
              >
                &times;
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-center items-center flex-col text-center px-4 sm:px-6"
            >
              <h1 className="font-sans font-thin text-[16px] mt-4 sm:mt-0 sm:text-[22px] tracking-[0.2em] uppercase text-[#634730]">
                Exciting News
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="sm:mt-4 font-sans font-light text-[16px] sm:text-[24px] uppercase text-[#634730] tracking-[0.1em] leading-relaxed max-w-xs sm:max-w-lg border border-[#7a6e66] px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-md bg-white/50 backdrop-blur-sm"
              >
                Vedam Homes luxury floors are open for booking now.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 h-[38vh] sm:h-[45vh]  md:h-auto">
            <Image
              src={bannerImage1}
              alt="bag"
              width={500} // Specify width (needed for optimization)
              height={300} // Specify height (needed for optimization)
              className="w-full h-full object-cover object-center "
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Banner;
