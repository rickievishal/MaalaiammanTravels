import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import logo from "../assets/svg/logo.svg";
import { motion } from "framer-motion";
const Footer = () => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/7604905848";
  };
  return (
    <div className="w-full px-4 pt-4 lg:px-[200px]  bg-[#ffffff] border-t-[1px] border-black  grid grid-cols-3 mt-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full col-span-3 text-center my-[30px]"
      >
        <p className="text-sm sm">
          Experience hassle-free travel with us - we take care of everything,
          from renting your car to planning your perfect tour.
        </p>
        <p className="text-sm">
          - Narendhran <span className="text-gray-500">{"(founder)"}</span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="w-full col-span-3 flex flex-col justify-center items-center "
      >
        <img className="w-[100px]" src={logo} alt="" />
        <p className=" text-green-500 font-semibold mb-2">
          WhatsApp{" "}
          <span className="text-gray-800 font-normal ">+91 76049 05848</span>
        </p>
        <button
          className="w-[100px] h-[40px] bg-green-500 lg:hover:bg-green-400 shadow-xl ease-in-out duration-300 text-white font-semibold rounded-r-full rounded-l-full "
          onClick={handleWhatsAppClick}
        >
          Chat
        </button>
      </motion.div>
      <div className="w-full col-span-3 justify-center items-center my-10">
        <p className="w-full text-center text-sm text-gray-600">Address</p>
        <p className=" w-full text-center text-sm">1489, Kamarajapuram Colony Sivakasi east</p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        className="w-full h-[20px] col-span-3 flex justify-between"
      >
        <div>
          <p className="flex justify-center items-center gap-2 text-gray-600 text-xs">
            malaiamman travels all rights reserved
            <FaRegCopyright />
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-600">India</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
