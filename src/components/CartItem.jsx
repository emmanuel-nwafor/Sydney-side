// src/components/CartItem.js
import React from "react";
import img30 from "/src/assets/img30.jpeg";

function CartItem({ item, updateQuantity, removeItem }) {
  return (
    <>
      <div className="flex items-center justify-evenly p-4 bg-white rounded shadow mb-2">
        <div>
          <img
            src={img30}
            className=" h-[100px] w-[70px] rounded-sm m-[30px] "
            alt=""
          />
        </div>
        <div className=" flex-col ">
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
        </div>

        <div className="flex items-center">
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            className="border rounded w-16 text-center mr-2"
          />
          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
