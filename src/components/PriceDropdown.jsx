import React, { useState } from "react";
import { Link } from "react-router-dom";

function PriceDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="relative inline-block text-left">
        <button onClick={toggleDropdown} className=" ">
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
          <div className=" max-md:flex absolute right-0 z-10 mt-2 w-[200px] max-md:w-[140px] origin-top-right bg-white border border-gray-200 rounded-md shadow-lg">
            <div className="  ">
              <Link to="/LowestPrice">
                <a className="block w-[140px] p-[10px] text-sm text-gray-700 hover:bg-gray-100">
                  Lowest to Highest
                </a>
              </Link>
              <Link to="/HighestPrice">
                <a className="block w-[140px] p-[10px] text-sm text-gray-700 hover:bg-gray-100">
                  Highest to Lowest
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PriceDropdown;
