import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
const Bookingpage = () => {
  const handleWhatsAppClick = () => {
    window.location.href = "https://wa.me/7604905848";
  };
  return (
    <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{ease:"easeInOut",duration:0.3}} className="text-4xl h-screen w-full flex-col text-gray-800 flex justify-center items-center bg-white">
      <p>Lauching soon..</p>
      <p className="text-sm text-gray-400">booking will be available soon <Link className="text-gray-800 underline hover:text-gray-600" to={"/"}> Go back</Link></p>
      <Link to={"/booking"}>
        <button onClick={handleWhatsAppClick} className="text-center w-[100px] h-[35px] bg-orange-500 hover:bg-orange-400 duration-300 ease-in-out rounded-r-full rounded-l-full flex justify-center items-center text-white text-sm mt-10">
          Chat
        </button>
      </Link>
    </motion.div>
  );
};

export default Bookingpage;
