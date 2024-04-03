import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/lottie.json";
import { IoLogoWhatsapp } from "react-icons/io";
import image from "../../assets/svg/hero2.png";
import kodaikanal from "../../assets/svg/kodaikanal.png";
import { MdWorkspacePremium } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import innova from "../../assets/svg/Innovacar.png";
const Home = () => {
  const handleWhatsAppClick = () => {
    // Replace "1234567890" with your WhatsApp number
    window.location.href = "https://wa.me/7604905848";
  };
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-2 overflow-hidden">
        <div className="col-span-2  mt-[250px]  flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mb-[200px]">
            <p className="text-[25pt] font-semibold">Book your trip with us.</p>
            <p className="text-[10pt] w-[200px] lg:w-[300px] text-[rgb(44,44,44)] text-center">
              We offer premium car rentals at a very affordable price.
            </p>
            <div className="flex justify-center items-center gap-3 mt-[20px]">
              <button className="px-4 py-2 h-[45px] bg-black border border-black text-white lg:hover:bg-orange-500 transition ease-in-out duration-300">
                Book now
              </button>
              <button
                className="px-4 h-[45px] flex justify-center items-center gap-2 bg-white border border-black text-black lg:hover:bg-gray-200 transition ease-in-out duration-300"
                onClick={handleWhatsAppClick}
              >
                <IoLogoWhatsapp className="text-[15pt] text-green-500" />{" "}
                Contact
              </button>
            </div>
            <div className=" w-full flex justify-center items-center ">
              <img src={image} alt="" />
            </div>

            <div className="flex justify-center items-center my-3 lg:px-[200px]">
              <p className="text-sm">
                Contact us{" "}
                <span className="text-gray-600 font-semibold">
                  +91 7604905848
                </span>
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full h-[550px] sm:h-[1200px] lg:h-[1000px] bg-black  flex flex-col justify-center items-center  relative overflow-hidden "
          >
            <img
              src={kodaikanal}
              className="h-full w-full absolute object-cover scale-110  z-0"
              alt=""
            />
            <div className="w-full h-[450px] sm:h-[1000px] lg:h-[800px] bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.45)] to-black z-10 absolute bottom-0 "></div>

            <div className="z-10 flex flex-col justify-center items-center translate-y-[50px]">
              <p className="text-[18pt] sm:text-[30pt] text-center font-bold text-orange-500 z-10 ">
                Madurai . <span className="text-gray-100">Kodaikanal</span>{" "}
                <span className="text-orange-500 ">.Chennai</span>
              </p>
              <p className="text-gray-300 z-10">and much more.</p>
            </div>
          </motion.div>
          <div className="w-full lg:min-w-[800px] max-w-[1000px] my-[100px] lg:my-[200px] grid grid-cols-3 gap-[20px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="col-span-3 flex justify-center items-center"
            >
              <p className="text-4xl font-semibold text-gray-700 ">
                What do <span className="we text-[30pt]">we</span> offer?
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="col-span-3  lg:col-span-1 flex flex-col justify-center items-center lg:mt-[40px]"
            >
              <div className="flex flex-col justify-center items-center w-full bg-orange-100 py-[100px] rounded-lg lg:shadow-xl lg:border lg:border-[rgb(255,233,208)] hover:scale-105 duration-300 ease-in-out hover:cursor-pointer">
                <div className="px-[100px] text-orange-500  text-[50pt]">
                  <MdWorkspacePremium />
                </div>
                <div className="w-[300px] mt-4 flex flex-col justify-center items-center ">
                  <p className="text-[20pt] text-center font-normal">
                    Premium Rentals
                  </p>
                  <p className="text-center text-xs mt-3 ">
                    we have a range of premium cars at very reasonable rates.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="col-span-3 lg:col-span-1 flex flex-col justify-center items-center lg:mt-[40px]"
            >
              <div className="flex flex-col justify-center items-center w-full bg-orange-100 py-[100px] rounded-lg lg:shadow-xl lg:border lg:border-[rgb(255,233,208)] hover:scale-105 duration-300 ease-in-out hover:cursor-pointer">
                <div className="px-[100px] text-orange-500  text-[50pt]">
                  <FaLocationArrow />
                </div>
                <div className="w-[300px] mt-4 flex flex-col justify-center items-center ">
                  <p className="text-[20pt] text-center font-normal">
                    All over India
                  </p>
                  <p className="text-center text-xs mt-3 ">
                    We provide quality services for trip all over India.Your
                    comfort is always our priority.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="col-span-3 lg:col-span-1 flex flex-col justify-center items-center lg:mt-[40px]"
            >
              <div className="flex flex-col justify-center items-center w-full bg-orange-100 py-[100px] rounded-lg lg:shadow-xl lg:border lg:border-[rgb(255,233,208)] hover:scale-105 duration-300 ease-in-out hover:cursor-pointer">
                <div className="px-[100px] text-orange-500  text-[50pt]">
                  <FaSackDollar />
                </div>
                <div className="w-[300px] mt-4 flex flex-col justify-center items-center ">
                  <p className="text-[20pt] text-center font-normal">
                    Premium Rentals
                  </p>
                  <p className="text-center text-xs mt-3 ">
                    we ensure that the quality of the services is top notch for
                    every single trips
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="w-full h-[300px] lg:h-[400px]">
            <div className="w-full  flex flex-col justify-center items-center relative">
              <img
                className="absolute w-[500px] sm:w-auto sm:h-[600px] lg:h-[1100px] top-[40px] sm:-top-[50px] sm:scale-75 lg:-top-[250px]  scale-75 lg:scale-50"
                src={innova}
                alt=""
              />
              <div className="w-full flex justify-center items-center h-[200px] px-3 lg:px-[200px] ">
                {" "}
                <p className="text-center text-2xl text-gray-800 lg:text-3xl font-semibold max-w-[900px]">
                  Get the best car rental experience with top quality,
                  convenience, and unbeatable value, only here!
                </p>
              </div>
            </div>
          </div>
          <div className="w-full col-span-3 py-[150px] bg-orange-400 flex flex-col justify-center items-center">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="w-full flex flex-col justify-center items-center"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center text-[20pt] text-orange-400 ">
                <IoLocationSharp />
              </div>
              <p className="text-3xl lg:text-4xl w-full text-center font-semibold text-white mt-4">
                We are based at Sivakasi.
              </p>
              <p className="text-white text-sm">
                Serving customers with highclass car rentals.
              </p>
              <button className="w-[100px] py-1 mt-5 rounded-r-full rounded-l-full bg-white text-orange-500 hover:bg-orange-50 ease-in-out duration-300">
                location
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
