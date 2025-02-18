"use client";

import { useState } from "react";
import "./style.css";
import { Affix, Drawer } from "antd";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faLaptopFile,
  faPersonChalkboard,
  faVault,
} from "@fortawesome/free-solid-svg-icons";
import VedamLogo from "@/images/vedam-homes-logo-2.png";
import Image from "next/image";

const Navbar = (props) => {
  const { setIsOverlayOpn } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Affix className="z-111111 h-auto" offsetTop={0} offsetBottom={0}>
      <div className="2xl:mx-auto">
        <div className="bg-[#f5f0e9]  rounded shadow-[4px_4px_4px_rgba(0,0,0,0.25)] py-5 px-7 ">
          <div className="z-11111 mx-auto flex justify-between items-center">
            {/* Logo and Company Name */}
            <Link href="/" className="relative flex items-center h-10 w-32">
              <Image
                className="h-10 w-32 object-scale-down"
                src={VedamLogo}
                fill
                alt="Vedam homes logo"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center uppercase space-x-8">
              <Link
                href="/Projects"
                className="text-[#634730] hover:text-blue-500"
              >
                Projects
              </Link>
              <Link
                href="/Amenities"
                className="text-[#634730] hover:text-blue-500"
              >
                Amenities
              </Link>
              <Link
                href="/WhatSetUsApart"
                className="text-[#634730] hover:text-blue-500"
              >
                What Set Us Apart
              </Link>
              <div
                // href="/Enquire"
                onClick={() => {
                  setIsOverlayOpn(true);
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-[#987218] text-white rounded-md hover:bg-[#6a5b4d] cursor-grab"
              >
                Enquire
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div
              className="relative md:hidden text-gray-600"
              // onMouseEnter={() => setIsOpen(true)}
              onClick={() => setIsOpen(!isOpen)}
              // onBlur={() => setIsOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </div>
          </div>


          {/*  New Mobile menu */}
          {isOpen && (
            <Drawer open={isOpen} size='default' maskClosable width={300} closeIcon={true} closable={true} onClose={() => setIsOpen(false)}  className={`close_icon ${isOpen ? "showMenuNav" : "hideMenuNav"}`}>
              <ul className="flex flex-col items-center justify-between ">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link
                    href="/Projects"
                    className="block px-4 py-2 text-[#634730] uppercase  hover:font-bold hover:bg-gray-100"
                  >
                    Projects
                    <FontAwesomeIcon className="ml-8" icon={faBuilding} />
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link
                    href="/Amenities"
                    className="block px-4 py-2 text-[#634730] hover:bg-gray-100 "
                  >
                    Amenities
                    <FontAwesomeIcon className="ml-8" icon={faLaptopFile} />
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <Link
                    href="/WhatSetUsApart"
                    className="block px-4 py-2 text-[#634730] hover:bg-gray-100"
                  >
                    What Set Us Apart
                    <FontAwesomeIcon icon={faHandshake} className="ml-8" />
                  </Link>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <div
                    // href="/Enquire"
                    onClick={() => {
                      setIsOverlayOpn(true);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 text-[#634730] cursor-grab hover:bg-gray-100"
                  >
                    Enquire
                    <FontAwesomeIcon
                      className="ml-8"
                      icon={faPersonChalkboard}
                    />
                  </div>
                </li>
              </ul>
            </Drawer >
          )}
        </div>
      </div>
    </Affix>
  );
};

export default Navbar;
