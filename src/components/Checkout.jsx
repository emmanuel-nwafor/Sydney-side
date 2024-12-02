// src/components/Checkout.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment successful!");
    navigate("/");
  };

  const [uesr, setUser] = useState(3);
  // const [alert, setAlert] = useState

  return (
    <>
      <div className="container mx-auto p-4 h-[60vh] ">
        <h1 className="text-2xl font-bold mb-4 text-slate-500 m-[10px] ">
          Checkout
        </h1>
        <form className="bg-white p-4 rounded shadow-xl flex-col items-center justify-center">
          <div className="flex-col items-center justify-center ">
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder=" Credit Card "
                className=" text-[#02020269] border-slate-300 border-[1px] h-[60px] rounded-md m-[10px] w-full outline-none "
              />
              <input
                type="text"
                placeholder=" CVV "
                className=" text-[#02020269] border-slate-300 border-[1px] h-[60px] rounded-md m-[10px] w-full outline-none "
              />
            </div>
            <div className=" items-center justify-center flex ">
              <input
                type="date"
                className=" text-[#02020269] border-slate-300 border-[1px] h-[60px] w-full rounded m-[15px] outline-none "
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className=" m-[15px] max-md:w-[380px] w-[500px] h-[60px] bg-slate-500 text-white py-2 rounded hover:bg-slate-600"
                onClick={handlePayment}
              >
                Complete Purchase
              </button>
              <p className="text-slate-500 m-[20px] hover:underline cursor-not-allowed ">
                Having any issues ?
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Checkout;
