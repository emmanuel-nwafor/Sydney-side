import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const [openCart, setCart] = useState(false);
  const toggleCart = () => setCart(!openCart);

  return (
    <>
      {/* NAVBAR FOR MIN DEVICES */}
      <div id="backToTop"></div>
      <header className=" max-md:hidden h-[120px] bg-white-500 shadow-md flex items-center justify-evenly ">
        <h1 className=" font-extrabold text-4xl text-slate-700 ">SYDNEY</h1>
        <div className=" md:m-[90px] ">
          <ul>
            <a
              href="#home"
              className="  focus:cursor-pointer m-[15px] hover:underline "
            >
              Home
            </a>
            <a
              href="#shop"
              className="focus:cursor-pointer m-[15px] hover:underline "
            >
              Shop
            </a>
            <a
              href="#about"
              className="focus:cursor-pointer m-[15px] hover:underline "
            >
              About
            </a>
            <a
              href="#contact"
              className="focus:cursor-pointer m-[15px] hover:underline "
            >
              Contact
            </a>
          </ul>
        </div>{" "}
        <button className=" transition-all duration-200 focus:cursor-pointer max-md:w-[95px] h-[45px] w-[120px] bg-slate-300 rounded-md hover:bg-slate-600 hover:text-white ">
          Sign-up{" "}
        </button>
      </header>
      {/* NAVIGATION BAR FOR MAX-MD DEVICES */}
      <div className=" md:hidden flex items-center justify-evenly h-[100px] shadow-lg ">
        {" "}
        <h1 className=" text-[20px] font-bold text-slate-700 ">SYDNEY</h1>
        <button onClick={toggleDropdown}>
          <svg
            className={` transition-all w-5 h-5 ml-2 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className=" max-md:m-[30px] max-md:flex absolute right-0 z-10 mt-2 max-md:h-[150px] w-56 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="  ">
            {" "}
            <a
              href="#home"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#shop"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Shop
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        </div>
      )}
      ;
    </>
  );
}
export default Nav;
