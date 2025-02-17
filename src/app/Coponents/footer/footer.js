import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
      <hr className="mb-8 border-t-2 border-gray-300"></hr>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
        
        <div className="sm:ml-0 ml-8">
          <h2 className="text-base font-semibold leading-4 text-gray-800">
            Company
          </h2>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Blog
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            About Us
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Contact us
          </p>
        </div>

        <div className="sm:ml-0 ml-8">
          <h2 className="text-base font-semibold leading-4 text-gray-800">
            Support
          </h2>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Legal policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Privacy policy
          </p>
          <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">
            Terms of service
          </p>
        </div>

        <div className="ml-8 mb-4 flex flex-col flex-shrink-0">
          <div className="flex items-center gap-x-4 mt-12">
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-6 h-6"
                icon={faInstagram}
                flip
                style={{ color: "#d80e40" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-6 h-6"
                icon={faFacebook}
                beat
                style={{ color: "#3b5998" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-6 h-6"
                icon={faLinkedin}
                beatFade
                style={{ color: "#0077B5" }}
              />
            </div>
            <div>
              <FontAwesomeIcon
                className="cursor-pointer w-6 h-6"
                icon={faYoutube}
                fade
                style={{ color: "#FF0000" }}
              />
            </div>
          </div>
        </div>

        <div className="mt-4 lg:block hidden">
          <p className="text-xs leading-none text-gray-800 mt-4">
            Copyright © 2021 Vedam Homes
          </p>
          <p className="text-xs leading-none text-gray-800 mt-4">
            All rights reserved
          </p>
        </div>
      </div>
      <div className="mt-4 ml-8 lg:hidden">
        <p className="text-xs leading-none text-gray-800 mt-4">
          Copyright © 2021 Vedam Homes
        </p>
        <p className="text-xs leading-none text-gray-800 mt-4">
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
