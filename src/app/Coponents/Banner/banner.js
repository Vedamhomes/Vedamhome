import "./style.css";
import { Modal } from "antd";
import Image from "next/image";
import bannerImage1 from "../../../../public/main_page_1.jpg";

const Banner = (props) => {
  const { isBannerOpn, setIsBannerOpn, setIsOverlayOpn } = props;

  return (
    <Modal
      open={isBannerOpn}
      onCancel={() => setIsBannerOpn(false)}
      footer={null}
      width={1000}
      // style={{ width: '90vw', maxWidth: '1000px' }}
      closable={false}
      className="banner_modal"
    >
      <div className="xl:mx-auto xl:container">
        <div className="bg-[#f5f0e9] flex flex-col-reverse md:flex-row items-center lg:space-x-6">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 lg:pl-12 h-[40vh] sm:h-[50vh] md:h-auto">
            <div className="absolute top-2 right-2 lg:top-0 lg:left-0">
              <button
                onClick={() => setIsBannerOpn(false)}
                className="w-10 h-10 flex items-center justify-center text-white md:text-black text-xl focus:outline-none"
              >
                &times;
              </button>
            </div>

            <div className="px-6 xl:px-0 h-full flex flex-col justify-center items-center overflow-hidden">
              <div className="flex justify-center items-center flex-col">
                <h1 className="font-[Hues] font-thin text-[22px] tracking-[0.2em] uppercase text-[#634730] text-center">
                  Exciting News
                </h1>
                <div className="mt-4">
                  <p className="font-sans font-light text-[24px] uppercase text-[#634730] text-center mb-0 tracking-[0.1em] [text-stroke:0.5px_#7a6e66]">
                    Vedam homes luxury floors are open for booking now.
                  </p>
                </div>
                {/* <div className="mt-8 flex justify-center items-center w-full">
                  <button
                    onClick={() => {
                      setIsOverlayOpn(true);
                      setIsBannerOpn(false);
                    }}
                    className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:w-80 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-3 sm:py-4 text-white"
                  >
                    BOOK A TOUR
                  </button>
                </div> */}
              </div>
            </div>
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
