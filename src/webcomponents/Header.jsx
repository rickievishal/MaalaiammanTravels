import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/svg/logo.svg";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [isscrolled, setIsScrolled] = useState(0);
  function scrollToPosition(scrollValue) {
    window.scrollTo({
      top: scrollValue,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrolledPercentage = (window.scrollY / 100) * 100;
      setIsScrolled(scrolledPercentage > 100 ? 100 : scrolledPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [ismenuclicked, setIsmenuclicked] = useState(false);
  return (
    <>
      <div
        className={`w-full h-[80px] fixed top-0 lg:px-[180px] z-30`}
        style={{
          backgroundColor: `rgb(255,255,255,${isscrolled / 100 - 0.3})`,
          backdropFilter: `blur(${(isscrolled / 100) * 20}px)`,
        }}
      >
        <nav className="h-full flex justify-between px-3 relative z-30">
          <AnimatePresence>
            {ismenuclicked && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className=" w-screen h-screen fixed top-0 left-0 bg-[rgb(255,255,255)] px-[50px]"
              >
                <div className="w-full h-full relative py-[100px]">
                  <ul className="flex flex-col gap-[60px] text-4xl">
                    <li className="text-gray-700 font-semibold " >Menu</li>
                    <li className="text-gray-700 font-semibold " onClick={()=>{setIsmenuclicked(!ismenuclicked) 
                        scrollToPosition(0)}}>Home</li>
                    <li className="text-gray-700 font-semibold " onClick={()=>{setIsmenuclicked(!ismenuclicked) 
                    scrollToPosition(2600)}}>About</li>
                    <li className="text-gray-700 font-semibold " onClick={()=>{setIsmenuclicked(!ismenuclicked)
                    scrollToPosition(1900)}}>Services</li>
                  </ul>
                  <div className="absolute right-5 top-[80px] text-[30pt]" onClick={()=>{setIsmenuclicked(!ismenuclicked)}}>
                    <IoClose />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <ul className="h-[80px] flex justify-center items-center overflow-hidden">
            <img className="h-[100px]" src={logo} alt="" />
          </ul>
          <ul
            className="h-full flex justify-center items-center text-[18pt] sm:hidden"
            onClick={() => {
              setIsmenuclicked(!ismenuclicked);
            }}
          >
            <LuMenu />
          </ul>

          <ul className="h-full justify-center items-center gap-[20px] lg:gap-[50px] hidden sm:flex text-sm">

              <li
                className="text-center w-[100px] h-[35px] flex justify-center items-center rounded-r-full rounded-l-full duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.48)] hover:cursor-pointer"
                onClick={() => {
                  scrollToPosition(0);
                }}
              >
                Home
              </li>


              <li
                className="  text-center w-[100px] h-[35px] flex justify-center items-center rounded-r-full rounded-l-full duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.48)] hover:cursor-pointer"
                onClick={() => {
                  scrollToPosition(2300);
                }}
              >
                About
              </li>


              <li
                className=" text-center w-[100px] h-[35px] flex justify-center items-center rounded-r-full rounded-l-full duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.48)] hover:cursor-pointer"
                onClick={() => {
                  scrollToPosition(3000);
                }}
              >
                Services
              </li>

            <li>
              <button className="text-center w-[100px] h-[35px] bg-orange-500 hover:bg-orange-400 duration-300 ease-in-out rounded-r-full rounded-l-full flex justify-center items-center text-white">
                Book Now
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
