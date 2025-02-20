import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#fff9f0] text-[#634730] pt-10 pb-6 px-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-left">
        {/* Left Section - Contact Details */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0">
          <p className="text-[12px] font-[Hues] tracking-[0.05em] uppercase font-semibold">
            Vedam Homes
          </p>
          <p className="text-[12px] font-[Hues] tracking-[0.05em] uppercase">
            Unit: 1225, 12th Floor, JMD Megapolis, Sector 48, Gurugram, Haryana,
            122018
          </p>
          <p className="text-[12px] font-[Hues] tracking-[0.05em] uppercase">
            (+91) 9871534959 / 7838239239
          </p>
          <p className="text-[12px] font-[Hues] tracking-[0.05em] uppercase">
            Info@vedamhomes.com
          </p>
        </div>

        {/* Right Section - Legal & Site Credits */}
        <div className="text-[12px] font-[Hues] tracking-[0.05em] uppercase mt-4 md:w-1/3 w-full text-right">
          <div className="w-full flex items-end space-x-6 mb-4  justify-end">
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-3 h-3"
                icon={faInstagram}
                flip
                style={{ color: "#d80e40" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-3 h-3"
                icon={faFacebook}
                beat
                style={{ color: "#3b5998" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-3 h-3"
                icon={faLinkedin}
                beatFade
                style={{ color: "#0077B5" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-3 h-3"
                icon={faYoutube}
                fade
                style={{ color: "#FF0000" }}
              />
            </div>
          </div>
          <p className="text-[10px] font-[Hues] tracking-[0.05em] uppercase">© 2021, Vedam Homes LLP. Real Estate Builder</p>
          <p className="text-[10px] font-[Hues] tracking-[0.05em] uppercase">Licensed in India</p>
        </div>
      </div>
    </footer>

    // <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
    //   <hr className="mb-8 border-t-2 border-gray-300"></hr>
    //   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">

    //     <div className="sm:ml-0 ml-8">
    //       <h2 className="text-base leading-4 text-[#634730] tracking-[0.05em] font-bold">
    //         Company
    //       </h2>
    //       <p className="hover:text-gray-500 text-[14px] leading-4 mt-6 text-[#634730] tracking-[0.05em] font-normal cursor-pointer">
    //         Blog
    //       </p>
    //       <p className="hover:text-gray-500 text-[14px] leading-4 mt-6 text-[#634730] tracking-[0.05em] font-normal cursor-pointer">
    //         About Us
    //       </p>
    //       <p className="hover:text-gray-500 text-[14px] leading-4 mt-6 text-[#634730] tracking-[0.05em] font-normal cursor-pointer">
    //         Contact us
    //       </p>
    //     </div>

    //     <div className="sm:ml-0 ml-8">
    //       <h2 className="text-base leading-4 text-[#634730] tracking-[0.15em] font-bold">
    //         Support
    //       </h2>
    //       <p className="hover:text-gray-500 text-[14px] leading-4 mt-6 text-[#634730] tracking-[0.05em] font-normal cursor-pointer">
    //         Legal policy
    //       </p>
    //       <p className="hover:text-gray-500 text-[14px] leading-4 mt-6 text-[#634730] tracking-[0.05em] font-normal cursor-pointer">
    //         Privacy policy
    //       </p>
    //       <p className="hover:text-gray-500 text-[14px] leading-4 mt-6 text-[#634730] tracking-[0.05em] font-normal cursor-pointer">
    //         Terms of service
    //       </p>
    //     </div>

    //     <div className="ml-8 mb-4 flex flex-col flex-shrink-0">
    //       <div className="flex items-center gap-x-4 mt-12">
    //         <div>
    //           <FontAwesomeIcon
    //             className="cursor-pointer w-6 h-6"
    //             icon={faInstagram}
    //             flip
    //             style={{ color: "#d80e40" }}
    //           />
    //         </div>
    //         <div>
    //           <FontAwesomeIcon
    //             className="cursor-pointer w-6 h-6"
    //             icon={faFacebook}
    //             beat
    //             style={{ color: "#3b5998" }}
    //           />
    //         </div>
    //         <div>
    //           <FontAwesomeIcon
    //             className="cursor-pointer w-6 h-6"
    //             icon={faLinkedin}
    //             beatFade
    //             style={{ color: "#0077B5" }}
    //           />
    //         </div>
    //         <div>
    //           <FontAwesomeIcon
    //             className="cursor-pointer w-6 h-6"
    //             icon={faYoutube}
    //             fade
    //             style={{ color: "#FF0000" }}
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-4 lg:block hidden">
    //       <p className="text-xs leading-none text-[#634730] tracking-[0.05em] font-light mt-4">
    //         Copyright © 2021 Vedam Homes
    //       </p>
    //       <p className="text-xs leading-none text-[#634730] tracking-[0.05em] font-light mt-4">
    //         All rights reserved
    //       </p>
    //     </div>
    //   </div>
    //   <div className="mt-4 ml-8 lg:hidden">
    //     <p className="text-xs leading-none text-[#634730] tracking-[0.05em] font-light mt-4">
    //       Copyright © 2021 Vedam Homes
    //     </p>
    //     <p className="text-xs leading-none text-[#634730] tracking-[0.05em] font-light mt-4">
    //       All rights reserved
    //     </p>
    //   </div>
    // </div>
  );
};

export default Footer;
