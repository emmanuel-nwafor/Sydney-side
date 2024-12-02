// Dropdown.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PriceDropdown from "./PriceDropdown";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="relative inline-block text-left">
        <button
          onClick={toggleDropdown}
          className=" max-md:w-[75px]  flex justify-center max-md:p-[3px] p-4 text-md font-medium 
          text-black hover:text-white hover:bg-slate-500 focus:outline-none bg-slate-200 h-[60px] w-[180px] rounded-r-xl "
        >
          <p className=" max-md:text-sm ">Filter by:</p>
          <svg
            className={`w-5 h-5 ml-2 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
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
        </button>

        {isOpen && (
          <div className=" max-md:flex absolute right-0 z-10 mt-2 w-[200px] max-md:h-[120px] max-md:w-[120px] origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="  ">
              <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Price <PriceDropdown />
              </a>
              <Link to="/Quality">
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Quality Wears
                </a>
              </Link>
              <Link to="/Arrivals">
                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  New Arrivals
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown;
