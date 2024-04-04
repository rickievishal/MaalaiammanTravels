import React from "react";
import { Link } from "react-router-dom";

const Bookingpage = () => {
  return (
    <div className="text-4xl h-screen w-full flex-col text-gray-800 flex justify-center items-center bg-white">
      <p>Lauching soon..</p>
      <p className="text-sm text-gray-400">booking will be available soon</p>
      <Link to={"/booking"}>
        <button className="text-center w-[100px] h-[35px] bg-orange-500 hover:bg-orange-400 duration-300 ease-in-out rounded-r-full rounded-l-full flex justify-center items-center text-white text-sm mt-10">
          Chat
        </button>
      </Link>
    </div>
  );
};

export default Bookingpage;
