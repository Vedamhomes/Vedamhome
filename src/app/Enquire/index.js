"use client";

import Navbar from "../Coponents/navbar/navbar";
import Footer from "../Coponents/footer/footer";
import emailjs from "@emailjs/browser";
import "./style.css";
// import Notify from "simple-notify";
import Image from "next/image";
import { useRef, useState } from "react";
import SITTING_LOUNGE_VIEW_IMAGE from "@/images/SITTING_LOUNGE_VIEW.jpg"

const Enquire = () => {
  const [phoneNumber, setPhoneNumber] = useState("+91");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("phoneNumber.length()", phoneNumber.length);
    if (phoneNumber.length < 13) {
      return;
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          // new Notify({
          //   status: "success",
          //   title: "SUCCESS",
          //   text: "Succefully recieved details",
          //   effect: "fade",
          //   speed: 300,
          //   customClass: null,
          //   customIcon: null,
          //   showIcon: true,
          //   showCloseButton: true,
          //   autoclose: true,
          //   autotimeout: 3000,
          //   gap: 20,
          //   distance: 20,
          //   type: "outline",
          //   position: "right top",
          // });
          // setIsInputModalOpen(false)
        },
        (error) => {
          console.log("FAILED...");
          // new Notify({
          //   status: "error",
          //   title: "ERROR",
          //   text: "Error while recieving details",
          //   effect: "fade",
          //   speed: 300,
          //   customClass: null,
          //   customIcon: null,
          //   showIcon: true,
          //   showCloseButton: true,
          //   autoclose: true,
          //   autotimeout: 3000,
          //   gap: 20,
          //   distance: 20,
          //   type: "outline",
          //   position: "right top",
          // });
        }
      );
  };
  const isRepeatingDigits = (number) => {
    return new Set(number).size <= 3;
  };
  const handleChange = (event) => {
    const value = event.target.value;

    let formattedValue = value;

    if (value.startsWith("+91")) {
      formattedValue = value.substring(3);
    } else {
      formattedValue = "";
    }

    formattedValue = formattedValue.replace(/\s+/g, "");

    if (formattedValue.length <= 10) {
      if (formattedValue.length >= 8 && isRepeatingDigits(formattedValue)) {
        return;
      }
      setPhoneNumber("+91" + formattedValue);
    } else {
      console.warn("Phone number is too long");
    }
  };
  return (
    <div className="bg-[#fff9f0]">
      <Navbar />

        <div className="container mx-auto py-2 md:py-6 lg:py-8">
          <div className="relative mx-4">
            <Image
              src={SITTING_LOUNGE_VIEW_IMAGE}
              alt="A work table with house plants"
              height={500}
              width={800}
              className="w-full h-full "
            />
            <div className="absolute z-2 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 sm:w-8/12">
                Crafted Luxury
              </h1>
              <h3 className="text-xl sm:text-lg lg:text-lg font-semibold text-gray-800 sm:w-8/12">Designed to feel like home</h3>
              <p className="text-base leading-normal text-gray-800 mt-4 sm:mt-5 sm:w-5/12 tracking-wide">
                The Pinnacle Of Opulence 3&4 BHK Ultra Luxury Apartments Price
                Starts ₹ 3.36* Cr Onwards
              </p>
              {/* <button className="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button> */}
            </div>
            {/* <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-gray-800 bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button> */}
          </div>
        </div>

      <div className="mt-8 py-4 lg:py-8  relative">
        {/* <Image
          src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
          className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden"
          alt="map"
        /> */}
        <div className="xl:mx-auto xl:container  relative ">
          <div className="flex flex-wrap sm:px-12 px-4">
            <div className="w-full relative lg:w-1/2 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
              {/* <Image
                src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png"
                className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
                alt="map"
              /> */}
              <div className="w-full flex flex-col items-start  xl:justify-start  relative z-5 xl:px-0 px-4">
                <div className="w-full 2xl:pl-48 xl:pt-1">
                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-wider text-gray-800">
                    We’re Here
                  </h1>
                  <div className="w-full md:w-10/12 mt-3">
                    {/* <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                      We believe digital innovation is at the heart of every
                      business success
                    </h2> */}
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold underline">
                        Address
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        Unit 1225, 12th floor, JMD Megapolis, Sector 48,
                        Gurgaon, Haryana,122018
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold underline">
                        Contact
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        +91 9871534959 
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        +91 7838239239
                      </h2>
                    </div>
                    <div className="mt-4 md:mt-8">
                      <h2 className="text-sm md:text-base text-indigo-700 font-semibold underline">
                        Email
                      </h2>
                      <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">
                        Info@vedamhomes.com
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form ref={form} onSubmit={handleSubmit} className="w-full lg:w-1/2">
              <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-wider text-gray-800">
                  Connect with us
                </h1>
                <div className="w-full 2xl:w-8/12 mt-3">
                  {/* <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">
                    For enquiries, please email us using the form below
                  </h2> */}
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Full Name
                    </p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="text"
                      id="first_name"
                      name="first_name"
                      required
                      // placeholder=""
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Mobile No
                    </p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="tel"
                      id="phone_number"
                      name="phone_number"
                      // placeholder="Phone number"
                      value={phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Email Address
                    </p>
                    <input
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black py-5 pl-4 text-gray-800"
                      type="email"
                      id="email_address"
                      name="email_address"
                      required
                      placeholder="abc@mail.com"
                    />
                  </div>
                  <div className="mt-4 md:mt-8">
                    <p className="text-gray-800 text-base font-medium">
                      Message
                    </p>
                    <textarea
                      className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-indigo-600 focus:border-indigo-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800"
                      type="text"
                      placeholder="Write us something..."
                      defaultValue={""}
                    />
                  </div>
                  <div className="py-5">
                    <button className="py-3 md:py-5 px-5 md:px-10 bg-gray-900 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-24 md:py-12 md:px-16 py-9 px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8 enquireAnimationLeft">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="lg:text-4xl font-bold text-4xl leading-9 text-[#7a6e66] pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-[#7a6e66] ">
              Our vision is to be recognized as the leading provider of luxury
              residences, setting the benchmark for quality, innovation, and
              customer satisfaction. We are committed to continuous improvement
              and exceeding the evolving needs of our discerning clientele. Join
              us in shaping a legacy of innovation and excellence. Be a part of
              our story, be a part of something big.
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <Image
              src="https://i.ibb.co/FhgPJt8/Rectangle-116.png"
              alt="A group of People"
              height={300}
              width={300}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 px-4 pt-12 enquireAnimationRight">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="lg:text-4xl font-bold text-4xl leading-9 text-[#7a6e66] pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-[#7a6e66] ">
              Vedam Home : A decade of shaping Gurugram's skyline with expertise
              and innovation. At Vedam Homes, we are driven by a passion for creating exceptional living spaces that redefine luxury.
              craftsmanship.
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                  alt="Alexa featured Img"
                  height={300}
                  width={300}
                  className="md:block hidden"
                />
                <Image
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                  height={300}
                  width={300}
                  className="md:hidden block"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Alexa
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                  alt="Olivia featured Img"
                  height={300}
                  width={300}
                  className="md:block hidden"
                />
                <Image
                  src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                  alt="Olivia featured Img"
                  height={300}
                  width={300}
                  className="md:hidden block"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Olivia
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                  alt="Liam featued Img"
                  height={300}
                  width={300}
                  className="md:block hidden"
                />
                <Image
                  src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                  alt="Liam featued Img"
                  height={300}
                  width={300}
                  className="md:hidden block"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Liam
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <Image
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                  height={300}
                  width={300}
                  className="md:block hidden"
                />
                <Image
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                  height={300}
                  width={300}
                  className="md:hidden block"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Enquire;
