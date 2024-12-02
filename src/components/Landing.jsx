import { useState } from "react";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";
import img5 from "/src/assets/img5.jpg";
import img6 from "/src/assets/img6.jpg";
import Cart from "./Cart";

function Landing() {
  return (
    <>
      {" "}
      <div className="flex-col items-center justify-center">
        {" "}
        <a href="#backToTop">
          <svg
            className=" rotate-180 hover:bg-[#2f2f2f9f] bg-[#2f2f2f3a] w-[30px] h-[30px] m-[50px] translate-y-[240px] z-10 rounded-md fixed"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a href="#footer">
          {" "}
          <svg
            className=" hover:bg-[#2f2f2f9f] bg-[#2f2f2f3a] w-[30px] h-[30px] m-[50px] translate-y-[300px] z-10 rounded-md fixed"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
      <div id="home"></div>
      <div className=" max-md:h-[150vh] max-md:flex-col max-md:m-[70px] m-[20px] flex items-center justify-evenly h-[80vh] ">
        <div className=" flex-col ">
          <h1 className="font-bold text-[30px] ">No Place Like </h1>
          <span className=" max-md:text-[70px] font-extrabold text-[85px] text-slate-800 ">
            SYDNEY
          </span>
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Modi ullam repellendus placeat harum <br />
            laudantium nobis. Aperiam commodi natus est cumque! <br /> Dolor
            vero id ea at doloremque corrupti amet veritatis? Quam.
          </p>
          <br />
          <button className=" max-md:mb-[10px] transition-all duration-200 focus:cursor-pointer max-md:w-[95px] h-[45px] w-[120px] bg-slate-300 rounded-md hover:bg-slate-600 hover:text-white ">
            Learn More
          </button>{" "}
        </div>
        <br />
        <div className=" flex-col items-center justify-center ">
          {/* TRTING OUT IMAGE CAROUSEL */}{" "}
          <img
            src={img3}
            alt=""
            className="  max-md:h-[380px] max-md:w-[340px] h-[410px] w-[330px] rounded-lg border-2 border-slate-300 border-opacity-100 "
          />
          <div className=" flex items-center justify-evenly ">
            <img
              src={img4}
              alt=""
              className=" transition-all duration-100 h-[100px] m-[10px] w-60px rounded-md border-slate-700 border-2 border-opacity-60 translate-y-[-80px] hover:border-2 hover:border-brown-400 hover:border-opacity-90 "
            />
            <img
              src={img5}
              alt=""
              className=" transition-all duration-100 h-[100px] m-[10px] w-60px rounded-md border-slate-700 border-2 border-opacity-60 translate-y-[-80px] hover:border-2 hover:border-brown-400 hover:border-opacity-90 "
            />
            <img
              src={img6}
              alt=""
              className=" transition-all duration-100 max-md:hidden h-[100px] m-[10px] w-60px rounded-md border-slate-700 border-2 border-opacity-60 translate-y-[-80px] hover:border-2 hover:border-brown-400 hover:border-opacity-90 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
