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
    <footer className={`bg-[#fff9f0] z-20 text-[#634730] pt-10 pb-6 px-6 relative`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start text-left">
        {/* Left Section - Contact Details */}
        <div className="md:w-1/3 w-full mb-6 md:mb-0 mt-4">
          <p className="text-[10px] font-sans tracking-[0.05em] uppercase font-semibold">
            Vedam Homes
          </p>
          <p className="text-[10px] font-sans tracking-[0.05em] uppercase">
            Unit: 1225, 12th Floor, JMD Megapolis, Sector 48, Gurugram, Haryana,
            122018
          </p>
          <p className="text-[10px] font-sans tracking-[0.05em] uppercase">
            (+91) 9871534959 / 7838239239
          </p>
          <p className="text-[10px] font-sans tracking-[0.05em] uppercase">
            Info@vedamhomes.com
          </p>
        </div>

        {/* Right Section - Legal & Site Credits */}
        <div className="text-[14px] font-sans tracking-[0.05em] uppercase mt-4 md:w-1/3 w-full md:text-right">
          <div className="w-full flex items-end space-x-6 mb-4  md:justify-end">
            <Link
              href="https://www.instagram.com/vedam.homes?igsh=aXdmank5dm9rYjU0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to Instagram"
            >
              <FontAwesomeIcon
                className="cursor-pointer w-5 h-5"
                icon={faInstagram}
                flip
                style={{ color: "#634730" }}
              />
            </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61561361094814"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Go to facebok"
              >
              <FontAwesomeIcon
                className="cursor-pointer w-5 h-5"
                icon={faFacebook}
                beat
                style={{ color: "#634730" }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/vedam-homes-llp/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to linkedin"
            >
              <FontAwesomeIcon
                className="cursor-pointer w-5 h-5"
                icon={faLinkedin}
                beatFade
                style={{ color: "#634730" }}
              />
            </Link>
            <Link
              href="https://www.youtube.com/@VedamHomes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Go to Youtube"
            >
              <FontAwesomeIcon
                className="cursor-pointer w-5 h-5"
                icon={faYoutube}
                fade
                style={{ color: "#634730" }}
              />
            </Link>
          </div>
          <p className="text-[10px] font-sans tracking-[0.05em] uppercase">
            © 2021, Vedam Homes LLP. Real Estate Builder
          </p>
          <p className="text-[10px] font-sans tracking-[0.05em] uppercase">
            Licensed in India
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
